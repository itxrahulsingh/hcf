<script src="https://checkout.razorpay.com/v1/checkout.js"></script>

<script>
    document.addEventListener("DOMContentLoaded", function() {

        var options = {
            "key": "{{ $razorpayKeyId }}", // Key ID
            "amount": "{{ $paymentHistory->amount }}", // in paise
            "currency": "INR",
            "name": "{{ $paymentHistory->name }}",
            "description": "Pay to {{ env('APP_NAME') }}",
            "order_id": "{{ $order_id }}",

            "prefill": {
                "name": "{{ $paymentHistory->name }}",
                "email": "{{ $paymentHistory->email }}",
                "contact": "{{ $paymentHistory->mobile }}"
            },

            // Redirect URL after successful payment
            "callback_url": "{!! route('payment.success', ['method' => 'razorpay', 'identifier' => $paymentHistory,'type' => $type]) !!}",

            // Cancel URL
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
