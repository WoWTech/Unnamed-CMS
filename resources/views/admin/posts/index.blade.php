@extends('layouts.dashboard')

@section('content')
  <header>
    <h2>Posts</h2>
    <a href="{{ route('create-post') }}" class="action-badge">+Create new</a>
  </header>

  <form action="{{ route('all-posts') }}" method="get">
    <input type="text" name="keywords" class="search-bar" placeholder="Search" value="{{ old('keywords') }}">
  </form>

  <div class="content-wrapper">
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Content</th>
          <th>Username</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        @foreach($posts as $post)
          <tr>
            <td>{{ $post->title }}</td>
            <td>{{ $post->shortDescription(100) }}</td>
            <td>{{ $post->account->username }}</td>
            <td>{{ $post->created_at->toFormattedDateString() }}</td>
            <td><a href="{{ route('edit-post', $post) }}">Edit</a> <a href="{{ route('posts.destroy', $post) }}" data-method="DELETE" class="method-link">Delete</a></td>
          </tr>
        @endforeach
      </tbody>
    </table>
    {{ $posts->appends(request()->except('page'))->links() }}
  </div>
@endsection

@section('javascript')
    <script src="{{ asset('js/app.js') }}" charset="utf-8"></script>
@endsection
