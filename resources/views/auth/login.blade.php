@extends('layouts.main')

@section('content')
  <!-- Page content -->
    <div class="container mt--8 pb-5">
      <div class="row justify-content-center">
        <div class="col-lg-5 col-md-7">
          <div class="card bg-secondary border-0 mb-0">
            <div class="card-header bg-transparent">
              <div class="text-muted text-center mt-2 mb-3">Sign In</div>
      
            </div>
            <div class="card-body px-lg-5 py-lg-5">

                <form method="POST" action="{{ route('login') }}">
                    @csrf

                    <div class="form-group mb-3">
                        <div class="input-group input-group-merge input-group-alternative">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                    <i class="ni ni-email-83"></i>
                                </span>
                            </div>
                            <input name="email" class="form-control @error('email') is-invalid @enderror" placeholder="Email" type="email" value="{{ old('email') }}" required autocomplete="email" autofocus>
                        </div>

                        @error('email')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                        @enderror
                    </div>

                    <div class="form-group">
                        <div class="input-group input-group-merge input-group-alternative">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                    <i class="ni ni-lock-circle-open"></i>
                                </span>
                            </div>
                            <input type="password" placeholder="Password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">
                        </div>

                        @error('password')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                        @enderror
                    </div>

                    <div class="custom-control custom-control-alternative custom-checkbox">
                        <input class="custom-control-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
                        <label class="custom-control-label" for="remember">
                            <span class="text-muted">Remember me</span>
                        </label>
                    </div>

                    <div class="text-center">
                        <button type="submit" class="btn btn-primary my-4">Sign in</button>
                    </div>
                </form>

            </div>
        </div>
        <div class="row mt-3">
            @if (Route::has('password.request'))
            <div class="col-6">
                <a class="text-light" href="{{ route('password.request') }}">
                    <small>{{ __('Forgot Your Password?') }}</small>
                </a>
            </div>
            @endif

            <div class="col-6 text-right">
              <a href="{{ route('register') }}" class="text-light"><small>Create new account</small></a>
            </div>
          </div>
        </div>
      </div>
    </div>

              
@endsection
