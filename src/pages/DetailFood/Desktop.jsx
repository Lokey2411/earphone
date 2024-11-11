import { Box, Grid } from "@mui/material";
import React, { useMemo, useState } from "react";
import { RESPONSIVE_DESKTOP, RESPONSIVE_MOBILE, RESPONSIVE_TABLET, styles } from "../../styles";
import Layout from "../../component/layout";
import NavBar from "../../component/layout/NavBar";
import Footer from "../../component/layout/Footer";
import Americano from "../../component/img/Americano.jpg";
import AddIcon from "../../component/svg/icon/AddIcon";
import DrinkSizeIcon from "../../component/svg/icon/DrinkSizeIcon";
import desktopdrink1 from "../../component/img/desktopdrink1.png";
import Slider from "react-slick";
import LeftArrowBlack from "../../component/svg/icon/LeftArrowBlack";
import DrinksItems from "../../component/DrinksItems";
import Loading from "../../component/Loading";
import InDevelopmentPage from "../InDevelopmentPage";

import Tabs from "../../component/DetailFood/Tabs";
import Modals from "../../component/DetailFood/Modals";
import ResponsiveComponent from "../../component/DetailFood/ResponsiveBox";
import { convertToSlug } from "../../functions/controller";
import ScaleHeader from "./ScaleHeader";
import { useComponentWidth } from "../../hooks/useComponentWidth";

const SECTION_DISTANCE = "30px";
const IN_SECTION_DISTANCE = "20px";

const constants = {
	SECTION_DISTANCE,
	IN_SECTION_DISTANCE,
};

