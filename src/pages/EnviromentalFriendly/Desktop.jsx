import Layout from "../../component/layout";
import NavBar from "../../component/layout/NavBar";
import { Box, Grid } from "@mui/material";
import { RESPONSIVE_DESKTOP, RESPONSIVE_MOBILE, RESPONSIVE_TABLET, styles } from "../../styles";
import Footer from "../../component/layout/Footer";
import AddIconWhiteBg from "../../component/svg/icon/AddIconWhiteBg";
import ArrowNextGray from "../../component/svg/icon/ArrowNextGray";
import meomeo from "../../component/img/meomeo.jpg";
import meomeomeo from "../../component/img/meomeomeo.jpg";
import meokiwi from "../../component/img/meokiwi.jpg";
import React, { useContext, useEffect, useMemo, useState } from "react";
import Slider from "react-slick";
import TichXIcon from "../../component/svg/icon/TichXICon";
import PlayCircleIcon from "../../component/svg/icon/PlayCircleIcon";
import PauseCircleIcon from "../../component/svg/icon/PauseCircleIcon";
import ArrowPrevGray from "../../component/svg/icon/ArrowPrevGray";
import { useAbouts } from "../../hooks/useAbouts";
import BackgroundImageBox from "../../component/BackgroundImageBox";
import { MobileContext } from "../../store/context/Mobile";
import Modal from "../../component/Modal";
import Loading from "../../component/Loading";
const Desktop = () => {
	const slider = React.useRef(null);

	const [isSliderPlaying, setISSLiderPlaying] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(-1);
	const [proof] = useAbouts();
	// const [popup] = useState([]);
	const sliderProof = useMemo(() => (!proof ? [] : proof.filter((item) => item.type === "slider")), [proof]);
	const normalProof = useMemo(() => (!proof ? [] : proof.filter((item) => !item.type)), [proof]);
	const openedPopup = useMemo(() => (!proof ? [] : proof.find((item) => item.id === isModalOpen)?.popups), [isModalOpen, proof]);
	const intervalId = React.useRef(null); // Store interval ID in a ref
	const { isMobile, isTablet } = useContext(MobileContext);
	var deXuatSetting = {
		centerMode: true,
		centerPadding: isTablet ? "150px" : isMobile ? "80px" : "320px",
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		infinite: true,
		autoplay: isSliderPlaying,
		autoplaySpeed: 2500,
	};
	if (!proof) return <Loading />;
	return (
		<Box sx={{ ...styles.fontSize13, overflow: "hidden" }}>
			<NavBar />
			<Layout.MainBg>
				<Modal
					isOpen={isModalOpen > 0}
					onClose={() => setIsModalOpen(-1)}
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
										[RESPONSIVE_DESKTOP]: { p: "50px" },
										p: "0px",
									}}
								>
									<Box
										sx={{
											fontSize: "40px",
											fontWeight: 600,
											pb: "16px",
										}}
									>
										{openedPopup?.title}
									</Box>
									<Box
										sx={{
											fontSize: "18px",
											pb: "36px",
										}}
										dangerouslySetInnerHTML={{
											__html: openedPopup?.details,
										}}
									></Box>
									<Box sx={{ ...styles.centerFlex }}>
										{openedPopup?.image && (
											<img
												width={"100%"}
												src={openedPopup.image}
												alt="?"
											/>
										)}
									</Box>
								</Box>
							</Box>
						</Box>
					</Box>
				</Modal>
				<Box sx={{ pt: "24px" }}></Box>
				<Box
					sx={{
						p: "40px 100px 70px",
						[RESPONSIVE_TABLET]: {
							p: "40px 50px 70px",
						},
						[RESPONSIVE_MOBILE]: {
							p: "40px 20px 70px",
						},
					}}
				>
					<Box sx={{ [RESPONSIVE_DESKTOP]: { p: "0px " }, p: "0px 0px" }}>
						<Box
							sx={{
								fontWeight: "600",
								my: "20px",
								...styles.heading[1],
								[RESPONSIVE_DESKTOP]: {
									fontSize: "48px",
								},
							}}
						>
							The thanh chia sẻ cam kết đối với môi trường
						</Box>
						<Box sx={{ mb: "75px", ...styles.heading[3] }}>The Thanh không chỉ nhìn nhận môi trường là nơi cung cấp nguồn nguyên liệu cho sản xuất mà còn coi đó như một người bạn đồng hành quan trọng trong sự phát triển của thương hiệu. Chúng tôi luôn biết ơn và đánh giá cao những gì mà hành tinh đã mang lại cho cuộc sống, cam kết cho đi nhiều hơn để bảo vệ và chăm sóc môi trường. Thương hiệu tự hào về những sản phẩm và dịch vụ được cung cấp, và tất cả đang là những điều mà chúng tôi không ngừng cố gắng và nỗ lực để hoàn thiện hơn.</Box>
					</Box>

					<Grid
						container
						spacing={5}
					>
						{normalProof?.map((e, index) => (
							<Grid
								key={e.id}
								item
								xs={isMobile ? 12 : 6}
							>
								<Box
									sx={{
										position: "relative",
										// height: "500px",
										height: "100%",
										[RESPONSIVE_DESKTOP]: {
											height: "500px",
										},
									}}
								>
									<BackgroundImageBox
										imageSrc={e.image}
										className="tw-h-full"
									>
										<Box
											sx={{
												position: "absolute",
												top: 35,
												right: 35,
												left: 35,
											}}
										>
											<Box
												sx={{
													display: "flex",
													justifyContent: "space-between",
													gap: "20px",
												}}
											>
												<Box
													sx={{
														color: "white",
														...styles.heading[1.5],
														fontWeight: 600,
														[RESPONSIVE_MOBILE]: {
															fontSize: "18px",
														},
													}}
												>
													{e.title}
												</Box>
												<Box
													onClick={() => setIsModalOpen(e.id)}
													sx={{ cursor: "pointer" }}
												>
													<AddIconWhiteBg
														width="50px"
														height="50px"
													/>
												</Box>
											</Box>
										</Box>
									</BackgroundImageBox>
								</Box>
							</Grid>
						))}
					</Grid>
					<Box
						sx={{
							fontWeight: "bold",
							// textAlign: "center",
							...styles.heading[1],
							m: "60px 0 40px",
							[RESPONSIVE_DESKTOP]: {
								m: "75px 0 19px",
								fontSize: "45px",
							},
						}}
					>
						Hành Động Vì Môi Trường <br /> - Trách Nhiệm Chung Của Cộng Đồng
					</Box>
					<Box sx={{ ...styles.heading[3], pb: "60px" }}>Trong tầm nhìn của chúng tôi, tương lai bền vững của ngành cà phê không chỉ dừng lại ở việc sản xuất cà phê chất lượng mà còn là việc chúng tôi chịu trách nhiệm với mỗi cốc cà phê mà chúng tôi phục vụ.</Box>
					<div
						id="slider-next-news-desktop"
						style={{ margin: "0px -100px" }}
					>
						<Box
							sx={{
								position: "relative",
								".slick-track": {
									gap: "20px!important",
								},
							}}
						>
							<Slider
								ref={slider}
								{...deXuatSetting}
							>
								{sliderProof?.map((e, index) => (
									<Box
										sx={{
											position: "relative",
											width: "980px",
											height: "516px",
										}}
									>
										<img
											loading="lazy"
											width={"100%"}
											height={"100%"}
											alt="Loại bỏ carbon bắt đầu từ sự phục hồi"
											key={index}
											src={e.image}
											style={{
												objectFit: "cover",
												height: "100%",
											}}
										/>
										<Box
											sx={{
												position: "absolute",
												top: 0,
												right: 0,
												bottom: 0,
												left: 0,
												backgroundColor: "black",
												opacity: "0.4",
											}}
										></Box>
										<Box
											sx={{
												position: "absolute",
												bottom: 35,
												left: 35,
												right: -35,
											}}
										>
											<Box
												sx={{
													color: "white",
													width: "35%",
													fontWeight: 600,
													...styles.heading[1.5],
												}}
											>
												{e.title}
											</Box>
										</Box>
										<Box
											sx={{
												position: "absolute",
												top: 20,
												right: 20,
												zIndex: 5,
											}}
										>
											<Box
												onClick={() => setIsModalOpen(e.id)}
												sx={{ cursor: "pointer" }}
											>
												<AddIconWhiteBg
													width="35px"
													height="35px"
												/>
											</Box>
										</Box>
									</Box>
								))}
							</Slider>
							<Box
								sx={{
									...styles.centerFlex,
									justifyContent: "space-between",
									p: "40px 100px 0px",
									[RESPONSIVE_DESKTOP]: { p: "40px 350px 0px" },
								}}
							>
								<Box>
									{isSliderPlaying ? (
										<Box
											sx={{
												cursor: "pointer",
											}}
											onClick={() => (slider?.current?.slickPause(), setISSLiderPlaying(!isSliderPlaying))}
										>
											<Box
												sx={{
													svg: {
														width: "45px",
														height: "45px",
													},
												}}
											>
												<PauseCircleIcon />
											</Box>
										</Box>
									) : (
										<Box
											sx={{
												cursor: "pointer",
											}}
											onClick={() => (slider?.current?.slickPlay(), setISSLiderPlaying(!isSliderPlaying))}
										>
											<Box
												sx={{
													svg: {
														width: "45px",
														height: "45px",
													},
												}}
											>
												<PlayCircleIcon />
											</Box>
										</Box>
									)}
								</Box>
								<Box sx={{ ...styles.centerFlex, gap: "10px" }}>
									<Box
										sx={{
											cursor: "pointer",
										}}
										onClick={() => slider?.current?.slickPrev()}
									>
										<ArrowPrevGray
											width="45"
											height="45"
										/>
									</Box>
									<Box
										sx={{
											cursor: "pointer",
										}}
										onClick={() => slider?.current?.slickNext()}
									>
										<ArrowNextGray
											width="45"
											height="45"
										/>
									</Box>
								</Box>
							</Box>
						</Box>
					</div>
				</Box>
			</Layout.MainBg>
			<Footer />
		</Box>
	);
};

export default Desktop;
