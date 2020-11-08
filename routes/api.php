<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('book', [App\Http\Controllers\BookController::class, 'index'])->middleware('auth:api');
Route::post('book', [App\Http\Controllers\BookController::class, 'store'])->middleware('auth:api');
Route::put('book/{book}', [App\Http\Controllers\BookController::class, 'update'])->middleware('auth:api');
Route::delete('book/{book}/delete', [App\Http\Controllers\BookController::class, 'destroy'])->middleware('auth:api');
Route::delete('book/{book}/archive', [App\Http\Controllers\BookArchiveController::class, 'destroy'])->middleware('auth:api');

Route::get('book/archive', [App\Http\Controllers\BookArchiveController::class, 'all'])->middleware('auth:api');