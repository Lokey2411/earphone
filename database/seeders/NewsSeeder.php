<?php

namespace Database\Seeders;

use App\Models\News;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class NewsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public $types = ["TIN DOANH NGHIỆP" ,'THÔNG CÁO BÁO CHÍ',"TIN SẢN PHẨM"];
    private function newsPaperSeed(){
        $faker = Faker::create();
        $news = [
            [
                "title" => "The Thanh Coffee tăng thêm 100% lương cho nhân viên",
                "description" => "",
                "image" => "/static/media/tintuc1.0df01ef7a7973b575492.png",
                "time" => $faker->dateTime("now"),
                "departmentId" => 0,
                "subtitle" => "",
                "parent"=>'news',
                "type"=>"THÔNG CÁO BÁO CHÍ"
            ],
            [
                "title" => "Thành viên The Thanh Coffee được tha hồ tùy chỉnh món",
                "description" => "",
                "image" => "/static/media/tintuc1.0df01ef7a7973b575492.png",
                "time" => $faker->dateTime("now"),
                "departmentId" => 0,
                "subtitle" => "",
                "parent"=>'news',
                "type"=>"TIN DOANH NGHIỆP"
            ],
            [
                "title" => "Ra mắt đồ uống mới “FRENCH VANILA MILLE-FEUILE CATMILK”",
                "description" => "",
                "image" => "/static/media/tintuc1.0df01ef7a7973b575492.png",
                "time" => $faker->dateTime("now"),
                "departmentId" => 0,
                "subtitle" => "",
                "parent"=>'news',
                "type"=>"TÌM SẢN PHẨM"
            ],
            [
                "title" => "The Thanh Coffee tăng thêm 100% lương cho nhân viên",
                "description" => "",
                "image" => "",
                "time" => $faker->dateTime("now"),
                "departmentId" => 0,
                "subtitle" => "",
                "parent"=>"fast_news",
                "type"=>"other"
            ],
            [
                "title" => "Khi bạn đang ngủ: Tại sao The Thanh Coffee lại chuyển sang màu đỏ chỉ sau một đêm nghỉ lễ",
                "description" => "",
                "image" => "",
                "time" => $faker->dateTime("now"),
                "departmentId" => 0,
                "subtitle" => "",
                "parent"=>"fast_news",
                "type"=>"other"
            ],
            [
                "title" => "Cái gì tiếp theo? The Thanh Coffee công bố chiến lược tăng trưởng dài hạn cho một tương lại không giới hạn",
                "description" => "",
                "image" => "",
                "time" => $faker->dateTime("now"),
                "departmentId" => 0,
                "subtitle" => "",
                "parent"=>"fast_news",
                "type"=>"other"
            ],
            [
                "title" => "The Thanh Coffee công bố chiến lược tái tạo ba lần với nhiều con đường để tăng trưởng dài hạn",
                "description" => "",
                "image" => "",
                "time" => $faker->dateTime("now"),
                "departmentId" => 0,
                "subtitle" => "",
                "parent"=>"fast_news",
                "type"=>"other"
            ],
        ];
        foreach($news as $n){
            // check if news has been created
            $check = News::where('title', $n['title'])->first();
            if($check) continue;
            News::create($n);
        }
    }
    private function seedProducts(){
        for($i=0;$i<10;$i++){
            $faker = Faker::create();
            News::create([
                "title" => $faker->sentence(10),
                "description" => "",
                "image" => "",
                "time" => $faker->dateTimeBetween("-1 year","now"),
                "departmentId" => 0,
                "subtitle" => "",
                "parent"=>"product_news",
                "type"=>$faker->randomElement($this->types)
            ]);
        }
    }
    public function run(): void
    {
        //
        // self::newsPaperSeed();
        self::seedProducts();
    }
}