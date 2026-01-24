<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>Donation Receipt</title>
    <style>
        /* General Reset */
        body {
            font-family: 'DejaVu Sans', sans-serif;
            font-size: 13px;
            line-height: 1.5;
            color: #000;
        }
        table { width: 100%; border-collapse: collapse; }

        /* Helpers */
        .text-center { text-align: center; }
        .text-right { text-align: right; }
        .text-left { text-align: left; }
        .text-justify { text-align: justify; }
        .font-bold { font-weight: bold; }
        .uppercase { text-transform: uppercase; }

        /* Header */
        .header-section { text-align: center; margin-bottom: 20px; }
        .logo { max-height: 80px; margin-bottom: 10px; }
        .org-name {
            font-size: 24px;
            font-weight: bold;
            color: #262626;
            margin-bottom: 5px;
            text-transform: uppercase;
        }
        .org-details { font-size: 12px; color: #333; margin-bottom: 2px; }
        .reg-no { font-weight: bold; margin-top: 5px; }

        /* Title */
        .receipt-title {
            font-size: 18px;
            font-weight: bold;
            text-decoration: underline;
            text-align: center;
            margin: 15px 0;
            text-transform: uppercase;
        }

        /* Layout for Meta Data (FY, Receipt, Date) */
        .fy-center {
            text-align: center;
            font-weight: bold;
            font-size: 14px;
            margin-bottom: 10px;
            text-transform: uppercase;
        }
        .meta-table { width: 100%; margin-bottom: 15px; }
        .meta-table td { font-weight: bold; font-size: 14px; }

        /* Content */
        .content-body { margin-bottom: 20px; font-size: 14px; line-height: 1.6; }
        .highlight { font-weight: bold; }

        /* Data Table */
        .data-table { width: 100%; margin-bottom: 25px; border: 1px solid #000; }
        .data-table th, .data-table td {
            border: 1px solid #000;
            padding: 8px;
            text-align: left;
            vertical-align: top;
        }
        .data-table th { background-color: #f5f5f5; font-weight: bold; }

        /* Footer */
        .footer-note { font-size: 12px; margin-bottom: 5px; }
        .disclaimer {
            margin-top: 20px;
            font-style: italic;
            font-size: 11px;
            text-align: center;
        }
        .contact-section {
            margin-top: 15px;
            border-top: 1px solid #ccc;
            padding-top: 10px;
            text-align: center;
            font-weight: bold;
            font-size: 12px;
        }
    </style>
</head>
<body>

    @php
        $settings = app(\App\Repositories\SettingRepository::class)->getSiteSettings();
        $contact  = $settings['contact'] ?? [];
        $general  = $settings['general'] ?? [];

        $inv = $invoice ?? ($order->invoice ?? null);

        $orgName    = $general['site_name'] ?? 'HOMELESS CARE FOUNDATION';
        $orgLogo    = $general['site_logo_light'] ?? null;
        $orgAddress = $contact['contact_address'] ?? 'Address Not Configured';
        $orgPhone   = $contact['contact_phone_number'] ?? '';
        $orgEmail   = $contact['contact_email'] ?? '';
        $orgReg     = $general['registration_number'] ?? 'AACTH6506JF20221';
        $orgPan     = $general['pan_number'] ?? 'AACTH6506J';
        $orgWeb     = $general['site_url'] ?? 'www.homelesscarefoundation.com';

        $receiptNo = $inv->invoice_number ?? 'N/A';
        $fy        = $inv->financial_year_start.'-'.$inv->financial_year_end ?? '2025-2026';
        $date      = $inv->payment_date ? \Carbon\Carbon::parse($inv->payment_date)->format('d-m-Y') : date('d-m-Y');

        $donorName = $inv->customer_name ?? 'Anonymous';
        $donorPan  = $inv->pancard ?? 'NA';
        $amount    = $inv->total_price ?? 0;

        $txnId = $inv->order->transaction_id ?? 'N/A';
        if($txnId === 'N/A' || empty($txnId)) {
            $txnId = $inv->payment_method ?? 'N/A';
        }

        $shipping = $inv->shipping_address ?? 'NA';
        $state    = $inv->state ?? '';
        $fullAddress = $shipping;
        if($state && !str_contains($shipping, $state)) {
            $fullAddress .= ', ' . $state;
        }

        $amountWords = 'Only';
        if(function_exists('number_to_words')) {
             $amountWords = ucwords(number_to_words($amount)) . ' Only';
        }
    @endphp

    <div class="container">

        <div class="header-section">
            @if($orgLogo)
                <img src="{{ public_path($orgLogo) }}" class="logo" alt="Logo">
            @endif
            <div class="org-name">{{ $orgName }}</div>
            <div class="org-details">Address: {{ $orgAddress }}</div>
            <div class="org-details reg-no">Unique Reg. No: {{ $orgReg }}</div>
        </div>

        <div class="receipt-title">Donation Receipt</div>

        <div class="fy-center">FY {{ $fy }}</div>

        <table class="meta-table">
            <tr>
                <td class="text-left">Receipt No: {{ $receiptNo }}</td>
                <td class="text-right">Date: {{ $date }}</td>
            </tr>
        </table>

        <div class="content-body text-justify">
            Received with thanks from <span class="highlight">{{ $donorName }}</span>
            <span class="highlight">[PAN: {{ $donorPan }}]</span>,
            the following donation of INR <span class="highlight">{{ number_format($amount, 2) }}</span>
            ({{ $amountWords }}) in the financial year {{ $fy }} towards
            <span class="highlight">{{ $orgName }}</span>
            <span class="highlight">[PAN: {{ $orgPan }}]</span>.
            Your donations are tax-exempted under <span class="highlight">Section 80G of Income Tax Act 1961.</span>
            <br><br>
            <span class="highlight">Thank you so much for your generous contribution!</span>
        </div>

        <table class="data-table">
            <thead>
                <tr>
                    <th width="20%">Amount (in Rs)</th>
                    <th width="30%">Transaction ID</th>
                    <th width="20%">Mobile No.</th>
                    <th width="30%">Address</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Rs. {{ number_format($amount, 2) }}</td>
                    <td style="word-wrap: break-word;">{{ $txnId }}</td>
                    <td>{{ $inv->customer_phone ?? 'N/A' }}</td>
                    <td>{{ $fullAddress }}</td>
                </tr>
            </tbody>
        </table>

        <div class="footer-note">
            <strong>Note:</strong> This donation receipt is valid for Tax Exemption u/s 80G subject to PAN Number and address provided by you.
        </div>
        <div class="footer-note">
            This receipt is valid subject to the transfer of funds to our account.
        </div>

        <div class="disclaimer">
            This is computer generated receipt hence does not require signature/stamp.
        </div>

        <div class="contact-section">
            website: {{ $orgWeb }} <br>
            For any other information feel free to contact us on {{ $orgPhone }} <br>
            Email: {{ $orgEmail }}
        </div>

    </div>
</body>
</html>
