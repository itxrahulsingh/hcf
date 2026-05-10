<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;
use App\Models\Export;
use Carbon\Carbon;

class CleanupExports extends Command
{
    protected $signature = 'exports:cleanup';
    protected $description = 'Delete exports older than 24 hours';

    public function handle()
    {
        $oldExports = Export::where('created_at', '<', Carbon::now()->subHours(24))->get();

        foreach ($oldExports as $export) {
            if ($export->file_path && Storage::disk(config('filesystems.default'))->exists($export->file_path)) {
                Storage::disk(config('filesystems.default'))->delete($export->file_path);
            }
            $export->delete();
        }

        $this->info('Cleanup complete.');
    }
}
