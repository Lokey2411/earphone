import React, { useState } from "react";
import { Box, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import NavBar from "../../component/layout/NavBar";
import { styles } from "../../styles";
import Layout from "../../component/layout";
import Footer from "../../component/layout/Footer";
import AddressIconSSize from "../../component/svg/icon/AddressIconSSize";
import ArrowDownBlack from "../../component/svg/icon/ArrowDownBlack";
import Form from "../../component/ContactNumber/Form";

const Desktop = () => {
	const myStyles = {
		flexBetween: {
			display: "flex",
			justifyContent: "space-between",
		},
		fontBold: {
			fontSize: "24px",
			fontWeight: "700",
			pb: "4px",
		},
		formControl: {
			width: "60%",
		},
		arcordionBorder: {
			borderBottom: "1px solid black",
			"&>.Mui-expanded": { border: "1px solid #000" },
			"&.Mui-expanded": { margin: 0 },
			borderRadius: 0,
			boxShadow: 0,
			"&:last-of-type,&:first-of-type": {
				borderRadius: 0,
			},
			"&.accordion-first": {
				borderTop: "1px solid black",
			},
		},
		arcordionSummary: {
			pl: "50px",
			pr: "25px",
			fontSize: 24,
		},
	};
	const [questionFormState, setQuestionFormState] = useState({
		firstName: "",
		lastName: "",
		email: "",
		company: "",
		type: "",
		content: "",
		isAccept: false,
	});
	const handleQuestionFormStateChange = (e) => {
		setQuestionFormState({ ...questionFormState, [e.target.name]: e.target.value });
	};
	const handleQuestionFormSubmit = () => {};
	return (
		<Box sx={{ ...styles.fontSize13 }}>
			<NavBar />
			<Layout.MainBg>
				<Box
					sx={{
						background: "#1E3932",
						// p: "54px 86px",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						textAlign: "center",
						height: "100vh",
					}}
				>
					<p style={{ color: "#FFFFFF", fontSize: "60px", fontWeight: "700", textTransform: "uppercase" }}>Liên hệ với chúng tôi</p>
					<Box sx={{ fontSize: "24px", color: "#fff" }}>
						Chúng tôi đánh giá cao sự quan tâm của bạn đến The Thanh Coffee.
						<Box>Vui lòng chọn từ các tùy chọn bên dưới.</Box>
					</Box>
				</Box>
				<Box sx={{ p: "24px", mt: "78px" }}>
					<Box sx={{ fontWeight: "700", fontSize: "50px", pb: "14px" }}>Thắc mắc chung</Box>
					{/* Phone number section */}
					<Box sx={myStyles.flexBetween}>
						<Box>
							<Box sx={myStyles.fontBold}>1900 1009</Box>
							<Box sx={{ fontSize: "24px" }}>Số điện thoại miễn từ Hà Nội</Box>
						</Box>
						<Box>
							<Box sx={myStyles.fontBold}>1900 1009</Box>
							<Box sx={{ fontSize: "24px" }}>Bên ngoài Việt Nam</Box>
						</Box>
						<Box>
							<Box sx={myStyles.fontBold}>Tìm một địa điểm</Box>
							<Box sx={{ lineHeight: "24px" }}>Xem danh sách thông tin cửa hàng The Thanh Coffee địa phương</Box>
							<Box
								sx={{
									display: "flex",
									pt: "20px",
									alignItems: "center",
								}}
							>
								<Box sx={{ pr: "8px" }}>
									<AddressIconSSize />
								</Box>
								<Box sx={{ color: "#06542D", fontSize: "14px", cursor: "pointer", textDecoration: "underline" }}>Tìm địa điểm văn phòng</Box>
							</Box>
						</Box>
					</Box>
				</Box>
				<Box sx={{ p: "16px 24px" }}>
					<Box sx={{ fontSize: "50px", fontWeight: "700", p: 0, mb: "50px" }}>Đối với các câu hỏi cụ thể, hãy liên hệ dưới đây</Box>
					<Accordion
						sx={{ p: 0, ...myStyles.arcordionBorder }}
						className="accordion-first"
					>
						<AccordionSummary
							sx={myStyles.arcordionSummary}
							expandIcon={<ArrowDownBlack />}
							aria-controls="panel1-content"
							id="panel1-header"
						>
							Gửi cho chúng tôi một câu hỏi
						</AccordionSummary>
						<AccordionDetails sx={{ bgcolor: "#D9D9D9", p: "16px 12px 20px 12px" }}>
							<Box>
								<Box sx={{ fontSize: "24px" }}>Cảm ơn bạn đã quan tâm đến dịch vụ của The Thanh Coffee. Vui lòng cung cấp thông tin sau về nhu cầu kinh doanh cua bạn để giúp chúng tôi phục vụ bạn tốt hơn. Thông tin này sẽ cho phép chúng tôi chuyển yêu cầu của bạn đến người thích hợp. Bạn sẽ nhận được phản hồi trong vòng một đến hai ngày làm việc.</Box>
								<Box
									sx={{
										fontWeight: "700",
										fontSize: "24px",
										p: "20px 0 14px 0",
									}}
								>
									Tất cả các trường hợp được yêu cầu khi hoàn thành biểu mẫu này.
								</Box>
								<Form.Question
									handleSubmit={handleQuestionFormSubmit}
									formState={questionFormState}
									handleFormStateChange={handleQuestionFormStateChange}
								/>
							</Box>
						</AccordionDetails>
					</Accordion>

					<Box>
						<Accordion sx={{ p: 0, ...myStyles.arcordionBorder }}>
							<AccordionSummary
								sx={myStyles.arcordionSummary}
								expandIcon={<ArrowDownBlack />}
								aria-controls="panel1-content"
								id="panel1-header"
							>
								Địa điểm cửa hàng The Thanh Coffee
							</AccordionSummary>
							<AccordionDetails style={{ fontSize: 24, ...styles.backgroundColor.xamD9, padding: "20px 50px" }}>
								{/* SaintGiong */}
								<Box>
									Tầng 5, Tòa nhà Toyota, số 15 Phạm Hùng, Nam Từ Liêm, Hà Nội.
									<Box>Điện thoại: 1900.1009</Box>
								</Box>
								<Box sx={{ mt: 30 / 4 }}>
									147 Đội Cấn, Ba Đình, Hà Nội
									<Box>Điện thoại: 1900.1009</Box>
								</Box>
							</AccordionDetails>
						</Accordion>
						<Accordion sx={{ ...myStyles.arcordionBorder }}>
							<AccordionSummary
								expandIcon={<ArrowDownBlack />}
								aria-controls="panel1-content"
								id="panel1-header"
								sx={{
									...styles.fontSize13,
									...myStyles.arcordionSummary,
								}}
							>
								Người tìm việc
							</AccordionSummary>
							<AccordionDetails>
								<Form.Job />
							</AccordionDetails>
						</Accordion>
						<Accordion sx={{ ...myStyles.arcordionBorder, p: 0 }}>
							<AccordionSummary
								expandIcon={<ArrowDownBlack />}
								aria-controls="panel1-content"
								id="panel1-header"
								sx={{
									...styles.fontSize13,
									...myStyles.arcordionSummary,
								}}
							>
								Truyền thông tin tức / Nhà phân tích
							</AccordionSummary>
							<AccordionDetails sx={{ p: 0 }}>
								<Box sx={{ padding: "30px 50px", ...styles.backgroundColor.xamD9 }}>
									<Box
										sx={{
											fontWeight: "600",
											fontSize: 50,
											borderBottom: "1px solid #000",
											paddingBottom: 30 / 4,
										}}
									>
										Liên hệ PR
									</Box>
									<Box
										sx={{
											py: 30 / 4,
										}}
									>
										<Box sx={{ fontWeight: "600", fontSize: 36 }}>Quan hệ doanh nghiệp và truyền thông & phân tích của The Thanh</Box>
										<Box sx={{ ml: 50 / 4, mt: 10, mb: 5 }}>
											<Box sx={{ fontWeight: "600", fontSize: 24 }}>MS. Mike Khanh</Box>
											<Box>Hà Nội, VN.</Box>
											<a
												href="tel:0988.888.888"
												style={{
													color: "#06542D",
													textDecoration: "underline",
													lineHeight: "18px",
												}}
											>
												0988.888.888
											</a>
										</Box>
									</Box>
								</Box>
							</AccordionDetails>
						</Accordion>
						<Accordion sx={{ ...myStyles.arcordionBorder }}>
							<AccordionSummary
								expandIcon={<ArrowDownBlack />}
								aria-controls="panel1-content"
								id="panel1-header"
								sx={{
									...styles.fontSize13,
									...myStyles.arcordionSummary,
								}}
							>
								Nhà đầu tư
							</AccordionSummary>
							<AccordionDetails>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</AccordionDetails>
						</Accordion>
						<Accordion sx={{ ...myStyles.arcordionBorder }}>
							<AccordionSummary
								expandIcon={<ArrowDownBlack />}
								aria-controls="panel1-content"
								id="panel1-header"
								sx={{
									...styles.fontSize13,
									...myStyles.arcordionSummary,
								}}
							>
								Nhân viên The Thanh Coffee
							</AccordionSummary>
							<AccordionDetails>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</AccordionDetails>
						</Accordion>
						<Accordion sx={{ ...myStyles.arcordionBorder, p: 0 }}>
							<AccordionSummary
								expandIcon={<ArrowDownBlack />}
								aria-controls="panel1-content"
								id="panel1-header"
								sx={{
									...styles.fontSize13,
									...myStyles.arcordionSummary,
								}}
							>
								Các nhà cung cấp
							</AccordionSummary>
							<AccordionDetails sx={{ padding: 0 }}>
								<Box sx={{ fontSize: 24, ...styles.backgroundColor.xamD9, padding: "20px 50px" }}>
									Dịch vụ này cho phép các công ty cung cấp hàng hóa và/hoặc dịch vụ cho Accenture xem trạng thái hóa đơn và thông tin thanh toán của họ qua internet, giúp quá trình chia sẻ dữ liệu hiệu quả hơn nhiều. Điều này cho phép bạn xem trực tiếp trạng thái hóa đơn của mình trong hệ thống kế toán của chúng tôi vào thời điểm phù hợp với bạn 24 giờ một ngày, 7 ngày một tuần.
									<br />
									<br />
									Nếu bạn đã CÓ TRUY CẬP vào dịch vụ này, hãy nhấp vào{" "}
									<a href="/nha-cung-cap">
										<u style={{ ...styles.fontColor.xanhNhat006241, cursor: "pointer" }}>Cổng thông tin nhà cung cấp.</u>
									</a>
									<br />
									<br />
									Nếu bạn KHÔNG CÓ TRUY CẬP và muốn yêu cầu quyền truy cập, vui lòng gửi email có dòng tiêu đề 'Yêu cầu truy cập cổng thông tin nhà cung cấp' tới người liên hệ ở quốc gia của bạn từ danh sách này Danh sách liên hệ trên cổng thông tin nhà cung cấp.
								</Box>
							</AccordionDetails>
						</Accordion>
						<Accordion sx={{ ...myStyles.arcordionBorder }}>
							<AccordionSummary
								expandIcon={<ArrowDownBlack />}
								aria-controls="panel1-content"
								id="panel1-header"
								sx={{
									...styles.fontSize13,
									...myStyles.arcordionSummary,
								}}
							>
								Quản lý tùy chọn và chọn không tham gia
							</AccordionSummary>
							<AccordionDetails sx={{ padding: "20px 50px", ...styles.backgroundColor.xamD9, fontSize: 24 }}>Sử dụng liên kết “Hủy đăng ký” trên bất kỳ email nào của Accenture để chọn không nhận bản tin/thông báo cụ thể đó.</AccordionDetails>
						</Accordion>
					</Box>
				</Box>
			</Layout.MainBg>
			<Footer />
		</Box>
	);
};

export default Desktop;
