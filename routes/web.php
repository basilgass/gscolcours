<?php

use App\Http\Controllers\adminController;
use App\Http\Controllers\articlesController;
use App\Http\Controllers\ExercisesController;
use App\Models\Theme;
use Illuminate\Support\Facades\Route;


$themes = [];
$themeConstrain = [];
try {
	$themes = cache()->rememberForever( 'themes', function () {
		return Theme::all();
	} );
	$themeConstrain = cache()->rememberForever( 'themeConstrain', function ()  use ($themes) {
		return '(' . $themes->pluck( 'slug' )->join( '|' ) . ')';
	} );
} catch ( Exception $e ) {
}


// Main page
Route::get('/', function () {
    return view('welcome', ['themes'=>Theme::all()]);
})->name('home');

// All main pages
Route::get( '/{theme:slug}', [articlesController::class, 'index'])->where('theme', $themeConstrain)->name('theme');
Route::get( '/{theme:slug}/{article:slug}', [articlesController::class, 'show'])->where('theme', $themeConstrain)->name('article');
Route::get('/{theme:slug}/{article:slug}/exercices', [ExercisesController::class, 'index'])->where('theme', $themeConstrain);
Route::get('/{theme:slug}/{article:slug}/exercice/{exercise}', [ExercisesController::class, 'show'])->where('theme', $themeConstrain);

// Admin pages
Route::get('/admin', [adminController::class, 'updateArticles']);
Route::get('/dashboard', function () {
	return view('dashboard');
})->middleware(['auth'])->name('dashboard');

// Auth pages
require __DIR__.'/auth.php';
