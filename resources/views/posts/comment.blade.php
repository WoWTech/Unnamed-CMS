<div class="comment">
  <img src="../images/user_avatar.png" alt="" class="avatar">
  <div class="comment-content">
    <div class="comment-header">
      {{ $comment->account->username }}
      <time datetime="{{ $comment->created_at }}">{{ $comment->created_at->diffForHumans() }}</time>
    </div>
    <div class="comment-body">
      {{ $comment->content }}
    </div>
  </div>
</div>
