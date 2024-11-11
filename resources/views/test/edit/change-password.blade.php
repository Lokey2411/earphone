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
                                <form action="{{ route('users.change-password.post', $user->id) }}" method="post">
                                    @csrf
                                    <div class="mb-3">
                                        <label for="old_password" class="form-label">Nhập mật khẩu cũ: </label>
                                        <input type="password" name="old_password" class="form-control" id="password">
                                    </div>
                                    <div class="mb-3">
                                        <label for="password" class="form-label">Mật khẩu mới: </label>
                                        <input type="password" name="password" class="form-control" id="password">
                                    </div>
                                    <div class="mb-3">
                                        <label for="repeat_password" class="form-label">Xác nhận mật khẩu: </label>
                                        <input type="password" name="repeat_password" class="form-control"
                                            id="password">
                                    </div>
                                    <button type="submit" class="btn btn-primary">Thay đổi</button>
                            </div>
                            </form>
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
