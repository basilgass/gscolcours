<?php

use App\Http\Controllers\adminController;
use App\Http\Controllers\articlesController;
use App\Http\Controllers\ExercisesController;
use App\Models\Theme;
use Illuminate\Support\Facades\Route;

$themes = [];
$themeConstrain = [];
try {
    $themes = cache()->rememberForever('themes', function () {
        return Theme::all();
    });
    $themeConstrain = cache()->rememberForever(
        'themeConstrain',
        function () use ($themes) {
            return '(' . $themes->pluck('slug')->join('|') . ')';
        }
    );
} catch (Exception $e) {
}

// Main page
Route::get('/', function () {
    return view('welcome', ['themes' => Theme::all()]);
})->name('home');


/** Article routes */
// Show all articles
Route::get('/{theme:slug}', [articlesController::class, 'index'])->where('theme', $themeConstrain)->name('theme');
// Show one article
Route::get('/{theme:slug}/{article:slug}', [articlesController::class, 'show'])->where('theme', $themeConstrain)->name('article');
// Create and store one article
Route::get('/article/{theme:slug}/nouveau', [articlesController::class, 'create'])->name('nouvel article')->middleware('can:admin');
Route::post('/article/store', [articlesController::class, 'store'])->name('store article');
// Edit and patch one article
Route::get('/article/edit/{article}', [articlesController::class, 'edit'])->name('edit article');
Route::patch('/article/update/{article}', [articlesController::class, 'update'])->name('update article');
// Destroy an article
Route::delete('articles/delete/{article}', [articlesController::class, 'destroy'])->name('delete article');


/** Exercise routes */
// Show all exercise
Route::get('/{theme:slug}/{article:slug}/exercices', [ ExercisesController::class, 'index' ])->where('theme', $themeConstrain);
// Show one exercise
Route::get('/{theme:slug}/{article:slug}/exercices/{exercise}', [ ExercisesController::class, 'show' ])->where('theme', $themeConstrain)->whereNumber('exercise')->name('show exercice');

// create one exercise
Route::get('/{theme:slug}/{article:slug}/exercices/nouveau', [ ExercisesController::class, 'create' ])->where('theme', $themeConstrain)->name('new exercise');
Route::post('/exercices/store', [ExercisesController::class, 'store']);

Route::get('/{theme:slug}/{article:slug}/exercices/{exercise}/edit', [ ExercisesController::class, 'edit' ])->where('theme', $themeConstrain)->whereNumber('id')->name('edit exercise');
Route::post('/exercices/update', [ExercisesController::class, 'update'])->name('update exercise');

Route::delete('/exercices/delete/{exercise}', [ ExercisesController::class, 'destroy' ])->name('delete exercise');






// Admin pages
Route::get('/admin/update', [adminController::class, 'updateArticles']);
Route::get('/admin/dev', [adminController::class, 'dev']);
Route::get('/profile', function () {
    return view('dashboard');
})
    ->middleware(['auth'])
    ->name('profile');
Route::get('/dashboard', function () {
    return view('dashboard');
})
    ->middleware(['auth'])
    ->name('dashboard');

// Auth pages
require __DIR__ . '/auth.php';
