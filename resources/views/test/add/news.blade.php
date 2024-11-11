@php
    // $demo = array_search(22, $news->data)
    $demo = $news[0];
@endphp
@extends('layout.form')
@section('php')
    @php
        $roleId = 3;
    @endphp
@endsection
@section('title', 'Thêm mới tin tức')
@section('content')
    @include('components.check-user')
    @include('components.message')
    <?php
    require_once base_path('resources/views/test/php-news-variables.php');
    ?>
    <div>
        <form action="{{ route('news.store') }}" method="post" enctype="multipart/form-data">
            @csrf
            <div style="margin-bottom:12px">

                <label for="departmentId">Bộ phận chịu trách nhiệm</label>
                <select name="departmentId" id="">
                    @foreach ($departments as $department)
                        <option value="{{ $department->id }}">{{ $department->name }}</option>
                    @endforeach
                </select>
            </div>
            <div style="margin-bottom:12px">

                <label for="time">Thời gian diễn ra</label>
                <input type="datetime-local" name="time" id="">
            </div>
            <div style="margin-bottom:12px">
                <label for="title">Tiêu đề</label>
                <input type="text" name="title" id="">
            </div>
            <div style="margin-bottom:12px">
                <label for="image">Lựa chọn hình ảnh</label>
                <input type="file" name="image" id="">
            </div>
            <div style="margin-bottom:12px">
                <label for="subtitle">Đề mục</label>
                <input type="text" name="subtitle" id="">
            </div>
            <div style="margin-bottom:12px">
                <label for="description">Mô tả</label>
                <a href="{{ route('upload.image') }}" target="_blank">Thêm hình ảnh</a>
                @component('components.richtextbox', ['name' => 'description', 'path' => 'news'])
                @endcomponent
            </div>
            <div style="margin-bottom:12px">
                <label for="category">Mô tả</label>
                @component('components.auto-complete-input', ['name' => 'category', 'options' => $newsCategories])
                @endcomponent
            </div>
            <div style="margin-bottom:12px">
                <label for="type">Loại</label>
                <select name="type" id="" onchange="updateTypeHandle(event)">
                    <option value="">--Loại--</option>
                    <option value="THÔNG CÁO BÁO CHÍ">THÔNG CÁO BÁO CHÍ</option>
                    <option value="TIN SẢN PHẨM">TIN SẢN PHẨM</option>
                    <option value="TIN DOANH NGHIỆP">TIN DOANH NGHIỆP</option>
                    <input type="text" name="type" id="" placeholder="Loại khác: Nhập vào đây" />
                </select>
            </div>
            <div style="margin-bottom:12px">
                <label for="parent">Đường link</label>
                <input type="text" name="parent" id="">
            </div>
            <button type="submit">Thêm</button>
        </form>
        <div style="">
            @component('components.demo', ['route' => '/noi-dung-tin-tuc/0', 'id' => 'frame'])
            @endcomponent
        </div>
    </div>
    <script>
        const decodedType = type => {
            switch (type) {
                case "THÔNG CÁO BÁO CHÍ":
                    return "thong-cao-bao-chi";
                case "TIN SẢN PHẨM":
                    return "tin-san-pham";
                case "TIN DOANH NGHIỆP":
                    return "tin-doanh-nghiep";
            }
        }
        const onExampleChange = type => {
            switch (type) {
                case "THÔNG CÁO BÁO CHÍ":
                    return 23;
                case "TIN SẢN PHẨM":
                    return 0;
                case "TIN DOANH NGHIỆP":
                    return 22;
            }
        }
        const updateTypeHandle = e => {
            document.querySelector("input[name='type']").value = e.target.value; //set the side value
            document.querySelector("input[name='parent']").value = decodedType(e.target.value); //set the link value
            document.querySelector("#frame").src = "https://thanhcoffee.com/noi-dung-tin-tuc/" + onExampleChange(e
                .target.value);
        }
    </script>
@endsection
