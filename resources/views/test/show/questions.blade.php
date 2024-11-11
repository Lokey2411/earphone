@extends('components.layout')
@section('php')
    @php
        $roleId = 5;
    @endphp
@endsection
@section('title', 'Danh sách câu hỏi')
@section('add-link', route('add.question'))
@section('table')
    @if (isset($_GET['page']))
        @php
            $questions = $questions[$_GET['page']];
        @endphp
        <table class="table table-striped table-sm">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Tiêu đề</th>
                    <th>Câu Trả lời</th>
                    <th>Đường link hiển thị</th>
                    <th>Thắc mắc chung</th>
                    <th scope="col">Thao tác</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($questions as $question)
                    <tr>
                        <td>{{ $question->id }}</td>
                        <td>{{ $question->title }}</td>
                        <td style="width: 300px">{{ Str::limit($question->answer, 100, '...') }}</td>
                        <td>https://thanhcoffee.com/{{ $question->type }}</td>
                        <td>{{ $question->parentQuestion->title ?? 'N/A' }}</td>
                        <td colspan="2">
                            <a href="{{ route('edit.question', $question->id) }}" class="btn btn-primary btn-hover">Sửa</a>
                            <button class="btn btn-danger" onclick="showConfirmModel({{ $question->id }})">Xóa</button>
                            {{-- delete model --}}
                            @component('components.delete-confirm', [
                                'confirmId' => $question->id,
                                'confirmMessage' => 'Bạn có muốn xóa bộ phận này?',
                                'confirmAction' => route('questions.destroy', $question->id),
                            ])
                            @endcomponent
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    @else
        <div class="tw-grid tw-grid-cols-3 tw-gap-4 tw-p-2">
            @php
                $keys = [];
                foreach ($questions as $key => $value) {
                    $keys[] = $key;
                }
            @endphp
            @foreach ($keys as $index => $key)
                @php
                    $backgroundColor = '#' . str_pad(dechex(mt_rand(0, 0xffffff)), 6, '0', STR_PAD_LEFT);

                @endphp
                <a href="?page={{ $key }}" class="tw-block tw-resize-x">
                    <div class="tw-rounded-md tw-px-2 tw-py-3 tw-overflow-hidden tw-relative tw-h-20 tw-cursor-pointer tw-flex tw-justify-center tw-items-start"
                        style="background-color:{{ $backgroundColor }}">
                        <p class="tw-text-xl tw-font-bold tw-w-full tw-overflow-hidden tw-text-white tw-z-10">
                            https://thanhcoffee.com/{{ $key }}</p>
                        <div
                            class="tw-absolute tw-top-0 tw-bottom-0 tw-left-0 tw-right-0 tw-inset-0 tw-bg-black tw-opacity-40">
                        </div>
                        <p class="tw-text-3xl tw-font-bold tw-text-right tw-text-white tw-absolute tw-right-2 tw-bottom-2">
                            {{ $questions[$key]->count() }}</p>
                    </div>
                </a>
            @endforeach
        </div>
        <p class="tw-text-gray-300 tw-italic tw-text-xl">Note: Số hiển thị phía dưới là những câu hỏi đã được thêm
            vào</p>
    @endif
@endsection
