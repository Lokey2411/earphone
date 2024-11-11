@if (!session()->has('user'))
    @php
        session()->put('url', $_SERVER['REQUEST_URI']);
    @endphp
    <script>
        window.location.href = "{{ route('login') }}"
    </script>
@endif
