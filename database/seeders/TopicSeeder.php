<?php

namespace Database\Seeders;

use App\Models\Topic;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
class TopicSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    private function seedNavbar(){
        $items = [
            [
                // id:1
                "title" => "COFFEE",
                "link" => "#",
                "type" => "navbar",
                "parentTopicId" => 1
            ],
            [
                // id:2
                "title"=>"Menu",
                "link"=>"#",
                "type"=>"navbar",
                "parentTopicId"=>2
            ],
            [
                // id:3
                "title"=>"Tham gia THETHANH",
                "link"=>"#",
                "type"=>"navbar",
                "parentTopicId"=>3
            ],
            [
                // id:4
                "title"=>"Về chúng tôi",
                "link"=>"#",
                "type"=>"navbar",
                "parentTopicId"=>4
            ],
            [
                // id:5
                "title" => "Nguồn nguyên liệu",
                "link" => "/nguon-nguyen-lieu",
                "type" => "sub topic",
                "parentTopicId" => 1
            ],
            [
                // id:6
                "title" => "Sự tận tâm",
                "link" => "#",
                "type" => "sub topic",
                "parentTopicId" => 1
            ],
            [
                //id: 7
                "title"=>"Đồ uống",
                "link"=>"#",
                "type"=>"sub topic",
                "parentTopicId"=>2
            ],
            [
                //id:8
                "title"=>"Đồ ăn",
                "link"=>"#",
                "type"=>"sub topic",
                "parentTopicId"=>2
            ],
            [
                //id:9
                "title" => "Nguồn nguyên liệu",
                "link" => "#",
                "type" => "sub topic",
                "parentTopicId" => 1
            ],
            [
                // id:10
                "title" => "Cà phê & Espresso",
                "link" => "/chi-tiet-do-uong/1",
                "type" => "sub topic",
                "parentTopicId" => 7
            ],[
                // id:11
                "title" => "Cà phê Cappuchino",
                "link" => "/chi-tiet-do-uong/2",
                "type" => "sub topic",
                "parentTopicId" => 7
            ],
            [
                // id:12
                "title" => "Cà phê ủ lạnh",
                "link" => "/chi-tiet-do-uong/3",
                "type" => "sub topic",
                "parentTopicId" => 7
            ],
            [
                // id:13
                "title" => "Đồ uống có đá",
                "link" => "/chi-tiet-do-uong/4",
                "type" => "sub topic",
                "parentTopicId" => 7
            ],
            [
                // id:14
                "title" => "Trà & Socola",
                "link" => "/chi-tiet-do-uong/5",
                "type" => "sub topic",
                "parentTopicId" => 7
            ],
            [
                // id:15
                "title" => "Cà phê & Espresso",
                "link" => "/chi-tiet-do-uong/6",
                "type" => "sub topic",
                "parentTopicId" => 8
            ],[
                // id:16
                "title" => "Cà phê Cappuchino",
                "link" => "/chi-tiet-do-uong/7",
                "type" => "sub topic",
                "parentTopicId" => 8
            ],
            [
                // id:17
                "title" => "Cà phê ủ lạnh",
                "link" => "/chi-tiet-do-uong/8",
                "type" => "sub topic",
                "parentTopicId" => 8
            ],
            [
                // id:18
                "title" => "Đồ uống có đá",
                "link" => "/chi-tiet-do-uong/9",
                "type" => "sub topic",
                "parentTopicId" => 8
            ],
            [
                // id:19
                "title" => "Trà & Socola",
                "link" => "/chi-tiet-do-uong/10",
                "type" => "sub topic",
                "parentTopicId" => 8
            ],
            [
                // id:20
                "title" => "Giá trị & văn hóa",
                "link" => "#",
                "type" => "sub topic",
                "parentTopicId" => 3
            ],
            [
                // id:21
                "title" => "Tuyển dụng",
                "link" => "/tuyen-dung",
                "type" => "sub topic",
                "parentTopicId" => 3
            ],
            [
                // id:22
                "title" => "Tìm công việc",
                "link" => "/tim-cong-viec",
                "type" => "sub topic",
                "parentTopicId" => 3
            ],
            [
                // id:23
                "title" => "Cập nhật mới",
                "link" => "#",
                "type" => "sub topic",
                "parentTopicId" => 4
            ],
            [
                // id:24
                "title" => "Tin sản phẩm",
                "link" => "/trung-tam-tin-tuc",
                "type" => "sub topic",
                "parentTopicId" => 23
            ],
            [
                // id:25
                "title" => "Tin doanh nghiệp",
                "link" => "/trung-tam-tin-tuc",
                "type" => "sub topic",
                "parentTopicId" => 23
            ],
            [
                // id:26
                "title" => "Thông cáo báo chí",
                "link" => "/thong-cao-bao-chi",
                "type" => "sub topic",
                "parentTopicId" => 23
            ],
            [
                // id:27
                "title" => "Công ty của chúng tôi",
                "link" => "/cong-ty-cua-chung-toi",
                "type" => "sub topic",
                "parentTopicId" => 4
            ],
            [
                // id:28
                "title" => "Hồ sơ công ty",
                "link" => "/ho-so-cong-ty",
                "type" => "sub topic",
                "parentTopicId" => 4
            ],
            [
                // id:29
                "title" => "Dành cho đối tác",
                "link" => "#",
                "type" => "sub topic",
                "parentTopicId" => 29
            ],
            [
                // id:30
                "title" => "Hỗ trợ chủ nhà",
                "link" => "/ho-tro-chu-nha",
                "type" => "sub topic",
                "parentTopicId" => 29
            ],
            [
                // id:31
                "title" => "Nhà cung cấp",
                "link" => "/nha-cung-cap",
                "type" => "sub topic",
                "parentTopicId" => 29
            ],
            [
                // id:32
                "title" => "Liên hệ đầu tư",
                "link" => "/lien-he-dau-tu",
                "type" => "sub topic",
                "parentTopicId" => 29
            ],
            [
                // id:33
                "title" => "Đặt hàng",
                "link" => "#",
                "type" => "sub topic",
                "parentTopicId" => 33
            ],
            [
                // id:34
                "title" => "Vận chuyển & giao hàng",
                "link" => "/van-chuyen-va-giao-hang",
                "type" => "sub topic",
                "parentTopicId" => 33
            ],
            [
                // id:35
                "title" => "Dịch vụ khách hàng",
                "link" => "/dich-vu-khach-hang",
                "type" => "sub topic",
                "parentTopicId" => 33
            ],
            [
                // id:36
                "title" => "Trợ giúp mua sắm",
                "link" => "/tro-giup-mua-sam",
                "type" => "sub topic",
                "parentTopicId" => 33
            ],
            [
                // id:37
                "title" => "Tìm cửa hàng",
                "link" => "/tim-cua-hang",
                "type" => "sub topic",
                "parentTopicId" => 33
            ],
        ];
        foreach($items as $item){
            Topic::create($item);
        }
    }
    private function seedContact(){
        $items = [
            [
                // id:38
                "title" => "Yêu cầu bán hàng và sản phẩm",
                "link" => "#",
                "type" => "contact",
                "parentTopicId" =>38
            ],
            [
                // id:39
                "title"=>"Cửa hàng trực tuyến",
                "link"=>"#",
                "type"=>"contact",
                "parentTopicId"=>38
            ],
            [
                // id:40
                "title"=>"Mua sắm với hỗ trợ ASL của SignTime",
                "link"=>"#",
                "type"=>"contact",
                "parentTopicId"=>38
            ],
            [
                // id:41
                "title"=>"Cửa hàng bán lẻ",
                "link"=>"#",
                "type"=>"contact",
                "parentTopicId"=>38
            ],
            [
                // id:42
                "title"=>"Bán hàng cho doanh nghiệp và chính phủ",
                "link"=>"#",
                "type"=>"contact",
                "parentTopicId"=>38
            ],
            [
                // id:43
                "title"=>"Cách mua cho giáo dục",
                "link"=>"#",
                "type"=>"contact",
                "parentTopicId"=>38
            ],
            [
                // id:44
                "title"=>"Thethanhcoffee.com là nơi thuận tiện để mua các sản phẩm cà phê của Thanh và các nhà sản xuất khác. Bạn có thể mua trực tuyến hoặc gọi điện (+84) 0988.888.888",
                "link"=>"#",
                "type"=>"sub topic",
                "parentTopicId"=>39
            ],
            [
                // id:45
                "title"=>"Bạn có thể nhận thông tin về đơn hàng của bạn đã đặt trên cửa hàng trực tuyến Apple thông qua trang Trạng thái đơn hàng. Nếu muốn bạn cũng có thể nhận trạng thái đơn hàng hoặc thực hiện thay đổi quá điện thoại tại: (+84) 0988.888.888",
                "link"=>"#",
                "type"=>"sub topic",
                "parentTopicId"=>39
            ],
            [
                // id:46
                "title"=>"Thông dịch viên Ngôn ngữ Ký hiệu Hoa Kỳ (ASL) luôn sẵn sàng đáp ứng mọi nhu cầu mua sắm trực tuyến của bạn, ngay trong trình duyệt web của bạn. Kết nối với thông dịch viên",
                "link"=>"#",
                "type"=>"contact",
                "parentTopicId"=>40
            ],
            [
                // id:47
                "title"=>"Trải nghiệm phong cách sống tại bất kỳ Cửa hàng bán lẻ nào của The Thanh Coffee trên toàn quốc. Tìm giờ cửa hàng và thông tin liên lạc cho tất cả các điểm.",
                "link"=>"#",
                "type"=>"contact",
                "parentTopicId"=>41
            ],
            [
                // id:48
                "title"=>"Doanh số bán hàng của The Thanh Coffee (+84) 0988.888.888",
                "link"=>"#",
                "type"=>"contact",
                "parentTopicId"=>42
            ],
            [
                // id:49
                "title"=>"Bánh hàng của chính phủ The Thanh Coffee (+84) 0966.666.666",
                "link"=>"#",
                "type"=>"contact",
                "parentTopicId"=>42
            ],
            [
                // id:50
                "title"=>"Nếu bạn là sinh viên hoặc giáo viên, hãy truy cập Thanh Store for Education hoặc gọi 1900.1009",
                "link"=>"#",
                "type"=>"contact",
                "parentTopicId"=>43
            ],
            [
                // id:51
                "title"=>"Nếu bạn mua thay mặt cho một tổ chức giáo dục, hãy truy cập Thanh Store dành cho các tổ chức giáo dục hoặc gọi 1900.1009, 7 ngày một tuần từ 9 giờ sáng đến 6 giờ chiều.",
                "link"=>"#",
                "type"=>"contact",
                "parentTopicId"=>43
            ],
        ];
        foreach($items as $i){
            Topic::create($i);
        }
    }
    private function seedFooter(){
        
        $items = [
            [
                // id:1
                "title" => "COFFEE",
                "link" => "#",
                "type" => "navbar",
                "parentTopicId" => 1
            ],
            [
                // id:2
                "title"=>"Menu",
                "link"=>"#",
                "type"=>"navbar",
                "parentTopicId"=>2
            ],
            [
                // id:3
                "title"=>"Tham gia THETHANH",
                "link"=>"#",
                "type"=>"navbar",
                "parentTopicId"=>3
            ],
            [
                // id:4
                "title"=>"Về chúng tôi",
                "link"=>"#",
                "type"=>"navbar",
                "parentTopicId"=>4
            ],
            [
                // id:5
                "title" => "Nguồn nguyên liệu",
                "link" => "/nguon-nguyen-lieu",
                "type" => "sub topic",
                "parentTopicId" => 1
            ],
            [
                // id:6
                "title" => "Sự tận tâm",
                "link" => "#",
                "type" => "sub topic",
                "parentTopicId" => 1
            ],
            [
                //id: 7
                "title"=>"Đồ uống",
                "link"=>"#",
                "type"=>"sub topic",
                "parentTopicId"=>2
            ],
            [
                //id:8
                "title"=>"Đồ ăn",
                "link"=>"#",
                "type"=>"sub topic",
                "parentTopicId"=>2
            ],
            [
                //id:9
                "title" => "Nguồn nguyên liệu",
                "link" => "#",
                "type" => "sub topic",
                "parentTopicId" => 1
            ],
            [
                // id:10
                "title" => "Cà phê & Espresso",
                "link" => "/chi-tiet-do-uong/1",
                "type" => "sub topic",
                "parentTopicId" => 7
            ],[
                // id:11
                "title" => "Cà phê Cappuchino",
                "link" => "/chi-tiet-do-uong/2",
                "type" => "sub topic",
                "parentTopicId" => 7
            ],
            [
                // id:12
                "title" => "Cà phê ủ lạnh",
                "link" => "/chi-tiet-do-uong/3",
                "type" => "sub topic",
                "parentTopicId" => 7
            ],
            [
                // id:13
                "title" => "Đồ uống có đá",
                "link" => "/chi-tiet-do-uong/4",
                "type" => "sub topic",
                "parentTopicId" => 7
            ],
            [
                // id:14
                "title" => "Trà & Socola",
                "link" => "/chi-tiet-do-uong/5",
                "type" => "sub topic",
                "parentTopicId" => 7
            ],
            [
                // id:15
                "title" => "Cà phê & Espresso",
                "link" => "/chi-tiet-do-uong/6",
                "type" => "sub topic",
                "parentTopicId" => 8
            ],[
                // id:16
                "title" => "Cà phê Cappuchino",
                "link" => "/chi-tiet-do-uong/7",
                "type" => "sub topic",
                "parentTopicId" => 8
            ],
            [
                // id:17
                "title" => "Cà phê ủ lạnh",
                "link" => "/chi-tiet-do-uong/8",
                "type" => "sub topic",
                "parentTopicId" => 8
            ],
            [
                // id:18
                "title" => "Đồ uống có đá",
                "link" => "/chi-tiet-do-uong/9",
                "type" => "sub topic",
                "parentTopicId" => 8
            ],
            [
                // id:19
                "title" => "Trà & Socola",
                "link" => "/chi-tiet-do-uong/10",
                "type" => "sub topic",
                "parentTopicId" => 8
            ],
            [
                // id:20
                "title" => "Giá trị & văn hóa",
                "link" => "#",
                "type" => "sub topic",
                "parentTopicId" => 3
            ],
            [
                // id:21
                "title" => "Tuyển dụng",
                "link" => "/tuyen-dung",
                "type" => "sub topic",
                "parentTopicId" => 3
            ],
            [
                // id:22
                "title" => "Tìm công việc",
                "link" => "/tim-cong-viec",
                "type" => "sub topic",
                "parentTopicId" => 3
            ],
            [
                // id:23
                "title" => "Cập nhật mới",
                "link" => "#",
                "type" => "sub topic",
                "parentTopicId" => 4
            ],
            [
                // id:24
                "title" => "Tin sản phẩm",
                "link" => "/trung-tam-tin-tuc",
                "type" => "sub topic",
                "parentTopicId" => 23
            ],
            [
                // id:25
                "title" => "Tin doanh nghiệp",
                "link" => "/trung-tam-tin-tuc",
                "type" => "sub topic",
                "parentTopicId" => 23
            ],
            [
                // id:26
                "title" => "Thông cáo báo chí",
                "link" => "/thong-cao-bao-chi",
                "type" => "sub topic",
                "parentTopicId" => 23
            ],
            [
                // id:27
                "title" => "Công ty của chúng tôi",
                "link" => "/cong-ty-cua-chung-toi",
                "type" => "sub topic",
                "parentTopicId" => 4
            ],
            [
                // id:28
                "title" => "Hồ sơ công ty",
                "link" => "/ho-so-cong-ty",
                "type" => "sub topic",
                "parentTopicId" => 4
            ],
            [
                // id:29
                "title" => "Dành cho đối tác",
                "link" => "#",
                "type" => "sub topic",
                "parentTopicId" => 29
            ],
            [
                // id:30
                "title" => "Hỗ trợ chủ nhà",
                "link" => "/ho-tro-chu-nha",
                "type" => "sub topic",
                "parentTopicId" => 29
            ],
            [
                // id:31
                "title" => "Nhà cung cấp",
                "link" => "/nha-cung-cap",
                "type" => "sub topic",
                "parentTopicId" => 29
            ],
            [
                // id:32
                "title" => "Liên hệ đầu tư",
                "link" => "/lien-he-dau-tu",
                "type" => "sub topic",
                "parentTopicId" => 29
            ],
            [
                // id:33
                "title" => "Đặt hàng",
                "link" => "#",
                "type" => "sub topic",
                "parentTopicId" => 33
            ],
            [
                // id:34
                "title" => "Vận chuyển & giao hàng",
                "link" => "/van-chuyen-va-giao-hang",
                "type" => "sub topic",
                "parentTopicId" => 33
            ],
            [
                // id:35
                "title" => "Dịch vụ khách hàng",
                "link" => "/dich-vu-khach-hang",
                "type" => "sub topic",
                "parentTopicId" => 33
            ],
            [
                // id:36
                "title" => "Trợ giúp mua sắm",
                "link" => "/tro-giup-mua-sam",
                "type" => "sub topic",
                "parentTopicId" => 33
            ],
            [
                // id:37
                "title" => "Tìm cửa hàng",
                "link" => "/tim-cua-hang",
                "type" => "sub topic",
                "parentTopicId" => 33
            ],
        ];
    }
    public function run(): void
    {
        //
        // self::seedNavbar();
        // self::seedContact();
    }
}