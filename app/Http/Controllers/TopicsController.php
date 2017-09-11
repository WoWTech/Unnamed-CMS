<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\{Topic, Category};
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

    public function show($category, Topic $topic)
    {
      $replies = $topic->replies()->simplePaginate(1);

      return view('forum.categories.topic', compact('topic', 'replies'));
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        //
    }
}
