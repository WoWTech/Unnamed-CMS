<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\{Post, Comment, Account};

class PostsController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth')->except(['index', 'show']);
    }

    public function index()
    {
        if ($this->isAdminRequest())
        {
            return $this->adminIndex();
        }
        else
        {
            $posts = Post::latest()->simplePaginate(10);

            return view('posts.index', compact('posts'));
        }
    }

    public function show(Post $post)
    {
        $comments = Comment::with('account')->wherePostId($post->id)->simplePaginate(10);

        return view('posts.show', compact('post', 'comments'));
    }

    public function edit(Post $post)
    {
        return $this->isAdminRequest() ? view('admin.posts.edit', compact('post')) : view('posts.edit', compact('post'));
    }

    public function update(Post $post)
    {
        $this->postValidation();
        $this->validate(request(), [
            'account_id' => 'sometimes|required|numeric'
        ]);

        $post->title = request()->title;
        $post->content = request()->content;

        if ( isset(request()->account_id) )
            $post->account()->associate(Account::findOrFail(request()->account_id));

        $post->save();

        return redirect()->route('posts.show', ['id' => $post->id]);
    }

    public function create()
    {
        return $this->isAdminRequest() ? view('admin.posts.create') : view('posts.create');
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
        $post->delete();

        return redirect('/');
    }

    private function adminIndex()
    {
        $posts = Post::with('account');

        if (request()->keywords)
            $posts->where('content', 'LIKE', '%'.request()->keywords.'%');

        $posts = $posts->paginate(10);

        request()->flashOnly(['keywords']);

        return view('admin.posts.index', compact('posts'));
    }

    private function postValidation()
    {
        $this->validate(request(), [
          'title' => 'required|min:2,max:50',
          'content'  => 'required|min:3,max:3000'
        ]);
    }
}
