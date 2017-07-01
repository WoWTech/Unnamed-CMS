<article>

  <header>
    <h2><a href="/posts/{{ $post->id }}">{{ $post->title }}</a></h2>
    <time datetime="{{ $post->created_at }}">{{ $post->created_at->toFormattedDateString() }}</time>
  </header>

  <p class="article-content">
    {{ $post->content }}
  </p>

</article>
