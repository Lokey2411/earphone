@include('components.check-user')
<pre>
    {{ json_encode($data, JSON_PRETTY_PRINT) }}
</pre>
