<article>

  <header>
    <h2><a href="/posts/{{ $post->id }}">{{ $post->title }}</a></h2>
    <time datetime="{{ $post->created_at }}">{{ $post->created_at->toFormattedDateString() }}</time>
    {{-- This approach will be replaced with @can method, it's temporary HACK --}}
    @if(Auth::check() && Auth::user()->isStuffMember())
      <div class='action-buttons'>
          <a href="{{ route('posts.edit', $post->id) }}" class="edit"></a>
          <a href="/posts/{{ $post->id }}" class="delete method-link" data-method="DELETE"></a>
      </div>
    @endif
  </header>

  <p class="article-content">
    {{ $post->content }}
  </p>

</article>
