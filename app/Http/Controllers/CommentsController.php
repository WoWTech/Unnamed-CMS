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

    public function edit(Post $post, Comment $comment)
    {
        return view('comments.edit', compact('post', 'comment'));
    }

    public function update(Post $post, Comment $comment)
    {
        $this->validateRequest();

        $comment->update(request(['content']));

        return redirect()->route('posts.show', $post);
    }

    public function store(Post $post)
    {
        $this->validateRequest();

        Comment::create([
            'content' => request('content'),
            'post_id' => $post->id,
            'account_id' => auth()->id()
        ]);

        return back();
    }

    public function destroy(Post $post, Comment $comment)
    {
        $comment->delete();

        return back();
    }

    private function validateRequest()
    {
        $this->validate(request(), [
            'content' => 'min:1|max:1000'
        ]);
    }
}
