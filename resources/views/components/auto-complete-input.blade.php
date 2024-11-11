<select name="{{ $name }}" id="" onchange="update{{ $name }}(event)">
    @foreach ($options as $option)
        <option value="{{ $option['id'] }}" {{ isset($value) && $value == $option['id'] ? 'selected' : '' }}>
            {{ $option['displayText'] }}</option>
    @endforeach
</select>
<input style="width: 10%; padding:4px;" type="text" name="{{ $name }}" id="{{ $name }}"
    placeholder="Lựa chọn khác: Nhập vào đây" value="{{ $value ?? '' }}">
<script>
    function update{{ $name }}(e) {
        document.getElementById(e.target.name).value = e.target.value;
    }
</script>
