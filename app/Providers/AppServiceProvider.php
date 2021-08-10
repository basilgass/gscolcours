<?php

namespace App\Providers;

use Illuminate\Support\Facades\Blade;
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
    	Blade::directive( 'markdown', function($expression){
    		// TODO: make markdown work on the website !!!!!
    		return "<?php echo $expression; ?>";
/*    		return "<?php echo config('scolcours.markdown')->convertToHtml($expression) ?>";*/
	    });
    }
}
