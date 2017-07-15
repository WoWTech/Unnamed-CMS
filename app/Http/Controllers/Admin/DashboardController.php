<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\{Account, Post, Comment};

class DashboardController extends Controller
{

    public function index()
    {
        $posts = Post::with(['account' => function($query)
        {
            $query->select('username', 'id');
        }])->orderBy('created_at', 'DESC')->limit(5)->get();

        $comments = Comment::with(['account' => function($query)
        {
            $query->select('username', 'id');
        }])->orderBy('created_at', 'DESC')->limit(5)->get();

        $users = Account::orderBy('joindate', 'DESC')->limit(5)->get(['username', 'email', 'joindate']);

        return view('admin.index', compact('posts', 'users', 'comments'));
    }

    public function allPosts()
    {
        $posts = Post::with('account');

        if (request()->keywords)
            $posts->where('content', 'LIKE', '%'.request()->keywords.'%');

        $posts = $posts->paginate(10);

        request()->flashOnly(['keywords']);

        return view('admin.posts.index', compact('posts'));
    }

    public function editPost(Post $post)
    {
        return view('admin.posts.edit', compact('post'));
    }

    public function createPost()
    {
        return view('admin.posts.create');
    }

    public function getUsers()
    {
        $this->validate(request(), [
            'username' => 'required|min:3',
        ]);

        return Account::where('username', 'like', request()->username.'%')->get(['id', 'username']);
    }

}
