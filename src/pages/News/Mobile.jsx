import Layout from "../../component/layout";
import NavBar from "../../component/layout/NavBar";
import { Box } from "@mui/material";
import { styles } from "../../styles";
import Footer from "../../component/layout/Footer";
import { useLocation } from "react-router-dom";
import moment from "moment-timezone";
import NewsFBIcon from "../../component/svg/icon/NewsFBIcon";
import NewsInstaIcon from "../../component/svg/icon/NewsInstaIcon";
import NewsMatchCaseIcon from "../../component/svg/icon/NewsMatchCaseIcon";
import NewsContentCopyIcon from "../../component/svg/icon/NewsContentCopyIcon";
import NewsFilterIcon from "../../component/svg/icon/NewsFilterIcon";
import NewsDownloadImageIcon from "../../component/svg/icon/NewsDownloadImageIcon";
import { useData } from "../../hooks/useData";
import Loading from "../../component/Loading";
const Mobile = () => {
	const location = useLocation();
	const id = location.pathname.split("/")[2];
	const [news] = useData("news/" + id);
	if (!news) return <Loading />;
	return (
		<Box sx={{ ...styles.fontSize13 }}>
			<NavBar />
			<Layout.MainBg>
				<Box
					sx={{
						background: "#DBDAD5",
						fontSize: "16px",
						p: "8px 24px",
						fontWeight: "600",
					}}
				>
					Tin tức
				</Box>
				<Box sx={{ ...styles.pad20 }}>
					<Box
						sx={{
							color: "#666666",
							textTransform: "uppercase",
							pt: "26px",
							fontSize: "12px",
							fontWeight: "700",
						}}
					>
						{news?.type}
					</Box>
					<Box
						sx={{
							color: "#666666",
							fontSize: "12px",
							fontWeight: "700",
						}}
					>
						{moment(news?.time).format("LL")}
					</Box>
					<Box
						sx={{
							fontSize: "24px",
							fontWeight: "700",
							p: "32px 0 40px 0",
						}}
					>
						{news?.title}
					</Box>
					<Box
						sx={{
							color: "#666666",
							fontSize: "12px",
							fontWeight: "700",
						}}
					>
						{news?.subtitle}
					</Box>
					<Box
						sx={{
							color: "#666666",
							fontSize: "12px",
							fontWeight: "700",
						}}
					>
						Doanh thu dịch vụ đạt mức cao mới nhất
					</Box>
					<Box
						sx={{
							pt: "16px",
							fontSize: "14px",
							lineHeight: "21px",
						}}
					>
						<Box sx={{ ...styles.centerFlex, pb: "20px" }}>
							<img
								width={"100%"}
								alt="meomeomeo"
								src={news?.image}
							/>
						</Box>
						<Box dangerouslySetInnerHTML={{ __html: news.description }}></Box>
					</Box>
					<Box sx={{ pt: "40px", ...styles.fontSize13, fontSize: "8px" }}>
						<Box sx={{ pb: "20px" }}>Chia sẻ bài viết</Box>
						<Box
							sx={{
								display: "flex",
								pb: "30px",
								gap: "18px",
								svg: { width: "16px", height: "16px" },
							}}
						>
							<Box>
								<NewsFBIcon />
							</Box>
							<Box>
								<NewsInstaIcon />
							</Box>
						</Box>
						<Box
							sx={{
								background: "#F5F5F7",
								borderRadius: "19px 19px 0px 0px",
							}}
						>
							<Box sx={{ p: "12px 46px" }}>
								<Box
									sx={{
										display: "flex",
										gap: "12px",
									}}
								>
									<Box sx={{ svg: { width: "20px", height: "20px" } }}>
										<NewsMatchCaseIcon />
									</Box>
									<Box>
										<Box sx={{ fontSize: "7px", p: "8px 0px 18px" }}>Văn bản của bài viết này</Box>
										<Box
											sx={{
												display: "flex",
												alignItems: "center",
												justifyContent: "space-between",
												background: "#FFFFFF",
												p: "8px 14px",
												borderRadius: "25px",
												borderLeft: "1px solid #FFFFFF",
												borderRight: "1px solid #FFFFFF",
												// width: "120px",
												gap: "20px",
												cursor: "pointer",
											}}
										>
											<Box sx={{ fontSize: "7px" }}>Sao chép văn bản</Box>
											<Box sx={{ svg: { width: "15px", height: "15px" } }}>
												<NewsContentCopyIcon />
											</Box>
										</Box>
									</Box>
								</Box>
							</Box>
						</Box>
						<Box
							sx={{
								background: "#F5F5F7",
								borderRadius: "0px 0px 19px 19px",
								mb: "35px",
							}}
						>
							<Box sx={{ p: "12px 46px" }}>
								<Box
									sx={{
										display: "flex",
										gap: "12px",
									}}
								>
									<Box sx={{ svg: { width: "20px", height: "20px" } }}>
										<NewsFilterIcon />
									</Box>
									<Box>
										<Box sx={{ fontSize: "7px", p: "8px 0px 18px" }}>Văn bản của bài viết này</Box>
										<Box
											sx={{
												display: "flex",
												background: "#FFFFFF",
												p: "8px 14px",
												justifyContent: "space-between",
												borderRadius: "25px",
												borderLeft: "1px solid #FFFFFF",
												borderRight: "1px solid #FFFFFF",
												width: "120px",
												gap: "20px",
											}}
										>
											<Box>Tải tất cả hình ảnh</Box>
											<Box sx={{ svg: { width: "15px", height: "15px" } }}>
												<NewsDownloadImageIcon />
											</Box>
										</Box>
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

export default Mobile;
