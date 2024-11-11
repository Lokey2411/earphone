@extends('layout.check-role')
@section('php')
    @yield('php')
@endsection
@section('layout')
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>@yield('title')</title>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/pluralize/8.0.0/pluralize.min.js"
            integrity="sha512-4uLji4UnTkA9AWSkIT2+sTQyRqox+O/e+JVkJA7zf+11CJDTxNEaMq13LRvYsu8Mv0kfpnePOIoS0Z0f8VlGgw=="
            crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        @include('components.script.bootstrap-cdn')
        @component('components.script.tailwind-cdn')
        @endcomponent
        <script>
            tailwind.config = {
                prefix: "tw-"
            };
        </script>
        @include('components.script.tinymce')
        </script>
        @yield('style')
        <style>
            * {
                font-family: "Arial";
            }

            body h1 {
                font-size: 30px;
                font-weight: bold;
            }

            a {
                text-decoration: none;
            }

            form button {
                width: fit-content;
                padding: 10px 20px;
                /* margin: 0 auto; */
                display: block;
                font-size: 30px;
                background-color: rgb(34 197 94);
                color: white;
                font-weight: bold;
                border: none;
                border-radius: 10px;
            }

            button:not(button[type="submit"]) {
                font-size: 14px;
                padding: 5px;
            }

            form {
                display: flex;
                gap: 12px;
                flex-direction: column;
            }

            form input,
            form select,
            form textarea {
                padding: 12px;
                /* margin: 0 auto; */
                border: none;
                border-bottom: 1px solid #000;
                border-radius: 10px;
                box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
            }

            select {
                width: fit-content;
            }
        </style>
        <script>
            const PRIMARY_COLOR = "#006241";
            const templates = {
                detailSummary: `
            <details>
                <summary style="cursor:pointer; user-select:none; font-weight: 600; border-bottom:1px solid #000; padding-bottom:16px">
                    Tiêu đề
                </summary>    
                <div style="margin-left:16px">
                    Nội dung
                </div>
            </details>
        `,
                moreButton: `<div style="display: flex; align-items: center; justify-content: center; cursor:pointer">
                    <a href="/tham-gia-the-thanh" style="all:unset;padding: 15px 40px; border-radius: 19px; border: 1px solid black; background: #D9D9D9; font-size: 20px; font-weight: 600;">
                        Tìm hiểu thêm
                    </a>
                </div>`,
                textPrimary: `<p style="color: ${PRIMARY_COLOR}">
                    Chỉnh sửa chữ này nhé.
                    </p>`
            };
            const insertFileHandler = function(editor, csrfToken, path) {
                var input = document.createElement('input');
                input.type = 'file';
                input.onchange = function() {
                    var file = input.files[0];
                    var formData = new FormData();
                    formData.append('file', file);
                    formData.append("path", path);

                    // Thực hiện upload file bằng AJAX
                    fetch('/upload/file/post', {
                            method: 'POST',
                            body: formData,
                        })
                        .then(response => {
                            return response.json();
                        })
                        .then(data => {
                            // Chèn liên kết đến file vào nội dung văn bản
                            editor.insertContent(
                                `<a href="${data.fileName}" title="Bấm vào thêm/ chỉnh sửa link để thay đổi text được hiển thị">${file.name}</a>`
                            );
                        })
                        .catch(error => {
                            console.log('Upload failed:', error);
                        });
                };
                input.click();
            }
            const insertDetailsSummaryTemplate = (editor) => {
                editor.execCommand('mceInsertTemplate', false, templates.detailSummary);
            }
            const insertMoreTemplate = (editor) => {
                editor.execCommand('mceInsertTemplate', false, templates.moreButton);
            }
            const insertTextPrimaryColor = (editor) => {
                editor.execCommand('mceInsertTemplate', false, templates.textPrimary);
            }
        </script>
    </head>

    <body>
        @include('components.check-user')
        @include('components.topbar')
        <div class="container-fluid">
            <div class="row">
                @include('components.sidebar')
                <main class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                    <h2 style="margin-top: 1rem;" class="tw-text-4xl tw-font-bold">@yield('title')</h2>
                    @component('components.message')
                    @endcomponent
                    <div id="layout-searchInput-box">

                        <div class="tw-text-xl tw-font-bold">Tìm kiếm: </div>
                        <input type="text" onkeyup="searchTable(event)"
                            class="tw-w-full tw-rounded-lg tw-p-2 tw-border tw-mb-4 tw-shadow-sm" id="layout-searchInput" />
                    </div>
                    <div class="table-responsive tw-mt-3">
                        <a href="#" onclick="event.preventDefault(); window.history.back();"
                            class="btn btn-primary tw-mr-2">
                            Trở lại
                        </a>
                        <a href="@yield('add-link')" class="btn btn-primary">Thêm</a>
                        <div class="ml-3">
                            @yield('content')
                        </div>
                    </div>
                </main>
            </div>
        </div>

        @component('components.react-script-tag')
        @endcomponent
        <script>
            function previewImage(event, previewId) {
                const image = document.querySelector('#' + previewId);
                image.src = URL.createObjectURL(event.target.files[0]);
            }
            const changeLanguage = (lang) => {
                tinymce.remove(editor_config.selector);
                editor_config.language = lang;
                tinymce.init(editor_config);
                // init tiny mce, then scale the language button
            }
        </script>
    </body>

    </html>
@endsection
