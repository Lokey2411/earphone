<div id="confirm-{{ $confirmId }}"
    class="fixed-top fixed-bottom model justify-content-center align-items-center modal d-none">
    <div class="bg-light w-50 p-5 rounded-2">
        <p>{{ $confirmMessage }} </p>
        <div class="d-flex justify-content-end w-100">
            <button type="button" onclick="closeConfirmModel({{ $confirmId }})"
                class="btn btn-secondary btn-hover mr-2">Cancel</button>
            <form action="{{ $confirmAction }}" method="POST">
                <button type="submit" class="btn btn-danger">
                    @csrf
                    @method('DELETE')
                    Delete</button>
            </form>
        </div>
    </div>
</div>
