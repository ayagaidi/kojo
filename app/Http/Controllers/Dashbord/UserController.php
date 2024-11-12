<?php

namespace App\Http\Controllers\Dashbord;

use App\Http\Controllers\Controller;
use App\Models\City;
use App\Models\User;
use App\Models\UserType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use RealRashid\SweetAlert\Facades\Alert;
use Carbon\Carbon;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;

class UserController extends Controller
{
    use AuthorizesRequests;
    use DispatchesJobs;
  
    use ValidatesRequests;
    private $_rolesEnabled;
    private $_rolesMiddlware;
    public function __construct()
    {
        $this->middleware('auth');
      

    }


    
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {



           
            return view('dashbord.users.index');
      
            
       
    }

    public function create()
    {



            $user_types = UserType::all()->where('id', '!=', 1);
            $Cities = City::all();

            return view('dashbord.users.create')->with('user_types', $user_types)->with('Cities', $Cities);

       

    }

    public function store(Request $request)
    {
        $messages = [
            'first_name.required' =>trans('users.first_name_R'),
            'last_name.required' => trans('users.last_name_R'),
            'username.required' => trans('users.username_R'),
            'address.required' => trans('users.address_R'),
            'email.required' => trans('users.email_R'),
            'phonenumber.required' => trans('users.phonenumber_R'),
            'user_type_id.required' =>trans('users.user_type_id_R'),

        ];
        $this->validate($request, [
            'first_name' => ['required', 'string', 'max:50'],
            'last_name' => ['required', 'string', 'max:50'],
            'username' => ['required', 'string', 'max:50','unique:users'],
            'address' => ['required'],
            'email' => ['required', 'string', 'email', 'max:50', 'unique:users'],
            'password' => ['required', 'string', 'min:8'],
            'phonenumber' => 'required|digits_between:9,9|numeric|starts_with:91,92,94,21|unique:users',
            'user_type_id' => ['required'],

        ], $messages);
        try {
            DB::transaction(function () use ($request) {

                $user = new User();
                $user->first_name = $request->first_name;
                $user->last_name = $request->last_name;
                $user->username = $request->username;

                $user->cities_id =decrypt($request->address);
                $user->phonenumber = $request->phonenumber;

                $user->email = $request->email;
                $user->password = Hash::make($request->password);
                $user->user_type_id = decrypt($request->user_type_id);
                $user->active = 1;
                $user->save();
            
            });

            Alert::success(trans('users.successusersadd'));

            return redirect()->route('users');
        } catch (\Exception $e) {

            Alert::warning($e->getMessage());

            return redirect()->route('users');
        }
    }
     public function users()
    {


        $user = User::with(['userType','cities'])->select('*')->where('id', '!=', auth()->id())->orderBy('created_at', 'DESC');
        return datatables()->of($user)
       
            ->addColumn('changeStatus', function ($user) {
                $user_id = encrypt($user->id);

                return '<a href="' . route('users/changeStatus', $user_id) . '"><i  class="fa  fa-refresh"> </i></a>';
            })
            ->addColumn('edit', function ($user) {
                $user_id = encrypt($user->id);

                return '<a style="color: #f97424;" href="' . route('users/edit', $user_id) . '"><i  class="fa  fa-edit"> </i></a>';
            })
            ->rawColumns(['changeStatus','edit'])

            ->make(true);
        
    }


    public function edit($id)
    {

            $user_id = decrypt($id);
            $user = User::find($user_id);
            $user_types = UserType::all()->where('id', '!=', 1)->where('id', '!=', 4)->where('id', '!=', 5)->where('id', '!=', 6)->where('id', '!=', 10)->where('id', '!=', 11)->where('id', '!=', 12)->where('id', '!=', 13);
            $Cities = City::all();
         

            return view('dashbord.users.edit')
            ->with('user_types', $user_types)
          ->with('user', $user)->with('Cities', $Cities);
       
    }
    public function update(Request $request, $id)
    {

        $user_id = decrypt($id);

        $messages = [
            'first_name.required' =>trans('users.first_name_R'),
            'last_name.required' => trans('users.last_name_R'),
            'username.required' => trans('users.username_R'),
            'address.required' => trans('users.address_R'),
            'email.required' => trans('users.email_R'),
            'phonenumber.required' => trans('users.phonenumber_R'),
            'user_type_id.required' =>trans('users.user_type_id_R'),

        ];
        $this->validate($request, [
            'first_name' => ['required', 'string', 'max:50'],
            'last_name' => ['required', 'string', 'max:50'],
            'username' => ['required', 'string', 'max:50'],
            'address' => ['required'],
            'phonenumber' => 'required|digits_between:9,9|numeric|starts_with:91,92,94,21 ',
            'user_type_id' => ['required'],
            'email' => 'required|email|max:50|string|unique:users,email,'.$user_id,

        ], $messages);
        try {
            DB::transaction(function () use ($request, $id) {
                $user_id = decrypt($id);
                $user = User::find($user_id);
                $user->first_name = $request->first_name;
                $user->last_name = $request->last_name;
                $user->username = $request->username;
                $user->cities_id =decrypt($request->address);
                $user->phonenumber = $request->phonenumber;
                $user->email = $request->email;
                $user->user_type_id = decrypt($request->user_type_id);
                $user->active = 1;

                $user->save();

            });
            Alert::success(trans('users.successuseredit'));

            return redirect()->route('users');
        } catch (\Exception $e) {

            Alert::warning($e->getMessage());

            return redirect()->route('users');
        }
    }
    public function show($id)
    {
        $user_id = decrypt($id);
        $user = User::find($user_id);

        return view('dashbord.users.profile')->with('user', $user);
    }


    public function showChangePasswordForm()
    {

        return view('dashbord.users.change_form');
    }

    public function changePassword(Request $request)
    {
        $messages = [

            'current-password.required' => trans('users.current-password_r'),
            'new-password.required' => trans('users.new-password_r'),
            'new-password-confirm.required' =>trans('users.new-password-confirm'),
        ];

        $this->validate($request, [
            'current-password' =>['required', 'string', 'min:6'],
            'new-password' =>['required', 'string', 'min:6'],
            'new-password-confirm' =>['required','same:new-password', 'string', 'min:6'],
        ], $messages);
        if (!(Hash::check($request->input('current-password'),Auth::user()->password))) {
            ActivityLogger::activity(trans('users.changefailloogger'));
            Alert::warning(trans('users.passwordnotmatcheing'));
            return redirect()->back();
        }
        //Change Password
        $user = Auth::user();
        $user->password = Hash::make($request->input('new-password'));
        $user->save();
        Alert::success(trans('users.changesecc'));
        return redirect()->back();
    }
    public function changeStatus(Request $request, $id)

    {
        $user_id = decrypt($id);
        $user = User::find($user_id);

        try {
            DB::transaction(function () use ($request, $id) {
                $user_id = decrypt($id);
                $user = User::find($user_id);
                if ($user->active == 1) {
                    $active = 0;
                } else {
                    $active = 1;
                }

                $user->active = $active;
                $user->save();
            });
            ActivityLogger::activity($user->email .trans('users.changestatueslogger'));
            Alert::success(trans('users.changestatuesalert'));

            return redirect('users');
        } catch (\Exception $e) {

            Alert::warning($e->getMessage());
            ActivityLogger::activity($user->email . trans('users.changestatuesloggerfail'));

            return redirect('users');
        }
    }


  
 
}
