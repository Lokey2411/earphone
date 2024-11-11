@php
    $hasMessage = $errors->any() || session()->has('error') || session()->has('message');
@endphp
@if ($hasMessage)
    <div class="my-1">
        @include('components.back-button')
    </div>
@endif
@if ($errors->any())
    @foreach ($errors->all() as $e)
        <p
            class="alert alert-danger tw-bg-red-500 tw-text-white tw-rounded tw-p-2 p-2 mb-2 tw-mb-2 bg-red-500 text-white rounded">
            {{ $e }}</p>
    @endforeach
@endif
@if (session()->has('error'))
    <p
        class="alert alert-danger tw-bg-red-500 tw-text-white tw-rounded tw-p-2 p-2 mb-2 tw-mb-2 bg-red-500 text-white rounded">
        {{ session('error') }}</p>
@endif
@if (session()->has('message'))
    <p class="alert alert-success tw-text-white tw-rounded tw-p-2 p-2 mb-2 tw-mb-2 bg-green-500 text-white rounded">
        {{ session('message') }}</p>
@endif
