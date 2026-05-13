<?php

use App\Models\Cause;
use Illuminate\Database\Migrations\Migration;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

return new class extends Migration
{
    public function up(): void
    {
        $guard = 'web';

        // 1) Ensure core Orders CRUD permissions are correct and separated.
        foreach (['index', 'show', 'create', 'edit', 'delete'] as $action) {
            Permission::updateOrCreate(
                ['name' => "orders.{$action}", 'guard_name' => $guard],
                [
                    'title' => 'Manage orders',
                    'crud_group' => 'orders',
                    'crud_action' => $action,
                ]
            );
        }

        // 2) Hard reset order-type permissions to avoid legacy broken group/action rows.
        Permission::where('name', 'like', 'orders.type.%')->delete();

        $types = array_keys(array_merge(Cause::$causeTypes, ['manual' => 'Manual']));
        $typePermissions = array_merge(['orders.type.all'], array_map(fn($type) => "orders.type.{$type}", $types));

        foreach ($typePermissions as $name) {
            $action = $name === 'orders.type.all'
                ? 'all'
                : str_replace('orders.type.', '', $name);

            Permission::create([
                'name' => $name,
                'title' => 'Order Type Access',
                'guard_name' => $guard,
                'crud_group' => 'order_type_access',
                'crud_action' => $action,
            ]);
        }

        // 3) Keep admin role fully functional.
        $admin = Role::where('name', 'admin')->first();
        if ($admin) {
            $admin->givePermissionTo($typePermissions);
        }

        app('cache')
            ->store(config('permission.cache.store') !== 'default' ? config('permission.cache.store') : null)
            ->forget(config('permission.cache.key'));
    }

    public function down(): void
    {
        // Keep permissions stable in rollback.
    }
};
