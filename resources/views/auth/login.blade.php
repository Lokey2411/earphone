<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Đăng nhập</title>
    @include('components.script.tailwind-cdn')
</head>

<body>
    @include('components.message')
    @if (session()->has('user'))
        <!-- authorized -->
        <script>
            window.location.href = "{{ session()->get('url') ?? route('show.users') }}"
        </script>
    @endif
    <div class="flex flex-col justify-center items-center h-screen bg-gray-200">
        <h1 class="text-4xl font-bold mb-4">Đăng nhập</h1>
        <form action="{{ route('login.post') }}" method="POST" class="shadow-lg p-4 rounded-lg bg-white">
            @csrf
            <div class="flex flex-col mb-4">
                <label for="username" class="text-lg mb-2">Tên đăng nhập hoặc email: </label>
                <input type="username" name="username" id="username" class="border border-gray-400 p-2 rounded-lg">
            </div>
            <div class="flex flex-col mb-4">
                <label for="password" class="text-lg mb-2">Mật khẩu: </label>
                <input type="password" name="password" id="password" class="border border-gray-400 p-2 rounded-lg">
            </div>
            <div class="flex justify-between mb-4 items-center gap-3">
                <button type="submit" class="bg-blue-500 text-white p-2 rounded-lg">Đăng nhập</button>
                {{-- <a href="{{ route("forgot-password") }}" class="text-blue-500 underline hover:text-blue-700">Bạn quên mật khẩu?</a> --}}
            </div>
        </form>
    </div>
</body>

</html>
