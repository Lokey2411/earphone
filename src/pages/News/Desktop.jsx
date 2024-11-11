import Layout from "../../component/layout";
import NavBar from "../../component/layout/NavBar";
import { Box } from "@mui/material";
import { appKeyFrames, styles } from "../../styles";
import Footer from "../../component/layout/Footer";
import { useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment-timezone";
import NewsFBIcon from "../../component/svg/icon/NewsFBIcon";
import NewsInstaIcon from "../../component/svg/icon/NewsInstaIcon";
import NewsMatchCaseIcon from "../../component/svg/icon/NewsMatchCaseIcon";
import NewsContentCopyIcon from "../../component/svg/icon/NewsContentCopyIcon";
import NewsFilterIcon from "../../component/svg/icon/NewsFilterIcon";
import NewsDownloadImageIcon from "../../component/svg/icon/NewsDownloadImageIcon";
import { convertHtmlToTiengViet, createPage } from "../../functions/controller";
import { useData } from "../../hooks/useData";
import Loading from "../../component/Loading";
import Modal from "./../../component/Modal/index";
const Desktop = () => {
	const { id } = useParams();
	const [news] = useData("news/" + id);
	const [allNews] = useData("news");
	const filteredNews = allNews?.filter((item) => item.parent === "tin-san-pham");
	const [copied, setCopied] = useState(false);
	const getImages = () => {
		const parent = document.querySelector("#description");
		const images = parent.getElementsByTagName("img");
		for (let i = 0; i < images?.length; i++) {
			fetch(images[i].src)
				.then((response) => {
					response.arrayBuffer().then(function (buffer) {
						const url = window.URL.createObjectURL(new Blob([buffer]));
						const link = document.createElement("a");
						link.href = url;
						console.table(url);
						link.setAttribute("download", "image.png"); //or any other extension
						document.body.appendChild(link);
						link.click();
						document.body.removeChild(link);
					});
				})
				.catch(console.error);
		}
	};

	const copyText = convertHtmlToTiengViet(news?.description);
	if (!news || !allNews) return <Loading />;
	return (
		<Box sx={{ ...styles.fontSize13 }}>
			<NavBar />
			<Modal
				isOpen={copied}
				onClose={() => {
					setCopied(false);
				}}
			>
				<Box
					sx={{ textAlign: "center", width: "100%", height: "100%", display: "grid", placeItems: "center", animation: `${appKeyFrames.slideIn} 0.5s ease-in-out` }}
					className="tw-text-3xl tw-text-primary tw-font-Inter-Bold"
				>
					Đã sao chép thành công
				</Box>
			</Modal>
			<Layout.MainBg>
				<Box sx={{ borderBottom: "solid black 1px" }}>
					<Box sx={{ pt: "24px" }}></Box>
					{news?.type === "THÔNG CÁO BÁO CHÍ" && (
						<Box>
							<Box sx={{ p: "60px 312px 0px" }}>
								<Box
									sx={{
										textTransform: "uppercase",
										fontSize: "20px",
										fontWeight: "600",
										pb: "10px",
									}}
								>
									{news?.type}
								</Box>
								<Box
									sx={{
										fontSize: "20px",
										fontWeight: "500",
										pb: "30px",
									}}
								>
									{moment(news?.time).format("LL")}
								</Box>
								<Box
									sx={{
										fontSize: "40px",
										pb: "35px",
										fontWeight: "600",
									}}
								>
									{news?.title}
								</Box>
								<Box
									sx={{
										display: "flex",
										pb: "50px",
										gap: "40px",
									}}
								>
									<a href="https://www.facebook.com/people/C%C3%A0-Ph%C3%AA-The-Thanh/61560917203069/">
										<NewsFBIcon />
									</a>
									<a href="https://www.instagram.com/thethanh.coffee/">
										<NewsInstaIcon />
									</a>
									{/* <NewsShareIcon /> */}
								</Box>
								<Box
									sx={{
										fontSize: "24px",
										lineHeight: "140%",
									}}
								>
									<Box
										sx={{
											...styles.centerFlex,
											pb: "80px",
										}}
									>
										<img
											width={"100%"}
											alt="Hình ảnh banner của tin tức"
											src={news?.image}
										/>
									</Box>
									<Box
										id="description"
										sx={{
											img: {
												width: "100%",
											},
										}}
										dangerouslySetInnerHTML={{
											__html: news?.description,
										}}
									/>
								</Box>
								<Box sx={{ pt: "60px", ...styles.fontSize13 }}>
									<Box
										sx={{
											pb: "35px",
											fontSize: "32px",
											fontWeight: 600,
										}}
									>
										Chia sẻ bài viết
									</Box>
									<Box
										sx={{
											display: "flex",
											pb: "80px",
											gap: "40px",
										}}
									>
										<a href="https://www.facebook.com/people/C%C3%A0-Ph%C3%AA-The-Thanh/61560917203069/">
											<NewsFBIcon />
										</a>
										<a href="https://www.instagram.com/thethanh.coffee/">
											<NewsInstaIcon />
										</a>
										{/* <NewsShareIcon /> */}
									</Box>
									<Box
										sx={{
											background: "#F5F5F7",
											borderRadius: "19px 19px 0px 0px",
										}}
									>
										<Box sx={{ p: "30px" }}>
											<Box
												sx={{
													...styles.centerFlex,
													justifyContent: "space-between",
												}}
											>
												<Box
													sx={{
														display: "flex",
														gap: "10px",
													}}
												>
													<Box
														sx={{
															svg: {
																width: "32px",
																height: "32px",
															},
															...styles.centerFlex,
														}}
													>
														<NewsMatchCaseIcon />
													</Box>
													<Box
														sx={{
															fontSize: "24px",
															fontWeight: 600,
														}}
													>
														Văn bản của bài viết này
													</Box>
												</Box>
												<Box
													sx={{
														display: "flex",
														alignItems: "center",
														justifyContent: "space-between",
														background: "#FFFFFF",
														p: "10px 25px",
														borderRadius: "25px",
														borderLeft: "1px solid #FFFFFF",
														borderRight: "1px solid #FFFFFF",
														gap: "10px",
													}}
												>
													<Box
														sx={{
															fontSize: "20px",
															fontWeight: 500,
														}}
													>
														Sao chép văn bản
													</Box>
													<Box
														sx={{
															svg: {
																width: "24px",
																height: "24px",
															},
														}}
													>
														<NewsContentCopyIcon />
													</Box>
												</Box>
											</Box>
										</Box>
									</Box>
									<Box
										sx={{
											background: "#F5F5F7",
											borderRadius: "0px 0px 19px 19px",
										}}
									>
										<Box sx={{ p: "30px" }}>
											<Box
												sx={{
													...styles.centerFlex,
													justifyContent: "space-between",
												}}
											>
												<Box
													sx={{
														display: "flex",
														gap: "10px",
													}}
												>
													<Box
														sx={{
															svg: {
																width: "32px",
																height: "32px",
															},
															...styles.centerFlex,
														}}
													>
														<NewsFilterIcon />
													</Box>
													<Box
														sx={{
															fontSize: "24px",
															fontWeight: 600,
														}}
													>
														Hình ảnh trong bài viết này
													</Box>
												</Box>
												<Box
													sx={{
														display: "flex",
														alignItems: "center",
														justifyContent: "space-between",
														background: "#FFFFFF",
														p: "10px 25px",
														borderRadius: "25px",
														borderLeft: "1px solid #FFFFFF",
														borderRight: "1px solid #FFFFFF",
														gap: "10px",
													}}
												>
													<Box
														sx={{
															fontSize: "20px",
															fontWeight: 500,
														}}
													>
														Tải tất cả hình ảnh
													</Box>
													<Box
														sx={{
															svg: {
																width: "24px",
																height: "24px",
															},
															...styles.centerFlex,
														}}
													>
														<NewsDownloadImageIcon />
													</Box>
												</Box>
											</Box>
										</Box>
									</Box>
								</Box>
							</Box>
							<Box
								sx={{
									p: "60px 0px",
									m: "0px 312px",
									fontSize: "20px",
									borderBottom: "solid #6B6C64 1px",
								}}
							>
								<Box sx={{ fontWeight: 600, pb: "15px" }}>Về The Thanh Coffee</Box>
								<Box>Chúng tôi cam kết mang đến cho khách hàng những sản phẩm cà phê tinh túy nhất, cùng với không gian thoải mái và dịch vụ chuyên nghiệp. Chúng tôi tin rằng, cà phê không chỉ đơn thuần là một thức uống, mà còn là một phong cách sống và một cách thể hiện cá nhân.</Box>
							</Box>
							<Box
								sx={{
									p: "60px 0px",
									m: "0px 312px",
									borderBottom: "solid #6B6C64 1px",
								}}
							>
								<Box
									sx={{
										fontWeight: 600,
										pb: "35px",
										fontSize: "32px",
									}}
								>
									Liên Lạc Báo Chí
								</Box>
								<Box sx={{ fontWeight: 600, fontSize: "24px" }}>The Thanh Media Helpline</Box>
								<Box
									sx={{
										fontSize: "20px",
										...styles.fontColor.xanhNhat006241,
										textDecoration: "underline",
									}}
								>
									media_vietnam@thanhcoffee.com
								</Box>
							</Box>
							<Box
								sx={{
									p: "60px 0px 20px",
									m: "0px 312px",
								}}
							>
								<Box sx={{ fontWeight: 600, fontSize: "32px" }}>Tin Tức Mới Nhất</Box>
								{createPage(
									allNews?.sort((a, b) => (moment(a.time).isBefore(b.time) ? 1 : -1)),
									0,
									3
								).map((newsItems, index) =>
									index > 0 ? (
										<Box
											key={newsItems.id}
											sx={{
												display: "flex",
												borderTop: "solid #6B6C64 1px",
												p: "40px 0px",
											}}
										>
											<Box sx={{ ...styles.centerFlex }}>
												<img
													width={"265px"}
													height={"164px"}
													alt=""
													src={newsItems.image}
													style={{
														objectFit: "cover",
													}}
												/>
											</Box>
											<Box
												sx={{
													p: "0px 25px",
													display: "flex",
													flexDirection: "column",
													justifyContent: "space-between",
												}}
											>
												<Box sx={{ fontWeight: 600 }}>
													<Box
														sx={{
															color: "#6B6C64",
															fontSize: "16px",
															pb: "10px",
														}}
													>
														{newsItems.type}
													</Box>
													<Box
														sx={{
															fontSize: "24px",
														}}
													>
														{newsItems.title}
													</Box>
												</Box>
												<Box
													sx={{
														color: "#6B6C64",
														fontSize: "16px",
													}}
												>
													{moment(newsItems.time).format("LL")}
												</Box>
											</Box>
										</Box>
									) : (
										<Box
											key={newsItems.id}
											sx={{
												display: "flex",
												p: "40px 0px",
											}}
										>
											<Box sx={{ ...styles.centerFlex }}>
												<img
													width={"265px"}
													height={"164px"}
													alt=""
													src={newsItems.image}
													style={{
														objectFit: "cover",
													}}
												/>
											</Box>
											<Box
												sx={{
													p: "0px 25px",
													display: "flex",
													flexDirection: "column",
													justifyContent: "space-between",
												}}
											>
												<Box sx={{ fontWeight: 600 }}>
													<Box
														sx={{
															color: "#6B6C64",
															fontSize: "16px",
															pb: "10px",
														}}
													>
														{newsItems.type}
													</Box>
													<Box
														sx={{
															fontSize: "24px",
														}}
													>
														{newsItems.title}
													</Box>
												</Box>
												<Box
													sx={{
														color: "#6B6C64",
														fontSize: "16px",
													}}
												>
													{moment(newsItems.time).format("LL")}
												</Box>
											</Box>
										</Box>
									)
								)}
							</Box>
						</Box>
					)}
					{news?.type === "TIN SẢN PHẨM" && (
						<Box sx={{ background: "black", color: "white" }}>
							<Box sx={{ p: "60px 312px 0px" }}>
								<Box
									sx={{
										textTransform: "uppercase",
										textAlign: "center",
										fontSize: "20px",
										fontWeight: "600",
										color: "#B2B2AF",
										pb: "35px",
									}}
								>
									{news?.type}
								</Box>
								<Box
									sx={{
										fontSize: "40px",
										pb: "35px",
										fontWeight: "600",
										textAlign: "center",
									}}
								>
									{news?.title}
								</Box>
								<Box sx={{ pb: "100px" }}>
									<Box
										sx={{
											...styles.centerFlex,
											margin: "0px -93px",
											pb: "15px",
										}}
									>
										<img
											width={"100%"}
											alt="Hình ảnh banner của sản phẩm"
											src={news?.image}
										/>
									</Box>
									<Box
										sx={{
											fontSize: "16px",
											fontWeight: "600",
										}}
									>
										{news?.subtitle}
									</Box>
								</Box>
								<Box
									sx={{
										...styles.centerFlex,
										justifyContent: "space-between",
										pb: "66px",
										borderBottom: "solid #6B6C64 1px",
									}}
								>
									<Box
										sx={{
											...styles.centerFlex,
											gap: "40px",
										}}
									>
										<Box
											sx={{
												...styles.fontColor.xanhNhat006241,
												p: "6px 14px",
												background: "white",
												borderRadius: "35px",
												fontWeight: 600,
												fontSize: "20px",
											}}
										>
											NHÀ PHÁT TRIỂN
										</Box>
										<Box
											sx={{
												fontSize: "20px",
												fontWeight: "500",
												color: "#6B6C64",
											}}
										>
											{moment(news?.time).format("LL")}
										</Box>
									</Box>
									<Box
										sx={{
											display: "flex",
											gap: "40px",
										}}
									>
										<a href="https://www.facebook.com/people/C%C3%A0-Ph%C3%AA-The-Thanh/61560917203069/">
											<NewsFBIcon />
										</a>
										<a href="https://www.instagram.com/thethanh.coffee/">
											<NewsInstaIcon />
										</a>
										{/* <NewsShareIcon /> */}
									</Box>
								</Box>
								<Box
									sx={{
										fontSize: "24px",
										lineHeight: "120%",
										p: "60px 0px",
										img: {
											width: "100%",
										},
									}}
									id="description"
									dangerouslySetInnerHTML={{
										__html: news?.description,
									}}
								></Box>
								<Box sx={{ ...styles.fontSize13 }}>
									<Box
										sx={{
											pb: "35px",
											fontSize: "32px",
											fontWeight: 600,
										}}
									>
										Chia sẻ bài viết
									</Box>
									<Box
										sx={{
											display: "flex",
											pb: "80px",
											gap: "40px",
										}}
									>
										<a href="https://www.facebook.com/people/C%C3%A0-Ph%C3%AA-The-Thanh/61560917203069/">
											<NewsFBIcon />
										</a>
										<a href="https://www.instagram.com/thethanh.coffee/">
											<NewsInstaIcon />
										</a>
										{/* <NewsShareIcon /> */}
									</Box>
									<Box
										sx={{
											background: "#1C1B1F",
											borderRadius: "19px 19px 0px 0px",
										}}
									>
										<Box sx={{ p: "30px" }}>
											<Box
												sx={{
													...styles.centerFlex,
													justifyContent: "space-between",
												}}
											>
												<Box
													sx={{
														display: "flex",
														gap: "10px",
													}}
												>
													<Box
														sx={{
															svg: {
																width: "32px",
																height: "32px",
															},
															...styles.centerFlex,
															"svg>path": {
																fill: "white",
															},
														}}
													>
														<NewsMatchCaseIcon />
													</Box>
													<Box
														sx={{
															fontSize: "24px",
															fontWeight: 600,
														}}
													>
														Văn bản của bài viết này
													</Box>
												</Box>
												<Box
													onClick={() => {
														navigator.clipboard.writeText(copyText).then(() => {
															setCopied(true);
														});
													}}
													sx={{
														display: "flex",
														alignItems: "center",
														justifyContent: "space-between",
														background: "black",
														p: "10px 25px",
														borderRadius: "25px",
														gap: "10px",
														cursor: "pointer",
													}}
												>
													<Box
														sx={{
															fontSize: "20px",
															fontWeight: 500,
														}}
													>
														Sao chép văn bản
													</Box>
													<Box
														sx={{
															svg: {
																width: "24px",
																height: "24px",
															},
															"svg > path": {
																fill: "white",
															},
														}}
													>
														<NewsContentCopyIcon />
													</Box>
												</Box>
											</Box>
										</Box>
									</Box>
									<Box
										sx={{
											background: "#1C1B1F",
											borderRadius: "0px 0px 19px 19px",
										}}
									>
										<Box sx={{ p: "30px" }}>
											<Box
												sx={{
													...styles.centerFlex,
													justifyContent: "space-between",
												}}
											>
												<Box
													sx={{
														display: "flex",
														gap: "10px",
													}}
												>
													<Box
														sx={{
															svg: {
																width: "32px",
																height: "32px",
															},
															...styles.centerFlex,
															"svg > path": {
																fill: "white",
															},
														}}
													>
														<NewsFilterIcon />
													</Box>
													<Box
														sx={{
															fontSize: "24px",
															fontWeight: 600,
														}}
													>
														Hình ảnh trong bài viết này
													</Box>
												</Box>
												<Box
													onClick={getImages}
													style={{
														display: "flex",
														alignItems: "center",
														justifyContent: "space-between",
														background: "black",
														padding: "10px 25px",
														borderRadius: "25px",
														gap: "10px",
														cursor: "pointer",
													}}
												>
													<Box
														sx={{
															fontSize: "20px",
															fontWeight: 500,
														}}
													>
														Tải tất cả hình ảnh
													</Box>
													<Box
														sx={{
															svg: {
																width: "24px",
																height: "24px",
															},
															...styles.centerFlex,
															"svg > path": {
																fill: "white",
															},
														}}
													>
														<NewsDownloadImageIcon />
													</Box>
												</Box>
											</Box>
										</Box>
									</Box>
								</Box>
							</Box>
							<Box
								sx={{
									p: "60px 0px",
									m: "0px 312px",
									fontSize: "20px",
									borderBottom: "solid #6B6C64 1px",
								}}
							>
								<Box sx={{ fontWeight: 600, pb: "15px" }}>Về The Thanh Coffee</Box>
								<Box>Chúng tôi cam kết mang đến cho khách hàng những sản phẩm cà phê tinh túy nhất, cùng với không gian thoải mái và dịch vụ chuyên nghiệp. Chúng tôi tin rằng, cà phê không chỉ đơn thuần là một thức uống, mà còn là một phong cách sống và một cách thể hiện cá nhân.</Box>
							</Box>
							<Box
								sx={{
									p: "60px 0px",
									m: "0px 312px",
									borderBottom: "solid #6B6C64 1px",
								}}
							>
								<Box
									sx={{
										fontWeight: 600,
										pb: "35px",
										fontSize: "32px",
									}}
								>
									Liên Lạc Báo Chí
								</Box>
								<Box sx={{ fontWeight: 600, fontSize: "24px" }}>The Thanh Media Helpline</Box>
								<a
									href="mailto:lienhe.baochi@thanhcoffee.com"
									style={{
										fontSize: "20px",
										...styles.fontColor.xanhNhat006241,
										textDecoration: "underline",
									}}
								>
									lienhe.baochi@thanhcoffee.com
								</a>
							</Box>
							<Box
								sx={{
									p: "60px 0px 20px",
									m: "0px 312px",
								}}
							>
								<Box sx={{ fontWeight: 600, fontSize: "32px" }}>Tin Tức Mới Nhất</Box>
								{createPage(
									allNews?.sort((a, b) => (moment(a.time).isBefore(b.time) ? 1 : -1)),
									0,
									3
								).map((newsItems, index) =>
									index > 0 ? (
										<Box
											key={newsItems.id}
											sx={{
												display: "flex",
												borderTop: "solid #6B6C64 1px",
												p: "40px 0px",
											}}
										>
											<Box sx={{ ...styles.centerFlex }}>
												<img
													width={"265px"}
													height={"164px"}
													alt=""
													src={newsItems.image}
													style={{
														objectFit: "cover",
													}}
												/>
											</Box>
											<Box
												sx={{
													p: "0px 25px",
													display: "flex",
													flexDirection: "column",
													justifyContent: "space-between",
												}}
											>
												<Box sx={{ fontWeight: 600 }}>
													<Box
														sx={{
															color: "#6B6C64",
															fontSize: "16px",
															pb: "10px",
														}}
													>
														{newsItems.type}
													</Box>
													<Box
														sx={{
															fontSize: "24px",
														}}
													>
														{newsItems.title}
													</Box>
												</Box>
												<Box
													sx={{
														color: "#6B6C64",
														fontSize: "16px",
													}}
												>
													{moment(newsItems.time).format("LL")}
												</Box>
											</Box>
										</Box>
									) : (
										<Box
											key={newsItems.id}
											sx={{
												display: "flex",
												p: "40px 0px",
											}}
										>
											<Box sx={{ ...styles.centerFlex }}>
												<img
													width={"265px"}
													height={"164px"}
													alt=""
													src={newsItems.image}
													style={{
														objectFit: "cover",
													}}
												/>
											</Box>
											<Box
												sx={{
													p: "0px 25px",
													display: "flex",
													flexDirection: "column",
													justifyContent: "space-between",
												}}
											>
												<Box sx={{ fontWeight: 600 }}>
													<Box
														sx={{
															color: "#6B6C64",
															fontSize: "16px",
															pb: "10px",
														}}
													>
														{newsItems.type}
													</Box>
													<Box
														sx={{
															fontSize: "24px",
														}}
													>
														{newsItems.title}
													</Box>
												</Box>
												<Box
													sx={{
														color: "#6B6C64",
														fontSize: "16px",
													}}
												>
													{moment(newsItems.time).format("LL")}
												</Box>
											</Box>
										</Box>
									)
								)}
							</Box>
						</Box>
					)}
					{news?.type === "TIN DOANH NGHIỆP" && (
						<Box>
							<Box sx={{ p: "60px 312px 0px" }}>
								<Box
									sx={{
										textTransform: "uppercase",
										textAlign: "center",
										fontSize: "20px",
										fontWeight: "600",
										color: "#B2B2AF",
										pb: "35px",
									}}
								>
									{news?.type}
								</Box>
								<Box
									sx={{
										fontSize: "40px",
										pb: "60px",
										fontWeight: "600",
										textAlign: "center",
									}}
								>
									{news?.title}
								</Box>
								<Box sx={{ pb: "100px" }}>
									<Box
										sx={{
											...styles.centerFlex,
											pb: "15px",
											width: "100vw",
											ml: "-312px",
										}}
									>
										<img
											width={"100%"}
											alt="Hình ảnh banner của sản phẩm"
											src={news?.image}
										/>
									</Box>
									<Box
										sx={{
											fontSize: "16px",
											fontWeight: "600",
										}}
									>
										{news?.subtitle}
									</Box>
								</Box>
								<Box
									sx={{
										...styles.centerFlex,
										justifyContent: "space-between",
										pb: "66px",
										borderBottom: "solid #6B6C64 1px",
									}}
								>
									<Box
										sx={{
											...styles.centerFlex,
											gap: "40px",
										}}
									>
										<Box
											sx={{
												color: "white",
												p: "6px 14px",
												background: "#006241",
												borderRadius: "35px",
												fontWeight: 600,
												fontSize: "20px",
											}}
										>
											NHÀ PHÁT TRIỂN
										</Box>
										<Box
											sx={{
												fontSize: "20px",
												fontWeight: "500",
												color: "#6B6C64",
											}}
										>
											{moment(news?.time).format("LL")}
										</Box>
									</Box>
									<Box
										sx={{
											display: "flex",
											gap: "40px",
										}}
									>
										<a href="https://www.facebook.com/people/C%C3%A0-Ph%C3%AA-The-Thanh/61560917203069/">
											<NewsFBIcon />
										</a>
										<a href="https://www.instagram.com/thethanh.coffee/">
											<NewsInstaIcon />
										</a>
										{/* <NewsShareIcon /> */}
									</Box>
								</Box>
								<Box
									sx={{
										fontSize: "24px",
										lineHeight: "140%",
										p: "60px 0px",
										img: {
											width: "100%",
										},
									}}
									id="description"
									dangerouslySetInnerHTML={{
										__html: news?.description,
									}}
								></Box>
								<Box sx={{ ...styles.fontSize13 }}>
									<Box
										sx={{
											pb: "35px",
											fontSize: "32px",
											fontWeight: 600,
										}}
									>
										Chia sẻ bài viết
									</Box>
									<Box
										sx={{
											display: "flex",
											pb: "80px",
											gap: "40px",
										}}
									>
										<a href="https://www.facebook.com/people/C%C3%A0-Ph%C3%AA-The-Thanh/61560917203069/">
											<NewsFBIcon />
										</a>
										<a href="https://www.instagram.com/thethanh.coffee/">
											<NewsInstaIcon />
										</a>
										{/* <NewsShareIcon /> */}
									</Box>
									<Box
										sx={{
											background: "#F5F5F7",
											borderRadius: "19px 19px 0px 0px",
										}}
									>
										<Box sx={{ p: "30px" }}>
											<Box
												sx={{
													...styles.centerFlex,
													justifyContent: "space-between",
												}}
											>
												<Box
													sx={{
														display: "flex",
														gap: "10px",
													}}
												>
													<Box
														sx={{
															svg: {
																width: "32px",
																height: "32px",
															},
															...styles.centerFlex,
														}}
													>
														<NewsMatchCaseIcon />
													</Box>
													<Box
														sx={{
															fontSize: "24px",
															fontWeight: 600,
														}}
													>
														Văn bản của bài viết này
													</Box>
												</Box>
												<Box
													sx={{
														display: "flex",
														alignItems: "center",
														justifyContent: "space-between",
														background: "#FFFFFF",
														p: "10px 25px",
														borderRadius: "25px",
														borderLeft: "1px solid #FFFFFF",
														borderRight: "1px solid #FFFFFF",
														gap: "10px",
													}}
												>
													<Box
														sx={{
															fontSize: "20px",
															fontWeight: 500,
														}}
													>
														Sao chép văn bản
													</Box>
													<Box
														sx={{
															svg: {
																width: "24px",
																height: "24px",
															},
														}}
													>
														<NewsContentCopyIcon />
													</Box>
												</Box>
											</Box>
										</Box>
									</Box>
									<Box
										sx={{
											background: "#F5F5F7",
											borderRadius: "0px 0px 19px 19px",
										}}
									>
										<Box sx={{ p: "30px" }}>
											<Box
												sx={{
													...styles.centerFlex,
													justifyContent: "space-between",
												}}
											>
												<Box
													sx={{
														display: "flex",
														gap: "10px",
													}}
												>
													<Box
														sx={{
															svg: {
																width: "32px",
																height: "32px",
															},
															...styles.centerFlex,
														}}
													>
														<NewsFilterIcon />
													</Box>
													<Box
														sx={{
															fontSize: "24px",
															fontWeight: 600,
														}}
													>
														Hình ảnh trong bài viết này
													</Box>
												</Box>
												<Box
													sx={{
														display: "flex",
														alignItems: "center",
														justifyContent: "space-between",
														background: "#FFFFFF",
														p: "10px 25px",
														borderRadius: "25px",
														borderLeft: "1px solid #FFFFFF",
														borderRight: "1px solid #FFFFFF",
														gap: "10px",
													}}
												>
													<Box
														sx={{
															fontSize: "20px",
															fontWeight: 500,
														}}
													>
														Tải tất cả hình ảnh
													</Box>
													<Box
														sx={{
															svg: {
																width: "24px",
																height: "24px",
															},
															...styles.centerFlex,
														}}
													>
														<NewsDownloadImageIcon />
													</Box>
												</Box>
											</Box>
										</Box>
									</Box>
								</Box>
							</Box>
							<Box
								sx={{
									p: "60px 0px",
									m: "0px 312px",
									fontSize: "20px",
									borderBottom: "solid #6B6C64 1px",
								}}
							>
								<Box sx={{ fontWeight: 600, pb: "15px" }}>Về The Thanh Coffee</Box>
								<Box>Chúng tôi cam kết mang đến cho khách hàng những sản phẩm cà phê tinh túy nhất, cùng với không gian thoải mái và dịch vụ chuyên nghiệp. Chúng tôi tin rằng, cà phê không chỉ đơn thuần là một thức uống, mà còn là một phong cách sống và một cách thể hiện cá nhân.</Box>
							</Box>
							<Box
								sx={{
									p: "60px 0px",
									m: "0px 312px",
									borderBottom: "solid #6B6C64 1px",
								}}
							>
								<Box
									sx={{
										fontWeight: 600,
										pb: "35px",
										fontSize: "32px",
									}}
								>
									Liên Lạc Báo Chí
								</Box>
								<Box sx={{ fontWeight: 600, fontSize: "24px" }}>The Thanh Media Helpline</Box>
								<Box
									sx={{
										fontSize: "20px",
										...styles.fontColor.xanhNhat006241,
										textDecoration: "underline",
									}}
								>
									media_vietnam@thanhcoffee.com
								</Box>
							</Box>
							<Box
								sx={{
									p: "60px 0px 20px",
									m: "0px 312px",
								}}
							>
								<Box sx={{ fontWeight: 600, fontSize: "32px" }}>Tin Tức Mới Nhất</Box>
								{createPage(
									filteredNews?.sort((a, b) => (moment(a.time).isBefore(b.time) ? 1 : -1)),
									0,
									3
								).map((newsItems, index) =>
									index > 0 ? (
										<Box
											key={newsItems.id}
											sx={{
												display: "flex",
												borderTop: "solid #6B6C64 1px",
												p: "40px 0px",
											}}
										>
											<Box sx={{ ...styles.centerFlex }}>
												<img
													width={"265px"}
													height={"164px"}
													alt=""
													src={newsItems.image}
													style={{
														objectFit: "cover",
													}}
												/>
											</Box>
											<Box
												sx={{
													p: "0px 25px",
													display: "flex",
													flexDirection: "column",
													justifyContent: "space-between",
												}}
											>
												<Box sx={{ fontWeight: 600 }}>
													<Box
														sx={{
															color: "#6B6C64",
															fontSize: "16px",
															pb: "10px",
														}}
													>
														{newsItems.type}
													</Box>
													<Box
														sx={{
															fontSize: "24px",
														}}
													>
														{newsItems.title}
													</Box>
												</Box>
												<Box
													sx={{
														color: "#6B6C64",
														fontSize: "16px",
													}}
												>
													{moment(newsItems.time).format("LL")}
												</Box>
											</Box>
										</Box>
									) : (
										<Box
											key={newsItems.id}
											sx={{
												display: "flex",
												p: "40px 0px",
											}}
										>
											<Box sx={{ ...styles.centerFlex }}>
												<img
													width={"265px"}
													height={"164px"}
													alt=""
													src={newsItems.image}
													style={{
														objectFit: "cover",
													}}
												/>
											</Box>
											<Box
												sx={{
													p: "0px 25px",
													display: "flex",
													flexDirection: "column",
													justifyContent: "space-between",
												}}
											>
												<Box sx={{ fontWeight: 600 }}>
													<Box
														sx={{
															color: "#6B6C64",
															fontSize: "16px",
															pb: "10px",
														}}
													>
														{newsItems.type}
													</Box>
													<Box
														sx={{
															fontSize: "24px",
														}}
													>
														{newsItems.title}
													</Box>
												</Box>
												<Box
													sx={{
														color: "#6B6C64",
														fontSize: "16px",
													}}
												>
													{moment(newsItems.time).format("LL")}
												</Box>
											</Box>
										</Box>
									)
								)}
							</Box>
						</Box>
					)}
				</Box>
			</Layout.MainBg>
			<Footer />
		</Box>
	);
};

export default Desktop;
