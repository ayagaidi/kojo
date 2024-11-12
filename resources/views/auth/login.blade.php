@extends('layouts.authapp')
@section('title',"تسجيل الدخول")

@section('content')
<form method="POST" class="frm-single" action="">
    @csrf

    <div class="inside">
        <div class="title"><img src="{{asset('logo.svg')}}" alt="" style="max-width: 80% !important;"></div>

        {{-- <div class="title"><strong>{{trans('login.brandname')}}</strong></div> --}}
        <!-- /.title -->
        <div class="frm-title">{{trans('login.login')}}</div>
        <!-- /.frm-title -->
        
        <div class="frm-input"><input type="text"  name="email" placeholder="{{trans('login.email')}}" class="frm-inp form-control @error('email') is-invalid @enderror" value="{{ old('email') }}"><i class="fa fa-user frm-ico"></i></div>
        @error('email')
        <span class="invalid-feedback" style="color: red" role="alert">
            {{ $message }}
        </span>
    @enderror
        <!-- /.frm-input -->
        <div class="frm-input"><input type="password"  name="password" placeholder="{{trans('login.password')}}" class="frm-inp form-control @error('password') is-invalid @enderror" value="{{ old('password') }}"><i class="fa fa-lock frm-ico"></i></div>
        @error('password')
        <span class="invalid-feedback" style="color: red" role="alert">
           {{ $message }}
        </span>
    @enderror

    
    
    <div class="form-group row ">
        <div class="col-md-8">
 
                <div class="captcha"  align="center" style="padding: 3px" >

                  <span>{!! captcha_img() !!}</span>

                  </div>
        </div>
                  <div class="col-md-4">

                  <button type="button" onclick="refreshcaptcha()" style="background: #45484a" class="btn btn-primary btn-block btn-signin"><i class="fa fa-refresh" id="refresh"></i></button>

                  </div>
    </div>
      <div class="form-group mg-b-50">
        <input id="captcha" type="captcha" class="form-control @error('captcha') is-invalid @enderror" placeholder="الرجاء إدخال الرمز" name="captcha" >

        @error('captcha')
        <span class="invalid-feedback"  style="color: red" role="alert">
            <strong>{{ $message }}</strong>
        </span>
    @enderror
      </div>
        <!-- /.frm-input -->
        <div class="clearfix margin-bottom-20">
            
            {{-- <div class="pull-left">
                <div class="checkbox primary"><input type="checkbox" id="rememberme"><label for="rememberme">Remember me</label></div>
                <!-- /.checkbox -->
            </div> --}}
            <!-- /.pull-left -->
            <div class="pull-right">
            
                
                
                <a href="{{ route('password.request') }}" class="a-link"><i class="fa fa-unlock-alt"></i>{{trans('login.forgetpassword')}}?</a></div>
            <!-- /.pull-right -->
        </div>
        <!-- /.clearfix -->
        <button type="submit" class="frm-submit">{{trans('login.login')}}<i class="fa fa-arrow-circle-right"></i></button>
    
        <!-- /.row -->
        <div class="frm-footer"><?php echo date("Y"); ?> &copy;{{trans('login.copyright')}} </div>
        <!-- /.footer -->
    </div>
    <!-- .inside -->
</form>
<script>
    function refreshcaptcha(){
$.ajax({
   type:'GET',
   url:'refreshcaptcha',
   success:function(data){
      $(".captcha span").html(data.captcha);
   }
  });
}
</script>
@endsection
