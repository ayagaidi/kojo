<!DOCTYPE html>
<html lang="en" dir="rtl">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    <meta name="description" content="">
    <meta name="author" content="">
    {{-- logo.ico --}}
    <link rel="icon" type="image/png" sizes="56x56" href="{{ asset('logo.ico') }}">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>KOJO Cafe-@yield('title')</title>
    <link href="https://fonts.googleapis.com/css2?family=Qatar2022 Arabic:wght@200&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="{{ asset('dash/assets/styles/style.min.css') }}">

    <!-- Material Design Icon -->
    <link rel="stylesheet" href="{{ asset('dash/assets/fonts/material-design/css/materialdesignicons.css') }}">

    <!-- mCustomScrollbar -->
    <link rel="stylesheet" href="{{ asset('dash/assets/plugin/mCustomScrollbar/jquery.mCustomScrollbar.min.css') }}">

    <!-- Waves Effect -->
    <link rel="stylesheet" href="{{ asset('dash/assets/plugin/waves/waves.min.css') }}">

    <!-- Sweet Alert -->
    <link rel="stylesheet" href="{{ asset('dash/assets/plugin/sweet-alert/sweetalert.css') }}">

    <!-- iCheck -->
    <link rel="stylesheet" href="{{ asset('dash/assets/plugin/iCheck/skins/square/blue.css') }}">

    <!-- RTL -->
    <link rel="stylesheet" href="{{ asset('dash/assets/styles/style-rtl.min.css') }}">
    <!-- cairo -->

    <link rel="stylesheet" href="{{ asset('dash/assets/fonts/cairo.css') }}">



    <script src="{{ asset('dash/assets/scripts/jquery.min.js') }}"></script>
    <script src="{{ asset('dash/assets/scripts/modernizr.min.js') }}"></script>
    <script src="{{ asset('dash/assets/plugin/bootstrap/js/bootstrap.min.js') }}"></script>


    <script src="{{ asset('dash/assets/jquery-datatable/jquery.dataTables.min.js') }}"></script>
    <script src="{{ asset('dash/assets/jquery-datatable/dataTables.bootstrap4.min.js') }}"></script>
    <script src="{{ asset('dash/assets/jquery-datatable/buttons/dataTables.buttons.min.js') }}"></script>
    <script src="{{ asset('dash/assets/jquery-datatable/jszip.min.js') }}"></script>
    <script src="{{ asset('dash/assets/jquery-datatable/pdfmake.min.js') }}"></script>
    <script src="{{ asset('dash/assets/jquery-datatable/vfs_fonts.js') }}"></script>
    <script src="{{ asset('dash/assets/jquery-datatable/buttons/buttons.bootstrap4.min.js') }}"></script>
    <script src="{{ asset('dash/assets/jquery-datatable/buttons/buttons.colVis.min.js') }}"></script>
    <script src="{{ asset('dash/assets/jquery-datatable/buttons/buttons.html5.min.js') }}"></script>

    <script src="{{ asset('dash/assets/plugin/mCustomScrollbar/jquery.mCustomScrollbar.concat.min.js') }}"></script>
    <!-- <script src="{{ asset('dash/assets/plugin/sweet-alert/sweetalert.min.js') }}"></script> -->
    <script src="{{ asset('dash/assets/plugin/waves/waves.min.js') }}"></script>
    <!-- Full Screen Plugin -->
    <script src="{{ asset('dash/assets/plugin/fullscreen/jquery.fullscreen-min.js') }}"></script>
    <script src="{{ asset('dash/assets/plugin/nprogress/nprogress.js') }}"></script>
    <script src="{{ asset('dash/assets/plugin/nprogress/nprogress.js') }}"></script>
    <script src="{{ asset('sweetalert2@9') }}"></script>

    <script src="{{ asset('vendor/sweetalert/sweetalert.all.js') }}"></script>
    <script src="{{ asset('dash/assets/plugin/sweet-alert/sweetalert.min.js') }}"></script>
    <script src="{{ asset('dash/fun.js') }}"></script>
    <script src="{{ asset('dash/funsecond.js') }}"></script>

    <style>
        .dataTables_wrapper .dt-buttons {
            float: none;
            text-align: left;
        }

        .dataTables_wrapper .dataTables_filter {
            text-align: right;
            float: right;
        }
    </style>

