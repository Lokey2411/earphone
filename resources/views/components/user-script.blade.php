<script>
    let numRole = {{ $numRole ?? 0 }}
    const addRole = e => {
        e.preventDefault();
        numRole++;
        const exampleElement = document.getElementById("select-role");
        const newRole = document.createElement('select');
        let html = exampleElement.innerHTML;
        newRole.innerHTML = html;
        newRole.style.marginBottom = 4;
        console.log(newRole);
        newRole.name = exampleElement.name.replace("0", numRole);
        document.getElementById("roles").appendChild(newRole);
    }
</script>
