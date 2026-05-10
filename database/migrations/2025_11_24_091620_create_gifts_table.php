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
        Schema::create('gifts', function (Blueprint $table) {
            $table->id();
            $table->string('gift_image', 255);
            $table->decimal('amount', 10, 2)->default(0);
            $table->integer('min_qty')->default(1);
            $table->boolean('status')->default(1);
            $table->timestamps();
        });

        Schema::create('gift_contents', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('gift_id')->index();
            $table->string('language_code', 10)->index();
            $table->string('title', 255);
            $table->text('description')->nullable();
            $table->timestamps();

            $table->foreign('gift_id')->references('id')->on('gifts')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('gift_contents');
        Schema::dropIfExists('gifts');
    }
};