</head>

<body style="font-family: 'Qatar2022 Arabic', sans-serif;font-size: initial;font-weight: bolder;">

    <div class="main-menu">
        <header class="header">
            <a href="{{ route('home') }}" class="logo">
                <img src="{{asset('logo.png')}}" alt="" style="max-width: 20% !important;">
            </a>
            <button type="button" class="button-close fa fa-times js__menu_close"></button>
        </header>
        <!-- /.header -->
        <div class="content">

            <div class="navigation">
                <ul class="menu js__accordion">
                    <li class="{{ Request::is('home*') ? 'current' : '' }}>
                        <a class="waves-effect" href="{{route('home')}}"><i
                                class="menu-icon mdi mdi-view-dashboard"></i><span>الرئيسية</span></a>
                    </li>
                    @if (Auth::user()->user_type_id == 1 || Auth::user()->user_type_id == 2)
                        <li class="{{ Request::is('users*') ? 'current' : '' }} ">
                            <a class="waves-effect " href="{{ route('users') }}"><i
                                    class="menu-icon fa fa-users"></i><span>{{ trans('app.users') }}</span></a>
                        </li>
                    @endif
                    @if (Auth::user()->user_type_id == 1 || Auth::user()->user_type_id == 2 || Auth::user()->user_type_id == 3)
                        <li class="{{ Request::is('cities*') ? 'current' : '' }} ">
                            <a class="waves-effect " href="{{ route('cities') }}"><i
                                    class="menu-icon fa  fa-map-marker"></i><span>{{ trans('app.city') }}</span></a>
                        </li>
                    @endif

      
                  
                </ul>
                <!-- /.menu js__accordion -->
            </div>
            <!-- /.navigation -->
        </div>
        <!-- /.content -->
    </div>
    <!-- /.main-menu -->

    <div class="fixed-navbar">
        <div class="pull-left">
            <button type="button"
                class="menu-mobile-button glyphicon glyphicon-menu-hamburger js__menu_mobile"></button>
            <h1 class="page-title">@yield('title')</h1>
            <!-- /.page-title -->
        </div>
        <!-- /.pull-left -->
        <div class="pull-right">

            <!-- /.ico-item -->
            <div class="ico-item fa fa-arrows-alt js__full_screen"></div>
            <!-- /.ico-item fa fa-fa-arrows-alt -->

            <!-- /.ico-item -->

            <a href="#" class="ico-item ">
                <h5 class="name">{{ Auth::user()->username }}</h5>
            </a>
            <div class="ico-item">
                <img src="{{ asset('admin.png') }}" alt="" class="ico-img">
                <ul class="sub-ico-item">
                    <li><a href="{{ route('users/profile', encrypt(Auth::user()->id)) }}"><i class="fa fa-user"></i>
                            {{ trans('app.Profile') }}</a></li>
                
                    <li><a href="{{ route('users/ChangePasswordForm', encrypt(Auth::user()->id)) }}"><i
                                class="fa fa-lock"></i>{{ trans('app.changepassword') }} </a></li>
                    <li><a href="{{ route('logout') }}"
                            onclick="event.preventDefault();
                document.getElementById('logout-form').submit();"><i
                                class="fa fa-sign-out"></i>
                            {{ trans('app.logout') }}</a>
                        <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                            @csrf
                        </form>>
                    </li>
                </ul>
                <!-- /.sub-ico-item -->
            </div>
            <!-- /.ico-item -->
        </div>
        <!-- /.pull-right -->
    </div>
    <!-- /.fixed-navbar -->

    <!-- /.content -->


    <div id="wrapper">
        <div class="main-content">
            @yield('content')
            @include('sweetalert::alert')

            <!-- /.row -->
            <footer class="footer">
                <ul class="list-inline">
                    <li><?php echo date('Y'); ?> &copy;{{ trans('login.copyright') }} </li>

                </ul>
            </footer>
        </div>
        <!-- /.main-content -->
    </div>


    <script src="{{ asset('dash/assets/scripts/main.min.js') }}"></script>

</body>

</html>
