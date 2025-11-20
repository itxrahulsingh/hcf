<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class EditorImageUploaderController extends Controller
{
    /**
     * Upload editor file
     *
     * @return string
     */
    // public function upload(Request $request)
    // {
    //     return Storage::url($request->file('files')->store('editor'));
    // }

    public function upload(Request $request)
    {
        $file = $request->file('files');
        $year  = date('Y');
        $month = date('m');
        $originalName = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
        $slug = Str::slug($originalName);
        $hash = Str::random(6);

        $ext = $file->getClientOriginalExtension();
        $finalName = "{$slug}-{$hash}.{$ext}";
        $path = $file->storeAs("editor/{$year}/{$month}", $finalName, config('filesystems.default'));

        return Storage::url($path);
    }
}
