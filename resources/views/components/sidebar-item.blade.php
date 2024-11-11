<li class="nav-item ">
    <a class="nav-link {{ str_contains(URL::full(), '/' . $route) ? 'text-primary' : '' }}"
        href="{{ route('show.' . $route) }}">
        <span data-feather="file"></span>
        {{ $displayText }}
    </a>
</li>
