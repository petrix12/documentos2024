<?php

use App\Http\Controllers\AuthController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// RUTAS DE PRUEBA WIREUI
Route::get('/users', function(Request $request) {
    $search = $request->search;
    return \App\Models\User::where('name', 'like', "%{$search}%")
        ->orWhere('email', 'like', "%{$search}%")
        ->get();
})->name('api.users.index');

Route::get('/users2', function(Request $request) {
    $search = $request->search;
    return \App\Models\User::where('name', 'like', "%{$search}%")
        ->orWhere('email', 'like', "%{$search}%")
        ->when($request->exists('selected'), function($query) use($request) {
            $query->whereIn('id', $request->selected)->limit(10);
        })
        ->get();
})->name('api.users.index2');

Route::get('/users3', function(Request $request) {
    return \App\Models\User::when($request->search, function($query, $search) {
        $query->where('name', 'like', "%{$search}%")
            ->orWhere('email', 'like', "%{$search}%");
    })->when($request->selected, function($query, $selected) {
        $query->whereIn('id', $selected)->limit(10);
    })->get();
})->name('api.users.index3');

Route::get('/opciones', function(Request $request) {
    $search = $request->search ?? '';
    $opciones = Registros::select('id', 'name as text')
        ->where('name', 'LIKE', "%$search%")
        ->limit(10)
        ->get();
    return $opciones;
})->name('api.opciones.index');

Route::post('create', [AuthController::class, 'createUser'])->name('api.users.create');
Route::post('login', [AuthController::class, 'loginUser'])->name('api.users.login');
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
// Para ingresar a la ruta protegidas por el middleware auth:sanctum, es será necesario en la petición colocar el token de autenticación obtenido en las rutas create o login.
// Headers -> Accept: application/json
// Headers -> Authorization: Bearer <API TOKEN>
// Headers -> Content-Type: application/json
