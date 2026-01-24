<?php

use App\Models\Setting;
use App\Models\Invoice;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Http\UploadedFile;

if (! function_exists('get_options')) {
    function get_options(string $key, bool $decode = false, $locale = false)
    {
        if ($locale === true) {
            $cachekey = $key . $locale;
        } else {
            $cachekey = $key;
        }

        $cacheKey =
            $option = cache_remember($cachekey, function () use ($key, $locale) {
                $row = Setting::query();
                if ($locale != false) {
                    $row = $row->where('lang', current_local());
                }

                return $row = $row->where('setting_key', $key)->first();
            });

        return $decode ? json_decode($option->value ?? '') : $option->value ?? null;
    }
}

if (! function_exists('cache_remember')) {
    function cache_remember(string $key, callable $callback, int $ttl = 1800)
    {
        return cache()->remember($key, env('CACHE_LIFETIME', $ttl), $callback);
    }
}

if (! function_exists('current_local')) {
    function current_local()
    {
        return app()->getLocale();
    }
}

if (! function_exists('format_currency')) {
    /**
     * Format a given amount into the specified currency format.
     *
     * @param  float|int  $amount
     * @return string
     */
    function format_currency($amount, array $settings)
    {
        $symbol = $settings['currency_symbol'] ?? '';
        $position = $settings['currency_position'] ?? 'left';
        $decimals = $settings['no_of_decimal'] ?? 2;
        $decimalSeparator = $settings['decimal_separator'] === 'en-US' ? '.' : ',';
        $thousandsSeparator = $settings['decimal_separator'] === 'en-US' ? ',' : '.';

        $formattedAmount = number_format($amount, $decimals, $decimalSeparator, $thousandsSeparator);

        switch ($position) {
            case 'left':
                return "{$symbol}{$formattedAmount}";
            case 'right':
                return "{$formattedAmount}{$symbol}";
            case 'left_space':
                return "{$symbol} {$formattedAmount}";
            case 'right_space':
                return "{$formattedAmount} {$symbol}";
            default:
                return "{$symbol}{$formattedAmount}";
        }
    }
}

if (! function_exists('generate_invoice_number')) {

    /**
     * Generate invoice number (auto or manual)
     *
     * @param string $type  auto|manual
     * @return array
     */
    function generate_invoice_number(string $type = 'auto')
    {
        $autoPrefix   = get_options('invoice_prefix') ?? 'INV';
        $manualPrefix = get_options('manual_invoice_prefix') ?? 'MINV';

        $fyStartMonth = get_options('financial_year_start_month') ?? 4;

        $now = now();
        $startYear = $now->month >= $fyStartMonth ? $now->year : $now->year - 1;
        $endYear   = $startYear + 1;
        $financialYear = $startYear . "-" . $endYear;

        $invoiceCount = DB::transaction(function () use ($startYear, $type) {
            $last = Invoice::where('financial_year_start', $startYear)
                ->where('type', $type)
                ->lockForUpdate()
                ->max('invoice_count');

            return ($last ?? 0) + 1;
        });

        if ($type === 'manual') {
            $invoiceNumber = sprintf(
                "%s/%s/%04d",
                $manualPrefix,
                $financialYear,
                $invoiceCount
            );
        } else {
            $invoiceNumber = sprintf(
                "%s/%s/%05d",
                $autoPrefix,
                $financialYear,
                $invoiceCount
            );
        }

        return [
            'number' => $invoiceNumber,
            'count'  => $invoiceCount,
            'fy'     => $financialYear,
            'start'  => $startYear,
            'end'    => $endYear,
            'type'   => $type,
        ];
    }
}

if (!function_exists('upload_file')) {
    /**
     * Global helper to upload files with year/month nesting.
     *
     * @param UploadedFile $file
     * @param string $baseFolder
     * @return string
     */
    function upload_file(UploadedFile $file, string $baseFolder = 'media'): string
    {
        $folder = rtrim($baseFolder, '/') . '/' . date('Y') . '/' . date('m');
        $originalName = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
        $extension    = $file->getClientOriginalExtension();
        $slug         = Str::slug($originalName);
        $unique       = substr(md5(uniqid() . microtime()), 0, 6);
        $fileName     = "{$slug}-{$unique}.{$extension}";

        return $file->storeAs($folder, $fileName, config('filesystems.default'));
    }
}

if (!function_exists('number_to_words')) {
    /**
     * Convert a number to words (Indian Rupee format - Lakhs/Crores)
     *
     * @param float $number
     * @return string
     */
    function number_to_words($number)
    {
        $no = floor($number);
        $point = round($number - $no, 2) * 100;
        $hundred = null;
        $digits_1 = strlen($no);
        $i = 0;
        $str = array();
        $words = array(
            '0' => '',
            '1' => 'one',
            '2' => 'two',
            '3' => 'three',
            '4' => 'four',
            '5' => 'five',
            '6' => 'six',
            '7' => 'seven',
            '8' => 'eight',
            '9' => 'nine',
            '10' => 'ten',
            '11' => 'eleven',
            '12' => 'twelve',
            '13' => 'thirteen',
            '14' => 'fourteen',
            '15' => 'fifteen',
            '16' => 'sixteen',
            '17' => 'seventeen',
            '18' => 'eighteen',
            '19' => 'nineteen',
            '20' => 'twenty',
            '30' => 'thirty',
            '40' => 'forty',
            '50' => 'fifty',
            '60' => 'sixty',
            '70' => 'seventy',
            '80' => 'eighty',
            '90' => 'ninety'
        );
        $digits = array('', 'hundred', 'thousand', 'lakh', 'crore');

        while ($i < $digits_1) {
            $divider = ($i == 2) ? 10 : 100;
            $number = floor($no % $divider);
            $no = floor($no / $divider);
            $i += ($divider == 10) ? 1 : 2;
            if ($number) {
                $plural = (($counter = count($str)) && $number > 9) ? '' : null;
                $hundred = ($counter == 1 && $str[0]) ? ' and ' : null;
                $str[] = ($number < 21) ? $words[$number] . " " . $digits[$counter] . $plural . " " . $hundred
                    : $words[floor($number / 10) * 10] . " " . $words[$number % 10] . " " . $digits[$counter] . $plural . " " . $hundred;
            } else {
                $str[] = null;
            }
        }

        $str = array_reverse($str);
        $result = implode('', $str);

        // Handle Paise (optional, usually skipped in donation receipts if 00)
        // if ($point) {
        //    $points = $words[$point / 10] . " " . $words[$point = $point % 10];
        //    $result .= " and " . $points . " Paise";
        // }

        return $result ? $result : 'Zero';
    }
}