const Desktop = ({ slider, vanChuyenSlider, deXuatSetting, vanChuyenSetting, item, isLoading, suggestions, sizeHelper, optionals, introductions, sales, categorySizes, categoryCategories, deXuatItems, vanchuyenitem, isModalOpen, setIsModalOpen, selectedCategory, setSelectedCategory, anchorEl, setAnchorEl, boxRef, decodedType, drinkfilter, setDrinkFilter, selectedSize, setSelectedSize, isDrinkFilterOpen, setIsDrinkFilterOpen, deliveryModalOpened, favorite, questions, deliveryImageWidth, nutritions, attachments, screenWidth, setDeliveryImageWidth }) => {
	const firstSuggestionId = useMemo(() => deXuatItems[0]?.id, [deXuatItems]);
	const suggestionImageWidth = useComponentWidth("img" + firstSuggestionId);
	const scaleHeaderRatio = useMemo(() => {
		return deliveryImageWidth / screenWidth;
	}, [deliveryImageWidth, screenWidth]);
	const handleClosing = () => {
		setAnchorEl(null); // Đóng menu
	};

	const handleOptionSelect = (option) => {
		setSelectedCategory(option); // Cập nhật trạng thái dựa trên lựa chọn
		handleClosing(); // Đóng menu sau khi chọn
	};
	const handleClickOutside = (event) => {
		// Kiểm tra xem phần tử đã click có phải là phần tử chứa menu hay không
		if (boxRef.current && !boxRef.current.contains(event.target)) {
			setAnchorEl(null);
		}
	};
	const [qr, setQr] = useState(false);
	if (!item) {
		if (isLoading) return <Loading />;
		else return <InDevelopmentPage />;
	}
	const closeModal = () => {
		setIsModalOpen(0);
		setQr(false);
	};

	return (
		<Box sx={{ ...styles.fontSize13 }}>
			<Box>
				<NavBar />
				<Layout.MainBg>
					<Box
						sx={{
							[RESPONSIVE_DESKTOP]: { mt: "24px" },
							[RESPONSIVE_TABLET]: { mt: "0" },
							[RESPONSIVE_MOBILE]: {
								mt: "56px",
							},
						}}
					></Box>
					{/* modals */}
					<Modals
						closeModal={closeModal}
						isModalOpen={isModalOpen}
						sizeHelper={sizeHelper}
						qr={qr}
						optionals={optionals}
						sales={sales}
						deliveryModalOpened={deliveryModalOpened}
					/>
					<ResponsiveComponent.NavigationBarDesktop
						items={[
							{
								displayText: "MENU",
								href: "#",
							},
							{
								displayText: decodedType,
								href: "/" + convertToSlug(decodedType),
							},
							{
								displayText: item?.listname,
								href: `/${convertToSlug(decodedType)}/${item?.listname}`,
							},
							{
								displayText: item?.name,
								href: `#`,
							},
						]}
					/>
					<ResponsiveComponent.NavigationBarMobile
						items={[
							{
								displayText: "MENU",
								href: "#",
							},
							{
								displayText: decodedType,
								href: "/" + convertToSlug(decodedType),
							},
							{
								displayText: item?.name,
								href: `#`,
							},
						]}
						hideSearch
					/>
					<Box
						sx={{
							backgroundColor: "white",
							display: "flex",
							flexDirection: "column",
							mt: "30px",
							[RESPONSIVE_DESKTOP]: {
								flexDirection: "row",
								mt: "0",
							},
						}}
					>
						<Box
							sx={{
								// width: "50%",
								mx: "20px",
								flex: 1,
								[RESPONSIVE_DESKTOP]: {
									ml: "80px",
									mr: "0",
								},
							}}
						>
							<Box sx={{ position: "sticky", top: 80 }}>
								<Box
									sx={{
										position: "relative",
										display: "flex",
										mx: "-20px",
										[RESPONSIVE_DESKTOP]: {
											mx: 0,
										},
									}}
								>
									<img
										width={"100%"}
										style={{
											objectFit: "cover",
											flex: 1,
										}}
										src={item?.image || Americano}
										alt="Americano"
									/>
									{/* tim */}
									{/* <FavoriteButton /> */}
								</Box>
							</Box>
							<Box
								sx={{
									px: "20px",
									[RESPONSIVE_DESKTOP]: {
										p: "50px 70px",
									},
								}}
							>
								{/* tùy chỉnh */}
								{/* <OptionalBox
									drinkfilter={drinkfilter}
									isDrinkFilterOpen={isDrinkFilterOpen}
									setDrinkFilter={setDrinkFilter}
									setIsDrinkFilterOpen={setIsDrinkFilterOpen}
								/> */}
								{/* đặt hàng ngay */}
								{/* <OrderButton /> */}
							</Box>
						</Box>
						<Box
							sx={{
								// width: "50%",
								flex: 1,
								display: "flex",
								flexDirection: "column",
							}}
						>
							<Box
								sx={{
									p: "20px",
									[RESPONSIVE_DESKTOP]: {
										p: "60px 70px 0px 70px",
									},
								}}
							>
								<Box
									sx={{
										pb: "10px",
									}}
								>
									<Box
										sx={{
											...styles.centerFlex,
											justifyContent: "space-between",
											[RESPONSIVE_MOBILE]: {
												flexDirection: "column",
												alignItems: "flex-start",
												justifyContent: "flex-start",
												gap: "10px",
												mb: "10px",
											},
										}}
									>
										<Box
											sx={{
												fontSize: "14px",
												textTransform: "uppercase",
												color: "black",
												fontWeight: "Bold",
											}}
										>
											{item?.listname}
										</Box>
										<Box
											onClick={() => setIsModalOpen(4)}
											sx={{
												cursor: "pointer",
												display: "flex",
												p: "9px 15px",
												borderRadius: "19px",
												...styles.backgroundColor.xamD9,
												gap: "15px",
												justifyContent: "space-between",
											}}
										>
											<Box
												sx={{
													fontWeight: "bold",
												}}
											>
												Ưu đãi dành cho bạn.
											</Box>
											<AddIcon />
										</Box>
									</Box>
								</Box>
								<Box
									sx={{
										...styles.heading[2],
										color: "black",
										fontWeight: "700",
										textTransform: "capitalize",
										[RESPONSIVE_DESKTOP]: {
											pb: "16px",
										},
									}}
								>
									{item?.name.toLowerCase()}
								</Box>
								<Box
									sx={{
										display: "flex",
										gap: "15px",
										color: "#231F20",
										[RESPONSIVE_MOBILE]: {},
									}}
								>
									{categorySizes
										?.sort((a, b) => a.categories.quantity > b.categories.quantity)
										.map((s, i) => (
											<Box
												sx={{
													display: "flex",
													flexDirection: "column",
													alignItems: "center",
													p: "24px 10px 15px",
													":hover": {
														backgroundColor: "#D4E8E2",
													},
													textAlign: "center",
													cursor: "pointer",
												}}
												onClick={() => {
													setSelectedSize(i);
												}}
												key={s?.id}
											>
												{selectedSize === i ? (
													<Box
														sx={{
															pb: "10px",
															"svg>path": {
																fill: "white",
															},
															"svg>path#than-coc": {
																fill: "black",
															},
														}}
													>
														<DrinkSizeIcon />
													</Box>
												) : (
													<Box
														sx={{
															pb: "10px",
															"svg>path": {
																fill: "white",
															},
														}}
													>
														<DrinkSizeIcon />
													</Box>
												)}
												<b>
													{s?.title}:
													<br />({s?.categories?.quantity})
												</b>
											</Box>
										))}
								</Box>
								<Box
									sx={{
										...styles.centerFlex,
										justifyContent: "space-between",
										m: "5px 0px 12px 0px",
										[RESPONSIVE_TABLET]: {
											mb: "0px",
											// pb: "20px",
										},
										[RESPONSIVE_MOBILE]: { flexDirection: "column", alignItems: "flex-start" },
									}}
								>
									<Box
										sx={{
											fontSize: "11px",
											color: "#575757",
											pl: "8px",
											mb: "30px",
										}}
									>
										<ul
											sx={{
												pl: "0",
											}}
										>
											<li>Giá đã bao gồm VAT</li>
											<li>Giá các sản phẩm bằng tiền Đồng</li>
										</ul>
									</Box>
									<Box
										sx={{
											backgroundColor: "#D9D9D9",
											p: "10px 15px",
											// border: "solid black 1px",
											borderRadius: "10px",
											boxSizing: "border-box",
											cursor: "pointer",
											[RESPONSIVE_MOBILE]: {
												width: "100%",
											},
										}}
										onClick={() => setIsModalOpen(1)}
									>
										<Box
											sx={{
												display: "flex",
												pb: "5px",
												justifyContent: "space-between",
											}}
										>
											<Box
												sx={{
													fontWeight: "bold",
												}}
											>
												Bạn cần sự trợ giúp về kích cỡ ?
											</Box>
											<AddIcon />
										</Box>
										<Box
											sx={{
												fontSize: "11px",
											}}
										>
											<Box>Khám phá sự khác biệt về kích cỡ giữa các dung tích</Box>
										</Box>
									</Box>
								</Box>
							</Box>
							{/* Calories */}
							{categorySizes ? (
								<Box
									sx={{
										"& .calories-wrapper": {
											padding: "0px 70px",
											fontWeight: "bold",
											[RESPONSIVE_MOBILE]: { padding: "0" },
											[RESPONSIVE_TABLET]: { padding: "0 20px" },
										},
										"& .calories-title": {
											fontSize: 13,
											fontWeight: "bold",
											textTransform: "uppercase",
											marginRight: "16px",
										},
										"& .calories-value": {
											fontSize: 22,
											fontWeight: 600,
										},
										[RESPONSIVE_MOBILE]: {
											"& .calories-wrapper": {
												padding: "0px 20px",
											},
											"& .calories-title": {
												fontSize: 14,
												fontWeight: "600",
												marginRight: "8px",
											},
											"& .calories-value": {
												fontSize: 14,
											},
										},
									}}
								>
									<span className="calories-wrapper">
										<span className="calories-title">Số năng lượng cung cấp:</span>
										<span className="calories-value">{categorySizes[selectedSize]?.categories.calories} Calo</span>
									</span>
								</Box>
							) : (
								<Loading />
							)}
							{/* tabs */}
							<Tabs
								item={item}
								introductions={introductions}
								nutritions={nutritions}
								attachments={attachments}
							/>
						</Box>
					</Box>
					<Box
						sx={{
							width: "100%",
							borderTop: "black solid 1px",
							borderBottom: "black solid 1px",
						}}
					>
						{/* Vận chuyển */}
						{/* <DeliveryBox
							deliveryIcon={deliveryIcon}
							vanChuyenSetting={vanChuyenSetting}
							vanChuyenSlider={vanChuyenSlider}
							vanchuyenitem={vanchuyenitem}
						/> */}
						{/* Khi giao hàng chúng tôi có gì */}
						{/* <OurDeliveryBox
							constants={constants}
							scaleHeaderRatio={scaleHeaderRatio}
						/> */}
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								borderBottom: "1px solid #000",
								mt: "-3px",
								p: `${SECTION_DISTANCE} 20px ${SECTION_DISTANCE}`,
								[RESPONSIVE_DESKTOP]: {
									p: "40px 80px 10px 80px",
									"&>img": {},
								},
							}}
						>
							<ScaleHeader
								constants={constants}
								title="Khi giao hàng chúng tôi có gì"
								scaleRatio={scaleHeaderRatio}
							/>
							<img
								width={"100%"}
								src={desktopdrink1}
								id="delivery-image"
								style={{
									marginTop: IN_SECTION_DISTANCE,
								}}
								onLoad={({ target }) => {
									setInterval(() => {
										setDeliveryImageWidth(target?.clientWidth);
									}, 1);
								}}
								alt=""
							/>
						</Box>
						{/* Tùy chỉnh */}
						{/* <CustomBox
							setQr={setQr}
							setIsModalOpen={setIsModalOpen}
						/> */}
						{/* Đề xuất  */}
						{/* <FAQ /> */}
						<Grid
							container
							className="tw-grid tw-grid-cols-2 lg:tw-px-20 md:tw-px-5 sm:tw-px-6"
							sx={{
								marginTop: `68px`,
								marginBottom: IN_SECTION_DISTANCE,
								[RESPONSIVE_TABLET]: {
									marginTop: `40px`,
								},
								[RESPONSIVE_MOBILE]: {
									marginTop: "30px",
								},
							}}
						>
							<Grid
								item
								xs={12}
								md={12}
								lg={2.5}
								className="tw-mt-[30px] tw-ml-5  "
								style={{
									marginBottom: `${IN_SECTION_DISTANCE}`,
								}}
							>
								<ScaleHeader
									scaleRatio={scaleHeaderRatio}
									title="Có thể bạn sẽ thích"
								/>
							</Grid>
							<Grid
								item
								xs={12}
								md={12}
								lg={9.5}
							>
								<Box
									sx={{
										// mx: "40px",
										padding: "0px 0px 70px 86px",
										[RESPONSIVE_MOBILE]: {
											p: "0px",
											pl: "6px",
											"#slider-next-news-desktop": {
												p: "0px 20px 20px 20px",
											},
											".slick-track": {
												display: "flex",
												gap: "20px!important",
											},
											"#slide-next-news-desktop": {
												padding: "0px 76px 70px",
												[RESPONSIVE_MOBILE]: {
													padding: "0px 20px 20px 20px",
												},
											},
										},
										[RESPONSIVE_TABLET]: {
											pl: "24px",
										},
									}}
								>
									<div id="slider-next-news-desktop">
										<Box
											sx={{
												position: "relative",
												".slick-track": {
													overflow: "hidden",
												},
												".slick-list": {
													ml: "-28px",
												},
											}}
										>
											<Slider
												ref={slider}
												{...deXuatSetting}
											>
												{deXuatItems?.map((e) => {
													// console.log(e);
													return (
														<Box
															sx={{
																[RESPONSIVE_MOBILE]: {
																	width: "200px!important",
																},
																flex: 1,
															}}
														>
															<DrinksItems
																key={e?.id}
																item={e}
															/>
														</Box>
													);
												})}
											</Slider>
											<Box
												sx={{
													[RESPONSIVE_MOBILE]: {
														height: "200px!important",
													},
													height: `${suggestionImageWidth}px!important`,
													position: "absolute",
													top: 0,
													right: "0",
												}}
											>
												<Box
													sx={{
														[RESPONSIVE_MOBILE]: {
															right: 30,
															height: "200px",
														},
														height: "100%",
														right: 48,
														position: "absolute",
														top: "50%",
														transform: "translateY(-50%)",
													}}
												>
													<button
														className="slick-next"
														style={{
															margin: 0,
															height: "100%",
															padding: 0,
															border: 0,
															cursor: "pointer",
														}}
														onClick={() => slider?.current?.slickNext()}
													>
														<LeftArrowBlack
															width="50px"
															height="50px"
														/>
													</button>
												</Box>
											</Box>
										</Box>
									</div>
								</Box>
							</Grid>
						</Grid>
					</Box>
				</Layout.MainBg>
			</Box>
			<Footer />
		</Box>
	);
};

export default Desktop;
