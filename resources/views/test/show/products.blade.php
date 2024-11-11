@extends('components.layout')
@section('php')
    @php
        $roleId = 2;
    @endphp
@endsection
@section('title', 'Danh sách Sản phẩm')
@section('add-link', route('add.product'))
@section('table')
    <table class="table table-striped table-sm">
        <thead>
            <tr>
                <th>ID</th>
                <th>Tên</th>
                <th>Giá</th>
                <th>Mô tả ngắn</th>
                <th>Thuộc về bộ phận</th>
                <th>Còn lại</th>
                <th>Kiểu</th>
                <th>Danh sách</th>
                <th scope="col">Thao tác</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($products as $product)
                <tr>
                    <td>{{ $product->id }}</td>
                    <td>{{ $product->name }}</td>
                    <td>{{ $product->price }}</td>
                    <td style="width: 300px">{{ Str::substr($product->shortDesc, 0, 100) }}</td>
                    <td>{{ $product->department->name }}</td>
                    <td>{{ $product->remain }}</td>
                    <td>{{ $product->type }}</td>
                    <td>{{ $product->listname }}</td>
                    <td colspan="2">
                        <a href="{{ route('edit.product', $product->id) }}" class="btn btn-primary btn-hover">Sửa</a>
                        <button class="btn btn-danger" onclick="showConfirmModel({{ $product->id }})">Xóa</button>
                        {{-- delete model --}}
                        @component('components.delete-confirm', [
                            'confirmId' => $product->id,
                            'confirmMessage' => 'Bạn có muốn xóa bộ phận này?',
                            'confirmAction' => route('products.destroy', $product->id),
                        ])
                        @endcomponent
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>
    {{-- {{ $products->links('components.pagination') }} --}}

@endsection
