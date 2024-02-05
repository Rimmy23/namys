<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CandleController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\DecorationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::apiResource('candle', CandleController::class);
    Route::apiResource('decoration', DecorationController::class);
});

Route::post('/admin', [AuthController::class, 'login']);
Route::post('/admin/signup', [AuthController::class, 'signup']);
Route::get('/candles', [CandleController::class, 'getCandle']);
Route::get('/decorations', [DecorationController::class, 'getDeco']);
Route::get('/candles/{id}', [CandleController::class, 'getById']);
Route::get('/decorations/{id}', [DecorationController::class, 'getById']);
Route::post('/cartId', [CartController::class, 'create']);
