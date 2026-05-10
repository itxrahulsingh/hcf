<?php

namespace App\Http\Controllers\Admin;

use App\Events\DonationSuccess;
use App\Http\Controllers\Controller;
use App\Models\Cause;
use App\Models\Invoice;
use App\Repositories\Admin\InvoiceRepository;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Export;
use App\Jobs\GenerateBulkInvoices;
use Illuminate\Support\Facades\Storage;

class InvoiceController extends Controller
{
    /**
     * Apply permission
     */
    public function __construct()
    {
        $this->middleware('can:invoices.index', ['only' => ['index', 'resendInvoice']]);
        $this->middleware('can:invoices.delete', ['only' => ['destroy', 'bulkDelete']]);
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request, InvoiceRepository $repository): Response
    {
        $data['search'] = $request->search ?: '';
        $data['sort']['column'] = $request->sort['column'] ?? 'id';
        $data['sort']['order'] = $request->sort['order'] ?? 'desc';

        // Filters
        $data['filter']['cause_id'] = $request->filter['cause_id'] ?? 'All';
        $data['filter']['date_range'] = $request->filter['date_range'] ?? '';

        $data['invoices'] = $repository->paginateSearchResult($data['search'], $data['sort'], $data['filter']);

        $analytics = $repository->getAnalytics($data['search'], $data['filter']);
        $data['total_turnover'] = $analytics['total_turnover'];
        $data['chart_data'] = $analytics['chart_data'];
        $data['summary_stats'] = $repository->getSummaryStats($data['search'], $data['filter']);

        $data['causes'] = Cause::with('content:cause_id,title')->select('id')->get();

        $latestExport = Export::where('user_id', auth()->id())->where('type', 'invoice_bulk')->latest()->first();

        if ($latestExport && $latestExport->status === 'completed') {
            $latestExport->download_url = Storage::url($latestExport->file_path);
        }

        $data['latest_export'] = $latestExport;

        return Inertia::render('Invoices/Index', $data);
    }

    /**
     * Resend invoice to customer
     */
    public function resendInvoice(Invoice $invoice, InvoiceRepository $repository): RedirectResponse
    {
        DonationSuccess::dispatch($invoice);
        return back()->with('success', 'Invoice resent to customer successfully!');
    }

    /**
     * Update invoice/order remarks inline
     */
    public function updateRemarks(Request $request, Invoice $invoice): RedirectResponse
    {
        $request->validate([
            'remarks' => 'nullable|string|max:1000',
        ]);

        if ($invoice) {
            $invoice->update([
                'notes' => $request->remarks
            ]);
        }

        return back()->with('success', 'Remarks updated successfully!');
    }

    /**
     * Delete invoice
     */
    public function destroy(Invoice $invoice, InvoiceRepository $repository): RedirectResponse
    {
        $repository->destroy($invoice);

        return back()->with('success', 'Invoice successfully deleted!');
    }

    /**
     * Bulk delete
     */
    public function bulkDelete(Request $request, InvoiceRepository $repository): RedirectResponse
    {
        $repository->bulkDelete($request->ids);

        return back()->with('success', 'Invoices successfully deleted!');
    }

    /**
     * Start the Bulk Export Process
     */
    public function bulkDownload(Request $request)
    {
        $request->validate([
            'ids' => 'required|string',
        ]);

        $ids = explode(',', $request->ids);

        $export = Export::create([
            'user_id'   => auth()->id(),
            'type'      => 'invoice_bulk',
            'status'    => 'processing',
            'file_name' => 'Preparing...'
        ]);

        GenerateBulkInvoices::dispatch($ids, $export->id);

        return back()->with('success', 'Export started! You can track the status above the chart.');
    }

    public function export(Request $request, InvoiceRepository $repository): StreamedResponse
    {
        $search = $request->search ?: '';
        $filter = [
            'cause_id' => $request->filter['cause_id'] ?? 'All',
            'date_range' => $request->filter['date_range'] ?? '',
        ];

        $rows = $repository->getExportRows($search, $filter);
        $fileName = 'financial-report-' . now()->format('Y-m-d-His') . '.csv';

        return response()->streamDownload(function () use ($rows) {
            $handle = fopen('php://output', 'w');

            fputcsv($handle, [
                'Receipt NO',
                'Donation Date',
                'Donor Name',
                'Amount',
                'Mobile No',
                'Donation Cause',
                'Mode',
                'Payment Source',
                'Utr No',
                'Email',
                'Address',
                'Pan No',
                'Realized Amount',
                'PG Charges',
                'Remarks',
                'Fresh / Repeat',
            ]);

            foreach ($rows as $row) {
                fputcsv($handle, [
                    $row['receipt_no'],
                    $row['donation_date'],
                    $row['donor_name'],
                    $row['amount'],
                    $row['mobile_no'],
                    $row['donation_cause'],
                    $row['mode'],
                    $row['payment_source'],
                    $row['utr_no'],
                    $row['email'],
                    $row['address'],
                    $row['pan_no'],
                    $row['realized_amount'],
                    $row['pg_charges'],
                    $row['remarks'],
                    $row['fresh_repeat'],
                ]);
            }

            fclose($handle);
        }, $fileName, [
            'Content-Type' => 'text/csv; charset=UTF-8',
        ]);
    }
}
