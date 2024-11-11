@php
    $counts = [
        'category' => isset($categories) ? max(count($categories) - 1, 0) : 0,
        'introduction' => isset($introductions) ? max(count($introductions) - 1, 0) : 0,
        'part' => isset($parts) ? max(count($parts) - 1, 0) : 0,
        'nutrition' => isset($nutritions) ? max(count($nutritions) - 1, 0) : 0,
        'suggestion' => isset($suggestions) ? max(count($suggestions) - 1, 0) : 0,
        'optional' => isset($optionals) ? max(count($optionals) - 1, 0) : 0,
        'otherDescription' => isset($otherDescriptions) ? max(count($otherDescriptions) - 1, 0) : 0,
        'attachment' => isset($attachments) ? max(count($attachments) - 1, 0) : 0,
        'certificate' => isset($certificates) ? max(count($certificates) - 1, 0) : 0,
    ];
@endphp

<script>
    const counts = @json($counts);

    function updateTextArea(parent, count, name) {
        const textarea = parent.querySelector("textarea");
        if (!textarea) return;
        textarea.name = `${name}_${count}`;
        textarea.id = textarea.name;
        textarea.value = "";
    }

    function addSection(section, prefix) {
        let newSection = document.createElement('div');
        const exampleSection = document.getElementById(`${section}-example`);
        newSection.innerHTML = exampleSection.innerHTML;
        newSection.style = {
            ...exampleSection.style
        }
        console.log(exampleSection.classList)
        newSection.className = new Array(exampleSection.classList).join(" ");
        newSection.querySelector("label").innerText = `${prefix} ${++counts[section]}: `;

        // Sao chép các thuộc tính style từ exampleSection sang newSection
        for (let styleName of exampleSection.style) {
            newSection.style[styleName] = exampleSection.style[styleName];
        }

        const inputs = newSection.querySelectorAll("input, select");
        inputs.forEach(input => {
            const name = input.name;
            input.name = name.replace(`0`, `${counts[section]}`);
            input.id = name.replace(`0`, `${counts[section]}`);
            input.value = "";
        });

        document.getElementById(pluralize(section)).appendChild(newSection);
    }

    // Các hàm add
    const sections = {
        addCategory: ["category", "Phân loại"],
        addIntroduction: ["introduction", "Giới thiệu Tùy chỉnh"],
        addPart: ["part", "Thành phần"],
        addNutrition: ["nutrition", "Thành phần"],
        addSuggestion: ["suggestion", "Gợi ý"],
        addOptional: ["optional", "Mô tả tùy chỉnh"],
        addOtherDescription: ["otherDescription", "Mô tả khác"],
        addAttachment: ["attachment", "Tiêu đề file"],
        addCertificate: ["certificate", "Tài nguyên tham khảo"]
    };
    Object.keys(sections).forEach(section => {
        window[section] = function(e) {
            e.preventDefault();
            addSection(sections[section][0], sections[section][1]);
        };
    });
</script>
