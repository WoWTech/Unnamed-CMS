<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

Route::get('/', 'PostsController@index')->name('home');
Route::get('/online', 'PagesController@online')->name('online');
Route::post('posts/{post}/comments', 'CommentsController@store');
Route::resource('posts', 'PostsController');
Route::resource('posts.comments', 'CommentsController');
