@extends('layout.form')
@section('title', 'Thêm mới sản phẩm')
@section('php')
    @php
        $roleId = 2;
        require_once base_path('resources/views/test/php-product-variables.php');
    @endphp
@endsection
@section('content')
    @include('components.check-user')
    @include('components.message')
    <div style="">
        <form action="//localhost:8000/api/products" method="post" enctype="multipart/form-data">
            @csrf
            <div style="margin-bottom:12px">
                <label for="name">Tên</label>
                <input type="text" name="name" id="">
            </div>
            <div style="margin-bottom: 12px">
                <label for="departmentId">Bộ phận sở hữu</label>
                <select name="departmentId" id="">
                    @foreach ($departments as $department)
                        <option value="{{ $department->id }}">{{ $department->name }}</option>
                    @endforeach
                </select>
            </div>
            <div style="margin-bottom: 12px">
                <label for="type">Kiểu: </label>
                @component('components.auto-complete-input', [
                    'name' => 'type',
                    'options' => $types,
                ])
                @endcomponent
            </div>
            <div style="margin-bottom: 12px">
                <label for="remain">Còn lại:</label>
                <input type="text" name="remain" id="">
            </div>
            <div style="margin-bottom: 12px">
                <label for="price">Giá:</label><input type="text" name="price" id="">
            </div>
            <div style="margin-bottom: 12px">
                <label for="image">Lựa chọn hình ảnh</label>
                <input type="file" name="image" id="">
            </div>
            <div style="margin-bottom: 12px">
                <label for="shortDesc">Mô tả ngắn:</label>
                <input type="text" name="shortDesc" id="">
            </div>
            <div style="margin-bottom: 12px">
                <label for="listname">Danh sách:</label>
                <select name="listname">
                    <option value="">__Chọn danh sách__</option>
                    @foreach ($productLists as $productList)
                        <option value="{{ $productList->name }}">{{ $productList->name }}</option>
                    @endforeach
                </select>
            </div>
            {{-- Phân loại --}}
            <h1>Phân loại</h1>
            <button onclick="addCategory(event)">Thêm phân loại</button>
            <div style="border: 1px solid #000; padding: 12px; margin: 12px">
                <div id="categories">
                    <div id="category-example" style="margin-bottom:12px">
                        <label for="category_0_type">Phân loại 0:</label>
                        @component('components.auto-complete-input', [
                            'name' => 'category_0_type',
                            'options' => $categories,
                        ])
                        @endcomponent
                        <label for="category_0_title">Tên: </label>
                        <input type="text" name="category_0_title" id="">
                        <label for="category_0_price">Giá: </label>
                        <input type="text" name="category_0_price" id="">
                        <label for="category_0_quantity">Trọng lượng: </label>
                        <input type="text" name="category_0_quantity" id="">
                        <label for="category_1_calories">Calo : </label>
                        <input type="text" name="category_1_calories" id="">
                    </div>
                </div>
            </div>
            {{-- Giới thiệu --}}
            <h1>Giới thiệu</h1>
            <button onclick="addIntroduction(event)">Thêm Giới thiệu tùy chỉnh</button>
            <div style="border: 1px solid #000; padding: 12px; margin: 12px">
                <div id="introductions">
                    <div id="introduction-example" style="margin-bottom:12px">
                        <label>Giới thiệu chính: </label>
                        <input type="hidden" name="introduction_0_type" value="introduction">
                        <label for="introduction_0_title">Tiêu đề: </label>
                        <input type="text" name="introduction_0_title" id="">
                        <label for="introduction_0_details">Chi tiết: </label>
                        @component('components.richtextbox', [
                            'name' => 'introduction_0_details',
                            'path' => 'description',
                        ])
                        @endcomponent
                        <label for="introduction_0_image">Hình ảnh: </label>
                        <input type="file" name="introduction_0_image" id="">
                        <label for="introduction_0_video">Video: </label>
                        <input type="file" name="introduction_0_video" id="">
                    </div>
                </div>
            </div>
            {{-- Thành phần dinh dưỡng/ Thông số kỹ thuật --}}
            <h1>Thành phần dinh dưỡng/ Thông số kỹ thuật</h1>
            <button onclick="addNutrition(event)">Thêm Thành phần dinh dưỡng/ Thông số kỹ thuật</button>
            <div style="border: 1px solid #000; padding: 12px; margin: 12px">
                <div id="nutritions">
                    <div id="nutrition-example" style="margin-bottom:12px">
                        <label>Thành phần dinh dưỡng/ Thông số kỹ thuật 0: </label>
                        <input type="hidden" name="nutrition_0_type" value="nutrition">
                        <label for="nutrition_0_name">Tên: </label>
                        <input type="text" name="nutrition_0_name" id="">
                        <label for="nutrition_0_quantity">Số lượng</label>
                        <input type="text" name="nutrition_0_quantity" id="">
                    </div>
                </div>
            </div>
            {{-- Gợi ý --}}
            <h1>Gợi ý</h1>
            <button onclick="addSuggestion(event)">Thêm Gợi ý</button>
            <div style="border: 1px solid #000; padding: 12px; margin: 12px">
                <div id="suggestions">
                    <div id="suggestion-example" style="margin-bottom:12px">
                        <label>Gợi ý : </label>
                        <input type="hidden" name="suggestion_0_type" value="suggestion">
                        <label for="suggestion_0_title">Tiêu đề: </label>
                        <input type="text" name="suggestion_0_title" id="">
                        <label for="suggestion_0_details">Chi tiết: </label>
                        <input type="text" name="suggestion_0_details" id="">
                        <label for="suggestion_0_image">Hình ảnh: </label>
                        <input type="file" name="suggestion_0_image" id="">
                        <label for="suggestion_0_video">Video: </label>
                        <input type="file" name="suggestion_0_video" id="">
                    </div>
                </div>
            </div>
            {{-- Mô tả thêm --}}
            <h1>Mô tả tùy chỉnh</h1>
            <button onclick="addOptional(event)">Thêm Mô tả tùy chỉnh</button>
            <div style="border: 1px solid #000; padding: 12px; margin: 12px">
                <div id="optionals">
                    <div id="optional-example" style="margin-bottom:12px">
                        <label>Mô tả : </label>
                        <input type="hidden" name="optional_0_type" value="optional">
                        <label for="optional_0_title">Tiêu đề: </label>
                        <input type="text" name="optional_0_title" id="">
                        <label for="optional_0_details">Chi tiết: </label>
                        @component('components.richtextbox', [
                            'name' => 'optional_0_details',
                            'path' => 'descriptions',
                        ])
                        @endcomponent
                        <label for="optional_0_image">Hình ảnh: </label>
                        <input type="file" name="optional_0_image" id="">
                        <label for="optional_0_video">Video: </label>
                        <input type="file" name="optional_0_video" id="">
                    </div>
                </div>
            </div>
            {{-- Mô tả giá --}}
            <h1>Mô tả khác</h1>
            <div style="border: 1px solid #000; padding: 12px; margin: 12px">
                <div id="others">
                    <div id="other-example" style="margin-bottom:12px">
                        <label>
                            <strong>
                                Khuyến mại :
                            </strong>
                        </label>
                        <input type="hidden" name="other_0_type" value="sale">
                        <label for="other_0_title">Tiêu đề: </label>
                        <input type="text" name="other_0_title" id="">
                        <label for="other_0_details">Chi tiết: </label>
                        @component('components.richtextbox', [
                            'name' => 'other_0_details',
                            'path' => 'descriptions',
                        ])
                        @endcomponent
                        <label for="other_0_image">Chọn hình ảnh</label>
                        <input type="file" name="other_0_image" id="">
                    </div>
                </div>
                <div id="others">
                    <div id="other-example" style="margin-bottom:12px">
                        <label>
                            <strong>
                                Trợ giúp về kích cỡ:
                            </strong>
                        </label>
                        <input type="hidden" name="other_1_type" value="size_helper">
                        <label for="other_1_title">Tiêu đề: </label>
                        <input type="text" name="other_1_title" id="">
                        <label for="other_1_details">Chi tiết: </label>
                        @component('components.richtextbox', [
                            'name' => 'other_1_details',
                            'path' => 'descriptions',
                        ])
                        @endcomponent
                        <label for="other_1_image">Chọn hình ảnh</label>
                        <input type="file" name="other_1_image" id="">
                    </div>
                </div>
                <div id="others">
                    <div id="other-example" style="margin-bottom:12px">
                        <label>
                            <strong>
                                Khác :
                            </strong>
                        </label>
                        <input type="hidden" name="other_2_type" value="other">
                        <label for="other_2_title">Tiêu đề: </label>
                        <input type="text" name="other_2_title" id="">
                        <label for="other_2_details">Chi tiết: </label>
                        @component('components.richtextbox', [
                            'name' => 'other_2_details',
                            'path' => 'descriptions',
                        ])
                        @endcomponent
                        <label for="other_2_image">Chọn hình ảnh</label>
                        <input type="file" name="other_2_image" id="">
                    </div>
                </div>
            </div>
            {{-- FIle đính kèm --}}
            <div style="margin-bottom:12px">
                <h1>File đính kèm</h1>
                <button onclick="addAttachment(event)">Thêm file đính kèm</button>
                <div style="display:flex;width: 100%; gap: 8px;">
                    <h1 class="tw-text-xl tw-font-bold tw-flex-1">Tài liệu đính kèm</h1>
                    <div id="attachments" class="tw-mt-4">
                        <div style="padding: 8px; border: 1px solid #000; display: flex; flex-direction: column; justify-content: center; flex:4;"
                            id="attachment-example">
                            <div class="tw-flex tw-gap-4">
                                <div>
                                    <label for="attachments[0][name]" style="font-weight: bold">Tiêu đề file: </label>
                                    <input type="text" name="attachments[0][name]" id="">
                                </div>
                                <div>
                                    <label for="attachments_0_image" style="font-weight: bold">Hình ảnh demo file:
                                    </label>
                                    <input type="file" accept="image/*" name="attachments_0_image" id="">
                                </div>
                            </div>
                            <div>
                                <label for="attachments_0_attachment" class="tw-font-bold tw-text-lg">File đính
                                    kèm</label>
                                <input type="file" name="attachments_0_attachment" id=""
                                    class="tw-w-full tw-border-dashed">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {{-- Chính sách bảo hành --}}
            <div class="tw-mb-3">
                <h1>Chính sách bảo hành</h1>
                <div class="tw-ml-4">

                    <div class="tw-mb-3">
                        <label for="guide[title]" class="tw-text-lg tw-font-bold">Tiêu đề file</label><input
                            type="text" class="" name="guide[title]" id="">
                    </div>
                    <div class="tw-mb-3">
                        <label for="guide_file">Đính kèm</label>
                        <input type="file" name="guide_file" id="" class="tw-w-full">
                    </div>
                </div>
            </div>
            {{-- Tài nguyên tham khảo --}}
            <div class="tw-mb-3">
                <h1>Tài nguyên tham khảo</h1>
                <div class="tw-flex tw-gap-4">

                    <button class="tw-bg-green-500 tw-text-white tw-p-3 tw-rounded-lg tw-w-fit tw-h-fit"
                        onclick="addCertificate(event)">Thêm tài nguyên
                        tham
                        khảo</button>
                    <div id="certificates" class="tw-flex-1">
                        <div id="certificate-example" class="tw-bg-[#F2F0EB] tw-p-3 tw-rounded-lg tw-mb-4">
                            <label for="" class="tw-text-lg tw-font-bold">Tài nguyên tham khảo</label>
                            <div class="tw-mb-3 tw-flex tw-items-center"><label for="certificate[0][title]"
                                    class="tw-text-lg tw-font-bold tw-mr-2">Tiêu
                                    đề file</label><input type="text" class="tw-flex-1" name="certificates[0][title]">
                            </div>
                            <div class="tw-mb-3"><label for="certificate_0_file" class="tw-text-lg tw-font-bold">Đính kèm
                                    file</label><input type="file" id="" name="certificates_0_file"
                                    class="tw-w-full tw-bg-white">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button type="submit">Thêm</button>
        </form>
        <div style="position: sticky; top:0;
            right:0; --webkit-sticky:fixed">
            @component('components.demo', [
                'id' => 'product-demo',
                'route' => '/san-pham/34',
            ])
            @endcomponent
        </div>
    </div>
    @component('components.product-script')
    @endcomponent
@endsection
