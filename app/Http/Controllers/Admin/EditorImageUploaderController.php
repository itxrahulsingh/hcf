<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;

class EditorImageUploaderController extends Controller
{
    /**
     * Upload editor file with WebP conversion
     *
     * @param Request $request
     * @return string
     */
    public function upload(Request $request)
    {
        $file = $request->file('files');
        $originalType = $file->getMimeType();
        $disk = config('filesystems.default');

        $year  = date('Y');
        $month = date('m');
        $originalName = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
        $slug = Str::slug($originalName);
        $hash = Str::random(6);

        $isImage = str_starts_with($originalType, 'image') && $originalType !== 'image/svg+xml';

        if ($isImage) {
            try {
                $manager = new ImageManager(new Driver());
                $image = $manager->read($file);
                $image->scaleDown(width: 1500);
                $encoded = $image->toWebp(80);

                $finalName = "{$slug}-{$hash}.webp";
                $fullPath  = "editor/{$year}/{$month}/{$finalName}";
                Storage::disk($disk)->put($fullPath, (string) $encoded, 'public');

                return Storage::url($fullPath);

            } catch (\Exception $e) {
                return $this->fallbackUpload($file, $slug, $hash, $year, $month, $disk);
            }
        }

        return $this->fallbackUpload($file, $slug, $hash, $year, $month, $disk);
    }

    /**
     * Standard upload fallback
     */
    private function fallbackUpload($file, $slug, $hash, $year, $month, $disk)
    {
        $ext = $file->getClientOriginalExtension();
        $finalName = "{$slug}-{$hash}.{$ext}";
        $path = $file->storeAs("editor/{$year}/{$month}", $finalName, [
            'disk' => $disk,
            'visibility' => 'public'
        ]);

        return Storage::url($path);
    }
}
