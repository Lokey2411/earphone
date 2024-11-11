@extends('layout.form')
@section('php')
    @php
        $roleId = 2;
    @endphp
@endsection
@section('title', $product->name)
@section('style')
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        img {
            width: 300px;
            height: 300px;
            border-radius: 8px;
        }

        .back {
            text-decoration: none;
            color: white;
            background-color: rgb(34 197 94);
            padding: 8px;
            border-radius: 8px;
            margin: 12px;
        }
    </style>
@endsection
@section('content')
    @include('components.check-user')
    @include('components.message')
    <?php
    require_once base_path('resources/views/test/php-product-variables.php');
    $introductions = [];
    $suggestions = [];
    $optionals = [];
    $otherDescriptions = [];
    $nutritions = $product->parts ?? [];
    $attachments = [];
    $certificates = [];
    $guide;
    foreach ($product->attachments as $key => $item) {
        if ($item['type'] == 'guide') {
            $guide = $item;
        } elseif ($item['type'] == 'certificate') {
            $certificates[] = $item;
        } else {
            $attachments[] = $item;
        }
    }
    foreach ($product->descriptions as $key => $item) {
        switch ($item['type']) {
            case 'introduction':
                $introductions[] = $item;
                //handle if introduction is the part
                break;
            case 'suggestion':
                $suggestions[] = $item;
                break;
            case 'optional':
                $optionals[] = $item;
                break;
            default:
                # code...
                $otherDescriptions[] = $item;
                break;
        }
    }
    ?>
    {{-- <div style=""> --}}
    @if (session()->has('message'))
        <a class="back" href="{{ route('show.products') }}" class="btn btn-primary">Quay lại</a>
    @endif
    <form action="{{ route('products.update', $product->id) }}" method="post" enctype="multipart/form-data">
        @csrf
        @method('PUT')
        <div style="margin-bottom:12px">
            <label for="name">Tên</label>
            <input type="text" name="name" id="" value="{{ $product->name }}">
        </div>
        <div style="margin-bottom: 12px">
            <label for="departmentId">Bộ phận sở hữu</label>
            <select name="departmentId" id="">
                @foreach ($departments as $department)
                    @if ($department->id == $product->departmentId)
                        <option value="{{ $department->id }}" selected>{{ $department->name }}</option>
                    @else
                        <option value="{{ $department->id }}">{{ $department->name }}</option>
                    @endif
                @endforeach
            </select>
        </div>
        <div style="margin-bottom: 12px">
            <label for="type">Kiểu: </label>
            @component('components.auto-complete-input', [
                'name' => 'type',
                'options' => $types,
                'value' => $product->type,
            ])
            @endcomponent
        </div>
        <div style="margin-bottom: 12px">
            <label for="remain">Còn lại:</label>
            <input type="text" name="remain" id="" value="{{ $product->remain }}">
        </div>
        <div style="margin-bottom: 12px">
            <label for="price">Giá:</label><input type="text" name="price" id=""
                value="{{ $product->price }}">
        </div>
        <div style="margin-bottom: 12px">
            <img src="{{ $product->image }}" alt="" id="product-image">
            <label for="image">Chỉnh sửa hình ảnh</label>
            <input type="file" name="image" id="" onchange="previewImage(event, 'product-image')">
        </div>
        <div style="margin-bottom: 12px">
            <label for="shortDesc">Mô tả ngắn:</label>
            <textarea type="text" name="shortDesc" id="" style="width:fit-content; resize:none; width: 100%;">
                {{ $product->shortDesc }}
            </textarea>
        </div>
        <div style="margin-bottom: 12px">
            <label for="listname">Danh mục:</label>
            <select name="listname">
                <option value="">__Chọn danh sách__</option>
                @foreach ($productLists as $productList)
                    <option value="{{ $productList->name }}"
                        {{ $productList->name == $product->listname ? 'selected' : '' }}>{{ $productList->name }}</option>
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
                        'value' => $product->categories[0]->type ?? '',
                    ])
                    @endcomponent
                    <label for="category_0_title">Tên: </label>
                    <input type="text" name="category_0_title" id=""
                        value="{{ $product->categories[0]->title ?? '' }}">
                    <label for="category_0_price">Giá: </label>
                    <input type="text" name="category_0_price" id=""
                        value="{{ $product->productCategories[0]->price ?? '' }}">
                    <label for="category_0_quantity">Trọng lượng: </label>
                    <input type="text" name="category_0_quantity" id=""
                        value="{{ $product->productCategories[0]->quantity ?? '' }}">
                    <label for="category_0_calories">Calo: </label>
                    <input type="text" name="category_0_calories" id=""
                        value="{{ $product->productCategories[0]->calories ?? '' }}">
                </div>
                @foreach ($product->categories as $i => $cat)
                    @if ($i != 0)
                        <div style="margin-bottom:12px">
                            <label for="category_{{ $i }}_type">Phân loại {{ $i }}:</label>
                            @component('components.auto-complete-input', [
                                'name' => "category_{$i}_type",
                                'options' => $categories,
                                'value' => $cat->type,
                            ])
                            @endcomponent
                            <label for="category_{{ $i }}_title">Tên: </label>
                            <input type="text" name="category_{{ $i }}_title" id=""
                                value="{{ $cat->title }}">
                            <label for="category_{{ $i }}_price">Giá: </label>
                            <input type="text" name="category_{{ $i }}_price" id=""
                                value="{{ $product->productCategories[$i]->price }}">
                            <label for="category_{{ $i }}_quantity">Trọng lượng: </label>
                            <input type="text" name="category_{{ $i }}_quantity" id=""
                                value="{{ $product->productCategories[$i]->quantity }}">
                            <label for="category_0_calories">Calo: </label>
                            <input type="text" name="category_{{ $i }}_calories" id=""
                                value="{{ $product->productCategories[$i]->calories ?? '' }}">
                        </div>
                    @endif
                @endforeach
            </div>
        </div>
        {{-- Giới thiệu --}}
        <h1>Giới thiệu</h1>
        <button onclick="addIntroduction(event)">Thêm Giới thiệu tùy chỉnh</button>
        <div style="border: 1px solid #000; padding: 12px; margin: 12px">
            <div id="introductions">
                <div id="introduction-example" style="margin-bottom:12px; border-bottom: 1px dotted red; padding: 4px">
                    <label>Giới thiệu chính: </label>
                    <input type="hidden" name="introduction_0_type" value="introduction">
                    <label for="introduction_0_title">Tiêu đề: </label>
                    <input type="text" name="introduction_0_title" id=""
                        value="{{ $introductions[0]['title'] ?? '' }}">
                    <label for="introduction_0_details">Chi tiết: </label>
                    @component('components.richtextbox', [
                        'name' => 'introduction_0_details',
                        'value' => $introductions[0]['details'] ?? '',
                        'path' => 'descriptions',
                    ])
                    @endcomponent
                    @if (isset($introductions[0]['image']))
                        <img src="{{ $introductions[0]['image'] }}" alt="">
                    @endif
                    <label for="introduction_0_image">Hình ảnh: </label>
                    <input type="file" name="introduction_0_image" id="">
                    @if (isset($introductions[0]['video']))
                        <video src="{{ $introductions[0]['video'] }}" controls></video>
                    @endif
                    <label for="introduction_0_video">Video: </label>
                    <input type="file" name="introduction_0_video" id="">
                </div>
                @foreach ($introductions as $index => $introduction)
                    @if ($index > 0)
                        <div style="margin-bottom:12px; border-bottom: 1px dotted red">
                            <label>Giới thiệu tùy chỉnh {{ $index }}: </label>
                            <input type="hidden" name="introduction_{{ $index }}_type" value="introduction">
                            <label for="introduction_{{ $index }}_title">Tiêu đề: </label>
                            <input type="text" name="introduction_{{ $index }}_title" id=""
                                value="{{ $introduction['title'] }}">
                            <label for="introduction_{{ $index }}_details">Chi tiết: </label>
                            @component('components.richtextbox', [
                                'name' => "introduction_{$index}_details",
                                'value' => $introduction['details'] ?? '',
                                'path' => 'descriptions',
                            ])
                            @endcomponent
                            @if (isset($introduction['image']))
                                <img src="{{ $introduction['image'] }}" alt="">
                            @endif
                            <label for="introduction_{{ $index }}_image">Hình ảnh: </label>
                            <input type="file" name="introduction_{{ $index }}_image" id="">
                            @if (isset($introduction['video']))
                                <video src="{{ $introduction['video'] }}" alt="" autoplay controls></video>
                            @endif
                            <label for="introduction_{{ $index }}_video">Video: </label>
                            <input type="file" name="introduction_{{ $index }}_video" id="">
                        </div>
                    @endif
                @endforeach
            </div>
        </div>
        {{-- Thành phần --}}
        <h1>Thành phần dinh dưỡng / Thông số kỹ thuật</h1>
        <button onclick="addNutrition(event)">Thêm Thành phần dinh dưỡng / Thông số kỹ thuật</button>
        <div style="border: 1px solid #000; padding: 12px; margin: 12px">
            <div id="nutritions">
                <div id="nutrition-example" style="margin-bottom:12px">
                    <input type="hidden" name="nutrition_0_type" value="nutrition">
                    <label>Thành phần 0: </label>
                    <label for="nutrition_0_name">Tên thành phần: </label>
                    <input type="text" name="nutrition_0_name" id=""
                        value="{{ $product->parts[0]->name ?? '' }}">
                    <label for="nutrition_0_quantity">Số lượng</label>
                    <input type="text" name="nutrition_0_quantity" id=""
                        value="{{ $product->parts[0]->quantity ?? '' }}">
                </div>
                @foreach ($product->parts as $index => $nutrition)
                    @if ($index > 0)
                        <div style="margin-bottom:12px; border-bottom: 1px dotted red">
                            <label>Thành phần {{ $index }}: </label>
                            <label for="nutrition_{{ $index }}_name">Tên thành phần: </label>
                            <input type="text" name="nutrition_{{ $index }}_name" id=""
                                value="{{ $nutrition->name }}">
                            <label for="nutrition_{{ $index }}_quantity">Số lượng: </label>
                            <input type="text" name="nutrition_{{ $index }}_quantity" id=""
                                value="{{ $nutrition->quantity }}">
                        </div>
                    @endif
                @endforeach
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
                    <input type="text" name="suggestion_0_title" id=""
                        value="{{ $suggestions[0]['title'] ?? '' }}">
                    <label for="suggestion_0_details">Chi tiết: </label>
                    <input type="text" name="suggestion_0_details" id=""
                        value="{{ $suggestions[0]['details'] ?? '' }}">
                    <label for="suggestion_0_image">Hình ảnh: </label>
                    @if (isset($suggestions[0]['image']))
                        <img src="{{ $suggestions[0]['image'] }}" alt="">
                    @endif
                    <input type="file" name="suggestion_0_image" id="">
                    @if (isset($suggestions[0]['video']))
                        <video src="{{ $suggestions[0]['video'] }}" alt="" autoplay controls></video>
                    @endif
                    <label for="suggestion_0_video">Video: </label>
                    <input type="file" name="suggestion_0_video" id="">
                </div>
                @foreach ($suggestions as $index => $suggestion)
                    @if ($index > 0)
                        <div style="margin-bottom:12px; border-bottom: 1px dotted red">
                            <label>Gợi ý {{ $index }}: </label>
                            <input type="hidden" name="suggestion_{{ $index }}_type" value="suggestion">
                            <label for="suggestion_{{ $index }}_title">Tiêu đề: </label>
                            <input type="text" name="suggestion_{{ $index }}_title" id=""
                                value="{{ $suggestion['title'] }}">
                            <label for="suggestion_{{ $index }}_details">Chi tiết: </label>
                            <input type="text" name="suggestion_{{ $index }}_details" id=""
                                value="{{ $suggestion['details'] }}">
                            <label for="suggestion_{{ $index }}_image">Hình ảnh: </label>
                            @if (isset($suggestion['image']))
                                <img src="{{ $suggestion['image'] }}" alt="">
                            @endif
                            <input type="file" name="suggestion_{{ $index }}_image" id="">
                            @if (isset($suggestion['video']))
                                <video src="{{ $suggestion['video'] }}" alt="" autoplay controls></video>
                            @endif
                            <label for="suggestion_{{ $index }}_video">Video: </label>
                            <input type="file" name="suggestion_{{ $index }}_video" id="">
                        </div>
                    @endif
                @endforeach
            </div>
        </div>
        {{-- optional --}}
        <h1>Mô tả tùy chỉnh</h1>
        <button onclick="addOptional(event)">Thêm Mô tả tùy chỉnh</button>
        <div style="border: 1px solid #000; padding: 12px; margin: 12px">
            <div id="optionals">
                <div id="optional-example" style="margin-bottom:12px">
                    <label>Mô tả : </label>
                    <input type="hidden" name="optional_0_type" value="optional">
                    <label for="optional_0_title">Tiêu đề: </label>
                    <input type="text" name="optional_0_title" id=""
                        value="{{ $optionals[0]['title'] ?? '' }}">
                    <label for="optional_0_details">Chi tiết: </label>
                    @component('components.richtextbox', [
                        'name' => 'optional_0_details',
                        'value' => $optionals[0]['details'] ?? '',
                        'path' => 'descriptions',
                    ])
                    @endcomponent
                    <label for="optional_0_image">Hình ảnh: </label>
                    <input type="file" name="optional_0_image" id="">
                    <label for="optional_0_video">Video: </label>
                    <input type="file" name="optional_0_video" id="">
                </div>
                @foreach ($optionals as $i => $optional)
                    @if ($i > 0)
                        <div style="margin-bottom:12px">
                            <label>Mô tả {{ $i }}: </label>
                            <input type="hidden" name="optional_{{ $i }}_type" value="optional">
                            <label for="optional_{{ $i }}_title">Tiêu đề: </label>
                            <input type="text" name="optional_{{ $i }}_title" id=""
                                value="{{ $optional['title'] ?? '' }}">
                            <label for="optional_{{ $i }}_details">Chi tiết: </label>
                            @component('components.richtextbox', [
                                'name' => 'optional_{{ $i }}_details',
                                'value' => $optional['details'] ?? '',
                                'path' => 'descriptions',
                            ])
                            @endcomponent
                            <label for="optional_{{ $i }}_image">Hình ảnh: </label>
                            <input type="file" name="optional_{{ $i }}_image" id="">
                            <label for="optional_{{ $i }}_video">Video: </label>
                            <input type="file" name="optional_{{ $i }}_video" id="">
                        </div>
                    @endif
                @endforeach
            </div>
        </div>
        <h1>Mô tả khác</h1>
        <div style="border: 1px solid #000; padding: 12px; margin: 12px">
            @if (isset($otherDescriptions))
                @foreach ($otherDescriptions as $index => $item)
                    <div id="others">
                        <div id="other-example" style="margin-bottom:12px">
                            <label>
                                <strong>
                                    {{ $descriptions[$item['type']] ?? '' }}
                                </strong>
                            </label>
                            <input type="hidden" name="other_{{ $index }}_type"
                                value="{{ $item['type'] ?? '' }}">
                            <label for="other_{{ $index }}_title">Tiêu đề: </label>
                            <input type="text" name="other_{{ $index }}_title" id=""
                                value="{{ $item['title'] }}">
                            <label for="other_{{ $index }}_details">Chi tiết: </label>
                            @component('components.richtextbox', [
                                'name' => 'other_' . $index . '_details',
                                'value' => $item['details'] ?? '',
                                'path' => 'descriptions',
                            ])
                            @endcomponent
                        </div>
                    </div>
                @endforeach
            @endif
        </div>
        <div style="margin-bottom:12px">
            <h1>File đính kèm</h1>
            <button onclick="addAttachment(event)">Thêm file đính kèm</button>
            <div style="display:flex;width: 100%; gap: 8px;">
                <h1 class="tw-text-xl tw-font-bold tw-flex-1">Tài liệu đính kèm</h1>
                <div id="attachments" class="tw-mt-4">
                    <div style="padding: 8px; border: 1px solid #000; display: flex; flex-direction: column; justify-content: center; flex:4;"
                        id="attachment-example">
                        <div class="tw-flex tw-gap-4">
                            @if (isset($attachments[0]))
                                <a href="{{ $attachments[0]['url'] }}">{{ $attachments[0]['title'] }}</a>
                            @endif
                            <div>
                                <label for="attachments[0][name]" style="font-weight: bold">Tiêu đề file: </label>
                                <input type="text" name="attachments[0][name]" id=""
                                    value="{{ $attachments[0]['title'] ?? '' }}">
                            </div>
                            @if (isset($attachments[0]['image']))
                                <img src="{{ $attachments[0]['image'] }}" alt="" width="100"
                                    height="150"></img>
                            @endif
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
                    @foreach ($attachments as $index => $attachment)
                        @if ($index > 0)
                            <div style="padding: 8px; border: 1px solid #000; display: flex; flex-direction: column; justify-content: center; flex:4;"
                                id="attachment-example">
                                <input type="hidden" name="attachments[{{ $index }}][type]"
                                    value="{{ $attachment['type'] }}">
                                <a href="{{ $attachment['url'] }}">{{ $attachment['title'] }}</a>
                                <div>
                                    <label for="attachments[0][name]" style="font-weight: bold">Tiêu đề file: </label>
                                    <input type="text" name="attachments[{{ $index }}][name]" id=""
                                        value="{{ $attachment['title'] ?? '' }}">
                                </div>
                                @if (isset($attachment['image']))
                                    <img src="{{ $attachment['image'] }}" alt="" width="100"
                                        height="150"></img>
                                @endif
                                <div>
                                    <label for="attachment[image]" style="font-weight: bold">Hình ảnh demo file: </label>
                                    <input type="file" accept="image/*" name="attachments_{{ $index }}_image"
                                        id="">
                                </div>
                                <div>
                                    <input type="file" name="attachments_{{ $index }}_attachment"
                                        id="" value="{{ $attachment['url'] ?? '' }}}">
                                </div>
                            </div>
                        @endif
                    @endforeach
                </div>
            </div>
        </div>
        {{-- Chính sách bảo hành --}}
        <div class="tw-mb-3">
            <h1>Chính sách bảo hành</h1>
            <div class="tw-ml-4">
                <a href="{{ $guide['url'] ?? '' }}" target="_blank">{{ $guide['title'] ?? '' }}</a>
                <div class="tw-mb-3">
                    <label for="guide[title]" class="tw-text-lg tw-font-bold">Tiêu đề file</label><input type="text"
                        class="" name="guide[title]" id="" value="{{ $guide['title'] ?? '' }}">
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
                        <a href="{{ $certificates[0]['url'] ?? '' }}"
                            target="_blank">{{ $certificates[0]['title'] ?? '' }}</a>
                        <div class="tw-mb-3 tw-flex tw-items-center"><label for="certificate[0][title]"
                                class="tw-text-lg tw-font-bold tw-mr-2">Tiêu
                                đề file</label><input type="text" class="tw-flex-1" name="certificates[0][title]"
                                value="{{ $certificates[0]['title'] ?? '' }}">
                        </div>
                        <div class="tw-mb-3"><label for="certificate_0_file" class="tw-text-lg tw-font-bold">Đính kèm
                                file</label><input type="file" id="" name="certificates_0_file"
                                class="tw-w-full tw-bg-white">
                        </div>
                    </div>
                    @foreach ($certificates as $index => $certificate)
                        @if ($index > 0)
                            <div id="certificate-example" class="tw-bg-[#F2F0EB] tw-p-3 tw-rounded-lg tw-mb-4">
                                <label for="" class="tw-text-lg tw-font-bold">Tài nguyên tham khảo</label>
                                <a href="{{ $certificate['url'] ?? '' }}"
                                    target="_blank">{{ $certificate['title'] ?? '' }}</a>
                                <div class="tw-mb-3 tw-flex tw-items-center"><label for="certificate[0][title]"
                                        class="tw-text-lg tw-font-bold tw-mr-2">Tiêu
                                        đề file</label><input type="text" class="tw-flex-1"
                                        name="certificates[${{ $index }}][title]"
                                        value="{{ $certificate['title'] ?? '' }}">
                                </div>
                                <div class="tw-mb-3"><label for="certificate_{{ $index }}_file"
                                        class="tw-text-lg tw-font-bold">Đính kèm file</label><input type="file"
                                        id="" name="certificates_0_file" class="tw-w-full tw-bg-white">
                                </div>
                            </div>
                        @endif
                    @endforeach
                </div>
            </div>
        </div>
        <button type="submit">Lưu</button>
    </form>
    <div>
        @component('components.demo', [
            'id' => 'product-demo',
            'route' => '/san-pham/' . $product->id,
        ])
        @endcomponent
    </div>
    {{-- </div> --}}
    @component('components.product-script', [
        'categories' => $product->categories,
        'nutritions' => $nutritions,
        'introductions' => $introductions,
        'optionals' => $optionals,
        'otherDescriptions' => $otherDescriptions,
        'suggestions' => $suggestions,
        'attachments' => $product->attachments,
        'certificates' => $certificates,
    ])
    @endcomponent
@endsection
