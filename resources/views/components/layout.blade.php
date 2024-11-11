    <!doctype html>
    <html lang="en">

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
        <meta name="generator" content="Hugo 0.72.0">
        <title>@yield('title')</title>
        @include('components.script.bootstrap-cdn')
        @include('components.script.tailwind-cdn')
        <script>
            tailwind.config = {
                prefix: "tw-"
            };
        </script>
        @yield('style')
        <style>
            .bd-placeholder-img {
                font-size: 1.125rem;
                text-anchor: middle;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }

            @media (min-width: 768px) {
                .bd-placeholder-img-lg {
                    font-size: 3.5rem;
                }
            }

            body {
                font-size: .875rem;
            }

            .feather {
                width: 16px;
                height: 16px;
                vertical-align: text-bottom;
            }

            /* Sidebar*/

            .sidebar {
                position: fixed;
                top: 0;
                bottom: 0;
                left: 0;
                z-index: 100;
                /* Behind the navbar */
                padding: 48px 0 0;
                /* Height of navbar */
                box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
            }

            @media (max-width: 767.98px) {
                .sidebar {
                    top: 5rem;
                }
            }

            .sidebar-sticky {
                position: relative;
                top: 0;
                height: calc(100vh - 48px);
                padding-top: .5rem;
                overflow-x: hidden;
                overflow-y: auto;
                /* Scrollable contents if viewport is shorter than content. */
            }

            .sidebar .nav-link {
                font-weight: 500;
                color: #333;
            }

            .sidebar .nav-link .feather {
                margin-right: 4px;
                color: #727272;
            }

            .sidebar .nav-link.active {
                color: #007bff;
            }

            .sidebar .nav-link:hover .feather,
            .sidebar .nav-link.active .feather {
                color: inherit;
            }

            .sidebar-heading {
                font-size: .75rem;
                text-transform: uppercase;
            }

            /*Navbar*/
            .navbar-brand {
                padding-top: .75rem;
                padding-bottom: .75rem;
                font-size: 1rem;
                background-color: rgba(0, 0, 0, .25);
                box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);
            }

            .navbar .navbar-toggler {
                top: .25rem;
                right: 1rem;
            }

            .navbar .form-control {
                padding: .75rem 1rem;
                border-width: 0;
                border-radius: 0;
            }

            .form-control-dark {
                color: #fff;
                background-color: rgba(255, 255, 255, .1);
                border-color: rgba(255, 255, 255, .1);
            }

            .form-control-dark:focus {
                border-color: transparent;
                box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);
            }

            .model {
                background-color: rgba(0, 0, 0, .1)
            }


            .ta table {
                /* Đã xóa border-radius ở đây */
            }

            table {
                border-radius: 8px;
                /* Áp dụng border-radius cho table */
                background-color: #ffffff;
                overflow: hidden;
                /* Ẩn phần dư thừa vượt quá radius */
                border: 1px solid #000;
                /* Thêm border cho table */
                padding: 4px;
                margin-top: 12px;
            }

            .table td {
                padding: 4px;
                vertical-align: middle;
                border: 1px solid #000;
                /* border-radius: 8px; */
                /* Áp dụng border-radius cho các ô */
            }

            .table th {
                text-align: center;
                border: 1px solid #000;
                padding: 4px;
            }

            /* Điều chỉnh border-radius cho header */
            .table th:first-child {
                border-top-left-radius: 8px;
            }

            .table th:last-child {
                border-top-right-radius: 8px;
            }
        </style>
    </head>

    <body onload="init()">
        @include('components.check-user')
        @include('components.topbar')
        <div class="container-fluid">
            <div class="row">
                @include('components.sidebar')
                <main class="col-md-9 ml-sm-auto col-lg-10 px-md-4 tw-bg-gray-300 tw-min-h-screen">
                    <h2 style="margin-top: 1rem;" class="tw-text-4xl tw-font-bold">@yield('title')</h2>
                    @component('components.message')
                    @endcomponent
                    <div id="layout-searchInput-box">

                        <div class="tw-text-xl tw-font-bold">Tìm kiếm: </div>
                        <input type="text" onkeyup="searchTable(event)"
                            class="tw-w-full tw-rounded-lg tw-p-2 tw-border tw-mb-4 tw-shadow-sm"
                            id="layout-searchInput">
                    </div>
                    <div class="table-responsive tw-mt-3">
                        <a href="#" onclick="event.preventDefault(); window.history.back();"
                            class="btn btn-primary tw-mr-2">
                            Trở lại
                        </a>
                        <a href="@yield('add-link')" class="btn btn-primary">Thêm</a>
                        <div class="ml-3">
                            @yield('table')
                        </div>
                    </div>
                </main>
            </div>
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/feather-icons/4.24.1/feather.min.js"
            integrity="sha384-EbSscX4STvYAC/DxHse8z5gEDaNiKAIGW+EpfzYTfQrgIlHywXXrM9SUIZ0BlyfF" crossorigin="anonymous">
        </script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.js"
            integrity="sha384-i+dHPTzZw7YVZOx9lbH5l6lP74sLRtMtwN2XjVqjf3uAGAREAF4LMIUDTWEVs4LI" crossorigin="anonymous">
        </script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js"
            integrity="sha384-oesi62hOLfzrys4LxRF63OJCXdXDipiYWBnvTl9Y9/TRlw5xlKIEHpNyvvDShgf/" crossorigin="anonymous">
        </script>
        @component('components.react-script-tag')
        @endcomponent
        <script>
            const init = () => {
                const searchInput = document.getElementById('layout-searchInput-box');
                const table = document.querySelector("table");
                if (table) searchInput.style.display = "block";
                else searchInput.style.display = "none";
            }
            const showConfirmModel = id => {
                document.getElementById('confirm-' + id).classList.add('d-flex');
                document.getElementById('confirm-' + id).classList.remove('d-none');
            }
            const closeConfirmModel = id => {
                document.getElementById('confirm-' + id).classList.add('d-none');
                document.getElementById('confirm-' + id).classList.remove('d-flex');
            }
            const searchTable = (event) => {
                const table = document.querySelector("tbody");
                const trs = table.getElementsByTagName("tr");
                const {
                    value: query
                } = event.target;
                let countRows = 0;
                const pagination = document.querySelector("#pagination");
                const existingAddBtn = pagination?.querySelector("a");
                const normalizedQuery = query.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
                // Loop through all rows of the table
                for (let i = 0; i < trs.length; i++) {
                    const tr = trs[i];
                    const tds = tr.getElementsByTagName("td");
                    let rowContainsQuery = false;

                    // Loop through each cell of the row
                    for (let j = 0; j < tds.length; j++) {
                        const td = tds[j];
                        const txtValue = td.textContent || td.innerText;
                        const normalizedTxtValue = txtValue.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
                        // Check if the current cell contains the search query
                        if (normalizedTxtValue.includes(normalizedQuery)) {
                            rowContainsQuery = true;
                            break;
                        }
                    }

                    // Show or hide the row based on the search result
                    if (rowContainsQuery) {
                        tr.style.display = ""; // Show the row
                        countRows++;
                    } else {
                        tr.style.display = "none"; // Hide the row
                    }
                }

                // Handle pagination visibility based on the number of visible rows
                if (countRows < trs.length) {
                    pagination.style.display = "none";
                } else {
                    pagination.style.display = "block";
                }

                // Handle the "add new" button if no results are found
                if (countRows < 1) {
                    if (!existingAddBtn) {
                        const addBtn = document.createElement("a");
                        addBtn.href = "@yield('add-link')";
                        addBtn.innerHTML = "Không tìm thấy kết quả, vui lòng thêm mới";
                        pagination.appendChild(addBtn);
                    }
                } else if (existingAddBtn) {
                    pagination.removeChild(existingAddBtn); // Remove the "add new" button if rows are found
                }
            };
        </script>
    </body>

    </html>
