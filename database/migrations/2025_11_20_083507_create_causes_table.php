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
        Schema::create('causes', function (Blueprint $table) {
            $table->id();
            $table->string('slug', 255);
            $table->unsignedTinyInteger('user_id')->comment('User Id, Who published the cause');
            $table->unsignedInteger('category_id');
            $table->string('thumbnail_image', 255)->nullable();
            $table->string('banner_image', 255)->nullable();
            $table->string('gallery_images', 512)->nullable();
            $table->boolean('have_gift')->default(false)->comment('Whether the cause has gift option');
            $table->string('gift_ids', 100)->nullable();
            $table->boolean('have_product')->default(false)->comment('Whether the cause has product option');
            $table->boolean('is_birthday')->default(false);
            $table->string('custom_donation_amounts', 100)->nullable();
            $table->string('video_url', 255)->nullable();
            $table->decimal('raised_amount', 14, 2)->default(0)->comment('Total raised amount for the cause');
            $table->decimal('goal_amount', 14, 2)->default(0)->comment('Goal amount for the cause');
            $table->string('type', 50)->nullable()->comment('Type of the cause, e.g., birthday etc.');
            $table->date('deadline')->nullable();
            $table->enum('status', [0, 1])->comment('0 means unpublished, 1 means published')->default(0);
            $table->string('meta_image', 255)->nullable();
            $table->string('meta_title', 255)->nullable()->comment('meta title for seo');
            $table->string('meta_tags', 255)->nullable();
            $table->string('meta_description', 255)->nullable()->comment('meta description for seo');
            $table->timestamps();
        });

        Schema::create('cause_contents', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('cause_id')->index();
            $table->string('language_code', 10)->index();
            $table->string('title', 255);
            $table->longText('content');
            $table->longText('projects')->nullable();
            $table->text('faq')->nullable();
            $table->text('updates')->nullable();
            $table->timestamps();

            // Foreign key constraint
            $table->foreign('cause_id')->references('id')->on('causes')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('causes');
        Schema::dropIfExists('cause_contents');
    }
};
