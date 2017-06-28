<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;

class PostsController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }

    public function create()
    {
        return view('posts.create');
    }

    public function store()
    {
        Post::create([
            'title'      => request('title'),
            'content'    => request('content'),
            'account_id' => \Auth::id(),
        ]);

        return redirect('/');
    }
}
