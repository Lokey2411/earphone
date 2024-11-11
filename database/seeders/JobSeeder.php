<?php

namespace Database\Seeders;

use App\Models\Job;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class JobSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    private function createJobs(){
        $jobs = [
        [
            "departmentId"=>0,
            "type"=>"Cửa hàng",
            "description"=>"",
            "salary"=>100000000,
            "position"=>"Nhân viên phục vụ bán thời gian (Café attendant)",
            "image"=>"/static/media/thamgiathethanh2.3df2ac26897f9c6549f8.png",
        ],
        [
            "departmentId"=>0,
            "type"=>"Cửa hàng",
            "description"=>"",
            "salary"=>100000000,
            "position"=>"Nhân viên pha chế cà phê (Barista)",
            "image"=>"/static/media/thamgiathethanh2.3df2ac26897f9c6549f8.png",
        ],
        [
            "departmentId"=>0,
            "type"=>"Cửa hàng",
            "description"=>"",
            "salary"=>100000000,
            "position"=>"Nhân viên giám sát ca (Shift supervisor)",
            "image"=>"/static/media/thamgiathethanh2.3df2ac26897f9c6549f8.png",
        ],
        [
            "departmentId"=>0,
            "type"=>"Cửa hàng",
            "description"=>"",
            "salary"=>100000000,
            "position"=>"Trợ lý quản lý cửa hàng (Assistant store manager)",
            "image"=>"/static/media/thamgiathethanh2.3df2ac26897f9c6549f8.png",
        ],
        [
            "departmentId"=>0,
            "type"=>"Cửa hàng",
            "description"=>"",
            "salary"=>100000000,
            "position"=>"Người quản lý cửa hàng (Store manager)",
            "image"=>"/static/media/thamgiathethanh2.3df2ac26897f9c6549f8.png",
        ],
        [
            "departmentId"=>0,
            "type"=>"Cửa hàng",
            "description"=>"",
            "salary"=>100000000,
            "position"=>"Cộng sự tham gia chương trình Đào tạo Quản lý Bán lẻ (Retail management trainee)",
            "image"=>"/static/media/thamgiathethanh2.3df2ac26897f9c6549f8.png",
        ],
        [
            "departmentId"=>0,
            "type"=>"Văn phòng",
            "description"=>"",
            "salary"=>100000000,
            "position"=>"Nhân sự",
            "image"=>"/static/media/thamgiathethanh2.3df2ac26897f9c6549f8.png",
        ],
        [
            "departmentId"=>0,
            "type"=>"Văn phòng",
            "description"=>"",
            "salary"=>100000000,
            "position"=>"Mua hàng",
            "image"=>"/static/media/thamgiathethanh2.3df2ac26897f9c6549f8.png",
        ],
        [
            "departmentId"=>0,
            "type"=>"Văn phòng",
            "description"=>"",
            "salary"=>100000000,
            "position"=>"Marketing",
            "image"=>"/static/media/thamgiathethanh2.3df2ac26897f9c6549f8.png",
        ],
        [
            "departmentId"=>0,
            "type"=>"Văn phòng",
            "description"=>"",
            "salary"=>100000000,
            "position"=>"Trải nghiệm khách hàng",
            "image"=>"/static/media/thamgiathethanh2.3df2ac26897f9c6549f8.png",
        ],
        [
            "departmentId"=>0,
            "type"=>"Văn phòng",
            "description"=>"",
            "salary"=>100000000,
            "position"=>"Vận hành",
            "image"=>"/static/media/thamgiathethanh2.3df2ac26897f9c6549f8.png",
        ],
        [
            "departmentId"=>0,
            "type"=>"Văn phòng",
            "description"=>"",
            "salary"=>100000000,
            "position"=>"Tài chính",
            "image"=>"/static/media/thamgiathethanh2.3df2ac26897f9c6549f8.png",
        ],
    ];
        foreach($jobs as $j){
            Job::create($j);
        }
    }
    public function run(): void
    {
        //
        self::createJobs();
    }
}