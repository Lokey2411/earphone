@extends('components.layout')
@section('php')
    @php
        $roleId = 4;
    @endphp
@endsection
@section('title', 'Danh sách công việc')
@section('add-link', route('add.job'))
@section('table')
    <table class="table table-striped table-sm">
        <thead>
            <tr>
                <th>ID</th>
                <th>Bộ phận</th>
                <th>Loại</th>
                <th style="resize: horizontal;" scope="col">Mô tả ngắn</th>
                <th>Lương</th>
                <th>Vị trí</th>
                <th scope="col">Thao tác</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($jobs as $job)
                <tr>
                    <td>{{ $job->id }}</td>
                    <td>{{ $job->department->name }}</td>
                    <td>{{ $job->type }}</td>
                    <td>{{ $job->description }}</td>
                    <td>{{ $job->salary }}</td>
                    <td>{{ $job->position }}</td>
                    <td colspan="2">
                        <a href="{{ route('edit.job', $job->id) }}" class="btn btn-primary btn-hover">Sửa</a>
                        <button class="btn btn-danger" onclick="showConfirmModel({{ $job->id }})">Xóa</button>
                        {{-- delete model --}}
                        @component('components.delete-confirm', [
                            'confirmId' => $job->id,
                            'confirmMessage' => 'Bạn có muốn xóa công việc này?',
                            'confirmAction' => route('jobs.destroy', $job->id),
                        ])
                        @endcomponent
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>
    {{-- {{ $jobs->links('components.pagination') }} --}}

@endsection
