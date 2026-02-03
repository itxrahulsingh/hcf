<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Media;
use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;

class MediaController extends Controller
{
    public function __construct()
    {
        // for demo mood
        $this->middleware('demo', ['only' => ['destroy']]);
    }

    public function index()
    {
        return Inertia::render('Media/Index');
    }

    /**
     * Display a listing of the resource.
     */
    public function getMediaData(Request $request): LengthAwarePaginator
    {
        $date = $request->filter['date'];
        $type = $request->filter['type'];

        $query = Media::query();
        if ($request->search) {
            $query->where('title', 'LIKE', '%' . $request->search . '%');
        }
        if ($date) {
            $query->where(DB::raw('DATE_FORMAT(created_at, "%b %Y")'), $date);
        }
        if ($type) {
            switch ($type) {
                case 'images':
                    $query->where('type', 'LIKE', 'image/%');
                    break;
                case 'video':
                    $query->where('type', 'LIKE', 'video/%');
                    break;
                case 'audio':
                    $query->where('type', 'LIKE', 'audio/%');
                    break;
                case 'pdf':
                    $query->where('type', 'application/pdf');
                    break;
                case 'text':
                    $query->where('type', 'LIKE', 'text/%');
                    break;
                case 'code':
                    $query->where('type', 'application/javascript')
                        ->orWhere('type', 'application/json')
                        ->orWhere('type', 'application/xml')
                        ->orWhere('type', 'text/html')
                        ->orWhere('type', 'text/css');
                    break;
                case 'zip':
                    $query->where('type', 'application/zip');
                    break;
                case 'spreadsheet':
                    $query->where('type', 'application/vnd.ms-excel')
                        ->orWhere('type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
                        ->orWhere('type', 'application/vnd.oasis.opendocument.spreadsheet')
                        ->orWhere('type', 'application/vnd.ms-excel.sheet.macroenabled.12')
                        ->orWhere('type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.template');
                    break;
            }
        }

        return $query->latest()->paginate(72);
    }

    /**
     * Store a newly created resource in storage.
     */
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $file = $request->file('file');

        $originalType = $file->getMimeType();
        $disk = config('filesystems.default');
        $originalSize = $file->getSize();

        $baseFolder = 'media/';
        $folder = $baseFolder . date('Y') . '/' . date('m');

        $originalName = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
        $slug         = Str::slug($originalName);
        $unique       = substr(md5(uniqid() . microtime()), 0, 6);

        $isImage = str_starts_with($originalType, 'image') && $originalType !== 'image/svg+xml';

        $extension = $isImage ? 'webp' : $file->getClientOriginalExtension();
        $fileName  = "{$slug}-{$unique}.{$extension}";
        $fullPath  = $folder . '/' . $fileName;

        $imageDimensions = null;
        $finalSize = 0;
        $finalMimeType = $isImage ? 'image/webp' : $originalType;

        $maxWidth = Setting::where('setting_key', 'image_max_width')->value('setting_value') ?? 2000;
        $quality  = Setting::where('setting_key', 'image_compression_quality')->value('setting_value') ?? 80;

        if ($isImage) {
            try {
                $manager = new ImageManager(new Driver());
                $image = $manager->read($file);

                $image->scaleDown(width: $maxWidth);
                $encoded = $image->toWebp($quality);

                $compressedContent = (string) $encoded;
                $compressedSize = strlen($compressedContent);
                Storage::disk($disk)->put($fullPath, $compressedContent);

                $finalSize = $compressedSize;
                $imageDimensions = $image->width() . ' x ' . $image->height() . ' pixels';
            } catch (\Exception $e) {
                $path = $file->storeAs($folder, "{$slug}-{$unique}." . $file->getClientOriginalExtension(), $disk);
                $finalSize = $originalSize;
                $finalMimeType = $originalType;
                $fullPath = $path;
            }
        } else {
            $file->storeAs($folder, $fileName, $disk);
            $finalSize = $originalSize;
        }

        $media = Media::create([
            'title'      => $originalName,
            'user_id'    => Auth::id(),
            'media_url'  => $fullPath,
            'type'       => $finalMimeType,
            'dimensions' => $imageDimensions,
            'size'       => $finalSize,
            'driver'     => $disk,
        ]);

        return $media;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Media $media): bool
    {
        if (Storage::disk($media->driver)->exists($media->media_url)) {
            Storage::disk($media->driver)->delete($media->media_url);
        }

        $media->delete();

        return true;
    }

    /**
     * Get filtered data.
     *
     * @param  Media  $media
     */
    public function getFilteredMonthYear(): mixed
    {
        $dates = Cache::remember('filtered_month_year', now()->addDays(15), function () {
            return DB::table(DB::raw('(SELECT DISTINCT DATE_FORMAT(created_at, "%b %Y") as month_year FROM media) as sub'))
                ->orderBy('sub.month_year', 'desc')
                ->pluck('month_year')
                ->toArray();
        });

        return $dates;
    }
}
