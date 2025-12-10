<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('invoices', function (Blueprint $table) {
            $table->id();
            $table->string('invoice_number');
            $table->integer('invoice_count')->nullable();
            $table->bigInteger('order_id')->nullable();

            $table->string('customer_name')->nullable();
            $table->string('customer_email')->nullable();
            $table->string('customer_phone')->nullable();
            $table->string('shipping_address')->nullable();
            $table->string('state')->nullable();

            $table->boolean('is_80g')->default(false);
            $table->string('pancard', 20)->nullable();

            $table->string('financial_year')->nullable();
            $table->year('financial_year_start')->nullable();
            $table->year('financial_year_end')->nullable();

            $table->decimal('total_price', 10, 2);
            $table->string('payment_method')->nullable();
            $table->timestamp('payment_date')->nullable();
            $table->string('type')->default('normal');

            $table->enum('status', ['draft', 'paid', 'cancelled'])->default('draft');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('invoices');
    }
};
