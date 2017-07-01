<?php

namespace App\Http\Controllers;

use App\Post;
use App\Comment;

class CommentsController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }

    public function store(Post $post)
    {
        Comment::create([
            'content' => request('content'),
            'post_id' => $post->id,
            'account_id' => auth()->id()
        ]);

        return back();
    }
}
