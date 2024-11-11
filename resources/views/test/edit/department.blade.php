@extends('layout.form')
@section('php')
    @php
        $roleId = 1;
    @endphp
@endsection
@section('title', $department->name)
@section('content')
    @if (isset($department))
        <?php
        require_once base_path('resources/views/test/php-department-variables.php');
        ?>

        @include('components.check-user')
        @include('components.message')
        <form action="{{ route('departments.update', $department->id) }}" method="post" enctype="multipart/form-data">
            @csrf
            @method('PUT')
            <div style="margin-bottom:12px">
                <label for="ownerId">Người sở hữu</label>
                <select name="ownerId" id="">
                    @foreach ($users as $user)
                        @if ($user->id == $department->ownerId)
                            <option value="{{ $user->id }}" selected>{{ $user->username }}</option>
                        @else
                            <option value="{{ $user->id }}">{{ $user->username }}</option>
                        @endif
                    @endforeach
                </select>
            </div>
            <div style="margin-bottom: 12px">
                <label for="type">Kiểu bộ phận: </label>
                @component('components.auto-complete-input', [
                    'name' => 'type',
                    'options' => $types,
                    'value' => $department->type,
                ])
                @endcomponent
            </div>
            <div style="margin-bottom: 12px">
                <label for="parentDepartmentId">Bộ phận cha</label>
                <select name="parentDepartmentId" id="">
                    @foreach ($departments as $d)
                        @if ($d->id == $department->parentDepartmentId)
                            <option value="{{ $d->id }}" selected>{{ $d->name }}</option>
                        @else
                            <option value="{{ $d->id }}">{{ $d->name }}</option>
                        @endif
                    @endforeach
                </select>
            </div>
            <div style="margin-bottom: 12px">
                <label for="name">Tên</label>
                <input type="text" name="name" id="" value="{{ $department->name }}">
            </div>
            <div style="margin-bottom: 12px">
                <label for="address">Địa chỉ:</label>
                <input type="text" name="address" id="" value="{{ $department->address }}">
            </div>
            <div style="margin-bottom: 12px">
                <label for="openTime">Thời gian mở cửa:</label>
                <input type="time" name="openTime" id="" value="{{ $department->openTime }}">
            </div>
            <div style="margin-bottom: 12px">
                <label for="closeTime">Thời gian đóng cửa:</label>
                <input type="time" name="closeTime" id="" value="{{ $department->closeTime }}">
            </div>
            <div style="margin-bottom: 12px">
                <img src="{{ $department->image }}" alt="">
                <label for="image">Lựa chọn hình ảnh:</label>
                <input type="file" name="image" id="">
            </div>
            <button type="submit">Lưu</button>
        </form>
    @else
        <div>Không tìm thấy bộ phận</div>
    @endif
@endsection
