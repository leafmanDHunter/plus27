@extends('layouts.main')

@section('content')
 <!-- Page content -->
    <div class="container mt--8 pb-5">
      <div class="row justify-content-center">
        <div class="col-lg-5 col-md-7">
          <div class="card bg-secondary border-0 mb-0">
            <div class="card-header bg-transparent">
              <div class="text-muted text-center mt-2 mb-3">Sign Up</div>
      
            </div>
            <div class="card-body px-lg-5 py-lg-5">

            <form method="POST" action="{{ route('register') }}">
                @csrf

                <div class="form-group">
                    <div class="input-group input-group-merge input-group-alternative mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="ni ni-hat-3"></i></span>
                        </div>
                        <input placeholder="Name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus>

                        @error('name')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                        @enderror
                    </div>
                </div>


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
                        <input type="password" class="form-control @error('password') is-invalid @enderror" name="password" placeholder="Password" required autocomplete="new-password">
                    </div>

                    @error('password')
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
                        <input type="password" class="form-control" name="password_confirmation" placeholder="Confirm Password" required autocomplete="new-password">
                    </div>

                </div>
                <div class="text-center">
                  <button type="submit" class="btn btn-primary mt-4">Create account</button>
                </div>
            </form>

        </div>
    </div>
</div>
</div>
</div>

              
@endsection
