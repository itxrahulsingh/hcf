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
        Schema::table('cause_contents', function (Blueprint $table) {
            if (!Schema::hasColumn('cause_contents', 'cause_title')) {
                $table->string('cause_title', 255)->nullable()->after('title');
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('cause_contents', function (Blueprint $table) {
            if (Schema::hasColumn('cause_contents', 'cause_title')) {
                $table->dropColumn('cause_title');
            }
        });
    }
};

