<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User as Model;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    //
    private function validate(Request $request)
    {
        $request->validate([
            "username" => "required",
            "email" => "required|email",
            'phone_number' => [
                'required',
                'regex:/^(0|\+84)(3[2-9]|5[6|8|9]|7[0|6-9]|8[1-5]|9[0-9])[0-9]{7}$/',
            ],
            "password" => "required"
        ]);
    }
    public function store(Request $request)
    {
        self::validate($request);
        $user = Model::where(column: "username", $request->username)->orWhere("email", $request->email)->first();
        if ($user)
            return response()->json(["error" => "Tài khoản đã tồn tại"], 400);
        $user = Model::create(
            [
                "username" => $request->username,
                "email" => $request->email,
                "phone_number" => $request->phone_number,
                "address" => $request->address,
                "password" => Hash::make($request->password),
                "avatar" => self::uploadImage($request, "users", "avatar") ?? "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            ],
        );

        foreach ($request->role as $role) {
            DB::insert("INSERT INTO user_roles (userId, role) VALUES (?, ?)", [$user->id, $role]);
        }
        return response()->json(["success" => "Thêm mới thành công", "data" => $request->all(), "roles" => $user->roles], 200);
        // return response()->json(["success" => "Thêm mới thành công", "data" => $request->all()], 200);
    }
    public function edit($id)
    {
        $user = Model::find($id);
        if (!$user)
            return response()->json(["error" => "Không tìm thấy người dùng"], 400);
        return response()->view("test.edit.edit-user", compact("user"));
    }
    public function show($id)
    {
        $user = Model::find($id);
        if (!$user)
            return response()->json(["error" => "Không tìm thấy người dùng"], 400);
        return response()->view("test.edit.user", compact("user"));
    }
    public function update(Request $request, $id)
    {
        $user = Model::find($id);
        $data = [
            "username" => $request->username,
            "email" => $request->email,
            "phone_number" => $request->phone_number,
            "address" => $request->address,
            "avatar" => self::uploadImage($request, "users", "avatar") ?? $user->avatar
        ];
        $user->update($data);
        if (!$user)
            return response(["error" => "Cập nhật thát bị"], 400);
        return response()->json(["success" => "Cập nhật thành công", "data" => $request->all()], 200);
    }
    public function changePassword(Request $request, $id)
    {
        $user = Model::find($id);
        // return response()->json(["success" => "Thay đổi thành công", "data" => $request->all()], 200);
        if (!$user)
            return redirect()->back()->with("error", "Không tìm thấy người dùng");
        if (Hash::check($request->old_password, $user->password)) {
            $user->update(["password" => Hash::make($request->password)]);
        } else
            return redirect()->back()->with("error", "Mật khẩu hiện tại không đúng");
        if ($request->password != $request->repeat_password) {
            return redirect()->back()->with("error", "Mật khẩu không khớp");
        }
        return redirect()->back()->with("success", "Thay đổi mật khẩun thành công");
    }
    public function showChangePassword($id)
    {
        $user = Model::find($id);
        if (!$user)
            return response(["error" => "Không tìm thấy người dùng"], 400);
        return response()->view("test.edit.change-password", compact("user"));
    }
    public function destroy($id)
    {
        $user = Model::find($id);
        $user->delete();
        return response()->json(["success" => "Xóa thành công"], 200);
    }
}
