@extends('components.layout')
@section('php')
    @php
        $roleId = 7;
    @endphp
@endsection
@section('title', 'Danh sách Người dùng')
@section('add-link', route('add.user'))
@section('style')
    <style>
        td {
            vertical-align: middle;
            text-align: center;
            font-size: 18px;
            font-weight: 700;
        }
    </style>
@endsection
@section('table')
    <table class="table table-striped table-sm">
        <thead>
            <tr>
                <th>ID</th>
                <th>Tên đăng nhập</th>
                <th>Email</th>
                <th>Địa chỉ</th>
                <th>Số điện thoại</th>
                <th style="width:150px">Thao tác</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($users as $user)
                <tr class="
                    @if ($user['id'] == session()->get('user')['id']) table-info @endif
                ">
                    <td>{{ $user['id'] }}</td>
                    <td>{{ $user['username'] }}</td>
                    <td>{{ $user['email'] }}</td>
                    <td>{{ $user['address'] }}</td>
                    <td>{{ $user['phone_number'] }}</td>
                    <td colspan="2" style="max-width: 100px; width:100px">
                        <a href="{{ route('users.show', $user['id']) }}" class="btn btn-primary btn-hover">Sửa</a>
                        <button class="btn btn-danger" onclick="showConfirmModel({{ $user['id'] }})">Xóa</button>
                        @component('components.delete-confirm', [
                            'confirmId' => $user['id'],
                            'confirmMessage' => 'Bạn có muốn xóa bộ phận này?',
                            'confirmAction' => route('users.destroy', $user['id']),
                        ])
                        @endcomponent
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>
    {{-- {{ $users->links('components.pagination') }} --}}

@endsection
