import Layout from "../../component/layout";
import NavBar from "../../component/layout/NavBar";
import { Box } from "@mui/material";
import { styles } from "../../styles";
import Footer from "../../component/layout/Footer";
import ruongcoffee from "../../component/img/ruongcoffee.jpg";
import { useEffect, useState } from "react";
import AddIconWhiteBg from "../../component/svg/icon/AddIconWhiteBg";
import TichXIcon from "../../component/svg/icon/TichXICon";
import { useData } from "../../hooks/useData";
const Mobile = () => {
	const [isModalOpen, setIsModalOpen] = useState(-1);
	const [abouts] = useData("abouts/search/parent?parent=nguon-nguyen-lieu");
	const [firstAbout, setFirstAbout] = useState({});
	const [middleAbouts, setMiddleAbouts] = useState([]);
	// const [lastAbout, setLastAbout] = useState({});
	useEffect(() => {
		if (abouts) {
			setFirstAbout(abouts[0]);
			// setLastAbout(abouts[abouts.length - 1]);
			setMiddleAbouts(abouts.filter((_, index) => index !== 0 && index < abouts.length - 1));
		}
	}, [abouts]);
	const modalOpened = abouts?.find((item) => item.id === isModalOpen)?.popups;
	useEffect(() => {
		console.log(modalOpened, isModalOpen);
	}, [modalOpened, isModalOpen]);
	return (
		<Box sx={{ ...styles.fontSize13 }}>
			<NavBar />
			<Layout.MainBg>
				{isModalOpen >= 0 && (
					<Box
						sx={{
							...styles.fontSize13,
							position: "fixed",
							top: "0",
							left: "0",
							width: "100%",
							height: "100%",
							background: "#ffffff" /* Màu nền với độ mờ */,
							zIndex: "1000",
						}}
					>
						<Box
							sx={{
								width: "100%",
								height: "100%",
								maxWidth: "100%",
								maxHeight: "100%",
								overflow: "auto",
							}}
						>
							<Box
								sx={{
									p: "24px",
								}}
							>
								<Box
									sx={{ ...styles.centerFlex, justifyContent: "right" }}
									onClick={() => setIsModalOpen(-1)}
								>
									<TichXIcon />
								</Box>
								<Box>
									<Box
										sx={{
											fontSize: "25px",
											fontWeight: 600,
											p: "15px 0px 40px",
										}}
									>
										{modalOpened?.title}
									</Box>
									<Box
										sx={{ lineHeight: "150%", textAlign: "justify" }}
										dangerouslySetInnerHTML={{ __html: modalOpened?.details }}
									></Box>
								</Box>
							</Box>
						</Box>
					</Box>
				)}
				<Box
					sx={{
						fontSize: "14px",
						fontWeight: "700",
						textAlign: "center",
						p: "30px 10px 15px 10px",
					}}
				>
					{firstAbout?.title?.toUpperCase()}
				</Box>
				<Box
					sx={{
						fontSize: "23px",
						fontWeight: "700",
						textAlign: "center",
						p: "0 24px 40px 24px",
					}}
				>
					{firstAbout?.subtitle}
				</Box>
				<Box sx={{ ...styles.centerFlex }}>
					<img
						width={"100%"}
						src={firstAbout?.image || ruongcoffee}
						alt="hạt coffee tươi mang đến cảm giác fresh mát lạ"
					/>
				</Box>
				<Box sx={{ p: "40px 24px 40px 24px", textAlign: "center" }}>{firstAbout?.details}</Box>
				<Box sx={{ pb: "20px", ...styles.centerFlex }}>
					<img
						width={"100%"}
						src={ruongcoffee}
						alt="hạt coffee tươi mang đến cảm giác fresh mát lạ"
					/>
				</Box>
				{middleAbouts?.map((item, index) => (
					<Box
						sx={{ position: "relative", mb: "20px" }}
						key={index}
					>
						<Box sx={{ ...styles.centerFlex }}>
							<img
								width={"100%"}
								src={item.image || ruongcoffee}
								alt={ruongcoffee}
							/>
						</Box>
						<Box
							sx={{ position: "absolute", top: 24, right: 24, zIndex: 2 }}
							onClick={() => setIsModalOpen(item.id)}
						>
							<AddIconWhiteBg
								width="35px"
								height="35px"
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
							sx={{
								position: "absolute",
								top: "85px",
								left: 0,
								right: 0,
								bottom: 0,
								textAlign: "center",
								color: "white",
								padding: "0px 24px",
							}}
						>
							<Box sx={{ fontSize: "16px", pb: "20px" }}>{item.title}</Box>
							<Box sx={{ fontSize: "23px" }}>{item.subtitle}</Box>
						</Box>
					</Box>
				))}
			</Layout.MainBg>
			<Footer />
		</Box>
	);
};

export default Mobile;
