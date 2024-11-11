@php
    require_once base_path('resources/views/test/php-jobs-variables.php');
@endphp
@extends('layout.form')
@section('php')
    @php
        $roleId = 4;
    @endphp
@endsection
@section('title', $job->position)
@section('content')
    @include('components.check-user')
    @include('components.message')
    <form action="{{ route('jobs.update', $job->id) }}" method="post" enctype="multipart/form-data">
        @csrf
        @method('PUT')
        <div style="margin-bottom:12px">
            <label for="type">Loại Công việc: </label>
            @component('components.auto-complete-input', [
                'name' => 'type',
                'options' => $types,
                'value' => $job->type,
            ])
            @endcomponent
            {{-- <input type="text" name="type" id="" placeholder="Loại khác: Nhập vào đây"> --}}
        </div>
        <div style="margin-bottom: 12px">
            <label for="departmentId">Bộ phận sở hữu</label>
            <select name="departmentId" id="">
                @foreach ($departments as $department)
                    <option value="{{ $department->id }}" {{ $department->id == $job->departmentId ? 'selected' : '' }}>
                        {{ $department->name }}</option>
                @endforeach
            </select>
        </div>
        <div style="margin-bottom: 12px">
            <label for="description">Mô tả ngắn: </label>
            <input type="text" name="description" id="" value="{{ $job->description }}">
            {{-- <input type="text" name="type" id="" placeholder="Kiểu khác: Nhập vào đây"> --}}
        </div>
        <div style="margin-bottom: 12px">
            <label for="salary">Lương:</label>
            <input type="text" name="salary" id="" value="{{ $job->salary }}">
        </div>
        <div style="margin-bottom: 12px">
            <label for="position">Vị trí:</label><input type="text" name="position" id=""
                value="{{ $job->position }}">
        </div>
        <div style="margin-bottom: 12px">
            <img src="{{ $job->image }}" alt="">
            <label for="image">Lựa chọn hình ảnh:</label><input type="file" name="image" id="">
        </div>
        <label for="benefits">
            <h1>Quyền lợi</h1>
        </label>
        <div style="margin-left: 12px">
            @component('components.richtextbox', [
                'name' => 'benefits',
                'value' => $job->benefits,
                'path' => 'jobs',
            ])
            @endcomponent
        </div>
        <label for="missions">
            <h1>Nhiệm vụ chính: </h1>
        </label>
        <div style="margin-left: 12px">
            @component('components.richtextbox', [
                'name' => 'missions',
                'value' => $job->missions,
                'path' => 'jobs',
            ])
            @endcomponent
        </div>
        <label for="requrements">
            <h1>Yêu cầu công việc: </h1>
        </label>
        <div style="margin-left: 12px">
            @component('components.richtextbox', [
                'name' => 'requirements',
                'value' => $job->requirements,
                'path' => 'jobs',
            ])
            @endcomponent
        </div>
        <button type="submit">Lưu</button>
    </form>
@endsection
