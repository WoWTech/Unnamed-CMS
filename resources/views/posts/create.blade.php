@extends('layouts/app')

@section('content')

  <section class="page-content">
    <header>
      <h2>Add post</h2>
    </header>

    <form action="{{ route('posts.store') }}" method="post">
      {{ csrf_field() }}
      <div class="input-group">
        <label for="username">Title</label>
        <input name="title" type="text" name="title" placeholder="">
      </div>

      <div class="input-group">
        <label for="username">Content</label>
        <textarea title="content" name="content"></textarea>
      </div>

      <div class="input-group">
        <input type="submit" value="Post" class="flex-left">
      </div>

    </form>
  </section>

@endsection
