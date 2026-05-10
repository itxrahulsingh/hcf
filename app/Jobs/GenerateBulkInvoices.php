<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use App\Models\Invoice;
use App\Models\Setting;
use App\Models\Export;
use App\Repositories\Admin\OrderRepository;
use ZipArchive;
use PDF;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\File;

class GenerateBulkInvoices implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $invoiceIds;
    protected $exportId;

    public $timeout = 1800;
    public $failOnTimeout = true;

    public function __construct($invoiceIds, $exportId)
    {
        $this->invoiceIds = $invoiceIds;
        $this->exportId = $exportId;
    }

    public function handle()
    {
        $export = Export::find($this->exportId);
        if (!$export) return;

        $tempDir = storage_path('app/temp/bulk_' . $this->exportId);
        if (!file_exists($tempDir)) mkdir($tempDir, 0755, true);

        $zipFileName = 'receipts_' . date('Y-m-d') . '_' . $this->exportId . '.zip';
        $zipFilePath = $tempDir . '/' . $zipFileName;

        try {
            $repository = app(OrderRepository::class);
            $globalData = [
                'invoice_logo'    => Setting::pull('invoice_logo'),
                'footer_contact'  => Setting::pull('footer_contact'),
                'footer_address'  => Setting::pull('footer_address'),
                'currency_symbol' => Setting::pull('currency_symbol'),
                'font_family'     => $repository->getInvoiceFrontName(),
                'direction'       => $repository->getInvoiceDirection(),
                'text_align'      => $repository->getInvoiceDirection() == 'ltr' ? 'left' : 'right',
            ];

            $zip = new ZipArchive;
            if ($zip->open($zipFilePath, ZipArchive::CREATE | ZipArchive::OVERWRITE) !== TRUE) {
                throw new \Exception("Could not create ZIP file at $zipFilePath");
            }

            Invoice::with(['order.orderitems', 'order.invoice'])
                ->whereIn('id', $this->invoiceIds)
                ->chunkById(50, function ($invoices) use ($zip, $globalData, $tempDir) {

                    foreach ($invoices as $invoice) {
                        if (!$invoice->order) continue;

                        try {
                            $data = $globalData;
                            $data['order'] = $invoice->order;

                            $pdf = PDF::loadView('invoice', $data);

                            $pdfName = 'Receipt-' . $invoice->invoice_number . '.pdf';
                            $tempPdfPath = $tempDir . '/' . $pdfName;

                            file_put_contents($tempPdfPath, $pdf->output());

                            $zip->addFile($tempPdfPath, $pdfName);
                        } catch (\Exception $e) {
                            Log::warning("Failed to generate PDF for Invoice ID: {$invoice->id}");
                        }
                    }

                    unset($invoices);
                    gc_collect_cycles();
                });

            $zip->close();

            $path = Storage::disk(config('filesystems.default'))->putFileAs(
                'exports',
                new File($zipFilePath),
                $zipFileName
            );

            $export->update([
                'status'    => 'completed',
                'file_path' => $path,
                'file_name' => $zipFileName
            ]);
        } catch (\Exception $e) {
            Log::error("Bulk Export Job Failed: " . $e->getMessage());
            $export->update(['status' => 'failed']);
        } finally {
            $this->deleteDirectory($tempDir);
        }
    }

    /**
     * Recursively delete a directory
     */
    private function deleteDirectory($dir)
    {
        if (!file_exists($dir)) return true;
        if (!is_dir($dir)) return unlink($dir);
        foreach (scandir($dir) as $item) {
            if ($item == '.' || $item == '..') continue;
            if (!$this->deleteDirectory($dir . DIRECTORY_SEPARATOR . $item)) return false;
        }
        return rmdir($dir);
    }
}
