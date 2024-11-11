<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Thông tin người dùng</title>
    @include('components.script.tailwind-cdn')
</head>

<body>
    @include('components.check-user')
    @include('components.message')
    <div class="flex flex-col justify-center items-center h-screen bg-gray-200 overflow-auto">
        <h1 class="text-4xl font-bold mb-4">Chỉnh sửa thông tin</h1>
        <form action="{{ route('user.edit.post') }}" method="POST" class="overflow-auto w-full p-6 flex flex-col"
            enctype="multipart/form-data">
            @csrf
            <div class="flex w-full">
                <div class="flex flex-col mb-4 flex-1 mr-4">
                    <label for="username" class="text-lg mb-2">Tên đăng nhập: </label>
                    <input type="text" name="username" id="username" class="border border-gray-400 p-2 rounded-lg"
                        value="{{ $user->username }}">
                </div>
                <div class="flex flex-col mb-4 flex-1">
                    <label for="email" class="text-lg mb-2">Email: </label>
                    <input type="text" name="email" id="email" class="border border-gray-400 p-2 rounded-lg"
                        value="{{ $user->email }}">
                </div>
            </div>
            <div class="flex w-full">

                <div class="flex flex-col mb-4 flex-1 mr-4">
                    <label for="address" class="text-lg mb-2">Địa chỉ: </label>
                    <input type="text" name="address" id="address" class="border border-gray-400 p-2 rounded-lg"
                        value="{{ $user->address }}">
                </div>
                <div class="flex flex-col mb-4 flex-1">
                    <label for="phone_number" class="text-lg mb-2">Sdt: </label>
                    <input type="text" name="phone_number" id="phone_number"
                        class="border border-gray-400 p-2 rounded-lg" value="{{ $user->phone_number }}">
                </div>
            </div>
            <div class="flex flex-col mb-4">
                <img src="{{ $user->avatar ?? 'https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg' }}"
                    alt="" class="w-[180px] h-[180px] rounded-full">
                <label for="avatar" class="text-lg mb-2">Chỉnh sửa ảnh đại diện: </label>
                <input type="file" name="avatar" id="avatar" class="border border-gray-400 p-2 rounded-lg">
            </div>
            <button type="submit" class="bg-blue-500 text-white p-2 rounded-lg m-auto w-[360px]">Lưu</button>
        </form>
    </div>
</body>

</html>
