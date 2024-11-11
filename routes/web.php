<?php

use App\Http\Controllers\AuthManager;
use App\Http\Controllers\Controller;
use App\Http\Controllers\UserController;
use App\Http\Middleware\Cors;
use App\Models\Job;
use App\Models\Product;
use App\Models\ProductList;
use App\Models\Question;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;

function getData($url){
    // Khởi tạo cURL
    $ch = curl_init($url);
    $data = null;

    // Thiết lập các tùy chọn cURL
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); // Để nhận kết quả trả về dưới dạng chuỗi
    curl_setopt($ch, CURLOPT_HTTPGET, true); // Thiết lập phương thức GET (mặc định)

    // Thực hiện yêu cầu và lấy kết quả
    $response = curl_exec($ch);

    // Kiểm tra lỗi
    if (curl_errno($ch)) {
        echo 'Lỗi cURL: ' . curl_error($ch);
    } else {
        // Giải mã JSON
        $data = json_decode($response, true);
        // print_r($data); // Hoặc xử lý dữ liệu theo ý bạn
    }

    // Đóng cURL
    curl_close($ch);
    return $data;
}

function deleteData($url) {
// Khởi tạo cURL
$ch = curl_init($url);

// Thiết lập các tùy chọn cURL
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); // Nhận kết quả trả về dưới dạng chuỗi
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "DELETE"); // Thiết lập phương thức DELETE

// Thực hiện yêu cầu và lấy kết quả
$response = curl_exec($ch);

// Kiểm tra lỗi
if (curl_errno($ch)) {
echo 'Lỗi cURL: ' . curl_error($ch);
} else {
$result = json_decode($response, true); // Giải mã JSON nếu API trả về JSON
return $result; // Trả về kết quả để sử dụng
}

// Đóng cURL
curl_close($ch);
return null;
}

Route::get("/users/{id}", function ($id) {
    $data = getData("http://localhost:8000/api/users/".$id);
    $user = User::hydrate($data)->first();
    return view("test.edit.user", compact("user"));
})->name("users.show");
Route::get("/users/{id}/edit", function ($id) {
$data = getData("http://localhost:8000/api/users/" . $id);
if (!isset($data['id'])) {
$data['id'] = $id; // Gán id từ URL nếu cần
}
$user = User::hydrate($data)->first();
return view("test.edit.edit-user", compact("user"));
})->name("users.edit");


Route::delete("/users/{id}/destroy", function ($id) {
    $response = deleteData("http://localhost:8000/api/users/".$id);
    return $response;
})->name("users.destroy");

Route::get('/', function () {
    return view('auth.login');
})->name("login");


Route::get("/otp", function () {
    return view("auth.otp");
})->name("auth.otp");

Route::post("/otp/send", [AuthManager::class, "sendOTP"])->name("auth.getOtp.post");
Route::get("/otp/send/get", [AuthManager::class, "sendOTP"])->name("auth.getOtp.post");
Route::post("/otp/verify", [AuthManager::class, "verifyOTP"])->name("auth.otp.post");

// test view
$files = File::allFiles(resource_path('views/test'));

foreach ($files as $file) {
    $name = str_replace('.blade.php', '', $file->getRelativePathname());
    $url = str_replace(DIRECTORY_SEPARATOR, '/', $name);
    $name = str_replace(DIRECTORY_SEPARATOR, '.', $name);
    if (str_starts_with($name, "edit"))
        continue;
    Route::get('/test/' . $url, function () use ($name) {
        // variables
        $numPerPage = 10;
        $usersData = getData("http://localhost:8000/api/users");
        $productsData = getData("http://localhost:8000/api/products");
        $jobsData = getData("http://localhost:8000/api/jobs");
        $questionsData = getData("http://localhost:8000/api/questions");
        $productListsData = getData("http://localhost:8000/api/product-lists");
        $users = User::hydrate($usersData);
        $products = Product::hydrate($productsData);
        $jobs = Job::hydrate($jobsData);
        $questions = Question::hydrate($questionsData);
        $productLists = ProductList::hydrate($productListsData);

        return view("test." . $name, compact("users","products","jobs","questions","productLists"));
    })->name($name);
}
// Auth Manager
Route::post("/login", [App\Http\Controllers\AuthManager::class, "login"])->name("login.post");
Route::post("/logout", [App\Http\Controllers\AuthManager::class, "logout"])->name("logout");
Route::get("/user", [App\Http\Controllers\AuthManager::class, "user"])->name("user");
Route::get("/user/edit", [App\Http\Controllers\AuthManager::class, "edit"])->name("user.edit");
Route::post("/user/edit/post", [App\Http\Controllers\AuthManager::class, "update"])->name("user.edit.post");
Route::post("/change-password", [App\Http\Controllers\AuthManager::class, "changePassword"])->name("user.change-password.post");
Route::post("/forgot-password/post", [App\Http\Controllers\AuthManager::class, "forgotPassword"])->name("forgot-password.post");
Route::get("/change-password", function () {
    return view("auth.change-password");
})->name("user.change-pasword");
Route::get("forgot-password", function () {
    return view("auth.forgot-password");
})->name("forgot-password");

// Route::post("/upload-cv", [AddController::class, "uploadCV"])->middleware("web");
Route::get("/test-upload-cv", function () {
    return view("test-upload-cv");
});
Route::get('/csrf-token', function () {
    return response()->json(['csrf_token' => csrf_token()]);
});
Route::get("/upload/image", function () {
    return view("test.upload");
})->name("upload.image");
