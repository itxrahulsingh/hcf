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
        Schema::table('orders', function (Blueprint $table) {
            $table->string('special_message')->nullable()->after('discount');
            $table->string('special_image')->nullable()->after('special_message');
            $table->string('special_video')->nullable()->after('special_image');
            $table->date('special_date')->nullable()->after('special_video');
            $table->string('state')->nullable()->after('special_date');
            $table->boolean('is_80g')->default(false)->after('state');
            $table->string('pancard', 20)->nullable()->after('is_80g');
            $table->string('type')->default('normal')->after('pancard');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->dropColumn([
                'special_message',
                'special_image',
                'special_video',
                'special_date',
                'state',
                'is_80g',
                'pancard',
                'type',
            ]);
        });
    }
};
