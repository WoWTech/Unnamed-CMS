<div class="comment">
  <img src="../images/user_avatar.png" alt="" class="avatar">
  <div class="comment-content">
    <div class="comment-header">
      {{ $comment->account->username }}
      <time datetime="{{ $comment->created_at }}">{{ $comment->created_at->diffForHumans() }}</time>
      {{-- This approach will be replaced with @can method, it's temporary HACK --}}
      @if(Auth::check() && Auth::user()->isStuffMember())
        <div class='action-buttons'>
            <a href="{{ route('posts.comments.edit', [$post, $comment]) }}" class="edit"></a>
            <a href="{{ route('posts.comments.destroy', [$post, $comment]) }}" class="delete method-link" data-method="DELETE"></a>
        </div>
      @endif
    </div>
    <div class="comment-body">
      {{ $comment->content }}
    </div>
  </div>
</div>
