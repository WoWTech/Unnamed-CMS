@extends('layouts.app')

@section('content')
  <section class="view-post">
    <article>

      <header>
        <h2>{{ $post->title }}</h2>
        <time datetime="{{ $post->created_at }}">{{ $post->created_at->toFormattedDateString() }}</time>
      </header>

      <p class="article-content">
        {{ $post->content }}
      </p>

    </article>
  </section>

@endsection
