<?php

namespace App\Providers;

use App\Models\User;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        if(App::environment('production')){
            URL::forceScheme('https');
        }
        
        Blade::directive('markdown', function ($expression) {
            // TODO: make markdown work on the website !!!!!
            return "<?php echo $expression; ?>";
            /*    		return "<?php echo config('scolcours.markdown')->convertToHtml($expression) ?>";*/
        });

        Gate::define('admin', function (User $user) {
            return $user->email === 'basil@scolcours.ch';
        });
    }
}
