<?php

use App\Http\Controllers\adminController;
use App\Http\Controllers\articlesController;
use App\Http\Controllers\ExercisesController;
use App\Models\Theme;
use Illuminate\Support\Facades\Route;

$themes = [];
$themeConstrain = [];
try {
    $themes = cache()->rememberForever('themes', function () {return Theme::all();});
    $themeConstrain = cache()->rememberForever('themeConstrain', fn()=> '(' . $themes->pluck('slug')->join('|') . ')');
} catch (Exception $e) {
}

// Home page
Route::get('/', function () {return view('welcome', ['themes' => Theme::all()]);})->name('home');

/** Article routes */
Route::get('/{theme:slug}', [articlesController::class, 'index'])->where('theme', $themeConstrain)->name('articles.index');
Route::get('/{theme:slug}/{article:slug}', [articlesController::class, 'show'])->where('theme', $themeConstrain)->name('articles.show');
Route::middleware('can:admin')->group(function() use ($themeConstrain) {
    Route::get('/articles/{theme:slug}/nouveau', [articlesController::class, 'create'])->where('theme', $themeConstrain)->name('articles.create');
    Route::post('/articles/store', [articlesController::class, 'store'])->name('articles.store');
    Route::get('/articles/edit/{article}', [articlesController::class, 'edit'])->name('articles.edit');
    Route::patch('/articles/update/{article}', [articlesController::class, 'update'])->name('articles.update');
    Route::delete('articles/delete/{article}', [articlesController::class, 'destroy'])->name('articles.destroy');
});

/** Exercise routes */
Route::get('/{theme:slug}/{article:slug}/exercices', [ ExercisesController::class, 'index' ])->where('theme', $themeConstrain)->name('exercises.index');
Route::get('/{theme:slug}/{article:slug}/exercices/{exercise}', [ ExercisesController::class, 'show' ])->where('theme', $themeConstrain)->whereNumber('exercise')->name('exercises.show');
Route::middleware('can:admin')->group(function () use ($themeConstrain) {
    Route::get('/exercices/{theme:slug}/{article:slug}/nouveau', [ ExercisesController::class, 'create' ])->where('theme', $themeConstrain)->name('exercises.create');
    Route::post('/exercices/store', [ExercisesController::class, 'store'])->name('exercises.store');
    Route::get('/exercices/edit/{exercise}', [ ExercisesController::class, 'edit' ])->name('exercises.edit');
    Route::patch('/exercices/update/{exercise}', [ExercisesController::class, 'update'])->name('exercises.update');
    Route::delete('/exercices/destroy/{exercise}', [ ExercisesController::class, 'destroy' ])->name('exercises.destroy');
});


// Admin pages
Route::get('/admin/update', [adminController::class, 'updateArticles']);
Route::get('/admin/dev', [adminController::class, 'dev']);
Route::get('/profile', function () {return view('dashboard');})->middleware(['auth'])->name('profile');
Route::get('/dashboard', function () {return view('dashboard');})->middleware(['auth'])->name('dashboard');

// Auth pages
require __DIR__ . '/auth.php';
