<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('monthly_giving_subscriptions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->nullable()->constrained()->nullOnDelete();
            $table->foreignId('cause_id')->nullable()->constrained()->nullOnDelete();
            $table->foreignId('cancelled_by_admin_id')->nullable()->constrained('users')->nullOnDelete();
            $table->uuid('uuid')->unique();
            $table->string('name');
            $table->string('email')->nullable();
            $table->string('mobile', 20);
            $table->boolean('is_80g')->default(false);
            $table->string('pancard', 20)->nullable();
            $table->decimal('amount', 12, 2);
            $table->string('currency', 10)->default('INR');
            $table->string('razorpay_plan_id')->nullable();
            $table->string('razorpay_subscription_id')->nullable()->unique();
            $table->string('status', 30)->default('created');
            $table->unsignedInteger('total_count')->nullable();
            $table->unsignedInteger('paid_count')->default(0);
            $table->timestamp('started_at')->nullable();
            $table->timestamp('next_charge_at')->nullable();
            $table->timestamp('last_charge_at')->nullable();
            $table->timestamp('cancelled_at')->nullable();
            $table->text('cancellation_reason')->nullable();
            $table->json('notes')->nullable();
            $table->timestamps();

            $table->index(['status', 'created_at']);
            $table->index(['cause_id', 'status']);
            $table->index('email');
            $table->index('mobile');
        });

        Schema::create('monthly_giving_transactions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('monthly_giving_subscription_id')
                ->constrained(table: 'monthly_giving_subscriptions', indexName: 'mgt_subscription_fk')
                ->cascadeOnDelete();
            $table->string('razorpay_payment_id')->nullable()->unique();
            $table->string('razorpay_invoice_id')->nullable();
            $table->string('razorpay_event_id')->nullable();
            $table->decimal('amount', 12, 2)->default(0);
            $table->string('currency', 10)->default('INR');
            $table->string('status', 30)->default('created');
            $table->string('payment_method', 60)->nullable();
            $table->timestamp('paid_at')->nullable();
            $table->json('raw_payload')->nullable();
            $table->timestamps();

            $table->index(['status', 'paid_at']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('monthly_giving_transactions');
        Schema::dropIfExists('monthly_giving_subscriptions');
    }
};
