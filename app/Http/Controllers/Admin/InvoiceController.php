<?php

namespace App\Http\Controllers\Admin;

use App\Events\DonationSuccess;
use App\Http\Controllers\Controller;
use App\Models\Cause;
use App\Models\Invoice;
use App\Models\Setting;
use App\Repositories\Admin\InvoiceRepository;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

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

        // Pass other filters if you still use them in Repository logic
        // $data['filter']['payment_method'] = ...

        $data['invoices'] = $repository->paginateSearchResult($data['search'], $data['sort'], $data['filter']);
        $data['causes'] = Cause::with('content:cause_id,title')->select('id')->get();

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

        if ($invoice->order) {
            $invoice->order->update([
                'order_notes' => $request->remarks
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
}
