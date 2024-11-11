@extends('layout.form')
@section('title', $productList->name)
@section('php')
    @php
        $roleId = 2;
    @endphp
@endsection
@section('content')
    @include('components.check-user')
    @include('components.message')
    <form action="{{ route('productLists.update', $productList->name) }}" method="post"
        class="p-4 bg-gray-200 min-h-screen relative flex flex-col" enctype="multipart/form-data">
        @csrf
        @method('PUT')
        <div class="w-fit">
            <a href="{{ route('show.productLists') }}"
                class="tw-bg-blue-500 tw-text-white tw-p-2 tw-rounded bg-blue-500 text-white rounded p-2">Trở lại</a>
        </div>
        <h1 class="text-3xl text-center">{{ $productList->name }}</h1>
        <p class="text-gray-400 text-center italic">(*) Bắt buộc</p>
        <div class="grid grid-cols-3 gap-6 px-6 py-2">
            <div class="mb-3 flex gap-2 items-center">
                <label for="name">Tên danh mục</label>
                <span class="text-red-500">*</span>
                <input class="flex-1" type="text" name="name" id="name" class="form-control"
                    value="{{ $productList->name }}">
            </div>
            <div class="mb-3 flex gap-2 items-center">
                <label for="description">Mô tả</label>
                <input class="flex-1" type="text" name="description" value="{{ $productList->description }}">
            </div>
            <div class="mb-3 flex gap-2 items-center">
                <label for="subdescription">Mô tả nhỏ</label>
                <input class="flex-1" type="text" name="subdescription" value="{{ $productList->subdescription }}">
            </div>
        </div>
        <div class="grid grid-cols-2 gap-6 px-6 py-2 w-full">
            <div class="mb-3 flex flex-col w-full">
                <label for="parent">Danh mục sở hữu:</label>
                <select name="parent" id="" class="flex-1 h-fit w-full">
                    <option value="">__Chọn danh mục sở hữu__</option>
                    @foreach ($productLists as $parent)
                        <option value="{{ $parent->name }}" {{ $parent->name == $productList->parent ? 'selected' : '' }}>
                            {{ $parent->name }}
                        </option>
                    @endforeach
                </select>
                <i class="text-gray-400 w-full">* Note: Để trống nếu không có danh mục sở hữu</i>
            </div>
            <div class="mb-3 flex flex-col gap-2">
                <label for="image">Chọn hình ảnh danh mục</label>
                <input type="file" name="image" id="" class="flex-1" accept="image/*"
                    onchange="previewImage(event, 'preview-image')" value="{{ $productList->image }}">
            </div>
        </div>
        <img src="{{ $productList->image }}" alt="" id="preview-image"
            class="w-full h-[400px] object-cover rounded-2xl self-end">
        <button type="submit" onclick="confirmAddProductList(event)">Lưu</button>
        <div id="confirm-add"
            class="fixed top-0 right-0 bottom-0 left-0 grid place-items-center bg-[rgba(0,0,0,0.5)] hidden">
            <div class="rounded-lg bg-white p-4 flex flex-col">
                <h1 class="text-3xl font-bold mb-2 text-center">Xác nhận thông tin</h1>
                <p class="mb-4 text-lg text-center">Bạn chắc chắn lưu danh mục này</p>
                <div class="self-end flex gap-2">
                    <button type="submit" class="bg-green-500 text-white p-2 text-base">Xác nhận</button>
                    <button type="submit" class="bg-red-500 text-white p-2 text-base"
                        onclick="cancelAddProductList(event)">Hủy</button>
                </div>
            </div>
        </div>
    </form>
    <script>
        function confirmAddProductList(e) {
            e.preventDefault();
            document.getElementById("confirm-add").classList.remove("hidden");
        }

        function cancelAddProductList(e) {
            e.preventDefault();
            document.getElementById("confirm-add").classList.add("hidden");
        }
    </script>
@endsection
