import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Container, InputAdornment, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { styles } from "../../styles";
import ArrowDownBlack from "../svg/icon/ArrowDownBlack";
import InstaIcon from "../svg/icon/InstaIcon";
import TiktokIcon from "../svg/icon/TiktokIcon";
import FacebookIcon from "../svg/icon/FacebookIcon";
import LeftArrowBlack from "../svg/icon/LeftArrowBlack";
import BlackLogoSmall from "../svg/icon/BlackLogoSmall";
import { MobileContext } from "../../store/context/Mobile";
import ExitCircleIcon from "../svg/icon/ExitCircleIcon";
import CustomerSearchIcon from "../svg/icon/CustomerSearchIcon";
import { SentimentDissatisfiedOutlined } from "@mui/icons-material";
import emailjs from "@emailjs/browser";
import TickXIcon from "../svg/icon/TichXICon";
import { env, validateEmail } from "../../functions/controller";
const Footer = () => {
	const { isDesktop } = useContext(MobileContext);
	const [follow, setFollow] = useState(false);
	const [mail, setMail] = useState("");
	const sendMail = (mail) => {
		const serviceId = env("EMAIL_FOLLOW_SERVICE");
		const templateId = env("EMAIL_FOLLOW_TEMPLATE");
		const publicKey = env("EMAIL_FOLLOW_PUBLIC_KEY");
		emailjs
			.send(serviceId, templateId, { to_email: mail }, publicKey)
			.then(() => {
				alert("Theo dõi thành công\nVui lòng kiểm tra hòm thư điện tử");
			})
			.catch((error) => {
				alert("Có lỗi không xác định\nVui lòng nhập lại");
				console.log(error);
			})
			.finally(() => {
				alert("Cảm ơn bạn đã theo dõi chúng tôi\nChúng tôi sẽ phản hồi trong thời gian sớm nhất");
			});
	};
	return (
		<Box sx={{ ...styles.fontSize13 }}>
			{!isDesktop ? (
				<Box sx={{ backgroundColor: "#F3F1EC" }}>
					{follow && (
						<Box
							sx={{
								...styles.fontSize13,
								position: "fixed",
								top: "0",
								left: "0",
								width: "100%",
								height: "100%",
								background: "#ffffff" /* Màu nền với độ mờ */,
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
								<Box
									sx={{
										p: "24px",
									}}
								>
									<Box
										sx={{
											...styles.centerFlex,
											justifyContent: "right",
										}}
										onClick={() => setFollow(0)}
									>
										<TickXIcon />
									</Box>
									{follow && (
										<Box sx={{ p: "15px 0px 0px" }}>
											<Box
												sx={{
													fontSize: "25px",
													fontWeight: "bold",
													pb: "40px",
												}}
											>
												Xác nhận theo dõi
											</Box>
											<Box
												sx={{
													fontSize: "13px",
													fontWeight: "600",
													pb: "30px",
												}}
											>
												Thông tin bắt buộc*
											</Box>
											<Box
												sx={{
													fontSize: "13px",
													fontWeight: "600",
												}}
											>
												*Email
											</Box>
											<Container
												sx={{
													"&.MuiContainer-root": {
														maxWidth: "100%",
													},
													p: "10px 0",
												}}
												disableGutters
											>
												<TextField
													type="search"
													value={mail}
													onChange={(e) => setMail(e.target.value)}
													sx={{
														...styles.fontSize13,
														fontSize: "13px",
														width: "100%",
														...styles.backgroundColor.mauTrang,
														".MuiInputBase-root": {
															paddingRight: "0px",
															marginRight: 0,
														},
														".MuiInputBase-input": {
															p: "5px 20px",
														},
														"& .MuiInputBase-input::placeholder": {
															color: "black",
														},
													}}
												/>
											</Container>
											<Box
												sx={{
													...styles.centerFlex,
													pb: "20px",
													pt: "10px",
												}}
											>
												<Box
													sx={{
														p: "10px 20px",
														background: "#006241",
														color: "white",
														cursor: "pointer",
														fontSize: "13px",
														fontWeight: "bold",
													}}
													onClick={() => {
														// handle send form email
														if (mail) {
															if (validateEmail(mail)) sendMail(mail);
															else alert("Email không hợp lệ");
														} else {
															alert("Email không được để trống");
														}
													}}
												>
													THEO DÕI
												</Box>
											</Box>
											<Box
												sx={{
													">span": {
														color: "#006241",
													},
													fontSize: "12px",
												}}
											>
												Bằng cách đăng ký nhận bản tin của chúng tôi, bạn đồng ý nhận thông tin qua email liên quan đến các ưu đãi, dịch vụ, sản phẩm hoặc sự kiện từ The Thanh Coffee và theo <span>Chính sách quyền riêng tư.</span>
												<br />
												{/* unsubscribe */}
												{/* Bạn có thể hủy đăng ký bất cứ lúc nào thông qua tài khoản trực tuyến của mình hoặc liên kết <span>“Hủy đăng ký” </span>ở cuối mỗi thông tin tiếp thị qua email của chúng tôi. */}
											</Box>
										</Box>
									)}
								</Box>
							</Box>
						</Box>
					)}
					<Accordion
						sx={{
							textAlign: "justify",
							"&.MuiAccordion-root": { boxShadow: "0" },
						}}
						disableGutters={true}
					>
						<AccordionSummary
							expandIcon={<ArrowDownBlack />}
							aria-controls="panel1a-content"
							sx={{
								...styles.centerFlex,
								justifyContent: "space-between",
								gap: "10px",
								color: "black",
								width: "100%",
								p: "15px 24px",
								backgroundColor: "#F3F1EC",
								borderBottom: "solid black 1px",
								borderTop: "solid black 0.5px",
								"&	.MuiAccordionSummary-content": {
									margin: 0,
								},
							}}
						>
							<Box
								sx={{
									...styles.centerFlex,
									width: "100%",
									justifyContent: "space-between",
								}}
							>
								<Box
									sx={{
										fontWeight: "bold",
										textTransform: "uppercase",
										...styles.fontSize13,
									}}
								>
									Điều Kiện
								</Box>
							</Box>
						</AccordionSummary>
						<AccordionDetails
							sx={{
								backgroundColor: "white",
								p: "15px 24px",
								borderBottom: "solid black 1px",
							}}
						>
							<a
								href="/dieu-khoan-va-dieu-kien"
								rel="noreferrer"
							>
								Điều khoản và điều kiện
							</a>
						</AccordionDetails>
					</Accordion>
					<Box
						sx={{
							...styles.centerFlex,
							p: "15px 24px",
							justifyContent: "space-between",
						}}
					>
						<Box
							sx={{
								fontWeight: "bold",
								...styles.fontSize13,
								textAlign: "justify",
							}}
						>
							CHIA SẺ
						</Box>
						<Box sx={{ display: "flex", gap: "13px" }}>
							<a href="https://web.facebook.com/profile.php?id=61560917203069">
								<FacebookIcon />
							</a>
							<a href="https://www.instagram.com/thethanh.coffee/">
								<InstaIcon />
							</a>
							{/* <TiktokIcon /> */}
						</Box>
					</Box>
					<Box
						sx={{
							...styles.centerFlex,
							justifyContent: "center",
							p: "15px 24px",
							borderTop: "solid black 1px",
							borderBottom: "solid black 0.5px",
							gap: "6px",
						}}
					>
						<a
							href="/tim-kiem-cua-hang"
							style={{ fontSize: "11px" }}
						>
							Tìm cửa hàng
						</a>
						<LeftArrowBlack />
					</Box>
					<Box
						sx={{
							p: "15px 24px",
							flexDirection: "column",
							...styles.centerFlex,
							justifyContent: "center",
							gap: "8px",
						}}
					>
						<Box sx={{ fontWeight: "500", fontSize: "13px" }}>THÔNG TIN</Box>
						<Box sx={{ fontSize: "11px" }}>Theo dõi và nhận thông tin mới nhất của chúng tôi.</Box>
						<Box
							sx={{
								width: "100%",
								...styles.centerFlex,
								justifyContent: "center",
							}}
						>
							<Button
								sx={{
									backgroundColor: "black",
									width: "35%",
									opacity: 0.75,
									border: "0px",
									borderRadius: "15px",
									color: "white",
									fontWeight: "700",
									fontSize: "13px",
									p: "5px 18px",
									"&.MuiButton-root": { fontFamily: "Inter" },
									"&:hover": {
										backgroundColor: "black",
									},
								}}
							>
								<Box
									onClick={() => setFollow(true)}
									sx={{ ...styles.centerFlex }}
								>
									THEO DÕI
								</Box>
							</Button>
						</Box>
					</Box>
					<Box sx={{ p: "15px 24px", borderTop: "solid black 0.5px" }}>
						<Box>
							<BlackLogoSmall />
						</Box>
						<Box sx={{ fontSize: "10px", pt: "10px" }}>Copyright © 2023. ThanhCoffee VietNam. Đã đăng ký Bản quyền</Box>
					</Box>
				</Box>
			) : (
				<Box sx={{ ...styles.backgroundColor.mauTrang }}>
					{follow && (
						<Box
							sx={{
								position: "fixed",
								top: 0,
								left: 0,
								bottom: 0,
								right: 0,
								background: " rgba(0, 0, 0, 0.70)",
								zIndex: "1000",
								p: "60px 325px",
								overflow: "auto",
							}}
						>
							<Box
								sx={{
									backgroundColor: "white",
									opacity: 1,
									borderRadius: "19px",
								}}
							>
								<Box
									sx={{
										height: "100%",
										display: "flex",
										flexDirection: "column",
										justifyContent: "space-between",
									}}
								>
									<Box sx={{ position: "relative" }}>
										<Box
											sx={{
												position: "absolute",
												top: 40,
												right: 40,
											}}
											onClick={() => setFollow(false)}
										>
											<Box
												sx={{
													"g > path#Vector": {
														fill: "black",
													},
													"g > path#Vector_2,path#Vector_3": {
														stroke: "white",
													},
													svg: {
														width: "50px",
														height: "50px",
													},
												}}
											>
												<ExitCircleIcon />
											</Box>
										</Box>
										{follow && (
											<Box sx={{ p: "130px 70px" }}>
												<Box
													sx={{
														fontSize: "40px",
														fontWeight: "bold",
														pb: "40px",
													}}
												>
													Xác nhận theo dõi
												</Box>
												<Box
													sx={{
														fontSize: "24px",
														fontWeight: "600",
														pb: "30px",
													}}
												>
													Thông tin bắt buộc*
												</Box>
												<Box
													sx={{
														fontSize: "24px",
														fontWeight: "600",
													}}
												>
													*Email
												</Box>
												<Container
													sx={{
														"&.MuiContainer-root": {
															maxWidth: "100%",
														},
														p: "10px 0",
													}}
													disableGutters
												>
													<TextField
														type="search"
														value={mail}
														onChange={(e) => setMail(e.target.value)}
														sx={{
															...styles.fontSize13,
															fontSize: "24px",
															width: "100%",
															...styles.backgroundColor.mauTrang,
															".MuiInputBase-root": {
																paddingRight: "0px",
																marginRight: 0,
															},
															".MuiInputBase-input": { p: "22px" },
															"& .MuiInputBase-input::placeholder": {
																color: "black",
															},
														}}
													/>
												</Container>
												<Box
													sx={{
														...styles.centerFlex,
														pb: "40px",
													}}
												>
													<Box
														sx={{
															p: "20px 92px",
															background: "#006241",
															color: "white",
															cursor: "pointer",
															fontSize: "24px",
															fontWeight: "bold",
														}}
														onClick={() => {
															// handle send form email
															if (mail) {
																sendMail(mail);
															} else {
																alert("Email không được để trống");
															}
														}}
													>
														THEO DÕI
													</Box>
												</Box>
												<Box
													sx={{
														">span": {
															color: "#006241",
														},
														fontSize: "18px",
													}}
												>
													Bằng cách đăng ký nhận bản tin của chúng tôi, bạn đồng ý nhận thông tin qua email liên quan đến các ưu đãi, dịch vụ, sản phẩm hoặc sự kiện từ The Thanh Coffee và theo <span>Chính sách quyền riêng tư.</span>
													<br />
													{/* unsubscribe */}
													{/* Bạn có thể hủy đăng ký bất cứ lúc nào thông qua tài khoản trực tuyến của mình hoặc liên kết <span>“Hủy đăng ký” </span>ở cuối mỗi thông tin tiếp thị qua email của chúng tôi. */}
												</Box>
											</Box>
										)}
									</Box>
								</Box>
							</Box>
						</Box>
					)}
					<Box
						sx={{
							p: "34px 80px",
							display: "flex",
							justifyContent: "space-between",
							...styles.backgroundColor.xamF7,
						}}
					>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								gap: "10px",
							}}
						>
							<Box sx={{ fontWeight: 600, fontSize: "16px" }}>COFFEE</Box>
							<Box sx={{ fontWeight: 300, fontSize: "15px" }}>
								<a
									href="/nguon-nguyen-lieu"
									rel="noreferrer"
								>
									Nguồn nguyên liệu
								</a>
							</Box>
							<Box sx={{ fontWeight: 300, fontSize: "15px" }}>
								<a
									href="/moi-truong"
									rel="noreferrer"
								>
									Môi trường
								</a>
							</Box>
						</Box>
						<Box>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									gap: "10px",
									pb: "20px",
								}}
							>
								<Box sx={{ fontWeight: 600, fontSize: "16px" }}>Menu</Box>
								{/* <Box sx={{ fontWeight: 300, fontSize: "15px" }}>
									<a href="/do-an">Đồ ăn</a>
								</Box> */}
								<Box sx={{ fontWeight: 300, fontSize: "15px" }}>
									<a
										href="/do-uong"
										rel="noreferrer"
									>
										Đồ uống
									</a>
								</Box>
							</Box>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									gap: "10px",
								}}
							>
								<Box sx={{ fontWeight: 600, fontSize: "16px" }}>Tham gia TheThanh</Box>
								<Box sx={{ fontWeight: 300, fontSize: "15px" }}>
									<a
										href="/gia-tri-va-van-hoa"
										rel="noreferrer"
									>
										Giá trị & văn hóa
									</a>
								</Box>
								{/* <Box sx={{ fontWeight: 300, fontSize: "15px" }}>
									<a href="/tuyen-dung">Tuyển dụng</a>
								</Box> */}
								<Box sx={{ fontWeight: 300, fontSize: "15px" }}>
									<a
										href="/tham-gia-the-thanh"
										rel="noreferrer"
									>
										Tham gia The Thanh
									</a>
								</Box>
							</Box>
						</Box>
						<Box>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									gap: "10px",
									pb: "20px",
								}}
							>
								<Box sx={{ fontWeight: 600, fontSize: "16px" }}>ĐẶT HÀNG</Box>
								{/* <Box sx={{ fontWeight: 300, fontSize: "15px" }}>
									<a
										href="/van-chuyen-va-giao-hang"
										rel="noreferrer"
									>
										Vận chuyển & Giao hàng
									</a>
								</Box> */}
								<Box sx={{ fontWeight: 300, fontSize: "15px" }}>
									<a
										href="/dich-vu-khach-hang"
										rel="noreferrer"
									>
										Dịch vụ khách hàng
									</a>
								</Box>
								<Box sx={{ fontWeight: 300, fontSize: "15px" }}>
									<a
										href="/tro-giup-mua-sam"
										rel="noreferrer"
									>
										Trợ giúp mua sắm
									</a>
								</Box>
								<Box sx={{ fontWeight: 300, fontSize: "15px" }}>
									<a
										href="/tim-kiem-cua-hang"
										rel="noreferrer"
									>
										Tìm kiếm cửa hàng
									</a>
								</Box>
								<Box sx={{ fontWeight: 300, fontSize: "15px" }}>
									<a
										href="/lien-he-ho-tro-san-pham"
										rel="noreferrer"
									>
										Liên hệ hỗ trợ sản phẩm
									</a>
								</Box>
							</Box>
						</Box>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								gap: "10px",
							}}
						>
							<Box sx={{ fontWeight: 600, fontSize: "16px" }}>DÀNH CHO ĐỐI TÁC</Box>
							<Box sx={{ fontWeight: 300, fontSize: "15px" }}>
								<a
									href="/ho-tro-chu-nha"
									rel="noreferrer"
								>
									Hỗ trợ chủ nhà
								</a>
							</Box>
							{/* <Box sx={{ fontWeight: 300, fontSize: "15px" }}>
								<a
									href="/nha-cung-cap"
									rel="noreferrer"
								>
									Nhà cung cấp
								</a>
							</Box> */}
							{/* <Box sx={{ fontWeight: 300, fontSize: "15px" }}>
								<a
									href="/lien-he-dau-tu"
									rel="noreferrer"
								>
									Liên hệ đầu tư
								</a>
							</Box> */}
						</Box>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								gap: "10px",
							}}
						>
							<Box sx={{ fontWeight: 600, fontSize: "16px" }}>VỀ CHÚNG TÔI</Box>
							<Box sx={{ fontWeight: 300, fontSize: "15px" }}>
								<a
									href="/tin-san-pham"
									rel="noreferrer"
								>
									Tin sản phẩm
								</a>
							</Box>
							{/* <Box sx={{ fontWeight: 300, fontSize: "15px" }}>
                                <a
                                    href="/trung-tam-tin-tuc/tin-doanh-nghiep"
                                    rel="noreferrer"
                                >
                                    Tin doanh nghiệp
                                </a>
                            </Box>
                            <Box sx={{ fontWeight: 300, fontSize: "15px" }}>
                                <a
                                    href="/trung-tam-tin-tuc/thong-cao-bao-chi"
                                    rel="noreferrer"
                                >
                                    Thông cáo báo chí
                                </a>
                            </Box> */}
							<Box sx={{ fontWeight: 300, fontSize: "15px" }}>
								<a
									href="/cong-ty-cua-chung-toi"
									rel="noreferrer"
								>
									Tầm nhìn và Giá trị
								</a>
							</Box>
							{/* <Box sx={{ fontWeight: 300, fontSize: "15px" }}>
								<a
									href="/ho-so-cong-ty"
									rel="noreferrer"
								>
									Hồ sơ công ty
								</a>
							</Box> */}
						</Box>
					</Box>
					<Box
						sx={{
							p: "30px 80px",
							borderTop: "solid black 0.5px",
							borderBottom: "solid black 0.5px",
						}}
					>
						<Box
							sx={{
								display: "flex",
								justifyContent: "space-between",
							}}
						>
							<Box
								sx={{
									width: "500px",
									display: "flex",
									flexDirection: "column",
									gap: "10px",
								}}
							>
								<Box
									sx={{
										fontWeight: 600,
										fontSize: "16px",
									}}
								>
									CHĂM SÓC KHÁCH HÀNG
								</Box>
								<Box
									sx={{
										fontWeight: 300,
										fontSize: "14px",
									}}
								>
									Thứ 2 đến Thứ 6: 9h sáng - 22h tối theo giờ Việt Nam
								</Box>
								<Box
									sx={{
										fontWeight: 300,
										fontSize: "14px",
										textDecoration: "underline",
									}}
								>
									Điện thoại hỗ trợ : <a href="tel:0911830666">0911830666</a>
								</Box>
							</Box>
							<Box
								sx={{
									...styles.centerFlex,
									flexDirection: "column",
									gap: "10px",
								}}
							>
								<Box
									sx={{
										fontWeight: 600,
										fontSize: "16px",
									}}
								>
									THÔNG TIN
								</Box>
								<Box
									sx={{
										fontWeight: 300,
										fontSize: "13px",
									}}
								>
									Theo dõi và nhận thông tin mới nhất từ chúng tôi.
								</Box>
								<Box sx={{ display: "flex" }}>
									<Box
										onClick={() => setFollow(true)}
										sx={{
											fontWeight: 500,
											fontSize: "16px",
											border: "solid black 1px",
											borderRadius: "19px",
											p: "8px 70px",
											cursor: "pointer",
										}}
									>
										Theo dõi
									</Box>
								</Box>
							</Box>
							<Box
								sx={{
									width: "500px",
									display: "flex",
									flexDirection: "column",
									alignItems: "flex-end",
									gap: "10px",
								}}
							>
								<Box
									sx={{
										fontWeight: 600,
										fontSize: "16px",
									}}
								>
									THEO DÕI CHÚNG TÔI
								</Box>
								<Box sx={{ ...styles.centerFlex, gap: "16px" }}>
									<a href="https://web.facebook.com/profile.php?id=61560917203069">
										<Box
											sx={{
												svg: {
													width: "20px",
													height: "20px",
												},
											}}
										>
											<FacebookIcon />
										</Box>
									</a>
									<a href="https://www.instagram.com/thethanh.coffee/">
										<Box
											sx={{
												svg: {
													width: "20px",
													height: "20px",
												},
											}}
										>
											<InstaIcon />
										</Box>
									</a>
									{/* <Box sx={{ svg: { width: "35px", height: "35px" } }}>
                    <TiktokIcon />
                  </Box> */}
								</Box>
							</Box>
						</Box>
					</Box>
					<Box sx={{ p: "20px 80px", fontSize: "12px" }}>Bản quyền ©2024. The ThanhCoffee Việt Nam. Đã đăng ký bản quyền</Box>
				</Box>
			)}
		</Box>
	);
};

export default Footer;
