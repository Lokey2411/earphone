@extends('layout.form')
@section('title', 'Thêm mới người dùng')
@section('php')
    @php
        $roleId = 7;
    @endphp
@endsection
@section('content')
    @include('components.check-user')
    @include('components.message')
    <form action="{{ route('users.store') }}" method="post" enctype="multipart/form-data">
        @csrf
        <div style="margin-bottom:12px">
            <label for="username">Tên đăng nhập</label>
            <input type="text" name="username" id="">
        </div>
        <div style="margin-bottom: 12px">
            <label for="email">Email</label>
            <input type="email" name="email" id="">
        </div>
        <div style="margin-bottom: 12px">
            <label for="address">Địa chỉ</label>
            <input type="text" name="address" id="">
        </div>
        <div style="margin-bottom: 12px">
            <label for="phone_number">Số điện thoại</label>
            <input type="text" name="phone_number" id="">
        </div>
        <div>
            <img src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
                alt="" id="preview" style="width:100px; height:100px; border-radius: 50%;">
        </div>
        <div>
            <label for="avatar">Lựa chọn ảnh đại diện</label>
            <input type="file" name="avatar" id="" accept="image/*" onchange="previewImage(event)">
        </div>
        <div style="margin-bottom: 12px" id="roles">
            <label for="role[]">
                <h1>Phân quyền người dùng</h1>
            </label>
            <div>
                <button onclick="addRole(event)">Thêm quyền</button>
            </div>
            <select name="role[0]" id="select-role">
                <option value="0">__Chọn vai trò__</option>
                @foreach ($roles as $role)
                    <option value="{{ $role->id }}">{{ $role->role }}</option>
                @endforeach
            </select>
        </div>
        <div style="margin-bottom: 12px">
            <label for="password">Mật khẩu</label>

            <input type="password" name="password" id="">
            <div class="d-flex align-items-center">
                <input type="checkbox" name="showPassword" id="showPassword">
                <label for="showPassword">Hiện mật khẩu</label>
            </div>
        </div>
        <button type="submit">Thêm</button>
    </form>
    <script>
        const showPassword = document.querySelector('#showPassword');
        const password = document.querySelector('input[name="password"]');
        showPassword.addEventListener('change', (event) => {
            if (event.target.checked) {
                password.setAttribute('type', 'text');
            } else {
                password.setAttribute('type', 'password');
            }
        });
        const previewImage = (event) => {
            const image = document.querySelector('#preview');
            image.src = URL.createObjectURL(event.target.files[0]);
        }
    </script>
    @component('components.user-script', ['numRole' => 0])
    @endcomponent
@endsection
