@extends('layout.form')
@section('php')
    @php
        $roleId = 5;
    @endphp
@endsection
@section('title', $question->title)
@section('content')
    @include('components.check-user')
    @include('components.message')
    <?php
    $types = [['id' => '', 'displayText' => '__Chọn Trang__'], ['id' => 'https://thanhcoffee.com/', 'displayText' => 'Trang chủ'], ['id' => 'https://thanhcoffee.com/tuyen-dung', 'displayText' => 'Tuyển dụng'], ['id' => 'https://thanhcoffee.com/lien-he', 'displayText' => 'Liên hệ với chúng tôi']];
    ?>
    <form action="{{ route('questions.update', $question->id) }}" method="post" enctype="multipart/form-data">
        @csrf
        @method('put')
        <div style="margin-bottom:12px">
            <label for="title">Tiêu đề</label>
            <input type="text" name="title" id="" value="{{ $question->title }}">
        </div>
        <div style="margin-bottom: 12px">
            <label for="answer">Câu trả lời</label>
            @component('components.richtextbox', [
                'name' => 'answer',
                'value' => $question->answer,
                'path' => 'questions',
            ])
            @endcomponent
        </div>
        <div style="margin-bottom: 12px">
            <label for="type">Nằm ở</label>
            @component('components.auto-complete-input', [
                'name' => 'type',
                'options' => $types,
                'value' => 'https://thanhcoffee.com/' . $question->type,
            ])
            @endcomponent
        </div>
        <div style="margin-bottom: 12px">
            <label for="parentQuestionId">Thắc mắc chung</label>
            <select name="parentQuestionId" id="">
                <option value="">__Chọn câu hỏi__</option>
                @foreach ($questions as $question)
                    <option value="{{ $question->id }}"
                        {{ $question->id == $question->parentQuestionId ? 'selected' : '' }}>{{ $question->title }}</option>
                @endforeach
            </select>
        </div>
        <button type="submit">Lưu</button>
    </form>
@endsection
