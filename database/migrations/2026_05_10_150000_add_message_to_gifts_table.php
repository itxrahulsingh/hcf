<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (!Schema::hasColumn('gifts', 'unit')) {
            Schema::table('gifts', function (Blueprint $table) {
                if (Schema::hasColumn('gifts', 'amount')) {
                    $table->string('unit', 100)->nullable()->after('amount');
                } else {
                    $table->string('unit', 100)->nullable();
                }
            });
        }

        if (!Schema::hasColumn('gifts', 'message')) {
            Schema::table('gifts', function (Blueprint $table) {
                if (Schema::hasColumn('gifts', 'unit')) {
                    $table->string('message', 255)->nullable()->after('unit');
                } elseif (Schema::hasColumn('gifts', 'amount')) {
                    $table->string('message', 255)->nullable()->after('amount');
                } else {
                    $table->string('message', 255)->nullable();
                }
            });
        }
    }

    public function down(): void
    {
        Schema::table('gifts', function (Blueprint $table) {
            if (Schema::hasColumn('gifts', 'unit')) {
                $table->dropColumn('unit');
            }
            if (Schema::hasColumn('gifts', 'message')) {
                $table->dropColumn('message');
            }
        });
    }
};
