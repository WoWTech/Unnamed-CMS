<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Topic;

class TopicsController extends Controller
{

    public function index()
    {
        //
    }

    public function store(Request $request)
    {
        
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
