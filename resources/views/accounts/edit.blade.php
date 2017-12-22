@extends('layouts.app')

@section('content')
  <section class="page-content">
    <header>
      <h2>Edit Account</h2>
    </header>
    <form action="{{ route('account.update', $account) }}" method="POST" enctype="multipart/form-data">
    {{ method_field('PATCH') }}
    {{ csrf_field() }}

      @include('layouts.input_errors')
      @include('layouts.flash_messages')
      <div class="user-panel">
          <div class="user-avatar">
            <img src="{{Storage::disk('uploads')->url($account->avatar->path)}}" id="avatar">
            <a href="javascript:void(0)" class="change-avatar">
              Upload image
              <input type="file" name="avatar" class="invisible-input" id="avatar-uploader">
            </a>

          </div>
          <div class="user-data">
            <div class="input-group">
              <label for="username">Login</label>
              <input id="username" type="text" name="username" value="{{ $account->username }}" disabled>
            </div>

            <div class="input-group">
              <label for="password">Old Password</label>
              <input id="password" type="password" name="old_password" placeholder="*************">
            </div>

            <div class="input-group">
              <label for="password-confirm">New password</label>
              <input id="password-confirm" type="password" class="form-control" name="password">
            </div>

            <div class="input-group">
              <label for="email">Email</label>
              <input id="email" type="email" name="email" placeholder="{{ substr_replace($account->email, '***', 0, 3) }}">
            </div>

            <div class="input-group">
              <input type="submit" value="Save">
            </div>
          </form>
        </div>
      </div>
    </form>
  </section>
@endsection
