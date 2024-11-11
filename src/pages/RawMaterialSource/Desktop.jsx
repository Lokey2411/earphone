import Layout from "../../component/layout";
import NavBar from "../../component/layout/NavBar";
import { Box, Grid, styled } from "@mui/material";
import { RESPONSIVE_MOBILE, styles } from "../../styles";
import Footer from "../../component/layout/Footer";
import { useContext, useEffect, useState } from "react";
import AddIconWhiteBg from "../../component/svg/icon/AddIconWhiteBg";
import TichXIcon from "../../component/svg/icon/TichXICon";
import nguyenlieudesktop1 from "../../component/img/nguyenlieudesktop1.png";
import nguyenlieudesktop2 from "../../component/img/nguyenlieudesktop2.png";
import { useData } from "../../hooks/useData";
import { useAbouts } from "../../hooks/useAbouts";
import Loading from "../../component/Loading";
import Modal from "../../component/Modal";
import { MobileContext } from "../../store/context/Mobile";
import BackgroundImageBox from "../../component/BackgroundImageBox";
import TitleBox from "../../component/TitleBox";
import SubtitleBox from "../../component/SubtitleBox";
import Banner from "../../component/Banner";
const Desktop = () => {
	const [isModalOpen, setIsModalOpen] = useState();
	const [abouts] = useAbouts();
	const [firstAbout, setFirstAbout] = useState({});
	const [middleAbouts, setMiddleAbouts] = useState([]);
	const [lastAbout, setLastAbout] = useState({});
	const { isMobile, isTablet, isDesktop } = useContext(MobileContext);
	useEffect(() => {
		if (abouts) {
			setFirstAbout(abouts[0]);
			setLastAbout(abouts[abouts.length - 1]);
			setMiddleAbouts(abouts.filter((_, index) => index !== 0 && index < abouts.length - 1));
		}
	}, [abouts]);
	const modalOpened = abouts?.find((item) => item.id === isModalOpen)?.popups;
	useEffect(() => {
		console.log(modalOpened, isModalOpen);
	}, [modalOpened, isModalOpen]);

	if (!abouts) return <Loading />;
	return (
		<Box sx={{ ...styles.fontSize13 }}>
			<NavBar />
			<Modal
				isOpen={isModalOpen > 0}
				onClose={() => setIsModalOpen(-1)}
			>
				<Box sx={{ p: "130px 70px 50px", [RESPONSIVE_MOBILE]: { p: "0" } }}>
					<Box sx={{ fontSize: "40px", fontWeight: 600, pb: "40px", [RESPONSIVE_MOBILE]: { fontSize: "24px" } }}>{modalOpened?.title}</Box>
					<Box
						sx={{
							fontSize: "18px",
							pb: "36px",
							textAlign: "justify",
						}}
						dangerouslySetInnerHTML={{ __html: modalOpened?.details }}
					></Box>
					<Box sx={{ ...styles.centerFlex }}>
						{modalOpened?.image && (
							<img
								width={"100%"}
								src={modalOpened.image}
								alt="?"
							/>
						)}
					</Box>
				</Box>
			</Modal>
			<Layout.MainBg>
				<Box
					sx={{
						[RESPONSIVE_MOBILE]: { mt: "52px" },
					}}
				></Box>
				<Banner imageSrc={firstAbout.image ?? nguyenlieudesktop1}>
					<Box
						sx={{
							position: "absolute",
							top: "50%",
							left: "102px",
							transform: "translate(0 , -50%)",
							textAlign: "center",
							fontWeight: "700",
							color: "white",
							width: "500px",
							[RESPONSIVE_MOBILE]: {
								width: "100%",
								left: "0",
								textAlign: "left",
								padding: "0 20px",
							},
						}}
					>
						<TitleBox>{firstAbout?.title}</TitleBox>
						<SubtitleBox
							sx={{
								fontSize: "48px",
								[RESPONSIVE_MOBILE]: { fontSize: "18px" },
							}}
						>
							{firstAbout?.subtitle}
						</SubtitleBox>
					</Box>
				</Banner>
				<Box sx={{ p: "50px 100px 80px", backgroundColor: "#EDEBE8", [RESPONSIVE_MOBILE]: { p: "50px 20px 80px" } }}>
					{/* <Box sx={{ pb: "40px", ...styles.centerFlex, height: "600px" }}>
						<img
							width={"100%"}
							height={"100%"}
							src={nguyenlieudesktop2}
							alt="hạt coffee tươi mang đến cảm giác fresh mát lạ"
							style={{ objectFit: "cover" }}
						/>
					</Box> */}
					<h1 className="tw-text-[32px] tw-font-Inter tw-font-bold tw-mb-6">Chuyện về nguồn nguyên liệu của chúng tôi</h1>
					<Grid
						container
						spacing={3.75}
					>
						{middleAbouts?.map((item, index) => (
							<Grid
								id={"abouts-" + index}
								item
								xs={isDesktop ? 6 : 12}
								key={item.id}
							>
								<Box sx={{ position: "relative" }}>
									<Box sx={{ ...styles.centerFlex }}>
										<img
											width={"100%"}
											height={"100%"}
											src={item.image}
											alt="anh coffee"
											style={{ objectFit: "cover" }}
										/>
									</Box>
									<Box
										sx={{
											position: "absolute",
											top: 0,
											bottom: 0,
											left: 0,
											right: 0,
											backgroundColor: "black",
											opacity: "0.4",
										}}
									></Box>
									<Box
										sx={{ position: "absolute", top: 35, right: 35, [RESPONSIVE_MOBILE]: { top: 15, right: 15 } }}
										onClick={() => setIsModalOpen(item.id)}
									>
										<AddIconWhiteBg
											width="50px"
											height="50px"
										/>
									</Box>
									<Box
										sx={{
											position: "absolute",
											top: "50%",
											transform: "translate( 0 , -50% )",
											left: 0,
											right: 0,
											textAlign: "center",
											color: "white",
											padding: "0px 60px",
											[RESPONSIVE_MOBILE]: { padding: "0px 20px" },
										}}
									>
										<TitleBox>{item.title}</TitleBox>
										<SubtitleBox>{item.subtitle}</SubtitleBox>
									</Box>
								</Box>
							</Grid>
						))}
					</Grid>
					<Box
						sx={{ position: "relative", mt: "50px" }}
						onLoad={(e) => {
							const example = document.getElementById("abouts-0");
							if (example) e.target.style.height = example.clientHeight + "px";
						}}
					>
						<Box sx={{ ...styles.centerFlex }}>
							<img
								width={"100%"}
								height={"100%"}
								src={lastAbout?.image}
								alt="anh coffee"
								style={{ objectFit: "cover" }}
							/>
						</Box>
						<Box
							sx={{
								position: "absolute",
								top: 0,
								bottom: 0,
								left: 0,
								right: 0,
								backgroundColor: "black",
								opacity: "0.4",
							}}
						></Box>
						<Box
							sx={{ position: "absolute", top: 35, right: 35, [RESPONSIVE_MOBILE]: { top: 15, right: 15 } }}
							onClick={() => setIsModalOpen(lastAbout?.id)}
						>
							<AddIconWhiteBg
								width="50px"
								height="50px"
							/>
						</Box>
						<Box
							sx={{
								position: "absolute",
								top: "50%",
								transform: "translate( 0 , -50% )",
								left: 0,
								right: 0,
								textAlign: "center",
								color: "white",
								padding: "0px 60px",
								[RESPONSIVE_MOBILE]: { padding: "0px 20px" },
							}}
						>
							<TitleBox>{lastAbout?.title}</TitleBox>
							<SubtitleBox>{lastAbout?.subtitle}</SubtitleBox>
						</Box>
					</Box>
				</Box>
			</Layout.MainBg>
			<Footer />
		</Box>
	);
};

export default Desktop;
