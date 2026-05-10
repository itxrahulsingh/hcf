<?php

namespace App\Providers;

use App\Events\DonationFailed;
use App\Events\DonationSuccess;
use App\Events\FormSubmitted;
use App\Listeners\SendDonationFailedNotifications;
use App\Listeners\SendDonationSuccessNotifications;
use App\Listeners\SendFormResponseMail;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Event;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event to listener mappings for the application.
     *
     * @var array<class-string, array<int, class-string>>
     */
    protected $listen = [
        Registered::class => [
            SendEmailVerificationNotification::class,
        ],
        FormSubmitted::class => [
            SendFormResponseMail::class,
        ],
        DonationSuccess::class => [
            SendDonationSuccessNotifications::class,
        ],
        DonationFailed::class => [
            SendDonationFailedNotifications::class,
        ],
    ];

    /**
     * Register any events for your application.
     */
    public function boot(): void
    {
        //
    }

    /**
     * Determine if events and listeners should be automatically discovered.
     */
    public function shouldDiscoverEvents(): bool
    {
        return false;
    }
}
