<?php

namespace App\Repositories\Admin;

use App\Models\Invoice;
use App\Repositories\Traits\ModelRepositoryTraits;
use Carbon\Carbon;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\DB;

class InvoiceRepository
{
    use ModelRepositoryTraits;

    protected Invoice $model;

    public function __construct(Invoice $invoice)
    {
        $this->model = $invoice;
    }

    /**
     * Shared query logic for Table, Chart, and Total
     */
    private function buildBaseQuery($search, array $filter = [])
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
        if (!empty($filter['date_range'])) {
            $dates = explode(' to ', $filter['date_range']);

            if (count($dates) === 2) {
                $start = Carbon::parse($dates[0])->startOfDay();
                $end   = Carbon::parse($dates[1])->endOfDay();

                $query->whereBetween('payment_date', [$start, $end]);
            } elseif (count($dates) === 1) {
                $query->whereDate('payment_date', Carbon::parse($dates[0]));
            }
        }

        if (isset($filter['financial_year']) && $filter['financial_year'] !== 'All Years') {
            $query->where('financial_year', $filter['financial_year']);
        }

        return $query;
    }

    public function paginateSearchResult($search, array $sort = [], array $filter = []): LengthAwarePaginator
    {
        $query = $this->buildBaseQuery($search, $filter);

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
     * New Method: Get Total and Chart Data
     */
    public function getAnalytics($search, array $filter = [])
    {
        $baseQuery = $this->buildBaseQuery($search, $filter);

        $totalTurnover = $baseQuery->sum('total_price');

        $chartData = $baseQuery->clone()
            ->select(
                DB::raw('DATE(payment_date) as date'),
                DB::raw('SUM(total_price) as total_amount')
            )
            ->groupBy('date')
            ->orderBy('date', 'asc')
            ->get();

        return [
            'total_turnover' => $totalTurnover,
            'chart_data' => $chartData
        ];
    }

    public function destroy(Invoice $invoice): void
    {
        $invoice->delete();
    }

    public function bulkDelete($ids): void
    {
        $idArray = explode(',', $ids);
        $this->model->destroy($idArray);
    }
}
