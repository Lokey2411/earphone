import React from "react";
import { Box } from "@mui/material";
import { styles } from "../styles";
import NavBar from "../component/layout/NavBar";
import Layout from "../component/layout";
import Footer from "../component/layout/Footer";
const EFTransactionForRenter = () => {
	return (
		<Box sx={{ ...styles.fontSize13, fontSize: "14px" }}>
			<NavBar />
			<Layout.MainBg>
				<Box sx={{ ...styles.pad20 }}>
					<Box sx={{ fontSize: "24px", fontWeight: 600, p: "35px 0px 25px" }}>Chuyển tiền điện tử (EFT) chỉ dành cho chủ nhà</Box>
					<Box sx={{ fontSize: "12px", lineHeight: "150%" }}></Box>
					<Box
						sx={{
							textDecoration: "underline",
							pb: "20px",
						}}
					>
						Trung tâm hỗ trợ chủ nhà
					</Box>
					<Box sx={{ pb: "28px" }}>Chúng tôi khuyến khích Chủ nhà sử dụng chương trình thanh toán Chuyển tiền điện tử (EFT) miễn phí của chúng tôi để thực hiện quy trình thanh toán hiệu quả nhất. Sau đây là một số lợi ích và kỳ vọng khi Chủ nhà chọn thiết lập EFT:</Box>
					<ul style={{ margin: 0, paddingLeft: "20px" }}>
						<li>The ThanhCoffee sẽ gửi thông báo chuyển tiền 3 ngày trước khi tiền được thanh toán trực tiếp cho chủ nhà. Khoản tiền này thường được người nhận thanh toán nhận được trong khoảng thời gian 48-72 giờ trước khi tiền đổ bộ. Người nhận thanh toán có thể sử dụng bất kỳ địa chỉ email nào họ muốn để gửi thông báo chuyển tiền.</li>
						<li>Lời khuyên chuyển tiền được gửi qua email là thông báo trước về số tiền thanh toán và ngày thanh toán. Điều này giúp người nhận thanh toán nộp đơn xin tiền mặt và dự đoán dòng tiền kịp thời.</li>
						<li>EFT chuyển trực tiếp vào tài khoản ngân hàng của Chủ nhà. Điều này giúp loại bỏ thời gian chờ đợi có thể xảy ra khi ngân hàng xử lý.</li>
						<li>Điều này sẽ giúp loại bỏ khả năng thất lạc séc qua đường bưu điện và sẽ đảm bảo thanh toán đúng hạn miễn là tài khoản ngân hàng được cung cấp vẫn hoạt động.</li>
						<li>Tất cả tài khoản ngân hàng đã được kích hoạt cho EFT. Ngân hàng nhận sẽ không phải trả thêm phí để ghi lại số tiền được gửi vào tài khoản của Chủ nhà.</li>
						<li>Chủ nhà ở Việt Nam sẽ không phải chịu khả năng bị hải quan giữ lại khi chuyển séc qua dịch vụ bưu chính.</li>
					</ul>
					<Box sx={{ pt: "28px" }}>Để đăng ký EFT, hãy chọn một trong các tùy chọn sau:</Box>
					<ol style={{ margin: 0, paddingLeft: "20px" }}>
						<li>
							Gửi email tới{" "}
							<span
								style={{
									...styles.fontColor.xanhNhat006241,
									textDecoration: "underline",
								}}
							>
								<a href="#">chuyentiendientu@thethanhcoffee.vn</a>
							</span>{" "}
							để yêu cầu phong bì DocuSign bảo mật để hoàn tất trực tuyến.
						</li>
						<li>
							Hoàn thành Biểu mẫu thiết lập EFT bằng liên kết bên dưới và gửi đến{" "}
							<span
								style={{
									...styles.fontColor.xanhNhat006241,
									textDecoration: "underline",
								}}
							>
								<a href="#">chuyentiendientu@thethanhcoffee.vn</a>
							</span>{" "}
							.
						</li>
					</ol>
					<Box
						sx={{
							p: "28px 0px 60px",
							...styles.fontColor.xanhNhat006241,
							fontSize: "12px",
						}}
					>
						Biểu mẫu thiết lập EFT
					</Box>
				</Box>
			</Layout.MainBg>
			<Footer />
		</Box>
	);
};

export default EFTransactionForRenter;
