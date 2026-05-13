<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (!Schema::hasColumn('pages', 'mobile_breadcrumb_image')) {
            Schema::table('pages', function (Blueprint $table) {
                $table->string('mobile_breadcrumb_image')->nullable()->after('breadcrumb_image');
            });
        }

        if (!Schema::hasColumn('causes', 'mobile_banner_image')) {
            Schema::table('causes', function (Blueprint $table) {
                $table->string('mobile_banner_image', 255)->nullable()->after('banner_image');
            });
        }
    }

    public function down(): void
    {
        if (Schema::hasColumn('pages', 'mobile_breadcrumb_image')) {
            Schema::table('pages', function (Blueprint $table) {
                $table->dropColumn('mobile_breadcrumb_image');
            });
        }

        if (Schema::hasColumn('causes', 'mobile_banner_image')) {
            Schema::table('causes', function (Blueprint $table) {
                $table->dropColumn('mobile_banner_image');
            });
        }
    }
};
