<textarea class="my-editor" name="{{ $name }}" id="{{ $name }}" cols="30" rows="10">
    {{ $value ?? '' }}
</textarea>

<script>
    editor_config = {
        path_absolute: "/",
        selector: "textarea.my-editor",
        language: 'vi',
        language_load: true,
        language_url: "{{ asset('js/lang/vi.js') }}", // Đường dẫn đến tệp ngôn ngữ tiếng Việt
        menubar: 'file edit view insert format tools table template guide | language', // Đảm bảo 'template' được khai báo ở đây
        menu: {
            template: { // Khai báo menu cho mục 'template'
                title: "Template có sẵn",
                items: "moreTemplate | textPrimaryColor | detailsSummaryTemplate" // Chọn các items trong menu
            },
            guide: {
                title: "Hướng dẫn sử dụng",
                items: "openGuide"
            },
            language: {
                title: "Ngôn ngữ",
                items: "vietnamese | english"
            }
        },
        plugins: [
            "advlist autolink lists link image charmap print preview hr anchor pagebreak",
            "searchreplace wordcount visualblocks visualchars code fullscreen",
            "insertdatetime media nonbreaking save table directionality",
            "emoticons template paste textpattern",
            "image imagetools file"
        ],
        toolbar: "insertfile undo redo | styleselect | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media | fontsizes fontfamily| code table | forecolor backcolor file |\nmoreTemplate textPrimaryColor detailsSummaryTemplate",
        setup: function(editor) {
            editor.ui.registry.addButton('insertfile', {
                text: 'Chèn File',
                onAction: () => insertFileHandler(editor, "csrf_token", "{{ $path ?? '' }}")
            });
            editor.ui.registry.addButton("moreTemplate", {
                text: "Chèn template tìm hiểu thêm",
                onAction: () => {
                    insertMoreTemplate(editor)
                }
            });
            editor.ui.registry.addButton("textPrimaryColor", {
                text: "Đổi màu chữ xanh",
                onAction: () => insertTextPrimaryColor(editor)
            });
            editor.ui.registry.addButton("detailsSummaryTemplate", {
                text: "Nội dung xem thêm",
                onAction: () => {
                    insertDetailsSummaryTemplate(editor);
                }
            });
            editor.ui.registry.addMenuItem("moreTemplate", {
                text: "Chèn template tìm hiểu thêm",
                onAction: () => {
                    insertMoreTemplate(editor)
                }
            });
            editor.ui.registry.addMenuItem("textPrimaryColor", {
                text: "Đổi màu chữ xanh",
                onAction: function() {
                    insertTextPrimaryColor(editor);
                }
            });
            editor.ui.registry.addMenuItem("detailsSummaryTemplate", {
                text: "Nội dung xem thêm",
                onAction: function() {
                    insertDetailsSummaryTemplate(editor);
                }
            });
            editor.ui.registry.addMenuItem('openGuide', {
                text: 'Mở Hướng dẫn sử dụng',
                onAction: function() {
                    window.open('/richtextbox/guide.php',
                        '_blank'); // Mở trang hướng dẫn trong tab mới
                }
            });
            editor.ui.registry.addMenuItem('vietnamese', {
                text: 'Tiếng Việt',
                onAction: function() {
                    changeLanguage('vi');
                }
            })
            editor.ui.registry.addMenuItem('english', {
                text: 'Tiếng Anh',
                onAction: function() {
                    changeLanguage('en');
                }
            })
        },
        relative_urls: false,
        images_upload_url: '/upload/image/post', // URL server để xử lý upload
        images_upload_handler: function(blobInfo, success, failure) {
            var xhr, formData;
            xhr = new XMLHttpRequest();
            xhr.withCredentials = false;
            xhr.open('POST', '/upload/image/post');
            // xhr.setRequestHeader('Content-Type', 'multipart/form-data'); // Có thể không cần thiết
            xhr.onerror = console.log;
            xhr.onload = function() {
                var json;
                if (xhr.status != 200) {
                    failure('HTTP Error: ' + xhr.status);
                    return;
                }
                try {

                    json = JSON.parse(xhr.responseText);
                } catch (error) {
                    console.log(json, error)
                }
                if (!json || typeof json.location != 'string') {
                    failure('Invalid JSON: ' + xhr.responseText);
                    return;
                }
                console.log(json);
                success(json.location);
            };
            formData = new FormData();
            formData.append('image', blobInfo.blob(), blobInfo.filename());
            formData.append("path", "{{ $path ?? '' }}");
            xhr.send(formData);
        },
        templates: [{
            title: "Tìm hiểu thêm",
            description: "Nội dung thu gọn",
            content: `
            <details>
                <summary style="cursor:pointer; user-select:none; font-weight: 600">
                    Tiêu đề
                </summary>
                Nội dung
            </details>
        `
        }]
    };
    tinymce.init(editor_config);
</script>
