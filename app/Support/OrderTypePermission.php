<?php

namespace App\Support;

use App\Models\Cause;
use App\Models\Order;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;

class OrderTypePermission
{
    public const ALL_PERMISSION = 'orders.type.all';

    public static function allTypes(): array
    {
        return array_merge(
            Cause::$causeTypes,
            ['manual' => 'Manual']
        );
    }

    public static function permissionName(string $type): string
    {
        return "orders.type.{$type}";
    }

    public static function allowedTypesForUser(?User $user): array
    {
        $allTypes = array_keys(self::allTypes());

        if (!$user) {
            return $allTypes;
        }

        if ($user->can(self::ALL_PERMISSION)) {
            return $allTypes;
        }

        $typePermissions = $user->getAllPermissions()
            ->pluck('name')
            ->filter(fn($name) => str_starts_with($name, 'orders.type.'))
            ->values();

        // Backward compatibility: if no per-type permissions are assigned, keep full visibility.
        if ($typePermissions->isEmpty()) {
            return $allTypes;
        }

        return $typePermissions
            ->map(fn($name) => str_replace('orders.type.', '', $name))
            ->filter(fn($type) => in_array($type, $allTypes, true))
            ->values()
            ->all();
    }

    public static function allowedTypeMapForUser(?User $user): array
    {
        $all = self::allTypes();
        $allowed = self::allowedTypesForUser($user);

        return collect($all)
            ->only($allowed)
            ->all();
    }

    public static function applyScope(Builder $query, ?User $user, string $column = 'type'): Builder
    {
        $types = self::allowedTypesForUser($user);

        return $query->whereIn($column, $types);
    }

    public static function canAccessOrder(?User $user, Order $order): bool
    {
        return in_array($order->type, self::allowedTypesForUser($user), true);
    }
}
