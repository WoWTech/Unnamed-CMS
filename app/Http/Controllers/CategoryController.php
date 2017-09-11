<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\{Category, Topic};

class CategoryController extends Controller
{

    public function index()
    {
        $categories = Category::whereNull('parent_id')->with('forums')->get();

        return view('forum.categories.index', compact('categories'));
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //
    }

    public function show($slug)
    {
        $category = Category::where('category_slug', $slug)->whereNotNull('parent_id')->firstOrFail();
        $topics = Topic::whereCategoryId($category->id)->with(['account' => function($query) {
          $query->select('id', 'username');
        }])->simplePaginate(15);

        return view('forum.categories.show', compact('category', 'topics'));
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
