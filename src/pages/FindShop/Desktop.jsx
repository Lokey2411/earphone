import { Box } from "@mui/material";
import NavBar from "../../component/layout/NavBar";
import Layout from "../../component/layout";
import Footer from "../../component/layout/Footer";
import { RESPONSIVE_DESKTOP, styles } from "../../styles";
import Information from "../../component/svg/icon/InformationIcon";
import React, { useMemo, useState } from "react";
import { useData } from "../../hooks/useData";
import trogiupchuyengia from "../../component/img/trogiupchuyengia.png";
import ContactCard from "./../../component/FindShop/ContactCard";

const actionCardsData = [
	{
		title: "Trò chuyện với người hỗ trợ của chúng tôi",
		imgSrc: trogiupchuyengia,
		linkText: "Trao đổi ngay",
		linkHref: "https://web.facebook.com/profile.php?id=61560917203069",
	},
	{
		title: "Liên hệ hợp tác và Đầu tư",
		imgSrc: trogiupchuyengia,
		linkText: "Xem thêm về Trang liên hệ",
		linkHref: "/lien-he-dau-tu",
	},
];
const Desktop = () => {
	// const slider = React.useRef(null);
	// var deXuatSetting = {
	//   slidesToShow: 1,
	//   slidesToScroll: 1,
	//   arrows: false,
	// };
	const [searchTerm, setSearchTerm] = useState("");
	const handleSearch = (event) => {
		setSearchTerm(event.target.value);
	};
	const [suggestion, setSuggestion] = useState(false);
	const [allShops] = useData("departments");
	const shops = useMemo(() => {
		return allShops ? allShops.filter((item) => item.type === "Cửa hàng") : [];
	}, [allShops]);
	return (
		<Box sx={{ ...styles.fontSize13 }}>
			<NavBar />
			<Layout.MainBg>
				<Box sx={{ pt: "24px" }}></Box>
				{/* <Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						background: "#D9D9D9",
						p: "5px 80px",
						borderBottom: "1px solid black",
					}}
				>
					<Box
						sx={{
							fontWeight: "500",
							width: "85px",
						}}
					>
						Tìm cửa hàng
					</Box>
					<Box
						sx={{
							p: "7px 20px",
							backgroundColor: "white",
							border: "black solid 1px",
							borderRadius: "19px",
							width: "300px",
						}}
					>
						<Container
							sx={{
								"&.MuiContainer-root": {
									maxWidth: "100%",
								},
							}}
							disableGutters
						>
							<TextField
								type="search"
								id="search"
								placeholder=" Tìm kiếm theo vị trí hoặc tên cửa hàng,..."
								value={searchTerm}
								onChange={handleSearch}
								onClick={(e) => {
									setSuggestion(true);
									e.stopPropagation();
								}}
								sx={{
									width: "100%",
									"& .MuiOutlinedInput-root": { border: "none" },
									".MuiOutlinedInput-notchedOutline:hover,.MuiOutlinedInput-notchedOutline": { border: "none" },
									".MuiInputBase-root": {
										padding: 0,
										margin: 0,
									},
									".MuiInputBase-input": { p: 0, fontSize: "13px" },
								}}
								InputProps={{
									startAdornment: (
										<InputAdornment
											sx={{
												"&.MuiInputAdornment-outlined": {
													margin: 0,
													padding: 0,
													marginRight: "10px",
													svg: { width: "14px", height: "14px" },
												},
											}}
											position="start"
										>
											<MenuSearchIconBlack />
										</InputAdornment>
									),
								}}
							/>
						</Container>
					</Box>
					<Box sx={{ width: "85px" }}></Box>
				</Box> */}
				<Box
					sx={{
						...styles.heading[1],
						textAlign: "center",
						fontWeight: 600,
						p: "40px 20px 20px",
						[RESPONSIVE_DESKTOP]: {
							p: "60px 0px 80px ",
						},
					}}
				>
					Cửa hàng tại Hà Nội
				</Box>
				<Box
					sx={{
						// p: "0px 132px",
						p: "0px 20px",
						[RESPONSIVE_DESKTOP]: {
							p: "0px 160px",
						},
					}}
				>
					<div
						id="slider-tim-kiem-cua-hang"
						style={{ position: "relative" }}
					>
						{/* <Box
              sx={{
                svg: { width: "45px", height: "45px" },
                position: "absolute",
                top: "50%",
                transform: "translate( 0 , -50% )",
                left: -45,
              }}
            >
              <button
                style={{
                  margin: 0,
                  padding: 0,
                  ...styles.backgroundColor.mauTrang,
                  border: 0,
                  cursor: "pointer",
                }}
                onClick={() => slider?.current?.slickPrev()}
              >
                <ArrowPrevGray />
              </button>
            </Box> */}
						{/* <Slider ref={slider} {...deXuatSetting}> */}
						{shops.map((s) => (
							<Box
								sx={{
									position: "relative",
								}}
								key={s.id}
							>
								<Box
									sx={{
										background: "black",
										width: "100%",
										// height: "50%",
										// height: "750px",
									}}
								>
									<img
										width={"100%"}
										height={"100%"}
										src={s.image}
										alt={s.name}
										style={{ objectFit: "cover" }}
									/>
								</Box>
								<Box
									sx={{
										backgroundColor: "#f3f1ec",
									}}
								>
									<Box
										sx={{
											background: "#0000001a",
											color: "#000000",
											width: "100%",
											height: "auto",
											boxSizing: "border-box",
											p: "20px 24px",
										}}
									>
										<Box
											sx={{
												...styles.centerFlex,
												justifyContent: "space-between",
											}}
										>
											<Box
												sx={{
													fontWeight: "600",
													fontSize: "24px",
													pb: "10px",
												}}
											>
												{s.name}
											</Box>
											<a href={"cua-hang/" + s.id}>
												<Information />
											</a>
										</Box>
										<Box
											sx={{
												width: "60%",
												fontSize: "16px",
											}}
										>
											{s.address}
										</Box>
										<Box
											sx={{
												pt: "40px",
											}}
										>
											Mở cửa lúc {s.openTime}
										</Box>
									</Box>
								</Box>
							</Box>
						))}
						{/* </Slider> */}
						{/* <Box
              sx={{
                svg: { width: "45px", height: "45px" },
                position: "absolute",
                top: "50%",
                transform: "translate( 0 , -50% )",
                right: -45,
              }}
            >
              <button
                style={{
                  margin: 0,
                  padding: 0,
                  ...styles.backgroundColor.mauTrang,
                  border: 0,
                  cursor: "pointer",
                }}
                onClick={() => slider?.current?.slickNext()}
              >
                <ArrowNextGray />
              </button>
            </Box> */}
					</div>
				</Box>
				<Box>
					<Box
						sx={{
							textAlign: "center",
							p: "60px",
						}}
					>
						<Box
							sx={{
								...styles.heading[1],
								fontWeight: "600",
								pb: "20px",
							}}
						>
							Hãy đến và xem những sản phẩm tốt nhất
						</Box>
						<Box
							sx={{
								...styles.heading[2],
							}}
						>
							Mang hương vị Thanh Coffee đến nhiều bối cảnh khác nhau trong cuộc sống hàng ngày của bạn
						</Box>
					</Box>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							gap: "20px",
							flexDirection: "column",
							[RESPONSIVE_DESKTOP]: {
								flexDirection: "row",
							},
						}}
					>
						{actionCardsData.map((card, index) => (
							<ContactCard
								key={index}
								{...card}
							/>
						))}
					</Box>
				</Box>
			</Layout.MainBg>
			<Footer />
		</Box>
	);
};

export default Desktop;
