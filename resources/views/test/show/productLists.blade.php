@extends('components.layout')
@section('php')
    @php
        $roleId = 6;
    @endphp
@endsection
@section('title', 'Danh sách các danh mục sản phẩm')
@section('add-link', route('add.productList'))
@section('table')
    <table class="table table-striped table-sm">
        <thead>
            <tr>
                <th>Tên</th>
                <th>Mô tả</th>
                <th>Mô tả nhỏ</th>
                <th>Là danh sách nhỏ của</th>
                <th scope="col">Thao tác</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($productLists as $index => $productList)
                <tr>

                    <td class="tw-font-bold tw-text-center">{{ $productList->name }}</td>
                    <td class="tw-font-bold tw-text-center">{{ Str::substr($productList->description, 0, 100) }}</td>
                    <td class="tw-font-bold tw-text-center">{{ $productList->subdescription }}</td>
                    <td class="tw-font-bold tw-text-center">{{ $productList->parent }}</td>
                    <td colspan="2">
                        <a href="{{ route('edit.productList', $productList->name) }}"
                            class="btn btn-primary btn-hover">Sửa</a>
                        <button class="btn btn-danger" onclick="showConfirmModel({{ $index }})">Xóa</button>
                        {{-- delete model --}}
                        @component('components.delete-confirm', [
                            'confirmId' => $index,
                            'confirmMessage' => 'Bạn có muốn xóa danh mục này?',
                            'confirmAction' => route('productLists.destroy', $productList->name),
                        ])
                        @endcomponent
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>
    {{-- {{ $productLists->links('components.pagination') }} --}}
@endsection
