<!doctype html>
<html lang="en">

<head>
    <title>Thông tin người dùng</title>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

    <!-- Bootstrap CSS v5.2.1 -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous" />
</head>

<body>
    @include('components.check-user')
    <?php
    $user = session()->get('user');
    ?>
    <header>
        @include('components.topbar')
    </header>
    <div class="container-fluid">
        <div class="d-flex">
            @include('components.sidebar')
            <section class="w-100 px-4 py-5" style="background-color: #9de2ff; border-radius: .5rem .5rem 0 0;">
                <div class="row d-flex justify-content-center">
                    <div class="col col-md-9 col-lg-7 col-xl-6">
                        <div class="card" style="border-radius: 15px;">
                            <div class="card-body p-4">
                                @include('components.message')
                                <div class="d-flex">
                                    <div class="flex-shrink-0">
                                        <img src="{{ $user->avatar ?? 'https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg' }}"
                                            alt="Generic placeholder image" class="img-fluid"
                                            style="width: 180px; border-radius: 10px;">
                                    </div>
                                    <div class="flex-grow-1 ms-3">
                                        <h5 class="mb-1">Tên đăng nhập: {{ $user->username }}</h5>
                                        <p class="mb-2 pb-1">Email: {{ $user->email }}</p>
                                        <div class="d-flex justify-content-start rounded-3 p-2 mb-2 bg-body-tertiary">
                                            <div class="w-50">
                                                <p class="small text-muted mb-1">Địa chỉ</p>
                                                <p class="mb-0">{{ $user->address }}</p>
                                            </div>
                                            <div class="px-3 w-50">
                                                <p class="small text-muted mb-1">Số điện thoại</p>
                                                <p class="mb-0">{{ $user->phone_number }}</p>
                                            </div>
                                        </div>
                                        <div class="d-flex pt-1">
                                            <a href="{{ route('user.edit') }}">
                                                <button type="button" data-mdb-button-init data-mdb-ripple-init
                                                    class="btn btn-outline-primary me-1 flex-grow-1">
                                                    Chỉnh sửa thông
                                                    tin
                                                </button>
                                            </a>
                                            <a href="{{ route('user.change-pasword') }}">
                                                <button type="button" data-mdb-button-init data-mdb-ripple-init
                                                    class="btn btn-primary flex-grow-1">
                                                    Chỉnh sửa mật khẩu
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
    <footer>
        <!-- place footer here -->
    </footer>
    <!-- Bootstrap JavaScript Libraries -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
        integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous">
    </script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
        integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossorigin="anonymous">
    </script>
</body>

</html>
