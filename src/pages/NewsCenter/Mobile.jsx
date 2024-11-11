import React, { useState } from "react";
import { Box } from "@mui/material";
import { styles } from "../../styles";
import NavBar from "../../component/layout/NavBar";
import Layout from "../../component/layout";
import moment from "moment";
import NewsCenterArrow from "../../component/svg/icon/NewsCenterArrow";
import Footer from "../../component/layout/Footer";
import { useParams } from "react-router-dom";
import { useData } from "../../hooks/useData";
import Loading from "../../component/Loading";
const Mobile = () => {
	const [currentPage, setCurrentPage] = useState(1);
	// const news = [
	// 	{
	// 		id: 1,
	// 		img: trungtamtintuc1,
	// 		title: "The Thanh Coffee khuyến nghị các cổ đông “CHỈ” bầu chọn cho mỗi người được đề cử",
	// 		date: "Ngày 01 tháng 03 năm 2024",
	// 	},
	// 	{
	// 		id: 2,
	// 		img: trungtamtintuc1,
	// 		title: "The Thanh Coffee khuyến nghị các cổ đông “CHỈ” bầu chọn cho mỗi người được đề cử",
	// 		date: "Ngày 01 tháng 03 năm 2024",
	// 	},
	// 	{
	// 		id: 3,
	// 		img: trungtamtintuc1,
	// 		title: "The Thanh Coffee khuyến nghị các cổ đông “CHỈ” bầu chọn cho mỗi người được đề cử",
	// 		date: "Ngày 01 tháng 03 năm 2024",
	// 	},
	// 	{
	// 		id: 4,
	// 		img: trungtamtintuc1,
	// 		title: "The Thanh Coffee khuyến nghị các cổ đông “CHỈ” bầu chọn cho mỗi người được đề cử",
	// 		date: "Ngày 01 tháng 03 năm 2024",
	// 	},
	// ];
	const { type } = useParams();
	const [news] = useData("news/search/type?type=" + type);
	if (!news) return <Loading />;
	return (
		<Box sx={{ ...styles.fontSize13, fontSize: "14px" }}>
			<NavBar />
			<Layout.SecondaryBg>
				<Box sx={{ position: "relative" }}>
					<Box
						sx={{
							position: "absolute",
							top: 0,
							left: 0,
							right: 0,
							zIndex: -1,
							height: "255px",
							backgroundColor: "#1E3932",
						}}
					>
						<Box
							sx={{
								p: "70px 24px",
								...styles.fontColor.mauTrang,
								fontSize: "16px",
							}}
						>
							Trung tâm tin tức
						</Box>
					</Box>
					<Box
						sx={{
							position: "absolute",
							top: "194px",
							right: 0,
							left: 0,
							backgroundColor: "transparent",
						}}
					>
						<Box sx={{ ...styles.pad20 }}>
							{news.map((newsItems) => (
								<Box
									key={newsItems.id}
									sx={{ mb: "24px", ...styles.backgroundColor.xamE6E6E6 }}
								>
									<Box sx={{ ...styles.centerFlex, pb: "8px" }}>
										<img
											width={"100%"}
											alt=""
											src={newsItems.image}
										/>
									</Box>
									<Box sx={{ fontSize: "16px", fontWeight: 700, pb: "40px" }}>{newsItems.title}</Box>
									<Box
										sx={{
											...styles.fontColor.xam666666,
											fontSize: "12px",
											lineHeight: "150%",
											pb: "24px",
										}}
									>
										{moment(newsItems.time).format("LL")}
									</Box>
								</Box>
							))}
							<Box
								sx={{
									...styles.centerFlex,
									justifyContent: "center",
									gap: "64px",
									p: "10px 0px 40px",
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

export default Mobile;
