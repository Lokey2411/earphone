import { Box, Card, CardContent, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { styles } from "../../styles";
import NavBar from "../../component/layout/NavBar";
import Layout from "../../component/layout";
import Footer from "../../component/layout/Footer";
import { Link } from "react-router-dom";
import { useData } from "../../hooks/useData";
const Desktop = () => {
	const [moreNews] = useData("abouts/search/parent?parent=ho-so-cong-ty");
	return (
		<Box sx={{ ...styles.fontSize13, fontSize: "14px" }}>
			<NavBar />
			<Layout.MainBg>
				<Box sx={{ mt: "24px" }}>
					<Box
						sx={{
							background: "#000",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							textAlign: "center",
							height: "500px",
						}}
					>
						<Box
							sx={{
								textTransform: "uppercase",
								fontSize: "60px",
								color: "#FFFFFF",
							}}
						>
							hồ sơ công ty
						</Box>
						<Box
							sx={{
								fontSize: "24px",
								color: "#FFFFFF",
								p: "30px 313px 0 313px",
							}}
						>
							Trong quá trình hình thành thương hiệu, The Thanh Coffee, chúng tôi luôn chú trọng đến cam kết hoạt động kinh doanh minh bạch và quản lý tài chính rõ ràng. Hồ sơ công ty của chúng tôi được chuẩn bị kỹ lưỡng với đầy đủ giấy tờ chứng minh, đảm bảo sự uy tín và tin cậy trong mọi hoạt động kinh doanh.
						</Box>
					</Box>
					<Box sx={{ p: "80px 160px" }}>
						{/* TIn tức ẩn */}
						{/* <Box sx={{ boxSizing: "border-box" }}>
							<Grid
								container
								rowSpacing={4}
								columnSpacing={18}
								sx={{
									".MuiPaper-root": { boxShadow: 0 },
									"& > .MuiGrid-item": { paddingBottom: "80px" },
								}}
							>
								{moreNews?.map((item) => (
									<Grid
										item
										xs={12}
										sm={6}
										md={6}
										key={item.id}
										sx={{
											".MuiGrid-root>.MuiGrid-item": { pb: "80px" },
										}}
									>
										<Card
											sx={{
												"& .MuiCardContent-root": { padding: "30px" },
												background: "#F2F0EB",
											}}
										>
											<CardContent sx={{ ".MuiCardContent-root": { pt: "50px" } }}>
												<Typography
													gutterBottom
													fontSize={"36px"}
													fontWeight={"700"}
													sx={{
														pb: 0,
														mb: "100px",
													}}
												>
													{item.title}
												</Typography>
												<Link
													href={"/"}
													target="_blank"
													rel="noopener"
													underline="none"
												>
													<Typography
														variant="body2"
														fontSize={"24px"}
														sx={{
															fontSize: "24px",
															fontWeight: "500",
															color: "#006241",
														}}
													>
														Tìm hiểu thêm &gt;
													</Typography>
												</Link>
											</CardContent>
										</Card>
									</Grid>
								))}
							</Grid>
						</Box> */}
						<Box sx={{ p: "110px 0 30px 0", fontSize: "50px", fontWeight: "600" }}>Vận Hành Doanh Nghiệp Có Trách Nhiệm</Box>
						<Box
							sx={{
								fontSize: "32px",
								lineHeight: "56px",
								pb: "80px",
							}}
						>
							The Thanh Coffee cam kết tạo ra tác động xã hội tích cực thông qua cách chúng tôi kinh doanh, sự tham gia vào cộng đồng và các khoản đầu tư hỗ trợ các vấn đề xã hội cấp bách. Chúng tôi luôn tự ứng xử có trách nhiệm, hướng đến giải quyết các thách thức xã hội và đóng góp vào sự phát triển bền vững của cộng đồng.
						</Box>
						{/* Các thẻ a sau chuyển trang */}
						{/* <Box
              sx={{
                display: "flex",
                alignItems: "center",
                pb: "100px",
              }}
            >
              <Box
                sx={{
                  background: "#006241",
                  p: "60px 20px 60px 20px",
                  textAlign: "center",
                }}
              >
                <Box
                  sx={{ fontSize: "32px", fontWeight: "800", color: "#ffffff" }}
                >
                  Tác động xã hội
                </Box>
              </Box>
              <Box sx={{ p: "60px 7px 48px 7px", textAlign: "center" }}>
                <Box
                  sx={{ fontSize: "32px", fontWeight: "800", color: "#006241" }}
                >
                  Báo cáo thời gian và Chi phí
                </Box>
              </Box>
              <Box sx={{ p: "60px 7px 48px 7px", textAlign: "center" }}>
                <Box
                  sx={{ fontSize: "32px", fontWeight: "800", color: "#006241" }}
                >
                  Báo cáo tài chính
                </Box>
              </Box>
              <Box sx={{ p: "60px 7px 48px 7px", textAlign: "center" }}>
                <Box
                  sx={{ fontSize: "32px", fontWeight: "800", color: "#006241" }}
                >
                  Hồ sơ kinh doanh
                </Box>
              </Box>
              <Box sx={{ p: "60px 7px 48px 7px", textAlign: "center" }}>
                <Box
                  sx={{ fontSize: "32px", fontWeight: "800", color: "#006241" }}
                >
                  Mua sắm hàng hoá và Dịch vụ
                </Box>
              </Box>
              <Box sx={{ p: "60px 7px 48px 7px", textAlign: "center" }}>
                <Box
                  sx={{ fontSize: "32px", fontWeight: "800", color: "#006241" }}
                >
                  Điều tra, Tố tụng và Kiểm toán
                </Box>
              </Box>
            </Box> */}
						<Box sx={{ display: "flex", gap: "40px" }}>
							<Box>
								<Box sx={{ fontSize: "40px", lineHeight: "56px", pb: "30px" }}>
									Cách Tiếp Cận Kinh Doanh Có Trách Nhiệm <br />
									<br />
									Chúng tôi cam kết xây dựng giá trị bền vững cho cổ đông và mang lại lợi ích toàn diện cho tất cả các bên liên quan thông qua các hoạt động kinh doanh có trách nhiệm.
								</Box>
								<Box sx={{ color: "#006241", fontSize: "24px", fontWeight: "500" }}>
									<a href="/cam-ket-ve-hoat-dong">Tìm hiểu thêm &gt;</a>
								</Box>
							</Box>
							<Box sx={{ fontSize: "32px", lineHeight: "44px" }}>
								<Box sx={{ borderBottom: "1px solid black", mb: "20px" }}>
									<strong>Tăng trưởng nhanh hơn</strong> thị trường và chiếm thị phần
								</Box>
								<Box sx={{ borderBottom: "1px solid black", mb: "20px" }}>
									<strong>Tăng trưởng thu nhập mạnh mẽ với</strong> với việc mở rộng biên lợi nhuận <strong>bền vững</strong> trong khi <strong>đầu tư</strong> ở quy mô lớn
								</Box>
								<Box sx={{ borderBottom: "1px solid black", mb: "20px" }}>
									Dòng tiền <strong>mạnh , Phân bổ vốn có kỷ luật</strong>, Lợi nhuận <strong>đáng kể</strong> cho cổ đông
								</Box>
							</Box>
						</Box>
					</Box>
				</Box>
				<Box
					sx={{
						background: "#D9D9D9",
						p: "60px 160px",
						display: "flex",
						justifyContent: "center",
						gap: "134px",
						fontSize: "24px",
					}}
				>
					<Box>
						<Box sx={{ fontSize: "40px", fontWeight: "600", pb: "40px" }}>Liên hệ</Box>
						<Box sx={{ display: "flex", gap: "80px", pb: "10px" }}>
							<Box>
								<Box sx={{ fontSize: "24px", fontWeight: "600" }}>Hà Nội</Box>
								<Box>
									<a
										href="tel:0911830666"
										style={{ color: "rgb(0,102,204)" }}
									>
										0911.830.666
									</a>
								</Box>
							</Box>
							{/* Văn phòng TP.HCM */}
							{/* <Box>
								<Box sx={{ fontSize: "24px", fontWeight: "600" }}>Hồ Chí Minh</Box>
								<Box>
									<a
										href="tel:18001008"
										style={{ color: "#006241" }}
									>
										1800.1008
									</a>
								</Box>
							</Box> */}
						</Box>
						<Box sx={{ pb: "40px" }}>
							<a
								href="mailto:lienhe.dautu@thanhcoffee.com"
								style={{ color: "rgb(0,102,204)" }}
							>
								lienhe.dautu@thanhcoffee.com
							</a>
						</Box>
						<Box>
							<a
								href="/lien-he-dau-tu"
								style={{ color: "#006241" }}
							>
								Tùy chọn liên hệ &gt;
							</a>
						</Box>
					</Box>
					<Box>
						<Box sx={{ fontSize: "40px", fontWeight: "600", pb: "40px" }}>Đăng ký nhận thông báo qua email của nhà đầu tư</Box>
						<Box>
							<TextField
								fullWidth
								margin="normal"
								id="subject"
								label="Nhập email"
								type="email"
								sx={{
									backgroundColor: "white",
									border: "1px solid black",
									mb: "10px",
									"& .MuiInputLabel-root": {
										fontStyle: "italic",
										overflow: "unset",
									},
								}}
								inputProps={{
									"aria-label": "email input field",
								}}
							/>
						</Box>
						<Box
							sx={{
								color: "#FFFFFF",
								p: "19px 92px",
								background: "#000000",
								display: "inline-block",
								fontWeight: "700",
								textTransform: "uppercase",
								cursor: "pointer",
							}}
						>
							Đăng ký
						</Box>
					</Box>
				</Box>
			</Layout.MainBg>
			<Footer />
		</Box>
	);
};

export default Desktop;
