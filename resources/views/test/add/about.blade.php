@extends('layout.form')
@section('php')
    @php
        $roleId = 6;
    @endphp
@endsection
@section('title', 'Thêm nội dung trang web / popup')
@section('style')
    <style>
        .image-container {
            display: flex;
            gap: 80px;
            margin: 30px 30px 30px 0;
            align-items: center;
        }

        .image-container img {
            cursor: pointer;
            border: 2px solid transparent;
            width: 400px;
            height: auto;
            gap: 30px;
        }

        .selected {
            scale: 1.3
        }
    </style>
@endsection
@section('content')
    @include('components.check-user')
    @include('components.message')
    <?php
    $types = [['id' => '', 'displayText' => '_Chọn Trang_'], ['id' => 'https://thanhcoffee.com/nguon-nguyen-lieu', 'displayText' => 'Nguồn nguyên liệu'], ['id' => 'https://thanhcoffee.com/cong-ty-cua-chung-toi', 'displayText' => 'Công ty của chúng tôi'], ['id' => 'https://thanhcoffee.com/tro-giup-mua-sam', 'displayText' => 'Trợ giúp mua sắm']];
    ?>
    <form action="{{ route('abouts.store') }}" method="post" enctype="multipart/form-data">
        @csrf
        <div style="margin-bottom:12px">
            <label for="title">Tiêu đề</label>
            <input type="text" name="title" id="">
        </div>
        <div style="margin-bottom: 12px">
            <label for="subtitle">Đề mục</label>
            <input type="text" name="subtitle" id="">
        </div>
        <div style="margin-bottom: 12px">
            <label for="details">Chi tiết: </label>
            @component('components.richtextbox', ['name' => 'details', 'path' => 'abouts'])
            @endcomponent
        </div>
        <div style="margin-bottom: 12px">
            <label for="parent">Nằm ở</label>
            <input type="text" name="parent" id="parent" placeholder="Lựa chọn khác: Dán đường link vào đây,"
                list="parents" class="tw-w-full">
            <p class="tw-italic tw-text-gray-400 tw-font-bold tw-text-xl">
                *Note: Nếu domain không phải thanhcoffee.com VD: https://quanlychung.thanhcoffee.com, hãy bỏ từ .com trở về
                trước.
                <br>
                Ví dụ trang: https://quanlychung.thanhcoffee.com/test/add/about, ghi vào: test/add/about
            </p>
            <datalist id="parents">
                @foreach ($types as $type)
                    <option value="{{ $type['id'] }}">
                        {{ $type['displayText'] }}
                    </option>
                @endforeach
            </datalist>
        </div>
        <div style="margin-bottom: 12px;">
            <div class="image-container">
                <h3>Lựa chọn loại nội dung: </h3>
                <img src="{{ asset('img/about-slider.png') }}" id="slider" onclick="selectImage('slider')">
                <img src="{{ asset('img/about-normal.png') }}" id="default" onclick="selectImage('default')"
                    class="selected">
            </div>
            <input type="hidden" name="type" id="selectedImage" value="">
        </div>
        <div style="margin-bottom: 12px">
            <label for="image">Thêm hình ảnh: </label>
            <input type="file" name="image" id="">
        </div>
        <h1>Pop up Đi kèm</h1>
        <div id="popup">
            <div style="        
        margin:12px;
        border: 1px solid #000; 
        padding: 12px">
                <div style="margin-bottom: 12px">
                    <label for="popup_departmentId">Bộ phận:</label>
                    <select name="popup_departmentId" id="">
                        @foreach ($departments as $department)
                            <option value="{{ $department->id }}">{{ $department->name }}</option>
                        @endforeach
                    </select>
                </div>
                <div style="margin-bottom: 12px">
                    <label for="popup_title">Tiêu đề: </label>
                    <input type="text" name="popup_title">
                </div>
                <div style="margin-bottom: 12px">
                    <label for="popup_details">Chi tiết: </label>
                    @component('components.richtextbox', ['name' => 'popup_details', 'path' => 'abouts'])
                    @endcomponent
                </div>
                <div style="margin-bottom:12px">
                    <label for="popup_image">Hình ảnh: </label>
                    <input type="file" name="popup_image">
                </div>
            </div>
        </div>
        <button type="submit">Thêm</button>
    </form>
    <script>
        function selectImage(imageId) {
            // Remove selected class from all images
            document.querySelectorAll('.image-container img').forEach(img => img.classList.remove('selected'));

            // Add selected class to the clicked image
            document.getElementById(imageId).classList.add('selected');

            // Set the value of the hidden input to the selected image's id
            document.getElementById('selectedImage').value = imageId == "default" ? "" : imageId;
        }
    </script>
@endsection
