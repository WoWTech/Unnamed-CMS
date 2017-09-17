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

Route::get(     '/',                                   'PostsController@index')->name('home');
Route::get(     '/online',                             'PagesController@online')->name('online');
Route::get(     'forum',                               'CategoryController@index')->name('forum');
Route::get(     'forum/{slug}',                        'CategoryController@show')->name('category');
Route::get(     'forum/{category}/{topic}',            'TopicsController@show')->name('forum.topic');
Route::patch(   'forum/{category}/{topic}',            'TopicsController@update')->name('forum.topic');
Route::get(     'forum/{category}/{topic}/edit',       'TopicsController@edit')->name('forum.topic.edit');
Route::delete(  'forum/{category}/{topic}',            'TopicsController@show')->name('forum.topic.delete');
Route::post(    'forum/{category}/',                   'TopicsController@store')->name('forum.topic.create');
Route::post(    'forum/{category}/{topic}/create',     'TopicsController@store_reply')->name('forum.topic.reply.create');
Route::patch(   'forum/{category}/{topic}',            'TopicsController@update_reply')->name('forum.topic.reply.update');
Route::delete(  'forum/{category}/{topic}/{reply}',    'TopicsController@delete_reply')->name('forum.topic.reply.delete');
Route::post(    'posts/{post}/comments',               'CommentsController@store');
Route::resource('posts',                               'PostsController');
Route::resource('posts.comments',                      'CommentsController');

Route::middleware('permission:view-dashboard')->prefix('admin')->group(function() {
    Route::get('/', 'Admin\DashboardController@index')->name('dashboard');
    Route::post('getusers', 'Admin\AjaxController@getUsers');
    Route::resource('posts', 'PostsController', ['as' => 'admin']);
    Route::resource('comments', 'CommentsController', ['as' => 'admin', 'only' => ['index', 'edit', 'destroy']]);
    Route::resource('accounts', 'AccountsController', ['as' => 'admin', 'except' => ['show']]);
    Route::resource('roles', 'Admin\RolesController', ['as' => 'admin', 'except' => ['show']]);

    // This routes and whole categoires/subcategories thing will be replaced using STI approach
    Route::get('/categories/{category}/subcategories', 'CategoryController@subcategoriesIndex')->name('admin.subcategories.index');
    Route::get('/categories/{category}/subcategories/{subcategory}/edit', 'CategoryController@subcategoriesEdit')->name('admin.subcategories.edit');
    Route::get('/categories/{category}/subcategories/create', 'CategoryController@subcategoriesCreate')->name('admin.subcategories.create');
    Route::post('/categories/{category}/subcategories/', 'CategoryController@subcategoriesStore')->name('admin.subcategories.store');
    Route::patch('/categories/{category}/subcategories/{subcategory}', 'CategoryController@subcategoriesUpdate')->name('admin.subcategories.update');
    Route::delete('/categories/{category}/subcategories/{subcategory}', 'CategoryController@subcategoriesDestroy')->name('admin.subcategories.destroy');

    Route::resource('categories', 'CategoryController', ['as' => 'admin', 'except' => ['show']]);


  });
