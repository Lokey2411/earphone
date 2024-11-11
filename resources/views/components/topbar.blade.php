<nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
    <a class="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="{{ route('show.users') }}">Thanh coffee</a>
    <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse"
        data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <a href="{{ route('user') }}">
        <div
            class="w-100 d-flex justify-content-center tw-text-blue-500 tw-underline tw-cursor-pointer tw-text-xl tw-font-bold">
            Thông tin người dùng
        </div>
    </a>
    <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
            <form action="{{ route('logout') }}" method="post">@csrf <button class="nav-link btn btn-dark"
                    type="submit">Đăng xuất <span data-feather="log-out"></button></form>
        </li>
    </ul>
</nav>
