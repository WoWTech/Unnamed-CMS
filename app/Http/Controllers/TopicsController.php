<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\{Topic, Category, Reply};
use Laratrust;

class TopicsController extends Controller
{

    public function index()
    {
        //
    }

    public function store(Request $request, Category $category)
    {
        if (!Laratrust::can('create-forum-topic'))
            return abort(403);

        $this->validate(request(), [
          'title' => 'required|max:75',
          'content' => 'required|max:2000'
        ]);

        $topic = Topic::create([
          'title'       => request('title'),
          'content'     => request('content'),
          'category_id' => $category->id,
          'account_id'  => \Auth::id()
        ]);

        return redirect()->route('forum.topic', [$category->category_slug, $topic->topic_id]);
    }

    public function store_reply($category, Topic $topic)
    {
        $this->validate(request(), [
            'content' => 'required|max:2000'
        ]);

        $topic->replies()->create([
            'content'  => request('content'),
            'account_id'  => \Auth::id()
        ]);

        return back();
    }

    public function show($category, Topic $topic)
    {
        $replies = $topic->replies()->simplePaginate(10);

        return view('forum.categories.topic', compact('category', 'topic', 'replies'));
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function update_reply($category, $topic)
    {
        $this->validate(request(), [
            'content'  => 'required|max:2000',
            'reply_id' => 'required|integer',
        ]);

        $reply = Reply::findOrFail(request('reply_id'));
        $reply->update(request(['content']));

        if (!request()->ajax())
            return redirect()->route('forum.topic', [$category, $topic]);
    }

    public function delete_reply($category, $topic, Reply $reply)
    {
        $reply->delete();

        return redirect()->route('forum.topic', [$category, $topic]);
    }

    public function destroy($id)
    {
        //
    }
}
