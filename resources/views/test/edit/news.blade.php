@extends('layout.form')
@section('title', $news->title)
@section('php')
    @php
        $roleId = 3;
    @endphp
@endsection
@section('content')
    @include('components.check-user')
    @include('components.message')
    <?php
    require_once base_path('resources/views/test/php-news-variables.php');
    ?>
    <div style="">
        <form action="{{ route('news.update', $news->id) }}" method="post" enctype="multipart/form-data">
            @csrf
            @method('PUT')
            <div style="margin-bottom:12px">
                <label for="departmentId">Bộ phận chịu trách nhiệm</label>
                <select name="departmentId" id="">
                    @foreach ($departments as $department)
                        @if ($news->departmentId == $department->id)
                            <option value="{{ $department->id }}" selected>{{ $department->name }}</option>
                        @else
                            <option value="{{ $department->id }}">{{ $department->name }}</option>
                        @endif
                    @endforeach
                </select>
            </div>
            <div style="margin-bottom:12px">

                <label for="time">Thời gian diễn ra</label>
                <input type="datetime-local" name="time" id="" value="{{ $news->time }}">
            </div>
            <div style="margin-bottom:12px">
                <label for="title">Tiêu đề</label>
                <input type="text" name="title" id="" value="{{ $news->title }}">
            </div>
            <div style="margin-bottom:12px">
                <img src="{{ $news->image }}" alt="">
                <label for="image">Lựa chọn hình ảnh</label>
                <input type="file" name="image" id="">
            </div>
            <div style="margin-bottom:12px">
                <label for="subtitle">Đề mục</label>
                <input type="text" name="subtitle" id="" value="{{ $news->subtitle }}">
            </div>
            <div style="margin-bottom:12px">
                <label for="description">Mô tả</label>
                <a href="{{ route('upload.image') }}" target="_blank">Thêm hình ảnh</a>
                @component('components.richtextbox', [
                    'name' => 'description',
                    'value' => $news->description,
                ])
                @endcomponent
            </div>
            <div style="margin-bottom:12px">
                <label for="category">Phân loại</label>
                @component('components.auto-complete-input', [
                    'name' => 'category',
                    'value' => $news->category,
                    'options' => $newsCategories,
                ])
                @endcomponent
            </div>
            <div style="margin-bottom:12px">
                <label for="type">Loại</label>
                <select name="type" id="" onchange="updateTypeHandle(event)">
                    <option value="">--Loại--</option>
                    <option value="THÔNG CÁO BÁO CHÍ" {{ $news->type == 'THÔNG CÁO BÁO CHÍ' ? 'selected' : '' }}>THÔNG CÁO
                        BÁO CHÍ
                    </option>
                    <option {{ $news->type == 'TIN SẢN PHẨM' ? 'selected' : '' }} value="TIN SẢN PHẨM">TIN SẢN PHẨM
                    </option>
                    <option value="TIN DOANH NGHIỆP" {{ $news->type == 'TIN DOANH NGHIỆP' ? 'selected' : '' }}>TIN DOANH
                        NGHIỆP
                    </option>
                    <input type="text" name="type" id="" placeholder="Loại khác: Nhập vào đây"
                        value="{{ $news->type }}" />
                </select>
            </div>
            <div style="margin-bottom:12px">
                <label for="parent">Đường link</label>
                <input type="text" name="parent" id="" value="{{ $news->parent }}">
            </div>
            <button type="submit">Lưu</button>
        </form>
        @component('components.demo', [
            'id' => 'frame',
            'route' => '/noi-dung-tin-tuc/' . $news->id,
        ])
        @endcomponent
    </div>
    <script>
        const types = {
            "THÔNG CÁO BÁO CHÍ": 22,
            "TIN SẢN PHẨM": 0,
            "TIN DOANH NGHIỆP": 23,
        };
        const decodedType = {
            "THÔNG CÁO BÁO CHÍ": "thong-cao-bao-chi",
            "TIN SẢN PHẨM": "tin-san-pham",
            "TIN DOANH NGHIỆP": "tin-doanh-nghiep",
        };
    </script>
    <script>
        const updateTypeHandle = e => {
            document.querySelector("input[name='type']").value = e.target.value; //set the side value
            document.querySelector("input[name='parent']").value = decodedType[e.target.value]; //set the link value
            document.querySelector("#frame").src = "https://thanhcoffee.com/noi-dung-tin-tuc/" + types[e.target.value];
        }
    </script>
@endsection
