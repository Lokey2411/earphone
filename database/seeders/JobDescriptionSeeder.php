<?php

namespace Database\Seeders;

use App\Models\JobDescription;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class JobDescriptionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    private function seedOfficeDesc(){

    }
    private function seedShopDesc(){
        $descs = [
            // cafe-attendant
            [
                "jobId" => 1,
                "description" => "Chịu trách nhiệm dọn dẹp và thực hiện các nhiệm vụ bảo trì quán.",
            ],
            [
                "jobId" => 1,
                "description" => "Thường làm việc trong thời gian cao điểm hoặc trong những dịp lễ Tết, thường làm việc ít hơn 40 giờ mỗi tuần.",
            ],
            // barista
            [
                "jobId" => 2,
                "description" => "Chịu trách nhiệm chuẩn bị đồ uống nóng và lạnh.",
            ],
            [
                "jobId" => 2,
                "description" => "Giao dịch thu ngân.",
            ],
            [
                "jobId" => 2,
                "description" => "Đảm bảo sự sạch sẽ và ngăn nắp của cửa hàng.",
            ],
            [
                "jobId" => 2,
                "description" => "Bán lẻ sản phẩm.",
            ],
            [
                "jobId" => 2,
                "description" => "Cung cấp dịch vụ khách hàng xuất sắc.",
            ],
            [
                "jobId" => 2,
                "description" => "Thường làm việc ít hơn 40 giờ một tuần.",
            ],
            // shift supervisor
            [
                "jobId" => 3,
                "description" => "Thực hiện tất cả các nhiệm vụ của một nhân viên pha chế cà phê.",
            ],
            [
                "jobId" => 3,
                "description" => "Giúp đỡ hướng dẫn công việc của các nhân viên khác.",
            ],
            [
                "jobId" => 3,
                "description" => "Giúp đỡ khách hàng gọi đồ và thu ngân.",
            ],
            // assistant store manage
            [
                "jobId" => 4,
                "description" => "Hỗ trợ quản lý cửa hàng trong các hoạt động chung.",
            ],
            // store manager
            [
                "jobId" => 5,
                "description" => "Chịu trách nhiệm cuối cùng về mọi hoạt động của cửa hàng.",
            ],
            [
                "jobId" => 5,
                "description" => "Chỉ đạo công việc của (các) trợ lý quản lý cửa hàng, giám sát ca và nhân viên pha chế."
            ],
            [
                "jobId" => 5,
                "description" => "Chịu trách nhiệm các quyết định về nhân sự, lập kế hoạch, tiền lương và quyết định tài chính."
            ],
            // Retail management trainee
            [
                "jobId"=>6,
                "description"=>"Tham gia chương trình đào tạo chuẩn bị cho vị trí quản lý cửa hàng."
            ]
        ];
        foreach($descs as $desc){
            JobDescription::create($desc);
        }
    }
    public function run(): void
    {
        //
        self::seedShopDesc();
    }
}