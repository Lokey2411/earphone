<?php

namespace Database\Seeders;

use App\Models\Copyright;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CopyrightSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $data = [
            [
                "title" => "Tiêu chuẩn nhà cung cấp",
                "description" => "Trong hơn 1000 năm, The Thanh Coffee đã cống hiến hết mình để truyền cảm hứng và nuôi dưỡng tinh thần khu phố tại một thời điểm. Chúng tôi rất vinh dự được hợp tác với các nhà cung cấp, cho cả nhu cầu bán lẻ và phi bán lẻ, những người có cùng cam kết với chúng tôi trong việc nâng cao Trải nghiệm Thanh Cofee cho khách hàng và cộng đồng mà chúng tôi phục vụ.",
                "detailLink"=>"",
                "detailFile"=>"",
                "parent"=>"Tiêu chuẩn nhà cung cấp",
                "detailText"=>""
            ],
            [
                "title"=>"Điều khoản và Điều kiện tiêu chuẩn của The Thanh Coffee",
                "description"=>"Chúng tôi yêu cầu bản thân và các nhà cung cấp của chúng tôi phải tuân thủ các tiêu chuẩn cao nhất. Vui lòng xem lại những điều sau và đảm bảo bạn có thể cam kết:",
                "detailLink"=>"",
                "detailFile"=>"",
                "parent"=>"Điều khoản và Điều kiện tiêu chuẩn của The Thanh Coffee",
                'detailText'=>'Xem ngay'
            ],
            [
                "title"=>"Thỏa thuận Bí mật và Không tiết lộ (CNDA)",
                "description"=>"",
                "detailLink"=>"",
                "detailFile"=>"",
                "parent"=>"Thỏa thuận Bí mật và Không tiết lộ (CNDA)",
                "detailText"=>"mẫu CNDA"
            ],
            [
                "title"=>"Quy tắc ứng xử dành cho nhà cung cấp của The Thanh Coffee",
                "description"=>"",
                "detailLink"=>"",
                "detailFile"=>"",
                "parent"=>"Quy tắc ứng xử dành cho nhà cung cấp của The Thanh Coffee",
                "detailText"=>"Xem ngay"
            ],
            [
                "title"=>"Tiêu chuẩn an toàn và chất lượng thực phẩm và phi thực phẩm",
                "description"=>"",
                "detailLink"=>"",
                "detailFile"=>"",
                "parent"=>"Tiêu chuẩn an toàn và chất lượng thực phẩm và phi thực phẩm",
                "detailText"=>""
            ],
            [
                "title"=>"Tiêu chuẩn dành cho nhà cung cấp thực phẩm",
                "description"=>"",
                "detailLink"=>"",
                "detailFile"=>"",
                "parent"=>"Tiêu chuẩn an toàn và chất lượng thực phẩm và phi thực phẩm",
                "detailText"=>""
            ],
            [
                "title"=>"Tiêu chuẩn dành cho nhà cung cấp phi thực phẩm",
                "description"=>"",
                "detailLink"=>"",
                "detailFile"=>"",
                "parent"=>"Tiêu chuẩn an toàn và chất lượng thực phẩm và phi thực phẩm",
                "detailText"=>""
            ],
            [
                "title"=>"Tiêu chuẩn bảo mật chuỗi cung ứng của The Thanh Coffee",
                "description"=>"",
                "detailLink"=>"",
                "detailFile"=>"",
                "parent"=>"Tiêu chuẩn bảo mật chuỗi cung ứng của The Thanh Coffee",
                "detailText"=>"Xem ngay"
            ],
            [
                "title"=>"Tiêu chuẩn tìm nguồn cung ứng có trách nhiệm của The Thanh Coffee",
                "description"=>"Cam kết của chúng tôi là trở thành một doanh nghiệp có trách nhiệm.",
                "detailLink"=>"",
                "detailFile"=>"",
                "parent"=>"Tiêu chuẩn tìm nguồn cung ứng có trách nhiệm của The Thanh Coffee",
                "detailText"=>"Tìm hiểu thêm về Tìm nguồn cung ứng sản phẩm bền vững có đạo đức của The Thanh Coffee"
            ],
            [
                "title"=>"Tìm nguồn cung ứng có đạo đức",
                "description"=>"",
                "detailLink"=>"",
                "detailFile"=>"",
                "parent"=>"Tiêu chuẩn tìm nguồn cung ứng có trách nhiệm của The Thanh Coffee",
                "detailText"=>""
            ],
            [
                "title"=>"Tiêu chuẩn tìm nguồn cung ứng có đạo đức của The Thanh Coffee cho hàng hóa sản xuất",
                "description"=>"",
                "detailLink"=>"",
                "detailFile"=>"",
                "parent"=>"Tìm nguồn cung ứng có đạo đức",
                "detailText"=>""
            ],
            [
                "title"=>"Đạo luật minh bạch trong chuỗi cung ứng của Việt Nam",
                "description"=>"",
                "detailLink"=>"",
                "detailFile"=>"",
                "parent"=>"Tìm nguồn cung ứng có đạo đức",
                "detailText"=>""
            ],

        ];
        foreach($data as $item){
            Copyright::create($item);
        }
    }
}