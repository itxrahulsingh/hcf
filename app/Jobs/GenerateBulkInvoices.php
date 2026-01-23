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

    public $timeout = 900;

    public function __construct($invoiceIds, $exportId)
    {
        $this->invoiceIds = $invoiceIds;
        $this->exportId = $exportId;
    }

    public function handle()
    {
        $export = Export::find($this->exportId);
        if (!$export) return;

        $tempFileName = 'receipts_' . date('Y-m-d_H.i.s') . '_' . uniqid() . '.zip';
        $tempPath = storage_path('app/temp');
        $tempFilePath = $tempPath . '/' . $tempFileName;

        if (!file_exists($tempPath)) {
            mkdir($tempPath, 0755, true);
        }

        try {
            $invoices = Invoice::with(['order.orderitems', 'order.invoice'])->whereIn('id', $this->invoiceIds)->get();
            $repository = app(OrderRepository::class);

            $globalData = [
                'invoice_logo'    => Setting::pull('invoice_logo'),
                'footer_contact'  => Setting::pull('footer_contact'),
                'footer_address'  => Setting::pull('footer_address'),
                'currency_symbol' => Setting::pull('currency_symbol'),
                'font_family'     => $repository->getInvoiceFrontName(),
                'direction'       => $repository->getInvoiceDirection(),
            ];
            $globalData['text_align'] = $globalData['direction'] == 'ltr' ? 'left' : 'right';

            $zip = new ZipArchive;
            if ($zip->open($tempFilePath, ZipArchive::CREATE | ZipArchive::OVERWRITE) === TRUE) {
                foreach ($invoices as $invoice) {
                    if (!$invoice->order) continue;

                    $data = $globalData;
                    $data['order'] = $invoice->order;

                    $pdf = PDF::loadView('invoice', $data);
                    $zip->addFromString('Receipt-' . $invoice->invoice_number . '.pdf', $pdf->output());
                }
                $zip->close();
            } else {
                throw new \Exception("Could not create ZIP file at $tempFilePath");
            }
            $path = Storage::disk(config('filesystems.default'))->putFileAs('exports', new File($tempFilePath), $tempFileName);

            $export->update([
                'status'    => 'completed',
                'file_path' => $path,
                'file_name' => $tempFileName
            ]);
        } catch (\Exception $e) {
            Log::error("Bulk Export Job Failed: " . $e->getMessage());
            $export->update(['status' => 'failed']);
        } finally {
            if (file_exists($tempFilePath)) {
                unlink($tempFilePath);
            }
        }
    }
}
