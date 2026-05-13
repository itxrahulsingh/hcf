<?php

use Illuminate\Database\Migrations\Migration;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

return new class extends Migration
{
    public function up(): void
    {
        $actions = ['index', 'show', 'create', 'edit', 'delete'];
        foreach ($actions as $action) {
            Permission::firstOrCreate(
                ['name' => "monthly_giving.{$action}", 'guard_name' => 'web'],
                ['title' => 'Manage Monthly Giving', 'crud_group' => 'monthly_giving', 'crud_action' => $action]
            );
        }

        $admin = Role::where('name', 'admin')->first();
        if ($admin) {
            $admin->givePermissionTo(array_map(fn ($action) => "monthly_giving.{$action}", $actions));
        }
    }

    public function down(): void
    {
        Permission::where('name', 'like', 'monthly_giving.%')->delete();
    }
};

