<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\SetsController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\WorkoutController;
use App\Http\Controllers\UserInfoController;
use App\Http\Controllers\ExercisesController;
use App\Http\Controllers\WorkoutSetController;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::get('/exercises', [ExercisesController::class, 'index']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);

    Route::get('/user', [UserController::class, 'show']);
    Route::put('/user', [UserController::class, 'update']);
    Route::delete('/user', [UserController::class, 'delete']);

    Route::get('/workouts', [WorkoutController::class, 'index']);
    Route::post('/workouts', [WorkoutController::class, 'store']);
    Route::get('/workouts/{id}', [WorkoutController::class, 'show']);
    Route::put('/workouts/{id}', [WorkoutController::class, 'update']);
    Route::delete('/workouts/{id}', [WorkoutController::class, 'destroy']);

    Route::get('/user-info', [UserInfoController::class, 'show']);
    Route::post('/user-info', [UserInfoController::class, 'store']);
    Route::put('/user-info', [UserInfoController::class, 'update']);

    Route::get('/sets', [SetsController::class, 'index']);
    Route::post('/sets', [SetsController::class, 'store']);

    Route::post('/workouts_sets', [WorkoutSetController::class, 'store']);
});
