import React, { useContext, useMemo, useState } from "react";
import { Box, Grid } from "@mui/material";
import { RESPONSIVE_MOBILE, RESPONSIVE_TABLET, styles } from "../../styles";
import NavBar from "../../component/layout/NavBar";
import Layout from "../../component/layout";
import Footer from "../../component/layout/Footer";
import moment from "moment-timezone";
import { useData } from "../../hooks/useData";
import Loading from "../../component/Loading";
import { MobileContext } from "../../store/context/Mobile";
const Desktop = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const handleSearch = (event) => {
		setSearchTerm(event.target.value);
	};
	const [suggestion, setSuggestion] = useState(false);
	const [news] = useData("news/search/parent?parent=tin-san-pham");
	const newsflash = useMemo(() => {
		return news ? news.sort((a, b) => (moment(a.time).isBefore(b.time) ? 1 : -1)) : [];
	}, [news]);
	const { isMobile } = useContext(MobileContext);
	if (!news) return <Loading />;
	return (
		<Box sx={{ ...styles.fontSize13 }}>
			<NavBar />
			<Layout.MainBg>
				<Box sx={{ pt: "24px" }}></Box>
				<Box
					sx={{
						p: "16px 80px 0px",
						[RESPONSIVE_MOBILE]: {
							p: "52px 20px 0px",
						},
					}}
				>
					<Box
						sx={{
							fontWeight: 600,
							fontSize: "20px",
							mb: "48px",
							pb: "16px",
							borderBottom: "1px solid black",
							textTransform: "uppercase",
						}}
					>
						Câu chuyện và tin tức
					</Box>
					<Grid
						container
						spacing={4}
						sx={{ flex: 1 }}
					>
						{news.map((newsItems, index) =>
							index > 0 ? (
								<Grid
									item
									xs={isMobile ? 6 : 4}
									key={newsItems.id}
									sx={{}}
								>
									<a href={"/noi-dung-tin-tuc/" + newsItems.id}>
										<Box
											sx={{
												display: "flex",
												flexDirection: "column",
												justifyContent: "space-between",
											}}
										>
											<Box sx={{ ...styles.centerFlex }}>
												<img
													width={"100%"}
													alt=""
													src={newsItems.image}
												/>
											</Box>
											<Box
												sx={{
													position: "relative",
													backgroundColor: "#F5F5F7",
													p: "30px 20px",
												}}
											>
												<Box
													sx={{
														fontWeight: 600,
														fontSize: "14px",
														pb: "12px",
													}}
												>
													{newsItems.type}
												</Box>
												<Box
													sx={{
														fontSize: "24px",
														fontWeight: 700,
														lineHeight: "125%",
														mb: "30px",
													}}
												>
													{newsItems.title}
												</Box>
												<Box
													sx={{
														...styles.fontColor.xam666666,
														fontSize: "14px",
													}}
												>
													{moment(newsItems.time).format("LL")}
												</Box>
											</Box>
										</Box>
									</a>
								</Grid>
							) : (
								<Grid
									item
									xs={12}
									sx={{}}
								>
									<a href={"/noi-dung-tin-tuc/" + newsItems.id}>
										<Box
											sx={{
												display: "flex",
												width: "100%",
												[RESPONSIVE_MOBILE]: {
													flexDirection: "column",
												},
												[RESPONSIVE_TABLET]: {
													flexDirection: "column",
												},
											}}
										>
											<Box
												sx={{
													...styles.centerFlex,
													width: "60%",
													[RESPONSIVE_MOBILE]: {
														width: "100%",
													},
													[RESPONSIVE_TABLET]: {
														width: "100%",
													},
												}}
											>
												<img
													width={"100%"}
													alt=""
													src={newsItems.image}
												/>
											</Box>
											<Box
												sx={{
													width: "40%",
													p: "45px 35px 50px",
													backgroundColor: "#F5F5F7",
													display: "flex",
													flexDirection: "column",
													justifyContent: "space-between",
													[RESPONSIVE_MOBILE]: {
														width: "100%",
													},
													[RESPONSIVE_TABLET]: {
														width: "100%",
													},
												}}
											>
												<Box>
													<Box
														sx={{
															fontSize: "14px",
															fontWeight: 600,
															pb: "30px",
														}}
													>
														{newsItems.type}
													</Box>
													<Box
														sx={{
															fontSize: "35px",
															fontWeight: 600,
														}}
													>
														{newsItems.title}
													</Box>
												</Box>
												<Box
													sx={{
														...styles.fontColor.xam666666,
														fontSize: "14px",
														lineHeight: "150%",
													}}
												>
													{moment(newsItems.time).format("LL")}
												</Box>
											</Box>
										</Box>
									</a>
								</Grid>
							)
						)}
					</Grid>
				</Box>
				<Box sx={{ p: "60px 80px", [RESPONSIVE_MOBILE]: { p: "60px 20px" } }}>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							gap: "130px",
							[RESPONSIVE_MOBILE]: { gap: "20px", flexDirection: "column" },
							[RESPONSIVE_TABLET]: { gap: "20px", flexDirection: "column" },
						}}
					>
						<Box
							sx={{
								fontWeight: 600,
								fontSize: "32px",
								width: "20%",
								[RESPONSIVE_MOBILE]: { width: "100%" },
							}}
						>
							Tin mới nhất
						</Box>
						<Box sx={{ "div:last-child": { border: 0, mb: 0 } }}>
							{newsflash?.map((e, index) => (
								<Box
									sx={{
										borderBottom: "solid #666666 0.2px",
										mb: "20px",
										pb: "20px",
										cursor: "pointer",
									}}
									onClick={() => {
										window.location.href = "/noi-dung-tin-tuc/" + e.id;
									}}
									key={e.id}
								>
									<Box
										sx={{
											display: "flex",
											justifyContent: "space-between",
											gap: "170px",
											[RESPONSIVE_MOBILE]: { gap: "20px" },
											[RESPONSIVE_TABLET]: { gap: "20px" },
										}}
										key={index}
									>
										<Box
											sx={{
												fontSize: "20px",
												width: "calc(100% - 400px)",
												[RESPONSIVE_MOBILE]: { width: "100%" },
												[RESPONSIVE_TABLET]: { width: "100%" },
											}}
										>
											{e.title}
										</Box>
										<Box
											sx={{
												...styles.fontColor.xam666666,
												fontSize: "18px",
												textAlign: "right",
											}}
										>
											{moment(e.time).format("LL")}
										</Box>
									</Box>
								</Box>
							))}
						</Box>
					</Box>
				</Box>
				<Box sx={{ p: "0px 80px", [RESPONSIVE_MOBILE]: { p: "0px 20px" } }}>
					<Box
						sx={{
							textAlign: "center",
							display: "flex",
							justifyContent: "space-between",
							gap: "40px",
							[RESPONSIVE_MOBILE]: { flexDirection: "column", gap: "20px" },
							[RESPONSIVE_TABLET]: {
								flexDirection: "column",
								gap: "20px",
							},
						}}
					>
						<Box
							sx={{
								...styles.centerFlex,
								...styles.backgroundColor.xamE6E6E6,
								flexDirection: "column",
								justifyContent: "space-between",
								p: "40px 15px",
								gap: "40px",
							}}
						>
							<Box sx={{ fontSize: "32px", fontWeight: 600 }}>Con người địa phương</Box>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									justifyContent: "space-between",
									gap: "60px",
								}}
							>
								<Box sx={{ fontSize: "20px" }}>The Thanh Coffee vinh danh và kết nối cộng đồng địa phương qua mỗi ly cà phê. Chúng tôi tôn trọng và đón nhận những câu chuyện, kỷ niệm và giá trị đích thực của cộng đồng. Mỗi ly cà phê tại The Thanh Coffee mang theo hương vị đặc biệt và một phần của những nụ cười, những cuộc hẹn và những lời chia sẻ, góp phần tạo nên một không gian thân thiện và đáng nhớ cho tất cả.</Box>
								<Box
									sx={{
										display: "flex",
										justifyContent: "center",
									}}
								>
									<Box
										sx={{
											...styles.backgroundColor.xanhlacay06542D,
											height: "5px",
											width: "calc(100% - 330px)",
										}}
									></Box>
								</Box>
							</Box>
							{/* img here */}
							{/* <Box sx={{ ...styles.centerFlex }}>
                                <img src={tintuc3} alt="?" width={"100%"} />
                            </Box> */}
						</Box>
						<Box
							sx={{
								...styles.centerFlex,
								...styles.backgroundColor.xamE6E6E6,
								flexDirection: "column",
								justifyContent: "space-between",
								p: "40px 15px",
								gap: "40px",
							}}
						>
							<Box sx={{ fontSize: "32px", fontWeight: 600 }}>Môi trường</Box>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									justifyContent: "space-between",
									gap: "60px",
								}}
							>
								<Box sx={{ fontSize: "20px" }}>Chúng tôi tự hào về các sản phẩm và dịch vụ mang tính bền vững mà chúng tôi cung cấp. Từ việc sử dụng nguyên liệu hữu cơ đến việc giảm thiểu lượng chất thải, chúng tôi luôn nỗ lực để ngày càng hoàn thiện quy trình sản xuất và kinh doanh của mình. Sự hoàn thiện không chỉ đến từ chất lượng sản phẩm mà còn từ sự đóng góp tích cực của chúng tôi vào việc bảo vệ môi trường và xây dựng một cộng đồng bền vững hơn.</Box>
								<Box
									sx={{
										display: "flex",
										justifyContent: "center",
									}}
								>
									<Box
										sx={{
											...styles.backgroundColor.xanhlacay06542D,
											height: "5px",
											width: "calc(100% - 330px)",
										}}
									></Box>
								</Box>
							</Box>
							{/* img here */}
							{/* <Box sx={{ ...styles.centerFlex }}>
								<img
									src={tintuc3}
									alt="?"
									width={"100%"}
								/>
							</Box> */}
						</Box>
						<Box
							sx={{
								...styles.centerFlex,
								...styles.backgroundColor.xamE6E6E6,
								flexDirection: "column",
								justifyContent: "space-between",
								p: "40px 15px",
								gap: "40px",
							}}
						>
							<Box sx={{ fontSize: "32px", fontWeight: 600 }}>Cà phê & Thủ công</Box>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									justifyContent: "space-between",
									gap: "60px",
								}}
							>
								<Box sx={{ fontSize: "20px" }}>Đây là thành quả của quá trình nỗ lực đáng kinh ngạc đằng sau mỗi ly cà phê, là triết lý trong công việc của chúng tôi, từ việc chăm sóc cây cà phê, rang xay hạt cho đến pha chế đồ uống, mọi quy trình đều được thực hiện một cách tỉ mỉ và tinh xảo. Thông qua những ly cà phê, chúng tôi hiểu giá trị của việc pha chế thủ công và chúng tôi cũng muốn bạn hiểu được nỗ lực mang tới giá trị trọn vẹn trong từng sản phẩm và dịch vụ của The Thanh.</Box>
								<Box
									sx={{
										display: "flex",
										justifyContent: "center",
									}}
								>
									<Box
										sx={{
											...styles.backgroundColor.xanhlacay06542D,
											height: "5px",
											width: "calc(100% - 330px)",
										}}
									></Box>
								</Box>
							</Box>
							{/* img here */}
							{/* <Box sx={{ ...styles.centerFlex }}>
								<img
									src={tintuc3}
									alt="?"
									width={"100%"}
								/>
							</Box> */}
						</Box>
					</Box>
					<Box
						sx={{
							// ...styles.backgroundColor.xanhlacay06542D,
							height: "5px",
							width: "100%",
							mt: "60px",
						}}
					></Box>
				</Box>
				{/* <Box sx={{ p: "70px 80px" }}>
					<Box
						sx={{
							textAlign: "center",
							fontSize: "50px",
							fontWeight: 600,
							pb: "70px",
						}}
					>
						HÃY ĐỂ CÓ SỰ THAY ĐỔI
					</Box>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							gap: "60px",
						}}
					>
						<Box
							sx={{
								p: "60px 50px",
								...styles.backgroundColor.xamE6E6E6,
								width: "calc(50% - 30px)",
							}}
						>
							<Box sx={{ fontSize: "32px", fontWeight: 700 }}>Giữ liên lạc</Box>
							<Box
								sx={{
									display: "flex",
									justifyContent: "space-between",
									gap: "50px",
								}}
							>
								<Box>
									<Box sx={{ fontSize: "20px", p: "15px 0px 20px" }}>Đăng ký để nhận các câu chuyện và tin tức về The Thanh Coffee được gửi tới hộp thư đến của bạn.</Box>
									<Box sx={{ ...styles.centerFlex }}>
										<Box
											sx={{
												p: "16px 55px",
												backgroundColor: "black",
												borderRadius: "22px",
												...styles.fontColor.mauTrang,
											}}
										>
											THEO DÕI
										</Box>
									</Box>
								</Box>
								<NewsPhoneIcon />
							</Box>
						</Box>
						<Box
							sx={{
								p: "60px 50px",
								...styles.backgroundColor.xamE6E6E6,
								width: "calc(50% - 30px)",
							}}
						>
							<Box sx={{ fontSize: "32px", fontWeight: 700 }}>Trung tâm báo chí</Box>
							<Box
								sx={{
									display: "flex",
									justifyContent: "space-between",
									gap: "50px",
								}}
							>
								<Box>
									<Box sx={{ fontSize: "20px", p: "15px 0px 20px" }}>Tất cả các tin tức và quan điểm mới nhất từ The Thanh Coffee</Box>
									<Box sx={{ width: "fit-content" }}>
										<a
											href="/"
											style={{
												...styles.centerFlex,
												gap: "10px",
												fontWeight: 600,
											}}
										>
											<Box
												sx={{
													...styles.fontColor.xanhNhat006241,
												}}
											>
												XEM TRUNG TÂM BÁO CHÍ
											</Box>
											<Box sx={{ "svg>path": { stroke: "#006241" } }}>
												<LeftArrowBlack
													width="16px"
													height="16px"
												/>
											</Box>
										</a>
									</Box>
								</Box>
								<NewsArticleIcon />
							</Box>
						</Box>
					</Box>
				</Box> */}
			</Layout.MainBg>
			<Footer />
		</Box>
	);
};

export default Desktop;
