import React, { useState } from "react";
import { Box, Accordion, AccordionSummary, AccordionDetails, TextField, FormControl, Typography, InputLabel, Select, MenuItem, TextareaAutosize, Checkbox } from "@mui/material";
import NavBar from "../../component/layout/NavBar";
import { styles } from "../../styles";
import Layout from "../../component/layout";
import Footer from "../../component/layout/Footer";
import MapsIcon from "../../component/svg/icon/MapsIcon";
import ArrowDownBlack from "../../component/svg/icon/ArrowDownBlack";
import TichXICon from "../../component/svg/icon/TichXICon";

const Mobile = () => {
	const [isOpenFormMap, setIsOpenFormMap] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();
		// Xử lý dữ liệu form ở đây
	};
	const openformmap = () => {
		setIsOpenFormMap(true);
	};
	const closeformmap = () => {
		setIsOpenFormMap(false);
	};
	return (
		<Box sx={{ ...styles.fontSize13 }}>
			<NavBar />
			<Layout.MainBg>
				<Box
					sx={{
						background: "#02492A",
						color: "#FFFFFF",
						fontSize: "30px",
						textAlign: "center",
						p: "54px 86px",
						fontWeight: "700",
					}}
				>
					Liên hệ với chúng tôi
				</Box>
				<Box sx={{ p: "24px", pt: "78px" }}>
					<Box sx={{ fontSize: "16px", pb: "40px" }}>Chúng tôi đánh giá cao sự quan tâm của bạn đến The Thanh Coffee. Vui lòng chọn từ các tùy chọn bên dưới.</Box>
					<Box sx={{ fontWeight: "700", fontSize: "16px", pb: "14px" }}>Thắc mắc chung</Box>
					<Box
						sx={{
							fontSize: "30px",
							fontWeight: "700",
							pb: "4px",
						}}
					>
						1900 1009
					</Box>
					<Box sx={{ fontSize: "14px", pb: "30px" }}>Số điện thoại miễn trừ từ miền Đông nước Anh</Box>
					<Box
						sx={{
							fontSize: "30px",
							fontWeight: "700",
							pb: "4px",
						}}
					>
						1900 1009
					</Box>
					<Box sx={{ fontSize: "14px" }}>Số điện thoại miễn trừ từ miền Đông nước Anh</Box>
				</Box>
				<Box sx={{ p: "16px 24px" }}>
					<Box
						sx={{
							fontSize: "16px",
							fontWeight: "700",
							bgcolor: "#DBDAD5",
							p: "8px 24px",
						}}
					>
						Liên hệ với chúng tôi
					</Box>
					<Box sx={{ fontSize: "24px", fontWeight: "700", pt: "16px", pb: "8px" }}>Tìm một địa điểm</Box>
					<Box sx={{ lineHeight: "18px" }}>Xem danh sách thông tin cửa hàng The Thanh Coffee địa phương</Box>
					<Box
						sx={{
							display: "flex",
							pt: "20px",
							alignContent: "center",
							alignItems: "center",
						}}
						onClick={openformmap}
					>
						<Box sx={{ pr: "8px" }}>
							<MapsIcon />
						</Box>
						<Box sx={{ color: "#06542D", fontWeight: "700", fontSize: "14px" }}>Tìm địa điểm văn phòng</Box>
					</Box>
					<Accordion sx={{ p: 0 }}>
						<AccordionSummary
							expandIcon={<ArrowDownBlack />}
							aria-controls="panel1-content"
							id="panel1-header"
						>
							Gửi cho chúng tôi một câu hỏi
						</AccordionSummary>
						<AccordionDetails sx={{ bgcolor: "#D9D9D9", p: "16px 12px 20px 12px" }}>
							<Box>
								<Box sx={{ fontSize: "12px", lineHeight: "18px" }}>Cảm ơn bạn đã quan tâm đến dịch vụ của The Thanh Coffee. Vui lòng cung cấp thông tin sau về nhu cầu kinh doanh cua bạn để giúp chúng tôi phục vụ bạn tốt hơn. Thông tin này sẽ cho phép chúng tôi chuyển yêu cầu của bạn đến người thích hợp. Bạn sẽ nhận được phản hồi trong vòng một đến hai ngày làm việc.</Box>
								<Box
									sx={{
										fontWeight: "700",
										fontSize: "12px",
										p: "20px 0 14px 0",
									}}
								>
									Tất cả các trường hợp được yêu cầu khi hoàn thành biểu mẫu này.
								</Box>
								<form onSubmit={handleSubmit}>
									<Box
										sx={{
											pb: "30px", // Padding dưới cho Box chứa cả tiêu đề và TextField
										}}
									>
										<Typography
											variant="p"
											gutterBottom
											sx={{
												fontSize: "14px",
												fontWeight: "700",
												color: "#686868",
											}}
										>
											*Tên đầu tiên
										</Typography>
										<FormControl
											fullWidth
											sx={{ pt: "16px" }}
										>
											<TextField
												variant="outlined"
												type="tên đầu tiên"
												InputProps={{
													style: { height: "42px", background: "white" },
												}}
												required
											/>
										</FormControl>
									</Box>
									<Box
										sx={{
											pb: "30px",
										}}
									>
										<Typography
											variant="p"
											gutterBottom
											sx={{
												fontSize: "14px",
												fontWeight: "700",
												color: "#686868",
												pb: "8px",
											}}
										>
											*Họ
										</Typography>
										<FormControl
											fullWidth
											sx={{ pt: "16px" }}
										>
											<TextField
												height={"40px"}
												variant="outlined"
												InputProps={{
													style: { height: "42px", background: "white" },
												}}
												type="họ"
												required
											/>
										</FormControl>
									</Box>
									<Box
										sx={{
											pb: "30px",
										}}
									>
										<Typography
											variant="p"
											gutterBottom
											sx={{
												fontSize: "14px",
												fontWeight: "700",
												color: "#686868",
												pb: "8px",
											}}
										>
											*Địa chỉ email
										</Typography>
										<FormControl
											fullWidth
											sx={{ pt: "16px" }}
										>
											<TextField
												height={"40px"}
												variant="outlined"
												InputProps={{
													style: { height: "42px", background: "white" },
												}}
												type="email"
												required
											/>
										</FormControl>
									</Box>
									<Box
										sx={{
											pb: "30px",
										}}
									>
										<Typography
											variant="p"
											gutterBottom
											sx={{
												fontSize: "14px",
												fontWeight: "700",
												color: "#686868",
												pb: "8px",
											}}
										>
											*Công ty / Tổ chức
										</Typography>
										<FormControl
											fullWidth
											sx={{ pt: "16px" }}
										>
											<TextField
												InputProps={{
													style: { height: "42px", background: "white" },
												}}
												variant="outlined"
												type="công ty tổ chức"
												required
											/>
										</FormControl>
									</Box>
									<Box
										sx={{
											pb: "30px",
										}}
									>
										<Typography
											variant="p"
											gutterBottom
											sx={{
												fontSize: "14px",
												fontWeight: "700",
												color: "#686868",
												pb: "8px",
											}}
										>
											*Mối quan hệ với The Thanh Coffee
										</Typography>
										<FormControl
											fullWidth
											sx={{ backgroundColor: "white", mt: "16px" }}
										>
											<InputLabel>Chọn một tuỳ chọn</InputLabel>
											<Select
												required
												label="Age"
											>
												<MenuItem value="doitac">Đối tác</MenuItem>
												<MenuItem value="khachhang">Khách hàng</MenuItem>
											</Select>
										</FormControl>
									</Box>
									<Box
										sx={{
											pb: "30px",
										}}
									>
										<Typography
											variant="p"
											gutterBottom
											sx={{
												fontSize: "14px",
												fontWeight: "700",
												color: "#686868",
												pb: "8px",
											}}
										>
											Nếu khác xin vui lòng ghi rõ
										</Typography>
										<FormControl
											fullWidth
											sx={{ pt: "16px" }}
										>
											<TextField
												InputProps={{
													style: {
														height: "42px",
														background: "white",
													},
												}}
												variant="outlined"
												type="text"
											/>
										</FormControl>
									</Box>
									<Box
										sx={{
											pb: "30px",
										}}
									>
										<Typography
											variant="p"
											gutterBottom
											sx={{
												fontSize: "14px",
												fontWeight: "700",
												color: "#686868",
												pb: "8px",
											}}
										>
											*Quốc gia
										</Typography>
										<FormControl
											fullWidth
											sx={{ backgroundColor: "white", mt: "16px" }}
										>
											<InputLabel>Chọn một tuỳ chọn</InputLabel>
											<Select label="Age">
												<MenuItem value="vietnam">Việt Nam</MenuItem>
												<MenuItem value="anothercountry">Quốc gia khác</MenuItem>
											</Select>
										</FormControl>
									</Box>
									<Box
										sx={{
											pb: "30px",
										}}
									>
										<Typography
											variant="p"
											gutterBottom
											sx={{
												fontSize: "14px",
												fontWeight: "700",
												color: "#686868",
												pb: "8px",
											}}
										>
											Số điện thoại (Bao gồm mã quốc gia)
										</Typography>
										<FormControl
											fullWidth
											sx={{ pt: "16px" }}
										>
											<TextField
												InputProps={{
													style: {
														height: "42px",
														background: "white",
														pt: "16px",
													},
												}}
												variant="outlined"
												type="number"
											/>
										</FormControl>
									</Box>
									<Box
										sx={{
											pb: "30px",
										}}
									>
										<Typography
											variant="p"
											gutterBottom
											sx={{
												fontSize: "14px",
												fontWeight: "700",
												color: "#686868",
												mb: "100px",
											}}
										>
											*Làm thế nào chúng tôi có thể giúp bạn?
										</Typography>
										<FormControl
											fullWidth
											sx={{ pt: "16px" }}
										>
											<TextareaAutosize
												minRows={7}
												placeholder=""
												required
												type="text"
											/>
										</FormControl>
									</Box>
									<Box sx={{ display: "flex" }}>
										<Box>
											<Checkbox sx={{ p: 0, pr: "12px" }} />
										</Box>
										<Box>
											Tôi đồng ý với việc The Thanh Coffee sử dụng hoặc xử lý thông tin cá nhân của tôi nhằm mục đích thực hiện yêu cầu này và phù hợp với{" "}
											<a
												href="/"
												style={{
													color: "#06542D",
													textDecoration: "underline",
													lineHeight: "18px",
													mt: "-9px",
												}}
											>
												Tuyên bố về quyền riêng tư của The Thanh Coffee
											</a>
										</Box>
									</Box>
									<Box
										sx={{
											display: "flex",
											textAlign: "center",
											justifyContent: "center",
											border: "1px solid black",
											mt: "50px",
											borderRadius: "4px",
										}}
									>
										<Box>
											<Checkbox />
										</Box>
										<Box sx={{ alignContent: "center" }}>Tôi không phải là người máy</Box>
									</Box>
									<Box
										sx={{
											background: "#06542D",
											textAlign: "center",
											justifyContent: "center",
											alignContent: "center",
											mt: "20px",
											color: "#FFFFFF",
											height: "45px",
											textTransform: "uppercase",
											fontSize: "16px",
											fontWeight: "700",
										}}
									>
										Nộp
									</Box>
								</form>
							</Box>
						</AccordionDetails>
					</Accordion>
					{isOpenFormMap && (
						<Box
							sx={{
								...styles.fontSize13,
								position: "fixed",
								top: "0",
								left: "0",
								width: "100%",
								height: "100%",
								background: "#ffffff" /* Màu nền với độ mờ */,
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								zIndex: "1000",
							}}
						>
							<Box
								sx={{
									width: "100%",
									height: "100%",
									maxWidth: "100%",
									maxHeight: "100%",
									overflow: "auto",
								}}
							>
								<Box sx={{ p: "5px" }}>
									<Box
										sx={{ float: "right" }}
										onClick={closeformmap}
									>
										<TichXICon />
									</Box>
									<Box
										sx={{
											p: "15px 0 62px 0",
											fontSize: "25px",
											fontWeight: "bold",
											alignItems: "center",
											justifyContent: "center",
											textAlign: "center",
										}}
									>
										Bản đồ và chỉ đường
									</Box>
									<Box>
										<iframe
											title="Xem bản đồ và chỉ đường"
											src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0856221652675!2d105.77740527488942!3d21.029259780620187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313455f38305cb25%3A0x7676aff8000d7c2b!2zVG95b3RhIE3hu7kgxJDDrG5o!5e0!3m2!1svi!2s!4v1712651828615!5m2!1svi!2s"
											width="100%"
											height="379"
											style={{ border: "0" }}
											allowfullscreen=""
											loading="lazy"
											referrerpolicy="no-referrer-when-downgrade"
										></iframe>
									</Box>
									<Box sx={{ p: "30px 24px 0 24px" }}>
										<Box
											sx={{
												pb: "25px",
												fontSize: "16px",
												fontWeight: "bold",
											}}
										>
											Mua sắm
										</Box>
										<Box sx={{ pb: "30px" }}>
											<Box>Toà nhà Toyota</Box>
											<Box>Số 15, Phạm Hùng</Box>
											<Box>Nam Từ Liêm, Hà Nội</Box>
											<Box sx={{ color: "#006241" }}>(+84) 1900.1009</Box>
										</Box>
										<Box
											sx={{
												pb: "25px",
												fontSize: "16px",
												fontWeight: "bold",
											}}
										>
											Làm sao để tới đây
										</Box>
										<Box sx={{ pb: "24px" }}>Thanh Coffee tọa lạc tại Trung tâm mua sắm Mỹ Đình, số 15 Phạm Hùng ở trung tâm thành phố Hà Nội. Đi trên I-95, đi theo lối ra 22C. Cửa hàng Thanh Coffee nằm ở tầng 5,. Bãi đậu xe gần nhất của Thanh Coffee là trong gara đậu xe của trung tâm thương mại ở lối vào phía Nam, tầng 5, tòa nhà IDMC.</Box>
									</Box>
								</Box>
							</Box>
						</Box>
					)}
					<Box sx={{ fontSize: "16px", fontWeight: "700", p: 0 }}>Đối với các câu hỏi cụ thể, hãy liên hệ dưới đây</Box>

					<Box>
						<Accordion>
							<AccordionSummary
								expandIcon={<ArrowDownBlack />}
								aria-controls="panel1-content"
								id="panel1-header"
							>
								Tại sao tôi nên mua tại The ThanhCoffee?
							</AccordionSummary>
							<AccordionDetails>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</AccordionDetails>
						</Accordion>
						<Accordion>
							<AccordionSummary
								expandIcon={<ArrowDownBlack />}
								aria-controls="panel1-content"
								id="panel1-header"
								sx={{
									...styles.fontSize13,
								}}
							>
								Người tìm việc
							</AccordionSummary>
							<AccordionDetails>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</AccordionDetails>
						</Accordion>
						<Accordion>
							<AccordionSummary
								expandIcon={<ArrowDownBlack />}
								aria-controls="panel1-content"
								id="panel1-header"
								sx={{
									...styles.fontSize13,
								}}
							>
								Truyền thông tin tức / nhà phân tích ngành
							</AccordionSummary>
							<AccordionDetails>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</AccordionDetails>
						</Accordion>
						<Accordion>
							<AccordionSummary
								expandIcon={<ArrowDownBlack />}
								aria-controls="panel1-content"
								id="panel1-header"
								sx={{
									...styles.fontSize13,
								}}
							>
								Nhà đầu tư
							</AccordionSummary>
							<AccordionDetails>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</AccordionDetails>
						</Accordion>
						<Accordion>
							<AccordionSummary
								expandIcon={<ArrowDownBlack />}
								aria-controls="panel1-content"
								id="panel1-header"
								sx={{
									...styles.fontSize13,
								}}
							>
								Nhân viên The Thanh Coffee
							</AccordionSummary>
							<AccordionDetails>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</AccordionDetails>
						</Accordion>
						<Accordion>
							<AccordionSummary
								expandIcon={<ArrowDownBlack />}
								aria-controls="panel1-content"
								id="panel1-header"
								sx={{
									...styles.fontSize13,
								}}
							>
								Các nhà cung cấp
							</AccordionSummary>
							<AccordionDetails>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</AccordionDetails>
						</Accordion>
						<Accordion>
							<AccordionSummary
								expandIcon={<ArrowDownBlack />}
								aria-controls="panel1-content"
								id="panel1-header"
								sx={{
									...styles.fontSize13,
								}}
							>
								Quản lý tùy chọn và chọn không tham gia
							</AccordionSummary>
							<AccordionDetails>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</AccordionDetails>
						</Accordion>
					</Box>
				</Box>
			</Layout.MainBg>
			<Footer />
		</Box>
	);
};

export default Mobile;
