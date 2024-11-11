<?php

namespace Database\Seeders;

use App\Models\SupportedInformation;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class SupportedInformationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $informations = [
        [
            "description" => "Xem sản phẩm của bạn",
            "title" => "Đăng nhập bằng ID TheThanhCoffee của bạn để nhận sự hỗ trợ phù hợp với cá nhân và tìm hiểu phạm vi bảo hành.",
            "detail" => "",
            "detailLink" => "",
            "detailText" => "Đăng nhập"
        ],
        [
            "description" => "Xem sản phẩm của bạn",
            "title" => "Bạn cũng có thể bắt đầu bằng cách chọn một sản phẩm và tìm sự cố của mình.",
            "detail" => "",
            "detailLink" => "",
            "detailText" => "Chọn một sản phẩm"
        ],
        [
            "description" => "Xem sản phẩm của bạn",
            "title" => "Xem các lịch đặt trước, trường hợp hỗ trợ, cuộc gọi và cuộc trò chuyện (gần đây hoặc sắp tới).",
            "detail" => "",
            "detailLink" => "",
            "detailText" => "Xem hoạt động"
        ],
    ];
    foreach($informations as $i){
        SupportedInformation::create($i);
    }
    }
}