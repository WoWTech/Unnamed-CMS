<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Services\ServerStatus;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        view()->composer('layouts.page-header', function($view)
        {
            $realm = ServerStatus::getServerStatus();
            $view->with('realm', $realm);
        });
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
