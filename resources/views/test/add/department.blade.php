@extends('layout.form')
@section('php')
    @php
        $roleId = 1;
    @endphp
@endsection
@section('title', 'Thêm bộ phận')
@section('content')
    @include('components.check-user')
    @include('components.message')
    <?php
    require_once base_path('resources/views/test/php-department-variables.php');
    ?>

    <form action="{{ route('departments.store') }}" method="post" enctype="multipart/form-data">
        @csrf
        <div style="margin-bottom:12px">
            <label for="ownerId">Người sở hữu</label>
            <select name="ownerId" id="">
                @foreach ($users as $user)
                    <option value="{{ $user->id }}">{{ $user->username }}</option>
                @endforeach
            </select>
        </div>
        <div style="margin-bottom: 12px">
            <label for="type">Kiểu bộ phận: </label>
            @component('components.auto-complete-input', [
                'name' => 'type',
                'options' => $types,
            ])
            @endcomponent
        </div>
        <div style="margin-bottom: 12px">
            <label for="parentDepartmentId">Bộ phận cha</label>
            <select name="parentDepartmentId" id="">
                @foreach ($departments as $department)
                    <option value="{{ $department->id }}">{{ $department->name }}</option>
                @endforeach
            </select>
        </div>
        <div style="margin-bottom: 12px">
            <label for="name">Tên</label>
            <input type="text" name="name" id="">
        </div>
        <div style="margin-bottom: 12px">
            <label for="address">Địa chỉ:</label>
            <input type="text" name="address" id="">
        </div>
        <div style="margin-bottom: 12px">
            <label for="openTime">Thời gian mở cửa:</label>
            <input type="time" name="openTime" id="">
        </div>
        <div style="margin-bottom: 12px">
            <label for="closeTime">Thời gian đóng cửa:</label>
            <input type="time" name="closeTime" id="">
        </div>
        <div style="margin-bottom: 12px">
            <label for="image">Lựa chọn hình ảnh :</label>
            <input type="file" name="image" id="">
        </div>
        <button type="submit">Thêm</button>
    </form>
@endsection
