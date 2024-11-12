<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Auth::routes(['register' => false]);
Route::get('refreshcaptcha', [App\Http\Controllers\Auth\LoginController::class, 'refreshcaptcha'])->name('refreshcaptcha');
Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('/');
Route::namespace('Dashbord')->group(function () {
    Route::get('users', [App\Http\Controllers\Dashbord\UserController::class, 'index'])->name('users');
    Route::get('users/create', [App\Http\Controllers\Dashbord\UserController::class, 'create'])->name('users/create');
    Route::post('users/create', [App\Http\Controllers\Dashbord\UserController::class, 'store'])->name('users/store');;
    Route::get('users/users', [App\Http\Controllers\Dashbord\UserController::class, 'users'])->name('users/users');
    Route::get('users/changeStatus/{id}', [App\Http\Controllers\Dashbord\UserController::class, 'changeStatus'])->name('users/changeStatus');
    Route::get('users/edit/{id}', [App\Http\Controllers\Dashbord\UserController::class, 'edit'])->name('users/edit');
    Route::post('users/edit/{id}', [App\Http\Controllers\Dashbord\UserController::class, 'update'])->name('users/update');
    Route::get('users/profile/{id}', [App\Http\Controllers\Dashbord\UserController::class, 'show'])->name('users/profile');
    Route::get('users/changepassword/{id}', [App\Http\Controllers\Dashbord\UserController::class, 'showChangePasswordForm'])->name('users/ChangePasswordForm');
    Route::POST('users/changepassword/{id}', [App\Http\Controllers\Dashbord\UserController::class, 'changePassword'])->name('users/changepassword');
    Route::get('users/myactivity', [App\Http\Controllers\Dashbord\UserController::class, 'myactivity'])->name('users/myactivity');

    //----------------------------city-----------------------------------------------------------------       
    Route::get('cities', [App\Http\Controllers\Dashbord\CityController::class, 'index'])->name('cities');
    Route::get('cities/create', [App\Http\Controllers\Dashbord\CityController::class, 'create'])->name('cities/create');
    Route::post('cities/create', [App\Http\Controllers\Dashbord\CityController::class, 'store'])->name('cities/store');;
    Route::get('cities/cities', [App\Http\Controllers\Dashbord\CityController::class, 'cities'])->name('cities/cities');;
    Route::get('cities/edit/{id}', [App\Http\Controllers\Dashbord\CityController::class, 'edit'])->name('cities/edit');
    Route::post('cities/edit/{id}', [App\Http\Controllers\Dashbord\CityController::class, 'update'])->name('cities/update');
    Route::delete('cities/delete/{id}', [App\Http\Controllers\Dashbord\CityController::class, 'delete'])->name('cities/delete');


    //----------------------------branches-----------------------------------------------------------------       
    Route::get('branches', [App\Http\Controllers\Dashbord\BranchesController::class, 'index'])->name('branches');
    Route::get('branches/create', [App\Http\Controllers\Dashbord\BranchesController::class, 'create'])->name('branches/create');
    Route::post('branches/create', [App\Http\Controllers\Dashbord\BranchesController::class, 'store'])->name('branches/store');;
    Route::get('branches/branches', [App\Http\Controllers\Dashbord\BranchesController::class, 'branches'])->name('branches/branches');;
    Route::get('branches/edit/{id}', [App\Http\Controllers\Dashbord\BranchesController::class, 'edit'])->name('branches/edit');
    Route::post('branches/edit/{id}', [App\Http\Controllers\Dashbord\BranchesController::class, 'update'])->name('branches/update');
    Route::delete('branches/delete/{id}', [App\Http\Controllers\Dashbord\BranchesController::class, 'delete'])->name('branches/delete');
    Route::get('branches/changeStatus/{id}', [App\Http\Controllers\Dashbord\BranchesController::class, 'changeStatus'])->name('branches/changeStatus');

});
