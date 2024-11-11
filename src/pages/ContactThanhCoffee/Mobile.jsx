import React from "react";
import { Box } from "@mui/material";
import NavBar from "../../component/layout/NavBar";
import { styles } from "../../styles";
import Layout from "../../component/layout";
import Footer from "../../component/layout/Footer";
import ChamSocKhachHangNutMauXanhNhat from "../../component/ChamSocKhachHangNutMauXanhNhat";
const Mobile = () => {
	return (
		<Box sx={{ ...styles.fontSize13 }}>
			<NavBar />
			<Layout.SecondaryBg>
				{/* <Box sx={{ ...styles.pad20, ...styles.backgroundColor.mauTrang }}>
          <Box
            sx={{
              fontWeight: 700,
              fontSize: "27px",
              textAlign: "center",
              p: "76px 0px 32px",
            }}
          >
            Liên hệ Thanh Coffee
          </Box>
          <Box sx={{ fontWeight: 700, fontSize: "27px", pb: "20px" }}>
            Yêu cầu bán hàng và sản phẩm
          </Box>
          <Box sx={{ fontWeight: 700, fontSize: "20px", pb: "8px" }}>
            Cửa hàng trực tuyến
          </Box>
          <Box sx={{ fontSize: "14px", pb: "20px", lineHeight: "150%" }}>
            Thethanhcoffee.com là nơi thuận tiện để mua các sản phẩm cà phê của
            Thanh và các nhà sản xuất khác. Bạn có thể mua trực tuyến hoặc gọi
            điện (+84) 0988.888.888
          </Box>
          <Box sx={{ fontSize: "14px", pb: "32px", lineHeight: "150%" }}>
            Bạn có thể nhận thông tin về đơn hàng của bạn đã đặt trên cửa hàng
            trực tuyến Apple thông qua trang Trạng thái đơn hàng. Nếu muốn bạn
            cũng có thể nhận trạng thái đơn hàng hoặc thực hiện thay đổi quá
            điện thoại tại: (+84) 0988.888.888
          </Box>
          <Box sx={{ fontWeight: 700, fontSize: "20px", pb: "8px" }}>
            Mua sắm với hỗ trợ ASL của SignTime
          </Box>
          <Box sx={{ fontSize: "14px", pb: "32px", lineHeight: "150%" }}>
            Thông dịch viên Ngôn ngữ Ký hiệu Hoa Kỳ (ASL) luôn sẵn sàng đáp ứng
            mọi nhu cầu mua sắm trực tuyến của bạn, ngay trong trình duyệt web
            của bạn. Kết nối với thông dịch viên
          </Box>
          <Box sx={{ fontWeight: 700, fontSize: "20px", pb: "8px" }}>
            Cửa hàng bán lẻ
          </Box>
          <Box sx={{ fontSize: "14px", pb: "32px", lineHeight: "150%" }}>
            Trải nghiệm phong cách sống tại bất kỳ Cửa hàng bán lẻ nào của The
            Thanh Coffee trên toàn quốc. Tìm giờ cửa hàng và thông tin liên lạc
            cho tất cả các điểm.
          </Box>
          <Box sx={{ fontWeight: 700, fontSize: "20px", pb: "8px" }}>
            Bán hàng cho doanh nghiệp và chính phủ
          </Box>
          <Box sx={{ fontSize: "14px", pb: "32px", lineHeight: "150%" }}>
            <ul style={{ margin: 0, paddingLeft: "20px" }}>
              <li>Doanh số bán hàng của The Thanh Coffee (+84) 0988.888.888</li>
              <li>
                Bánh hàng của chính phủ The Thanh Coffee (+84) 0966.666.666
              </li>
            </ul>
          </Box>
          <Box sx={{ fontWeight: 700, fontSize: "20px", pb: "8px" }}>
            Cách mua cho giáo dục
          </Box>
          <Box sx={{ fontSize: "14px", pb: "20px", lineHeight: "150%" }}>
            Nếu bạn là sinh viên hoặc giáo viên, hãy truy cập Thanh Store for
            Education hoặc gọi 1900.1009
          </Box>
          <Box sx={{ fontSize: "14px", pb: "40px", lineHeight: "150%" }}>
            Nếu bạn mua thay mặt cho một tổ chức giáo dục, hãy truy cập Thanh
            Store dành cho các tổ chức giáo dục hoặc gọi 1900.1009, 7 ngày một
            tuần từ 9 giờ sáng đến 6 giờ chiều.
          </Box>
        </Box>
        <Box
          sx={{
            ...styles.pad20,
            fontSize: "14px",
            ...styles.backgroundColor.xamE6E6E6,
            pb: "64px",
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Box
              sx={{
                p: "32px 0px 14px",
                fontSize: "18px",
                fontWeight: 600,
              }}
            >
              Địa chỉ công ty
            </Box>
            <Box sx={{ pb: "6px" }}>The Thanh Coffee</Box>
            <Box sx={{ pb: "6px" }}>Tòa nhà Toyota 15 Phạm Hùng, Hà Nội</Box>
            <Box sx={{ pb: "36px" }}>(+84) 1900.1009</Box>
          </Box>
          <Box sx={{ fontSize: "20px", lineHeight: "150%", pb: "34px" }}>
            Thông tin được yêu cầu thường xuyên
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            <Box>
              <Box sx={{ fontSize: "18px", fontWeight: 600, pb: "8px" }}>
                Hỗ trợ ID The Thanh Coffee
              </Box>
              <Box sx={{ pb: "12px", lineHeight: "150%" }}>
                Tìm hiểu thêm về cách nhận ID The Thanh Coffee và lợi ích của nó
              </Box>
              <Box>
                <ChamSocKhachHangNutMauXanhNhat value={"Tìm hiểu thêm"} />
              </Box>
            </Box>
            <Box>
              <Box sx={{ fontSize: "18px", fontWeight: 600, pb: "8px" }}>
                Sản phẩm của The Thanh Coffee
              </Box>
              <Box sx={{ pb: "12px", lineHeight: "150%" }}>
                Tìm hiểu cách nhận thêm các tùy chọn dịch vụ phần cứng và hỗ trợ
                cho các sản phẩm cà phê của bạn
              </Box>
              <Box>
                <ChamSocKhachHangNutMauXanhNhat value={"Tìm hiểu thêm"} />
              </Box>
            </Box>
            <Box>
              <Box sx={{ fontSize: "18px", fontWeight: 600, pb: "8px" }}>
                Dịch vụ
              </Box>
              <Box sx={{ pb: "12px", lineHeight: "150%" }}>
                Xem tất cả các tùy chọn sửa chữa và dịch vụ dựa trên sản phẩm và
                vị trí của bạn
              </Box>
              <Box>
                <ChamSocKhachHangNutMauXanhNhat value={"Tìm hiểu thêm"} />
              </Box>
            </Box>
            <Box>
              <Box sx={{ fontSize: "18px", fontWeight: 600, pb: "8px" }}>
                Cộng đồng hỗ trợ của The Thanh Coffee
              </Box>
              <Box sx={{ pb: "12px", lineHeight: "150%" }}>
                Trao và nhận trợ giúp cũng như lời khuyên từ hàng nghìn khách
                hàng khác của Thanh.
              </Box>
              <Box>
                <ChamSocKhachHangNutMauXanhNhat value={"Tìm hiểu thêm"} />
              </Box>
            </Box>
            <Box>
              <Box sx={{ fontSize: "18px", fontWeight: 600, pb: "8px" }}>
                Tình trạng dịch vụ
              </Box>
              <Box sx={{ pb: "12px", lineHeight: "150%" }}>
                Nhanh chóng và dễ dàng có được trạng thái của bạn.
              </Box>
              <Box>
                <ChamSocKhachHangNutMauXanhNhat value={"Tìm hiểu thêm"} />
              </Box>
            </Box>
            <Box>
              <Box sx={{ fontSize: "18px", fontWeight: 600, pb: "8px" }}>
                Các cơ hội nghề nghiệp
              </Box>
              <Box sx={{ pb: "12px", lineHeight: "150%" }}>
                Tìm cơ hội việc làm hiện tại, việc làm ở trường đại học, thực
                tập,..
              </Box>
              <Box>
                <ChamSocKhachHangNutMauXanhNhat value={"Tìm hiểu thêm"} />
              </Box>
            </Box>
            <Box>
              <Box sx={{ fontSize: "18px", fontWeight: 600, pb: "8px" }}>
                Thông tin truyền thông và phân tích
              </Box>
              <Box sx={{ pb: "12px", lineHeight: "150%" }}>
                Tìm cơ hội việc làm hiện tại, việc làm ở trường đại học, thực
                tập, v.v
              </Box>
              <Box>
                <ChamSocKhachHangNutMauXanhNhat value={"Tìm hiểu thêm"} />
              </Box>
            </Box>
            <Box>
              <Box sx={{ fontSize: "18px", fontWeight: 600, pb: "8px" }}>
                Đăng ký email
              </Box>
              <Box sx={{ pb: "12px", lineHeight: "150%" }}>
                Cập nhật địa chỉ email của bạn hoặc thay đổi trạng thái đăng ký
                của bạn.
              </Box>
              <Box>
                <ChamSocKhachHangNutMauXanhNhat value={"Tìm hiểu thêm"} />
              </Box>
            </Box>
            <Box>
              <Box sx={{ fontSize: "18px", fontWeight: 600, pb: "8px" }}>
                Các nhóm người sử dụng
              </Box>
              <Box sx={{ pb: "12px", lineHeight: "150%" }}>
                Hòa nhập với những người dùng cà phê khác trong khu vực của bạn.
              </Box>
              <Box>
                <ChamSocKhachHangNutMauXanhNhat value={"Tìm hiểu thêm"} />
              </Box>
            </Box>
          </Box>
        </Box> */}
				<Box
					sx={{
						mx: "24px",
					}}
					dangerouslySetInnerHTML={{
						__html: `<p style="text-align: center">
			<strong>
				<span style="font-size: 13.999999999999998pt">Liên hệ The Thanh Coffee</span>
			</strong>
		</p>
		<p>
			<br>
		</p>
		<p style="text-align: justify">
			<strong>
				<span style="font-size: 12pt">Liên hệ hỗ trợ:</span>
			</strong>
		</p>
		<p style="text-align: justify">
			<span style="font-size: 12pt">Cảm ơn quý khách đã tin tưởng và sử dụng sản phẩm của The Thanh Coffee. Để đảm bảo quý khách có trải nghiệm tốt nhất, chúng tôi luôn sẵn sàng hỗ trợ mọi thắc mắc và yêu cầu của quý khách.</span>
		</p>
		<p style="text-align: justify">
			<span style="font-size: 12pt">Thông tin liên hệ hỗ trợ:</span>
		</p>
		<ul>
			<li style="list-style-type: disc; font-size: 12pt">
				<p style="text-align: justify">
					<span style="font-size: 12pt">Email:&nbsp;</span>
					<strong>
						<span style="font-size: 12pt">hotro+(chủ đề hỗ trợ)@thanhcoffee.com</span>
					</strong>
				</p>
			</li>
			<li style="list-style-type: disc; font-size: 12pt">
				<p style="text-align: justify">
					<span style="font-size: 12pt">Hotline:&nbsp;</span>
					<strong>
						<span style="font-size: 12pt">(+84) 0911.830.666</span>
					</strong>
				</p>
			</li>
		</ul>
		<p style="text-align: justify">
			<strong>
				<span style="font-size: 12pt">Liên hệ Doanh nghiệp:</span>
			</strong>
		</p>
		<p style="text-align: justify">
			<span style="font-size: 12pt">The Thanh Coffee mong muốn hợp tác với các doanh nghiệp nhằm phát triển bền vững và nâng cao chất lượng sản phẩm. Thông tin liên hệ hợp tác qua số hotline (+84) 0911.830.666 để thảo luận về các cơ hội hợp tác đầu tư và đặt hàng với số lượng lớn.</span>
		</p>
		<p>
			<br>
		</p>
		<p style="text-align: justify">
			<strong>
				<span style="font-size: 12pt">Tìm kiếm cửa hàng:</span>
			</strong>
		</p>
		<p style="text-align: justify">
			<span style="font-size: 12pt">Để tìm cửa hàng The Thanh Coffee gần nhất, vui lòng sử dụng công cụ tìm kiếm cửa hàng trên trang web của chúng tôi. Chỉ cần nhập địa chỉ hoặc vị trí của bạn, công cụ sẽ hiển thị các cửa hàng gần nhất cùng thông tin chi tiết về địa chỉ, số điện thoại, và giờ mở cửa.</span>
		</p>
		<p>
			<br>
		</p>
		<p style="text-align: justify">
			<strong>
				<span style="font-size: 12pt">Hỗ trợ về sản phẩm của chúng tôi:</span>
			</strong>
		</p>
		<ul>
			<li style="list-style-type: disc; font-size: 12pt">
				<p style="text-align: justify">
					<span style="font-size: 12pt">Câu hỏi thường gặp: Truy cập phần FAQs trên trang web của chúng tôi, tìm kiếm câu trả lời cho các câu hỏi phổ biến về sản phẩm&nbsp;</span>
				</p>
			</li>
			<li style="list-style-type: disc; font-size: 12pt">
				<p style="text-align: justify">
					<span style="font-size: 12pt">Hỗ trợ trực tuyến: Sử dụng chức năng chat trực tiếp trên trang web để được hỗ trợ ngay lập tức từ đội ngũ chăm sóc khách hàng.</span>
				</p>
			</li>
			<li style="list-style-type: disc; font-size: 12pt">
				<p style="text-align: justify">
					<span style="font-size: 12pt">Điện thoại: Gọi trực tiếp đến số hotline (+84) 0911.830.666 nếu bạn cần hỗ trợ chi tiết về bất kỳ sản phẩm nào của chúng tôi.</span>
				</p>
			</li>
		</ul>
		<p>
			<br>
		</p>
		<p style="text-align: justify">
			<span style="font-size: 12pt">Chúng tôi rất mong nhận được phản hồi từ quý khách và sẽ nỗ lực hết mình để giải quyết các yêu cầu một cách nhanh chóng và chu đáo nhất.</span>
		</p>
		<p style="text-align: justify">
			<span style="font-size: 12pt">Trân trọng,</span>
		</p>
		<p style="text-align: justify">
			<strong>
				<span style="font-size: 12pt">Đội ngũ hỗ trợ khách hàng The Thanh Coffee</span>
			</strong>
		</p>
		<hr>
    <div style="padding: 16px 0">
		<p style="text-align: center">
			<strong>
				<span style="font-size: 13.999999999999998pt">Địa chỉ công ty&nbsp;</span>
			</strong>
		</p>
		<p style="text-align: center">
			<span style="font-size: 13pt">The Thanh Coffee</span>
		</p>
		<p style="text-align: center">
			<span style="font-size: 13pt">Tòa nhà Toyota,&nbsp;</span>
		</p>
		<p style="text-align: center">
			<span style="font-size: 13pt">15 Phạm Hùng, Hà Nội</span>
		</p>
		<p style="text-align: center;margin:0">
			<span style="font-size: 12pt">(+84) 0911.830.666</span>
		</p>
    </div>
`,
					}}
				></Box>
			</Layout.SecondaryBg>
			<Footer />
		</Box>
	);
};

export default Mobile;
