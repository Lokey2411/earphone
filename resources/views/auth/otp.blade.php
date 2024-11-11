<!DOCTYPE html>
<html lang="en">

@php
    $user = session()->get('user');
@endphp

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    @include('components.react.react-cdn')
    @include('components.script.tailwind-cdn')
    @include('components.script.emailjs')
    <script type="text/javascript">
        (function() {
            emailjs.init({
                publicKey: "9Pdc7V92NZ1s4M3dO",
            });
        })();
    </script>
    <script>
        function sendOtp(e) {
            e.preventDefault();
            const user = @json($user);
            fetch("{{ route('auth.otp.post') }}", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user,
                    otp: document.getElementById('otp').value,
                    _token: "{{ csrf_token() }}"
                })
            }).then(res => {
                console.log(res);
                return res.json();
            }).then(data => {
                console.log(data);
                if (data.success) {
                    window.location.href = "{{ route('show.departments') }}";
                } else {
                    alert(data.message);
                }
            }).catch(console.log)
        }
    </script>
</head>

<body>
    @component('components.check-user')
    @endcomponent
    <div class="bg-gray-50 h-screen flex flex-column justify-center items-center">
        <div class="bg-white rounded-lg p-4">
            <form action="{{ route('auth.otp.post') }}" method="post" onsubmit="sendOtp(event)">
                @csrf
                <div class="flex flex-col mb-4">
                    <label for="otp" class="text-lg mb-2">OTP: </label>
                    <input type="text" name="otp" id="otp" class="border border-gray-400 p-2 rounded-lg">
                </div>
                <div id="root"></div>
                <button type="submit" class="bg-blue-500 text-white p-2 rounded-lg">Xác nhận</button>
            </form>
        </div>
    </div>
    @component('components.react.GetOTPButton')
    @endcomponent
    <script type="text/babel">
    

    // Render the component to the DOM
    ReactDOM.render(
        <GetOtpButton />,
        document.getElementById("root")
    );
    </script>
</body>

</html>
