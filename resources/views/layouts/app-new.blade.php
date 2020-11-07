@include('layouts/_partials/_header')
@include('layouts/_partials/sidebar')
@include('layouts/_partials/top-nav')



    <!-- Page content -->
    <div class="container-fluid mt--6" id="app">

      @yield('content')
     
@include('layouts/_partials/footer')
