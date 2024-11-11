@if ($paginator->lastPage() > 1)
    <nav aria-label="Page navigation example" id="pagination">
        <ul class="pagination">
            @if (!$paginator->onFirstPage())
                <li class="page-item">
                    <a class="page-link" href="{{ $paginator->previousPageUrl() }}" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        <span class="sr-only">Previous</span>
                    </a>
                </li>
            @endif
            @foreach ($elements as $element)
                @if (is_string($element))
                    <li class="page-item"><a class="page-link" href="#">{{ $element }}</a></li>
                @endif
                @if (is_array($element))
                    @foreach ($element as $page => $url)
                        @if ($paginator->currentPage() == $page)
                            <li class="page-item"><a href="{{ $url }}"
                                    class="page-link active-page tw-bg-black tw-text-white">{{ $page }}</a>
                            </li>
                        @else
                            <li class="page-item"><a href="{{ $url }}"
                                    class="page-link">{{ $page }}</a>
                            </li>
                        @endif
                    @endforeach
                @endif
            @endforeach

            @if ($paginator->hasMorePages())
                <li class="page-item">
                    <a class="page-link" href="{{ $paginator->nextPageUrl() }}" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        <span class="sr-only">Next</span>
                    </a>
                </li>
            @endif
        </ul>
    </nav>
@endif
