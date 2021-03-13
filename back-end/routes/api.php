<?php

use Illuminate\Http\Request;
header('Access-Control-Allow-Origin:*');
header('strict-origin-when-cross-origin:*');
header('Access-Control-Allow-Methods:GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers:*');
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
