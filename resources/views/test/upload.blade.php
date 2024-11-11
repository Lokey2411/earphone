@extends('layout.form')
@section('title', 'Upload')
@section('content')
    @if (isset($clipboardText))
        <script>
            document.write("{{ $clipboardText }}");
            navigator.clipboard.writeText("{{ $clipboardText }}");
            document.write("paste to the image field");
        </script>
    @else
        <form action="{{ route('upload.image.post') }}" method="POST" enctype="multipart/form-data">
            {{-- @csrf --}}
            @component('components.auto-complete-input', [
                'name' => 'path',
                'options' => [
                    [
                        'id' => '',
                        'displayText' => 'Select path',
                    ],
                    [
                        'id' => 'news',
                        'displayText' => 'Tin Tức',
                    ],
                ],
            ])
            @endcomponent
            <input type="file" name="image">
            <input type="submit">
        </form>
    @endif
@overwrite
