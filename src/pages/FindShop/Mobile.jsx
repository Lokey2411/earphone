import { Box, Container, InputAdornment, TextField } from "@mui/material";
import NavBar from "../../component/layout/NavBar";
import Layout from "../../component/layout";
import Footer from "../../component/layout/Footer";
import { styles } from "../../styles";
import Information from "../../component/svg/icon/InformationIcon";
import React, { useMemo, useState } from "react";
import tintuc1 from "../../component/img/tintuc1.jpg";
import MenuSearchIconBlack from "../../component/svg/icon/MenuSearchIconBlack";
import { useData } from "../../hooks/useData";
import Slider from "react-slick";
import ArrowPrevGray from "../../component/svg/icon/ArrowPrevGray";
import ArrowNextGray from "../../component/svg/icon/ArrowNextGray";
import trogiupchuyengia from "../../component/img/trogiupchuyengia.png";
import timcuahang1 from "../../component/img/timcuahang1.png";
import timcuahang2 from "../../component/img/timcuahang2.png";
const Mobile = () => {
	// const slider = React.useRef(null);
	// var deXuatSetting = {
	//   slidesToShow: 1,
	//   slidesToScroll: 1,
	//   arrows: false,
	// };
	const [isSearch, setIsSearch] = useState(false);
	const opensearch = () => {
		setIsSearch(true);
	};
	const closesearch = () => {
		setIsSearch(false);
	};
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
			<Layout.SecondaryBg>
				{isSearch && (
					<Box
						sx={{
							position: "fixed",
							top: "0",
							left: "0",
							width: "100%",
							height: "100%",
							background: "#ffffff" /* Màu nền với độ mờ */,
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
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
							<Box>
								<Box
									sx={{
										display: "flex",
										justifyContent: "space-between",
										background: "#DBDAD5",
										p: "17px 24px",
										borderBottom: "1px solid black",
										fontSize: "16px",
									}}
								>
									<Box
										sx={{
											fontWeight: "700",
										}}
									>
										Tìm cửa hàng
									</Box>
									<Box
										sx={{ color: "#575757" }}
										onClick={closesearch}
									>
										Thoát
									</Box>
								</Box>
								<Box
									sx={{
										p: "16px 24px",
										backgroundColor: "#DBDAD5",
										borderBottom: "black solid 1px",
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
											placeholder=" Tìm kiếm theo vị trí hoặc tên cửa hàng"
											value={searchTerm}
											onChange={handleSearch}
											onClick={(e) => {
												setSuggestion(true);
												e.stopPropagation();
											}}
											sx={{
												...styles.fontSize13,
												color: "black",
												width: "100%",
												"& .MuiOutlinedInput-root": {
													border: "none",
												},
												".MuiOutlinedInput-notchedOutline:hover,.MuiOutlinedInput-notchedOutline": { border: "none" },
												".MuiInputBase-root": {
													padding: 0,
													margin: 0,
												},
												".MuiInputBase-input": { p: 0 },
											}}
											InputProps={{
												startAdornment: (
													<InputAdornment
														sx={{
															"&.MuiInputAdornment-outlined": {
																margin: 0,
																padding: 0,
																marginRight: "10px",
															},
														}}
														position="end"
													>
														<MenuSearchIconBlack />
													</InputAdornment>
												),
											}}
										/>
									</Container>
								</Box>
								{suggestion && (
									<Box>
										<Box
											sx={{
												borderBottom: "1px solid black",
												p: "8px 50px",
												fontWeight: "700",
												fontSize: "12px",
											}}
										>
											Gợi ý
										</Box>
										<Box
											onClick={() => setSuggestion(false)}
											sx={{
												borderBottom: "1px solid black",
												p: "8px 50px",
												"&:hover": {
													background: "#114138",
													color: "white",
												},
											}}
										>
											Mỹ đình 1, Nam Từ Liêm, HN
										</Box>
										<Box
											onClick={() => setSuggestion(false)}
											sx={{
												borderBottom: "1px solid black",
												p: "8px 50px",
												"&:hover": {
													background: "#114138",
													color: "white",
												},
											}}
										>
											Mỹ đình 2, Nam Từ Liêm, HN
										</Box>
										<Box
											onClick={() => setSuggestion(false)}
											sx={{
												borderBottom: "1px solid black",
												p: "8px 50px",
												"&:hover": {
													background: "#114138",
													color: "white",
												},
											}}
										>
											Trung Hoà, Cầu Giấy, HN
										</Box>
									</Box>
								)}
							</Box>
						</Box>
					</Box>
				)}
				<Box
					sx={{
						fontSize: "28px",
						p: "30px 0px 20px ",
						textAlign: "center",
						fontWeight: 700,
					}}
				>
					Cửa hàng tại Hà Nội
				</Box>
				<Box sx={{ p: "0px 24px" }}>
					{/* <Slider ref={slider} {...deXuatSetting}> */}
					{shops.map((s) => (
						<Box
							sx={{
								position: "relative",
								width: "100%",
								height: "auto",
								margin: "0 auto",
							}}
							key={s.id}
						>
							<a href={"/cua-hang/" + s.id}>
								<Box
									sx={{
										background: "black",
										width: "100%",
										height: "200px",
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
										background: "rgba(0,0,0,0.1)",
										width: "100%",
										height: "auto",
										boxSizing: "border-box",
										p: "22px 30px 20px 30px",
									}}
								>
									<Box
										sx={{
											display: "flex",
											justifyContent: "space-between",
											marginBottom: "5px",
										}}
									>
										<Box
											sx={{
												fontWeight: "700",
												fontSize: "19px",
											}}
										>
											{s.name}
										</Box>
										<Box
											sx={{
												"g>path#Vector": {
													stroke: "black",
												},
												"g>path#Vector_2": {
													fill: "black",
												},
											}}
										>
											<Information />
										</Box>
									</Box>
									<Box
										sx={{
											width: "60%",
											fontSize: "14px",
										}}
									>
										{s.address}
									</Box>
									<Box
										sx={{
											pt: "15px",
										}}
									>
										Mở cửa lúc {s.openTime}
									</Box>
								</Box>
							</a>
						</Box>
					))}
					{/* </Slider> */}
					{/* <Box
            sx={{
              pt: "20px",
              svg: { width: "20px", height: "20px" },
              display: "flex",
              justifyContent: "right",
            }}
          >
            <Box
              sx={{
                cursor: "pointer",
              }}
              onClick={() => slider?.current?.slickPrev()}
            >
              <ArrowPrevGray />
            </Box>
            <Box
              sx={{
                cursor: "pointer",
              }}
              onClick={() => slider?.current?.slickNext()}
            >
              <ArrowNextGray />
            </Box>
          </Box> */}
				</Box>
				<Box
					sx={{
						fontSize: "28px",
						fontWeight: "700",
						textAlign: "center",
						p: "30px 20px 30px 20px",
					}}
				>
					Hãy đến và xem những sản phẩm tốt nhất
				</Box>
				<Box
					sx={{
						textAlign: "center",
						fontSize: "20px",
						// fontWeight: "600",
						margin: "11px",
						p: "0px 24px 16px",
					}}
				>
					Mang hương vị Thanh Coffee đến nhiều bối cảnh khác nhau trong cuộc sống hàng ngày của bạn
				</Box>
				<Box
					sx={{
						p: "0px 24px 30px",
					}}
				>
					<Box
						sx={{
							background: "rgba(0,0,0,0.1)",
							textAlign: "center",
							p: "50px 10px",
						}}
					>
						<Box
							sx={{
								pb: "6px",
								fontSize: 21,
								fontWeight: 600,
							}}
						>
							Trò chuyện với người hỗ trợ của chúng tôi
						</Box>
						<a
							href="https://web.facebook.com/profile.php?id=61560917203069"
							style={{
								fontSize: 17,
								color: "rgb(0,102,204)",
							}}
						>
							Trao đổi ngay
						</a>
					</Box>
					<Box
						sx={{
							background: "rgba(0,0,0,0.1)",
							textAlign: "center",
							p: "50px 10px",
							mt: "20px",
						}}
					>
						<Box
							sx={{
								pb: "6px",
								fontSize: 21,
								fontWeight: 600,
							}}
						>
							Liên hệ hợp tác và Đầu tư
						</Box>
						<a
							href="/lien-he-dau-tu"
							style={{
								fontSize: 17,
								color: "rgb(0,102,204)",
							}}
						>
							Xem thêm về Trang liên hệ
						</a>
					</Box>
				</Box>
				{/* <Box
					sx={{
						fontSize: "32px",
						textAlign: "center",
						fontWeight: "700",
						margin: "38px 0 3px 0",
						pb: "25px",
					}}
				>
					Sự kiện mới từ <br /> chúng tôi
				</Box>
				<Box
					sx={{
						p: "0px 24px 60px",
					}}
				>
					<Box
						sx={{
							background: "rgba(0,0,0,0.1)",
							mb: "20px",
						}}
					>
						<Box
							sx={{
								width: "100%",
							}}
						>
							<img
								width={"100%"}
								height={"auto"}
								src={timcuahang2}
								alt=""
							/>
						</Box>

						<Box sx={{ p: "30px 12px" }}>
							<Box sx={{ fontSize: "12px", pb: "5px" }}>Hôm nay tại Thanh Coffee</Box>
							<Box sx={{ fontSize: "18px", margin: "6px 0", fontWeight: 600 }}>Giới thiệu dòng cà phê uống liền mới bao gồm các loại cà phê được người hâm mộ yêu thích</Box>
						</Box>
					</Box>
					<Box
						sx={{
							background: "rgba(0,0,0,0.1)",
						}}
					>
						<Box
							sx={{
								width: "100%",
							}}
						>
							<img
								width={"100%"}
								height={"auto"}
								src={timcuahang1}
								alt=""
							/>
						</Box>

						<Box sx={{ p: "30px 12px" }}>
							<Box sx={{ fontSize: "12px", pb: "5px" }}>Hôm nay tại Thanh Coffee</Box>
							<Box sx={{ fontSize: "18px", margin: "6px 0", fontWeight: 600 }}>Đại hội đồng cổ đông thường niên năm 2024 của TheThanhCoffee</Box>
						</Box>
					</Box>
				</Box> */}
			</Layout.SecondaryBg>
			<Footer />
		</Box>
	);
};

export default Mobile;
