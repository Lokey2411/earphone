<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Quên mật khẩu</title>
    @include('components.react.react-cdn')
    @include('components.script.tailwind-cdn')
    @include('components.script.emailjs')

    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: "#006241",
                    },
                }
            },
        }
    </script>
</head>

<body>
    <div class="bg-gray-50 h-screen flex items-center justify-center overflow-auto">
        <form action="{{ route('forgot-password.post') }}" class="bg-white rounded-lg flex flex-col p-4" method="POST">
            @csrf
            <div class="flex flex-col mb-4 gap-2">
                @if (session()->has('message'))
                    @php
                        $message = session()->get('message');
                    @endphp
                    @if ($message == 'Tìm thấy người dùng')
                        <label for="password">Nhập mật khẩu</label>
                        <input type="pasword" name="password" id="password" class="border p-2 rounded-md">
                    @else
                        <p class="bg-red-300 w-full text-white rounded-md">{{ $message }}</p>
                    @endif
                @else
                    <label for="email" class="text-lg mb-2">Email hoặc tên người dùng: </label>
                    <input type="text" name="email" id="email" class="border border-gray-400 p-2 rounded-lg">
                @endif
            </div>
            <div id="root"></div>
            <div class="flex md:flex-row sm:flex-col items-center justify-end gap-3 mt-2">
                <button type="submit" class="bg-primary text-white px-4 py-1 rounded">Gửi</button>
            </div>
    </div>
    <button type="submit" class="bg-blue-500 text-white p-2 rounded-lg">Gửi</button>
    </form>
    </div>
    @component('components.react.GetOTPButton')
    @endcomponent
    <script type="text/babel">
    // Render the component to the DOM
    ReactDOM.render(
        <GetOtpButton />,
        document.getElementById("root")
    )
    </script>
</body>

</html>
