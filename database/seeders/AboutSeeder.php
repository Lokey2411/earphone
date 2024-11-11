<?php

namespace Database\Seeders;

use App\Models\About;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AboutSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    private function homeSeed(){
        $homes = [
            [
                "parent" => "/home",
                "title" => "Thưởng thức ly cafe của bạn",
                "subtitle" => "Thưởng thức cafe một cách thoải mái nhất ngay tại nhà của bạn.",
                "image"=>"/static/media/coffee1.36ed4bcdd81dbc633037.png"
            ],
            [
                "parent" => "/home",
                "title" => "Những hạt cà phê được tuyển chọn",
                "subtitle" => "Lưu lại những loại cafe yêu thích một cách dễ dàng và luôn có thứ để xem.",
                "image"=>"/static/media/coffeeSeed.4b98aaf2f8a2c3d550da.png"
            ]
        ];
        foreach ($homes as $home) {
            About::create($home);
        }
    }
    private function deliverySeed(){
        $deliveries = [
            [
                "parent"=>"/giao-hang",
                "title"=>"Rất nhiều điều tốt đẹp",
                "subtitle"=>"",
                "image"=>""
            ],
            [
                "parent"=>"/giao-hang/nice-things",
                "title"=>"Các sản phẩm mới theo mùa và thực đơn cố định",
                "subtitle"=>"Chúng tôi cũng có Frappuccino được khuyến nghị theo mùa và thực đơn giao hàng cố định kết hợp đồ uống và đồ ăn. Danh sách các set menu thay đổi tùy theo mùa, vì vậy hãy chờ đợi nhé.",
                "image"=>""
            ],
            [
                "parent"=>"/giao-hang/nice-things",
                "title"=>"Tùy chỉnh thú vị",
                "subtitle"=>"Đồ uống cũng có thể được tùy chỉnh. Mui xe cũng có thể được làm nóng. Hạt cà phê được giao cho bạn với mức độ xay mà bạn lựa chọn. Chúng tôi cũng có thể giao đậu nguyên trạng",
                "image"=>""
            ],
            [
                "parent"=>"/giao-hang/nice-things",
                "title"=>"Mang đến sự ngon miệng và an tâm",
                "subtitle"=>"Ống hút và túi giấy được đóng gói cẩn thận khi giao hàng. Cũng có nhiều cách để đảm bảo rằng sản phẩm không bị nguội hoặc giảm chất lượng.",
                "image"=>""
            ],
            [
                "parent"=>"/giao-hang",
                "title"=>"CHÚNG TÔI ĐỀ XUẤT CẢNH NÀY",
                "subtitle"=>"Mang hương vị The ThanhCoffee đến nhiều bối cảnh khác nhau trong cuộc sống hàng ngày của bạn.",
                "image"=>"/static/media/dexuat3.a224d6999da9bbdbfcca.png"
            ],
            [
                "parent"=>"/giao-hang",
                "title"=>"CHÚNG TÔI ĐỀ XUẤT CẢNH NÀY",
                "subtitle"=>"Mang hương vị The ThanhCoffee đến nhiều bối cảnh khác nhau trong cuộc sống hàng ngày của bạn.",
                "image"=>"/static/media/dexuat3.a224d6999da9bbdbfcca.png"
            ],
            [
                "parent"=>"/giao-hang",
                "title"=>"CHÚNG TÔI ĐỀ XUẤT CẢNH NÀY",
                "subtitle"=>"Mang hương vị The ThanhCoffee đến nhiều bối cảnh khác nhau trong cuộc sống hàng ngày của bạn.",
                "image"=>"/static/media/dexuat3.a224d6999da9bbdbfcca.png"
            ],
        ];
        foreach ($deliveries as $d) {
            About::create($d);
        }
    }
    private function companyProfileSeed(){
        $companyProfiles = [
            [
                "parent"=>"/ho-so-cong-ty",
                "title"=>"HỘI NGHỊ PHÂN TÍCH CHIẾN LƯỢC THE THANHCOFFEE",
                "subtitle"=>"",
                "image"=>"https://i.pinimg.com/474x/b1/3e/7a/b13e7aa3d557780f8fd5ad2271014c82.jpg"
            ],
            [
                "parent"=>"/ho-so-cong-ty",
                "title"=>"KẾT QUẢ TÌM KIẾM THU NHẬP QUÝ IV NĂM 2023",
                "subtitle"=>"",
                "image"=>"https://i.pinimg.com/474x/b1/3e/7a/b13e7aa3d557780f8fd5ad2271014c82.jpg"
            ],
            [
                "parent"=>"/ho-so-cong-ty",
                "title"=>"TỐI ƯU HÓA TRẢI NGHIỆM CỦA KHÁCH HÀNG",
                "subtitle"=>"",
                "image"=>"https://i.pinimg.com/474x/b1/3e/7a/b13e7aa3d557780f8fd5ad2271014c82.jpg"
            ],
            [
                "parent"=>"/ho-so-cong-ty",
                "title"=>"THE THANHCOFFEE DỰ KIẾN CÁN MỐC 10 CỬA HÀNG TẠI HÀ NỘI.",
                "subtitle"=>"",
                "image"=>"https://i.pinimg.com/474x/b1/3e/7a/b13e7aa3d557780f8fd5ad2271014c82.jpg"
            ],
        ];
        foreach ($companyProfiles as $companyProfile) {
            About::create($companyProfile);
        }
    }
    private function jobSeed()
    {
        $jobs = [
            [
                "parent" => "/tuyen-dung",
                "title" => "Đào tạo cơ bản",
                "subtitle" => "Chương trình đào tạo về Barista cung cấp chương trình đào tạo ban đầu cho một barista mới được tuyển dụng về các kỹ năng cần thiết và kiến thức cần thiết cho vai trò barista tại The Thanh Coffee Việt Nam. Thông qua việc sử dụng các công cụ đơn giản và trực quan, các kỹ năng được dạy thông qua đào tạo trực tiếp và tại chỗ. Đó là một trải nghiệm học tập hiệu quả cao dành cho một nhân viên pha chế mới, giúp nhanh chóng nâng cao sự tự tin và năng lực trong công việc mang lại trải nghiệm The Thanh Coffee",
                "image" => "/static/media/thamgiathethanh4.32b81d3ce0f3d5e77cf1.png"
            ],
            [
                "parent" => "/tuyen-dung",
                "title" => "Đào tạo nâng cao",
                "subtitle" => "Chương trình đào tạo Nâng cao được thiết kế để giúp chuẩn bị cho sáu tháng đầu tiêng trong vai trò quản lý tại The Thanh Coffee Việt Nam. Nó chứa thông tin về các biện pháp quản lý hiệu quả và bao gồm các chủ đề về giải quyết các vấn đề, cải thiện hiệu suất và quản lý trải nghiệm The Thanh Coffee, lao động, hàng tồn kho và tối đa hóa kết quả kinh doanh. Chương trình sử dụng phương thức phân phối kết hợp giữa ứng dụng và trực tiếp tại cửa hàng.",
                "image" => "/static/media/thamgiathethanh4.32b81d3ce0f3d5e77cf1.png"
            ],
        ];
        foreach ($jobs as $job) {
            About::create($job);
        }
    }
    public function run(): void
    {
        //
        // self::deliverySeed();
        // self::homeSeed();
        // self::companyProfileSeed();
        self::jobSeed();
    }
}