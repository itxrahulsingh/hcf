@php
    $razorpayAmount = (int) round((float) ($paymentHistory->total_price ?? $paymentHistory->amount ?? 0) * 100);
    $customerName = $paymentHistory->customer_name ?? $paymentHistory->name ?? '';
    $customerEmail = $paymentHistory->customer_email ?? $paymentHistory->email ?? '';
    $customerPhone = $paymentHistory->customer_phone ?? $paymentHistory->mobile ?? '';
@endphp

<script src="https://checkout.razorpay.com/v1/checkout.js"></script>

<script>
    document.addEventListener("DOMContentLoaded", function() {
        const name = @json($customerName);
        const email = @json($customerEmail);
        const contact = @json($customerPhone);

        var options = {
            "key": "{{ $razorpayKeyId }}",
            "amount": "{{ $razorpayAmount }}",
            "currency": "INR",
            "name": name,
            "description": "Pay to {{ env('APP_NAME') }}",
            "order_id": "{{ $order_id }}",
            "prefill": {
                "name": name,
                "email": email,
                "contact": contact
            },
            "callback_url": "{!! route('payment.success', ['method' => 'razorpay', 'identifier' => $paymentHistory,'type' => $type]) !!}",
            "modal": {
                "ondismiss": function() {
                    window.location.href = "{!! route('payment.cancel', ['method' => 'razorpay', 'identifier' => $paymentHistory,'type' => $type]) !!}";
                }
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        let rzp = new Razorpay(options);
        rzp.open();
    });
</script>
