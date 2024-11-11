import React, { useContext } from "react";
import { Box, Card, CardContent, Grid, styled, Typography } from "@mui/material";
import NavBar from "../../component/layout/NavBar";
import { RESPONSIVE_DESKTOP, RESPONSIVE_MOBILE, RESPONSIVE_TABLET, styles } from "../../styles";
import Layout from "../../component/layout";
import Footer from "../../component/layout/Footer";
import { Link } from "react-router-dom";
import { MobileContext } from "../../store/context/Mobile";
import ReportBox from "../../component/ContactThanhCoffee/ReportBox";

const ContentTitleBox = styled(Box)(({ theme }) => ({
	fontSize: "40px",
	fontWeight: "600",
	paddingBottom: "25px",
	...styles.heading[1],
}));
const ContentSubTitleBox = styled(Box)(({ theme }) => ({
	fontSize: "36px",
	fontWeight: "500",
	...styles.heading[1.5],
}));

const ContentBox = styled(Box)(({ theme }) => ({
	fontSize: "20px",
	...styles.heading[3],
}));
const Desktop = () => {
	const informationsList = [];
	const { isDesktop } = useContext(MobileContext);
	const xs = isDesktop ? 6 : 12;
	return (
		<Box sx={{ ...styles.fontSize13 }}>
			<NavBar />
			<Layout.MainBg>
				<Box sx={{ mt: "24px" }}>
					<Box
						sx={{
							pt: "80px",
							px: "40px",
							...styles.heading[1],
							fontWeight: "600",
							[RESPONSIVE_DESKTOP]: {
								textAlign: "center",
							},
						}}
					>
						Liên hệ The Thanh Coffee
					</Box>
					<Box
						sx={{
							p: "40px",
							[RESPONSIVE_DESKTOP]: {
								p: "80px",
							},
						}}
					>
						<ContentTitleBox>Liên hệ hỗ trợ:</ContentTitleBox>
						<Box>
							<Box sx={{ flexGrow: 1 }}>
								<Grid
									container
									spacing={isDesktop ? 13 : 2}
								>
									{" "}
									<Grid
										item
										xs={xs}
									>
										<Box>
											<ContentSubTitleBox>Cửa hàng trực tuyến</ContentSubTitleBox>
											<ContentBox>
												<p>
													Cảm ơn quý khách đã tin tưởng và sử dụng sản phẩm của The Thanh Coffee. Để đảm bảo quý khách có trải nghiệm tốt nhất, chúng tôi luôn sẵn sàng hỗ trợ mọi thắc mắc và yêu cầu của quý khách. <br />
													<br />
													Thông tin liên hệ hỗ trợ:
													<ul>
														<li>Email: hotro+(chủ đề hỗ trợ)@thanhcoffee.com</li>
														<li>
															Hotline:{" "}
															<a
																style={{ color: "#006241" }}
																href="tel:(+84) 0911.830.666"
															>
																(+84) 0911.830.666
															</a>
														</li>
													</ul>
												</p>
											</ContentBox>
											<ContentTitleBox>Liên hệ Doanh nghiệp:</ContentTitleBox>
											<ContentBox>
												The Thanh Coffee mong muốn hợp tác với các doanh nghiệp nhằm phát triển bền vững và nâng cao chất lượng sản phẩm. Thông tin liên hệ hợp tác qua số hotline{" "}
												<a
													style={{ color: "#006241" }}
													href="tel:(+84) 0911.830.666"
												>
													(+84) 0911.830.666
												</a>{" "}
												để thảo luận về các cơ hội hợp tác đầu tư và đặt hàng với số lượng lớn.
											</ContentBox>
										</Box>
									</Grid>
									<Grid
										item
										xs={xs}
									>
										<ContentTitleBox>Tìm kiếm cửa hàng:</ContentTitleBox>
										<ContentBox sx={{ fontSize: "20px" }}>Để tìm cửa hàng The Thanh Coffee gần nhất, vui lòng sử dụng công cụ tìm kiếm cửa hàng trên trang web của chúng tôi. Chỉ cần nhập địa chỉ hoặc vị trí của bạn, công cụ sẽ hiển thị các cửa hàng gần nhất cùng thông tin chi tiết về địa chỉ, số điện thoại, và giờ mở cửa.</ContentBox>
										<ContentSubTitleBox className="tw-mt-3">Hỗ trợ về sản phẩm của chúng tôi:</ContentSubTitleBox>
										<ContentBox sx={{ fontSize: "20px" }}>
											<ul>
												<li>Câu hỏi thường gặp: Truy cập phần FAQs trên trang web của chúng tôi, tìm kiếm câu trả lời cho các câu hỏi phổ biến về sản phẩm</li>
												<li>Hỗ trợ trực tuyến: Sử dụng chức năng chat trực tiếp trên trang web để được hỗ trợ ngay lập tức từ đội ngũ chăm sóc khách hàng.</li>
												<li>
													Điện thoại: Gọi trực tiếp đến số hotline{" "}
													<a
														style={{ color: "#006241" }}
														href="tel:(+84) 0911.830.666"
													>
														(+84) 0911.830.666{" "}
													</a>
													nếu bạn cần hỗ trợ chi tiết về bất kỳ sản phẩm nào của chúng tôi.
												</li>
											</ul>
										</ContentBox>
									</Grid>
								</Grid>
								<ContentBox sx={{ fontSize: "20px" }}>
									<br />
									Chúng tôi rất mong nhận được phản hồi từ quý khách và sẽ nỗ lực hết mình để giải quyết các yêu cầu một cách nhanh chóng và chu đáo nhất.
									<br />
									<br />
									Trân trọng, <br />
									<b>Đội ngũ hỗ trợ khách hàng The Thanh Coffee</b>
								</ContentBox>
							</Box>
						</Box>
						<Box>
							<Box
								sx={{
									border: "1px solid black ",
									borderRadius: "20px",
									mt: "80px",
								}}
							>
								<Box
									sx={{
										textAlign: "center",
										p: "80px 0",
										borderBottom: "1px solid black",
										...styles.heading[3],
										["@media (max-width: 1024px)"]: {
											p: "40px 20px",
											textAlign: "left",
										},
									}}
								>
									<Box
										sx={{
											...styles.heading[1.5],
											fontWeight: "500",
											mb: "12px",
											[RESPONSIVE_DESKTOP]: {
												pb: "50px",
											},
										}}
									>
										Địa Chỉ Công Ty
									</Box>
									<Box>The Thanh Coffee</Box>
									<Box>Tòa nhà Toyota </Box>
									<Box>15 Phạm Hùng, Hà Nội</Box>
									<a
										style={{ color: "#006241" }}
										href="tel:(+84) 0911.830.666"
									>
										(+84) 0911.830.666
									</a>
								</Box>
								{/* <Box sx={{ p: "80px", borderBottom: "1px solid black" }}>
									<Box sx={{ fontSize: "36px" }}>Thông Tin Thường Được Yêu Cầu</Box>
									<Box sx={{ boxSizing: "border-box" }}>
										<Grid
											container
											rowSpacing={4}
											columnSpacing={18}
											sx={{
												".MuiPaper-root": { boxShadow: 0 },
												"& > .MuiGrid-item": { paddingBottom: "80px" },
											}}
										>
											{informationsList.map((item) => (
												<Grid
													item
													sm={4}
													md={4}
													key={item.id}
												>
													<Card
														sx={{
															"& .MuiCardContent-root": { padding: 0 },
															"& .MuiCardContent-root:last-child": {
																pt: "40px",
															},
														}}
													>
														<CardContent sx={{ ".MuiCardContent-root": { pt: "50px" } }}>
															<Typography
																gutterBottom
																fontSize={"24px"}
																fontWeight={"500"}
															>
																{item.title}
															</Typography>
															<Typography
																gutterBottom
																fontSize={"20px"}
															>
																{item.content}
															</Typography>
															<Link
																href={item.link}
																rel="noopener"
															>
																<Typography
																	variant="body2"
																	color="#006241"
																	fontSize={"20px"}
																>
																	{item.linkText}
																</Typography>
															</Link>
														</CardContent>
													</Card>
												</Grid>
											))}
										</Grid>
									</Box>
								</Box> */}
								<Box sx={{ p: "80px", ["@media(max-width: 1024px)"]: { p: "40px 20px" } }}>
									<Box sx={{ ...styles.heading[1.5], pb: "40px", fontWeight: "500", ["@media(max-width: 1024px)"]: { pb: "20px" } }}>Phản Hồi</Box>
									<Box sx={{ fontSize: "24px", pb: "15px", ...styles.heading[3] }}>Hãy cho chúng tôi biết về chất lượng công việc của chúng tôi. Chọn tùy chọn phản hồi phù hợp (chúng tôi đọc tất cả phản hồi nhưng không phải lúc nào cũng có khả năng hồi đáp): </Box>
									<Box
										sx={{
											display: "flex",
											// justifyContent: "space-between",
											...styles.heading[3],
											color: "#006241",
											// flexDirection: "column",
											gap: "10px",
											flexWrap: "wrap",
											width: "100%",
											[RESPONSIVE_DESKTOP]: {
												flexDirection: "row",
											},
										}}
									>
										<ReportBox
											href="mailto:hotro.sanphamvamuaban@thanhcoffee.com"
											text="Phản hồi về sản phẩm"
										/>
										<ReportBox
											href="mailto:hotro.nentangweb@thanhcoffee.com"
											text="Phản hồi về trang web"
										/>
										<ReportBox
											href="mailto:hotro.chamsockhachhang@thanhcoffee.com"
											text="Phản hồi về phục vụ"
										/>
									</Box>
								</Box>
							</Box>
						</Box>
					</Box>
				</Box>
			</Layout.MainBg>
			<Footer />
		</Box>
	);
};

export default Desktop;
