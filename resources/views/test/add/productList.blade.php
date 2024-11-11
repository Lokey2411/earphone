@extends('layout.form')
@section('title', 'Thêm mới câu hỏi')
@section('php')
    @php
        $roleId = 2;
    @endphp
@endsection
@section('content')
    @include('components.check-user')
    @include('components.message')
    <form action="{{ route('productLists.store') }}" method="post"
        class="tw-p-4 tw-bg-gray-200 tw-min-h-screen tw-relative tw-flex tw-flex-col tw-mt-3 tw-rounded-2xl"
        enctype="multipart/form-data">
        @csrf
        <div class="tw-w-fit">
            @include('components.back-button')
        </div>
        <h1 class="tw-text-3xl tw-text-center">Tạo danh mục</h1>
        <p class="tw-text-gray-400 tw-text-center tw-italic">(*) Bắt buộc</p>
        <div class="tw-grid tw-grid-cols-3 tw-gap-6 tw-px-6 tw-py-2">
            <div class="tw-mb-3 tw-flex tw-gap-2 tw-items-center">
                <label for="name">Tên danh mục</label>
                <span class="tw-text-red-500">*</span>
                <input class="tw-flex-1" type="text" name="name" id="name" class="form-control" />
            </div>
            <div class="tw-mb-3 tw-flex tw-gap-2 tw-items-center">
                <label for="description">Mô tả</label>
                <input class="tw-flex-1" type="text" name="description">
            </div>
            <div class="tw-mb-3 tw-flex tw-gap-2 tw-items-center">
                <label for="subdescription">Mô tả nhỏ</label>
                <input class="tw-flex-1" type="text" name="subdescription">
            </div>
        </div>
        <div class="tw-grid tw-grid-cols-2 tw-gap-6 tw-px-6 tw-py-2 tw-w-full">
            <div class="tw-mb-3 tw-flex tw-flex-col tw-w-full">
                <label for="parent">Danh mục sở hữu:</label>
                <select name="parent" id="" class="tw-flex-1 tw-h-fit tw-w-full">
                    <option value="">__Chọn danh mục sở hữu__</option>
                    @foreach ($productLists as $productList)
                        <option value="{{ $productList->name }}"
                            {{ $productList->name == $productList->parent ? 'selected' : '' }}>{{ $productList->name }}
                        </option>
                    @endforeach
                </select>
                <i class="tw-text-gray-400 tw-w-full">* Note: Để trống nếu không có danh mục sở hữu</i>
            </div>
            <div class="tw-mb-3 tw-flex tw-flex-col tw-gap-2">
                <label for="image">Chọn hình ảnh danh mục</label>
                <input type="file" name="image" id="" class="tw-flex-1" accept="image/*"
                    onchange="previewImage(event, 'preview-image')">
            </div>
        </div>
        <img src="" alt="" id="preview-image"
            class="tw-w-full tw-h-[400px] tw-object-cover tw-rounded-2xl tw-self-end">
        <button type="submit" onclick="confirmAddProductList(event)">Thêm</button>
        <div id="confirm-add" class="tw-fixed tw-inset-0 tw-grid tw-place-items-center tw-bg-[rgba(0,0,0,0.5)] tw-hidden">
            <div class="tw-rounded-lg tw-bg-white tw-p-4 tw-flex tw-flex-col">
                <h1 class="tw-text-3xl tw-font-bold tw-mb-2 tw-text-center">Xác nhận thông tin</h1>
                <p class="tw-mb-4 tw-text-lg tw-text-center">Bạn chắc chắn thêm danh mục này</p>
                <div class="tw-self-end tw-flex tw-gap-2">
                    <button type="submit" class="tw-bg-green-500 tw-text-white tw-p-2 tw-text-base">Xác nhận</button>
                    <button type="submit" class="tw-bg-red-500 tw-text-white tw-p-2 tw-text-base"
                        onclick="cancelAddProductList(event)">Hủy</button>
                </div>
            </div>
        </div>
    </form>
    <script>
        const keys = {
            @foreach ($productLists as $productList)
                "{{ $productList->name }}": "{{ $productList->name }}",
            @endforeach
        }

        function confirmAddProductList(e) {
            e.preventDefault();
            document.getElementById("confirm-add").classList.remove("tw-hidden");
        }

        function cancelAddProductList(e) {
            e.preventDefault();
            document.getElementById("confirm-add").classList.add("tw-hidden");
        }
    </script>
@endsection
