import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import { styles } from "../../styles";
import NavBar from "../../component/layout/NavBar";
import Layout from "../../component/layout";
import moment from "moment";
import NewsCenterArrow from "../../component/svg/icon/NewsCenterArrow";
import Footer from "../../component/layout/Footer";
import { useParams } from "react-router-dom";
import { useData } from "../../hooks/useData";
import Loading from "../../component/Loading";
const Desktop = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const { type } = useParams();
	const [news] = useData("news/search/type?type=" + type);
	if (!news) return <Loading />;
	return (
		<Box sx={{ ...styles.fontSize13, fontSize: "14px" }}>
			<NavBar />
			<Layout.SecondaryBg>
				<Box sx={{ pt: "24px" }}></Box>
				<Box sx={{ position: "relative" }}>
					<Box
						sx={{
							position: "absolute",
							top: 0,
							left: 0,
							right: 0,
							zIndex: -1,
							height: "370px",
							backgroundColor: "#006241",
						}}
					>
						<Box
							sx={{
								p: "100px 0px",
								...styles.fontColor.mauTrang,
								fontSize: "50px",
								fontWeight: 700,
								textAlign: "center",
							}}
						>
							Trung tâm tin tức
						</Box>
					</Box>
					<Box
						sx={{
							position: "absolute",
							top: "262px",
							right: 0,
							left: 0,
							backgroundColor: "transparent",
						}}
					>
						<Box sx={{ p: "0px 80px" }}>
							<Grid
								container
								spacing={5}
								sx={{ flex: 1 }}
							>
								{news.map((newsItems) => (
									<Grid
										item
										xs={4}
										key={newsItems.id}
										sx={{}}
									>
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
													...styles.backgroundColor.xamE6E6E6,
													p: "30px 20px",
													height: "230px",
												}}
											>
												<Box
													sx={{
														fontWeight: 600,
														fontSize: "15px",
														pb: "25px",
													}}
												>
													{newsItems.type}
												</Box>
												<Box
													sx={{
														fontSize: "24px",
														fontWeight: 700,
													}}
												>
													{newsItems.title}
												</Box>
												<Box
													sx={{
														position: "absolute",
														bottom: 30,
														...styles.fontColor.xam666666,
														fontSize: "15px",
													}}
												>
													{moment(newsItems.time).format("LL")}
												</Box>
											</Box>
										</Box>
									</Grid>
								))}
							</Grid>
							<Box
								sx={{
									...styles.centerFlex,
									justifyContent: "center",
									gap: "64px",
									p: "60px 0px 70px",
								}}
							>
								<div
									id="news-center-arrow"
									onClick={() => setCurrentPage((current) => current - 1)}
									style={{ cursor: "pointer" }}
								>
									<NewsCenterArrow />
								</div>
								<Box sx={{ fontSize: "12px" }}>1 trên 99</Box>
								<div
									id="news-center-arrow"
									style={{ transform: "rotate(180deg)", cursor: "pointer" }}
									onClick={() => setCurrentPage((current) => current + 1)}
								>
									<NewsCenterArrow />
								</div>
							</Box>
						</Box>
						<Footer />
					</Box>
				</Box>
			</Layout.SecondaryBg>
		</Box>
	);
};

export default Desktop;
