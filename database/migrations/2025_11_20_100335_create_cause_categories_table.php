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
        Schema::create('cause_categories', function (Blueprint $table) {
            $table->id();
            $table->string('thumbnail_image', 100)->nullable();
            $table->string('meta_title', 255)->nullable()->comment('meta title for seo');
            $table->string('meta_tags', 255)->nullable();
            $table->string('meta_description', 255)->nullable()->comment('meta description for seo');
            $table->timestamps();
        });

        Schema::create('cause_category_contents', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('cause_category_id')->index();
            $table->string('language_code', 10)->index();
            $table->string('title', 255);
            $table->string('description', 500)->nullable();
            $table->timestamps();

            // Foreign key constraint
            $table->foreign('cause_category_id')->references('id')->on('cause_categories')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cause_categories');
        Schema::dropIfExists('cause_category_contents');
    }
};
