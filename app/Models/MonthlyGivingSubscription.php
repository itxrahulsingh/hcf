<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class MonthlyGivingSubscription extends Model
{
    protected $guarded = [];

    protected $casts = [
        'is_80g' => 'boolean',
        'amount' => 'decimal:2',
        'notes' => 'array',
        'started_at' => 'datetime',
        'next_charge_at' => 'datetime',
        'last_charge_at' => 'datetime',
        'cancelled_at' => 'datetime',
    ];

    public function cause(): BelongsTo
    {
        return $this->belongsTo(Cause::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function cancelledByAdmin(): BelongsTo
    {
        return $this->belongsTo(User::class, 'cancelled_by_admin_id');
    }

    public function transactions(): HasMany
    {
        return $this->hasMany(MonthlyGivingTransaction::class);
    }
}

