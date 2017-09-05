@extends('forum.layout')

@section('content')
  <section class="category">
    <header>
      <span class="logo" style="background-image:url('images/cat-img.png')"></span>
      <h2>{{ $category->name }}</h2>

      <aside>
        <input type="text" name="search">
        <a href="#" id="new-topic" class="new-topic red-button">New topic</a>
      </aside>
    </header>

    <div class="content">
      @permission('create-forum-topic')
      <div class="create-topic-block">
        <div class="user-info">
          <span class="user-avatar" style="background-image:url('images/user-avatar.png')"></span>
          <div class="account-details">
            <span class="username">
              Aailom
            </span>
            <span class="group">
              Customer Service
            </span>
            <span class="posts">
              115 posts
            </span>
          </div>
        </div>
        @endpermission

        <div class="topic-details">
          <input type="text">
          <textarea name="" id="" rows="10"></textarea>
          <input type="submit" name="" class="red-button" value="Post">
        </div>

      </div>
      <table>
        <tbody>
          @foreach ($category->topics as $topic)
            <tr class="topic" data-id="1">
              <td class="topic-title">
                <div class="manage-topic"></div>
                <i class="topic-icon"></i>
                {{ $topic->name }}
              </td>
              <td class="topic-replies">
                <i class="replies-icon"></i>
                {{ $topic->replies }}
              </td>
              <td class="topic-author">
                {{ $topic->author->username }}
              </td>
              <td class="topic-timestamp">
                <time>{{ $topic->updated_at->diffForHumans() }}</time>
              </td>
            </tr>
          @endforeach
        </tbody>
      </table>
      <a href="#" class="next-page">Next</a>
    </div>

  </section>
@endsection

@section('javascript')
  <script type="text/javascript">
    $(".manage-topic").click(function() {

      if ($(this).next('.manage-topic-actions').length > 0) {
          $(this).next('.manage-topic-actions').css('display', 'block');
          return;
      }

      let id = $(this).parent().parent().data('id');
      let element = `
        <div class="manage-topic-actions" onmouseleave="closeActionsMenu(this)">
          <ul>
            <li><a href="/${id}">Edit</a></li>
            <li><a href="/${id}">Delete</a></li>
          </ul>
        </div>
      `
      $(this).after(element);
    });
   function closeActionsMenu(element)
   {//do something
      $(element).css('display', 'none');
   };
  </script>
@endsection
