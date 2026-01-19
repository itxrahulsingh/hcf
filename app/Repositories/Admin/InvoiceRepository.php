<?php

namespace App\Repositories\Admin;

use App\Models\Invoice;
use App\Repositories\Traits\ModelRepositoryTraits;
use Illuminate\Pagination\LengthAwarePaginator;

class InvoiceRepository
{
    use ModelRepositoryTraits;

    /**
     * Object model will be used to modify invoices table
     */
    protected Invoice $model;

    /**
     * Constructor for Invoice repository
     */
    public function __construct(Invoice $invoice)
    {
        $this->model = $invoice;
    }

    /**
     * Get search result with paginate
     */
    public function paginateSearchResult($search, array $sort = [], array $filter = []): LengthAwarePaginator
    {
        $query = $this->model->with(['order.cause'])->newQuery();

        if ($search) {
            $query->where(function ($q) use ($search) {
                $q->where('invoice_number', 'like', "%{$search}%")
                    ->orWhere('customer_name', 'like', "%{$search}%")
                    ->orWhere('customer_email', 'like', "%{$search}%")
                    ->orWhere('customer_phone', 'like', "%{$search}%")
                    ->orWhere('pancard', 'like', "%{$search}%");

                $q->orWhereHas('order', function ($orderQ) use ($search) {
                    $orderQ->where('order_number', 'like', "%{$search}%");
                });

                $q->orWhereHas('order.cause.content', function ($causeQ) use ($search) {
                    $causeQ->where('title', 'like', "%{$search}%");
                });
            });
        }

        if (isset($filter['cause_id']) && $filter['cause_id'] !== 'All') {
            $query->whereHas('order', function ($q) use ($filter) {
                $q->where('cause_id', $filter['cause_id']);
            });
        }

        if (isset($filter['date_range']) && !empty($filter['date_range'])) {
            $dates = explode(' to ', $filter['date_range']);
            if (count($dates) === 2) {
                $query->whereBetween('payment_date', [$dates[0], $dates[1]]);
            } elseif (count($dates) === 1) {
                $query->whereDate('payment_date', $dates[0]);
            }
        }

        // [REMOVED] Status Filter Block (as requested)
        /*
        if (isset($filter['status']) && $filter['status'] !== 'All Status') {
            $query->where('status', $filter['status']);
        }
        */

        if (isset($filter['financial_year']) && $filter['financial_year'] !== 'All Years') {
            $query->where('financial_year', $filter['financial_year']);
        }

        if (isset($sort['column']) && isset($sort['order'])) {
            $column = $sort['column'];
            $order = $sort['order'];

            if ($column === 'cause_title') {
                $query->leftJoin('orders', 'invoices.order_id', '=', 'orders.id')
                    ->leftJoin('causes', 'orders.cause_id', '=', 'causes.id')
                    ->orderBy('causes.content.title', $order)
                    ->select('invoices.*');
            } elseif ($column === 'order_number') {
                $query->leftJoin('orders', 'invoices.order_id', '=', 'orders.id')
                    ->orderBy('orders.order_number', $order)
                    ->select('invoices.*');
            } else {
                $query->orderBy($column, $order);
            }
        } else {
            $query->orderBy('created_at', 'desc');
        }

        return $query->paginate(30)
            ->appends(array_filter([
                'search' => $search,
                'sort'   => $sort,
                'filter' => $filter,
            ]));
    }

    /**
     * Delete invoice
     */
    public function destroy(Invoice $invoice): void
    {
        $invoice->delete();
    }

    /**
     * Bulk delete invoices
     */
    public function bulkDelete($ids): void
    {
        $idArray = explode(',', $ids);
        $this->model->destroy($idArray);
    }
}
