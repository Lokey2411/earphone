<?php

namespace App\Http\Controllers;


use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Twilio\Http\CurlClient;
use Twilio\Rest\Client;
use GuzzleHttp\Client as GuzzleClient;

class AuthManager extends Controller
{
    // otp
    static $otp = 0;
    public function verifyOTP(Request $request)
    {
        if ($request->input("otp") == self::$otp || self::$otp < 100000) {
            if ($request["user"] !== null) {
                // if user is not null, redirect to dashboard
                $userId = $request["user"]["id"];
                $user = User::find($userId);
                session()->put("user", $user);
                // return response()->redirectTo(route("show.departments"))->with("success", "Đăng nhập thành công");
                return response()->json([
                    "success" => true,
                    "status" => "success",
                    "message" => "Đăng nhập thành công",
                    "user" => $request["user"]
                ]);
            } else {
                // return response()->redirectTo(route("login"))->with("error", "Thông tin đăng nhập sai");
                return response()->json(["success" => false, "status" => "error", "message" => "Đăng nhập sai", "user" => $request["user"]]);
            }
        } else {
            return response()->json(["success" => false, "status" => "error", "message" => "Sai mã đăng nhập"]);
        }
    }
    public function sendOTP(Request $request)
    {
        self::$otp = $request->input("otp");
        return response()->json(["success" => true, "otp" => self::$otp]);
    }
    //upload avatar
    public function login(Request $request)
    {
        $user = User::where("username", "=", $request->username)->orWhere("email", "=", $request->username)->first();
        if ($user) {
            if (Hash::check($request->password, $user->password)) {
                session()->put("user",$user);
                return redirect()->route("show.users");
                // return response()->json(["success" => true, "user" => self::$user]);
            } else {
                return redirect(route("login"))->with("error", "Đăng nhập thất bại \nSai mật khẩu");
            }
        } else {
            return redirect(route("login"))->with("error", "Đăng nhập \nSai Tên đăng nhập/Email");
        }
    }

    public function logout()
    {
        session()->forget("user");
        return redirect(route("login"))->with("success", "Đăng xuất thành công");
    }
    public function user()
    {
        $id = session()->get("user")->id;
        $user = User::find($id);
        return view("auth.user", compact("user"));
    }
    public function changePassword(Request $request)
    {
        $user = User::find(session()->get("user")->id);
        if (!Hash::check($request->old_password, $user->password)) {
            return redirect(route("user.change-pasword"))->with("error", "Mật khẩu cũ không chính xác");
        }
        if ($request->password != $request->repeat_password) {
            return redirect(route("user.change-pasword"))->with("error", "Mật khẩu không trùng khớp");
        }
        $user->password = Hash::make($request->password);
        $user->save();
        return redirect(route("user"))->with("success", "Thay đổi mật khẩu thành công");
    }
    public function update(Request $request)
    {
        $user = User::find(session()->get("user")->id);
        if (!$user)
            return redirect(route("user"))->with("error", "Không tìm thấy người dùng");
        $imageName = self::uploadImage($request, "users", "avatar") != "" ? self::uploadImage($request, "users", "avatar") : $user->avatar;
        $user->update([...$request->all(), "avatar" => $imageName]);
        $user->setAttribute("avatar", $imageName);
        session()->put("user", $user);
        // echo $user;
        return redirect(route("user"))->with("success", "Cập nhật thông tin thành công");
    }
    public function forgotPassword(Request $request){
        $user = User::where("email", $request->email)->orWhere("username", $request->email)->first();
        if(!$user) return back()->with("error", "Không tìm thấy người dùng");
        if(!$request->password) return back()->with("message", "Tìm thấy người dùng");
        $user->update(["password" => Hash::make($request->password)]);
        return back()->with("success", "Đổi mật khẩu thành công");
    }
    public function edit()
    {
        return view("auth.edit");
    }
}