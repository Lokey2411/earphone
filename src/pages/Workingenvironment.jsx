import { Box, Card, CardContent, CardMedia, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import Logotop from "../component/layout/LogoTop";
import Navbardesktop from "../component/layout/NavBarDesktop";
import FooterDesktop from "../component/layout/FooterDesktop";
import { RESPONSIVE_MOBILE, RESPONSIVE_TABLET, styles } from "../styles";
import baomatdulieu1 from "../component/img/baomatdulieu1.jpg";
import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom";
import ContentSection from "./../component/Workingenvironment/ContentSection";
import { useWorkingEnvironmentContent } from "./../content/workingEnvironment";
import Loading from "../component/Loading";

const ListItems = [
	{ id: 1, img: baomatdulieu1, title: "Người sáng Tạo giá trị mới" },
	{ id: 2, img: baomatdulieu1, title: "Người sáng Tạo giá trị mới" },
	{ id: 3, img: baomatdulieu1, title: "Người sáng Tạo giá trị mới" },
	{ id: 4, img: baomatdulieu1, title: "Người sáng Tạo giá trị mới" },
];

const Workingenvironment = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));
	const { content: contentSections } = useWorkingEnvironmentContent();
	if (!contentSections) return <Loading />;
	return (
		<Box sx={{ ...styles.fontSize13, textAlign: "justify" }}>
			<Box>
				<Logotop />
				<Navbardesktop />
				<Box
					sx={{
						p: "140px",
						[RESPONSIVE_TABLET]: { p: "80px 20px" },
						[RESPONSIVE_MOBILE]: { p: "60px 20px" },
					}}
				>
					<Box
						sx={{
							textAlign: "center",
							p: "96px 240px",
							color: "black",
							[RESPONSIVE_TABLET]: { p: "96px 20px 0px" },
							[RESPONSIVE_MOBILE]: {
								p: "96px 20px 0px",
							},
						}}
					>
						<Box
							sx={{
								...styles.heading[1],
								fontWeight: "700",
								pb: "20px",
							}}
						>
							Môi trường làm việc
						</Box>
						<Box
							sx={{
								...styles.heading[3],
								fontWeight: "500",
								fontStyle: "italic",
							}}
						>
							Kết nối các đối tác, chia sẻ ước mơ và hành động truyền cảm hứng để tạo nên sự thân tình và ấm áp giữa mọi người. Để mọi người nhận biết trong từng khoảnh khắc và tận hưởng niềm vui qua mỗi cốc, mỗi cửa hàng The Thanh Coffee tại mỗi thời điểm.
						</Box>
					</Box>
					{contentSections.map((section, index) => {
						console.log(section.title);
						return (
							<ContentSection
								key={index}
								{...section}
							/>
						);
					})}
					<Box sx={{ pt: "192px", [RESPONSIVE_TABLET]: { pt: "80px" }, [RESPONSIVE_MOBILE]: { pt: "40px" } }}>
						<Box
							sx={{
								textAlign: "center",
								fontSize: "48px",
								fontWeight: "700",
								p: "0 159px 64px",
								[RESPONSIVE_MOBILE]: { p: "0 20px 28px", fontSize: "28px" },
							}}
						>
							Tôi rất mong được gặp những người bạn mới!
						</Box>
						<Box sx={{ boxSizing: "border-box" }}>
							<Container component="main">
								<Grid
									container
									spacing={4}
								>
									{ListItems.map((item, index) => (
										<Grid
											item
											xs={12}
											sm={6}
											key={index}
											sx={{ display: "flex" }}
										>
											<Link
												to={`/moi-truong-lam-viec/${item.id}`}
												style={{
													textDecoration: "none",
													cursor: "pointer",
													display: "flex",
													flexGrow: 1,
												}}
											>
												<Card
													sx={{
														display: "flex",
														flexDirection: "column",
														justifyContent: "space-between",
														height: "100%",
														width: "100%",
														boxShadow: "none",
													}}
												>
													<CardMedia
														component="img"
														height="345"
														image={item.img}
														alt={item.title}
														style={{ borderRadius: "8px" }}
													/>
													<CardContent sx={{ p: 0, mt: "24px" }}>
														<Typography
															color="#101828"
															fontSize="24px"
															sx={{
																[RESPONSIVE_TABLET]: {
																	fontSize: "20px",
																},
																[RESPONSIVE_MOBILE]: {
																	fontSize: "16px",
																},
															}}
															fontWeight="600"
														>
															{item.title}
														</Typography>
														<Typography
															variant="body2"
															color="#475467"
															fontSize="16px"
															mt={2}
														>
															{item.content}
														</Typography>
														<Box
															sx={{
																textAlign: "center",
																fontSize: "20px",
																fontWeight: "500",
																color: "black",
																[RESPONSIVE_TABLET]: {
																	fontSize: "16px",
																},
																[RESPONSIVE_MOBILE]: {
																	fontSize: "12px",
																},
															}}
														>
															Xem Thêm {"->"}
														</Box>
													</CardContent>
												</Card>
											</Link>
										</Grid>
									))}
								</Grid>
							</Container>
						</Box>
					</Box>
				</Box>
				<FooterDesktop />
			</Box>
		</Box>
	);
};

export default Workingenvironment;
