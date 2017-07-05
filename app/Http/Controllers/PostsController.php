<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;

class PostsController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth')->except(['index', 'show']);
    }

    public function index()
    {
        $posts = Post::latest()->get();

        return view('posts.index', compact('posts'));
    }

    public function show(Post $post)
    {
        return view('posts.show', compact('post'));
    }

    public function edit(Post $post)
    {
        return view('posts.edit', compact('post'));
    }

    public function update(Post $post)
    {
        $this->postValidation();
        $post->update(request(['title', 'content']));

        return redirect()->route('posts.show', ['id' => $post->id]);
    }

    public function create()
    {
        return view('posts.create');
    }

    public function store()
    {
        $this->postValidation();

        Post::create([
            'title'      => request('title'),
            'content'    => request('content'),
            'account_id' => \Auth::id(),
        ]);

        return redirect('/');
    }

    public function destroy(Post $post)
    {
        $post->detele();

        return redirect('/');
    }

    private function postValidation()
    {
        $this->validate(request(), [
          'title' => 'required|min:2,max:50',
          'content'  => 'required|min:3,max:3000'
        ]);
    }
}
