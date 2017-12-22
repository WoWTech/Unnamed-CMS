@foreach(['error', 'info', 'warning'] as $msg)
  @if(Session::has($msg))
    <span class="{{$msg}}-message">{{ Session::get($msg) }}</span>
  @endif
@endforeach
