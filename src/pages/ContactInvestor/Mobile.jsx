import React, { useState } from "react";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Typography } from "@mui/material";
import NavBar from "../../component/layout/NavBar";
import { styles } from "../../styles";
import Layout from "../../component/layout";
import Footer from "../../component/layout/Footer";
import emailjs from "@emailjs/browser";

const Mobile = () => {
	const [openForm, setOpenForm] = useState(false);
	const [confirm, setConfirm] = useState(false);
	const handleOpenForm = () => {
		setOpenForm(!openForm);
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		setConfirm(true);
	};
	const [formState, setFormState] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const handleSendEmail = () => {
		const serviceId = process.env.REACT_APP_INVESTORS_FORM_SERVICE;
		const template = process.env.REACT_APP_INVESTORS_FORM_TEMPLATE;
		const publicKey = process.env.REACT_APP_INVESTORS_FORM_PUBLIC_KEY;
		const privateKey = process.env.REACT_APP_INVESTORS_FORM_PRIVATE_KEY;
		const formIsValid = !!formState.firstName && !!formState.lastName && !!formState.subject && !!formState.message;
		if (formIsValid) {
			setIsLoading(true);
			emailjs
				.send(
					serviceId,
					template,
					{
						...formState,
						to_name: "Trần Thanh Kiên",
						from_name: `${formState.firstName} ${formState.lastName}`,
						to_email: process.env.REACT_APP_INVESTORS_FORM_TO_EMAIL,
					},
					{ publicKey, privateKey }
				)
				.then(() => {
					alert("Cảm ơn bạn đã liên hệ với chúng tôi. Chúng tôi sẽ phản hồi trong thời gian sớm nhất");
				})
				.catch((error) => {
					alert("Xin lỗi!,\n Có một vài lỗi trong quá trình gửi form, vui lòng thử lại!");
					console.log(error);
				})
				.finally(() => {
					setIsLoading(false);
				});
		} else {
			alert("Vui lòng nhập đầy đủ thông tin");
		}
	};
	const onFormStateChange = (e) => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
	};
	const handleClose = (confirm) => {
		setConfirm(false);
		if (confirm) {
			// Thực hiện hành động gửi form
			console.log("Form submitted");
		}
	};
	return (
		<Box sx={{ ...styles.fontSize13 }}>
			<NavBar />
			<Layout.MainBg>
				<Box sx={{}}>
					<Box
						sx={{
							p: "100px 54px",
							textAlign: "center",
							fontSize: "30px",
							background: "rgba(0,0,0,0.1)",
							fontWeight: "700",
							textTransform: "uppercase",
						}}
					>
						liên hệ nhà đầu tư
					</Box>
					<Box sx={{ p: "76px 24px 40px 24px" }}>
						<Box sx={{ fontSize: "16px" }}>
							<Box
								sx={{
									pb: "20px",
									fontWeight: "700",
									fontSize: "20px",
								}}
							>
								Liên hệ Bộ phận quan hệ Nhà đầu tư
							</Box>
							<Box sx={{ fontWeight: "600", pb: "10px" }}>Liên hệ</Box>
							<Box sx={{ pb: "15px" }}>
								Trung tâm Liên hệ Cổ đông Dịch vụ Nhà đầu tư :{" "}
								<a
									href="tel:0911.830.666"
									style={{ color: "#006241" }}
								>
									0911.830.666
								</a>
							</Box>
							<Box sx={{ pb: "15px" }}>
								Đường dây nóng Nhà môi giới{" "}
								<a
									href="tel:0772.625.305"
									style={{ color: "#006241" }}
								>
									0772.625.305
								</a>{" "}
								(chỉ dành cho các nhà môi giới)
							</Box>
							<Box sx={{ pb: "15px" }}>Để biết thêm các thông tin tài chính và các báo cáo liên quan tới Công việc kinh doanh, vui lòng gửi email cho chúng tôi để nhận bản cứng của tài liệu qua đường bưu điện.</Box>
							<Box sx={{ fontWeight: 600 }}>Điền vào các ô bên dưới để để lại lời nhắn cho chúng tôi : </Box>
							<Box
								sx={{ color: "#006241", cursor: "pointer" }}
								onClick={handleOpenForm}
							>
								Gửi biểu mẫu liên hệ.
							</Box>
							{openForm && (
								<Box
									mt={3}
									component="form"
									noValidate
									autoComplete="off"
									onSubmit={handleSubmit}
								>
									<Typography
										variant="h6"
										gutterBottom
									></Typography>
									<Typography sx={{ fontSize: "16px", pb: "15px" }}>Vui lòng sử dụng mẫu dưới đây để gửi câu hỏi đến bộ phận Quan hệ Nhà đầu tư. Các trường được đánh dấu * là bắt buộc.</Typography>
									<Typography
										sx={{
											fontWeight: "600",
											fontSize: "16px",
										}}
									>
										*Tên
									</Typography>
									<TextField
										name="firstName"
										value={formState.firstName}
										onChange={onFormStateChange}
										fullWidth
										margin="normal"
										id="firstName"
										sx={{
											backgroundColor: "white",
											border: "1px solid black",
										}}
									/>
									<Typography
										sx={{
											fontSize: "16px",
											fontWeight: "600",
										}}
									>
										*Họ
									</Typography>
									<TextField
										fullWidth
										margin="normal"
										id="lastName"
										name="lastName"
										value={formState.lastName}
										onChange={onFormStateChange}
										sx={{
											backgroundColor: "white",
											border: "1px solid black",
										}}
									/>
									<Typography
										sx={{
											fontSize: "16px",
											fontWeight: "600",
										}}
									>
										*Chủ đề
									</Typography>
									<TextField
										fullWidth
										margin="normal"
										id="subject"
										name="subject"
										value={formState.subject}
										onChange={onFormStateChange}
										sx={{
											backgroundColor: "white",
											border: "1px solid black",
										}}
									/>
									<Typography
										sx={{
											fontSize: "16px",
											fontWeight: "600",
										}}
									>
										*Làm thế nào chúng tôi có thể giúp bạn?
									</Typography>
									<TextField
										fullWidth
										margin="normal"
										id="message"
										multiline
										name="message"
										value={formState.message}
										onChange={onFormStateChange}
										rows={4}
										sx={{
											backgroundColor: "white",
											border: "1px solid black",
										}}
									/>
									<Button
										variant="contained"
										type="submit"
										sx={{
											mt: "20px",
											p: "5px 30px",
											background: "#000000",
											fontSize: "16px",
											fontWeight: "700",
											"&:hover": {
												backgroundColor: "#0c4532", // Màu nền thay đổi khi hover
											},
										}}
									>
										Nộp
									</Button>
								</Box>
							)}
							<Dialog
								open={confirm}
								onClose={() => handleClose(false)}
								sx={{
									"& .MuiDialog-paper": {},
									"& .MuiDialogActions-root": {
										p: 0,
									},
									"& .MuiDialogContent-root": {
										p: 0,
									},
									"& .MuiTypography-root-MuiDialogTitle-root": {
										p: 0,
									},
								}}
							>
								<Box
									sx={{
										display: "flex",
										justifyContent: "flex-end",
										p: "30px 24px 0 24px",
									}}
								>
									<Box
										sx={{ cursor: "pointer" }}
										onClick={() => handleClose(false)}
									>
										<svg
											width="20"
											height="20"
											viewBox="0 0 50 50"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M25.0004 50C38.8074 50 50 38.8069 50 24.9998C50 11.1926 38.8074 0 25.0004 0C11.1934 0 0 11.1926 0 24.9998C0 38.8069 11.1934 50 25.0004 50Z"
												fill="black"
											/>
											<path
												d="M16.3086 16.3071L33.6936 33.6927"
												stroke="white"
												stroke-width="3"
												stroke-miterlimit="10"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
											<path
												d="M33.6936 16.3071L16.3086 33.6927"
												stroke="white"
												stroke-width="3"
												stroke-miterlimit="10"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
									</Box>
								</Box>
								<Box sx={{ p: "0 24px 24px 24px" }}>
									<DialogTitle
										id="alert-dialog-title"
										sx={{
											fontSize: "24px",
											fontWeight: "700",
											p: 0,
											mb: "15px",
											fontFamily: "Inter",
											lineHeight: "100%",
										}}
									>
										Xác nhận gửi biểu mẫu
									</DialogTitle>
									<DialogContent>
										<DialogContentText
											sx={{
												fontSize: "12px",
												pb: "15px",
												fontFamily: "Inter",
											}}
										>
											Xác nhận gửi biểu mẫu
										</DialogContentText>
									</DialogContent>
									<DialogActions sx={{ justifyContent: "space-between" }}>
										<Button
											onClick={() => {
												handleSendEmail();
												handleClose(true);
											}}
											autoFocus
											sx={{
												background: "#006241",
												border: "1px solid #006241",
												p: "5px 10px",
												color: "#FFFFFF",
												fontSize: "14px",
												borderRadius: "7px",
												fontFamily: "Inter",
												fontWeight: "bold",
												"&:hover": {
													backgroundColor: "#0c4532",
												},
											}}
										>
											XÁC NHẬN
										</Button>
										<Button
											onClick={() => handleClose(false)}
											sx={{
												border: "1px solid #006241",
												p: "5px 10px",
												color: "#000000",
												fontSize: "14px",
												borderRadius: "7px",
												fontFamily: "Inter",
												fontWeight: "bold",
											}}
										>
											HỦY BỎ
										</Button>
									</DialogActions>
								</Box>
							</Dialog>
						</Box>
					</Box>
				</Box>
			</Layout.MainBg>
			<Footer />
		</Box>
	);
};

export default Mobile;
