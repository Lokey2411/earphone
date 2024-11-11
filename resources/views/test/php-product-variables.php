<?php
$partText = "Thành phần";
$listnames = [
    [
        "id" => "",
        "displayText" => "__Chọn danh sách__"
    ]
];
foreach ($productLists as $list) {
    $listnames[] = [
        "id" => $list->name,
        "displayText" => $list->name
    ];
}
$categories = [['id' => '', 'displayText' => '__CHỌN PHÂN LOẠI__'], ['id' => 'size', 'displayText' => 'Kích cỡ'], ['id' => 'category', 'displayText' => 'Phân loại khác']];
$types = [['id' => '', 'displayText' => '__CHỌN LOẠI__'], ['id' => 'do-uong', 'displayText' => 'Đồ uống'], ['id' => 'do-an', 'displayText' => 'Đồ ăn']];
