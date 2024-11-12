<!DOCTYPE html>
<html lang="en" dir="rtl">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    <meta name="description" content="">
    <meta name="author" content="">
    {{-- lo.ico --}}
    <link rel="icon" type="image/png" sizes="56x56" href="{{ asset('lo.ico') }}">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>-@yield('title')</title>

    
    <link rel="stylesheet" href="{{ asset('dash/assets/styles/style.min.css') }}">

    <!-- Waves Effect -->
    <link rel="stylesheet" href="{{ asset('dash/assets/plugin/waves/waves.min.css') }}">

    <!-- RTL -->
    <link rel="stylesheet" href="{{ asset('dash/assets/styles/style-rtl.min.css') }}">
	<link rel="stylesheet" href="{{asset('dash/assets/fonts/cairo.css')}}">

</head>

<body style="font-family:Cairo;">

    <div id="single-wrapper" style="background-color: #45484a;">
       @yield('content')
        <!-- /.frm-single -->
    </div>


    <script src="{{ asset('dash/assets/scripts/jquery.min.js') }}"></script>
    <script src="{{ asset('dash/assets/scripts/modernizr.min.js') }}"></script>
    <script src="{{ asset('dash/assets/plugin/bootstrap/js/bootstrap.min.js') }}"></script>
    <script src="{{ asset('dash/assets/plugin/nprogress/nprogress.js') }}"></script>
    <script src="{{ asset('dash/assets/plugin/waves/waves.min.js') }}"></script>

    <script src="{{ asset('dash/assets/scripts/main.min.js') }}"></script>
</body>

</html>