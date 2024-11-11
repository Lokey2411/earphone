import { Box, Grid } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { RESPONSIVE_MOBILE, styles } from "../styles";
import LeftArrowBlack from "./svg/icon/LeftArrowBlack";
import { createPage } from "../functions/controller";
import DrinksItems from "./DrinksItems";
import { MobileContext } from "../store/context/Mobile";
import Slider from "react-slick";
import useWindowDimensions from "../hooks/useDimension";
import { useNavigate } from "react-router-dom";

const DrinkList = ({ item, drinks }) => {
	const subitems = drinks.filter((d) => d.listname === item);
	const { width: screenWidth } = useWindowDimensions();
	const { isDesktop } = useContext(MobileContext);
	const navigate = useNavigate();
	const perPage = isDesktop ? 3 : 2;
	let sliderRef = React.useRef(null);
	var deXuatSetting = {
		slidesToShow: Math.min(perPage, subitems.length),
		slidesToScroll: 1,
		infinite: false,
		arrows: false,
	};
	const [currentPage, setCurrentPage] = useState(0);
	const movePerPage = 1;
	const previousPage = () => {
		setCurrentPage(currentPage - movePerPage);
		sliderRef.slickPrev();
	};
	const nextPage = () => {
		setCurrentPage(Math.min(currentPage + movePerPage, subitems.length - perPage + 1));
		sliderRef.slickNext();
	};
	const width = Math.min(subitems.length / perPage, 1);
	return (
		<Box
			key={item.id}
			sx={{ borderBottom: "solid black 1px", width: "100%" }}
		>
			<Box
				sx={{
					margin: "64px 10px 30px 76px",
					[RESPONSIVE_MOBILE]: {
						m: "20px 20px",
					},
				}}
			>
				<Box
					sx={{
						fontWeight: "600",
						...styles.centerFlex,
						gap: "15px",
						pb: "45px",
						[RESPONSIVE_MOBILE]: {
							pb: "30px",
							// justifyContent: "space-between",
						},
					}}
				>
					<Box
						sx={{
							fontSize: "13px",
							textTransform: "uppercase",
							fontWeight: "800",
							[RESPONSIVE_MOBILE]: {
								fontSize: 13,
							},
						}}
					>
						{item}
					</Box>
					<Box
						sx={{
							fontSize: "12px",
							...styles.centerFlex,
							border: "solid black 0.5px",
							borderRadius: "19px",
							p: "5px 10px",
							[RESPONSIVE_MOBILE]: {
								a: {
									fontSize: 10,
								},
							},
						}}
					>
						<a href={"/do-uong/" + item}>XEM TẤT CẢ</a>
					</Box>
				</Box>
				<Box
					sx={{
						position: "relative",
						display: "flex",
						// justifyContent: "center",
						// gap: "-5px",
						left: "0px",
						width: `calc(100% * ${width})`,
						alignItems: "flex-start",
					}}
				>
					{currentPage > 0 && (
						<Box
							onClick={previousPage}
							sx={{
								position: "absolute",
								zIndex: 2,
								left: -30,
								top: "38%",
								translate: "0% -50%",
								transform: "rotate(180deg)",
								cursor: "pointer",
								[RESPONSIVE_MOBILE]: {
									left: "20px",
								},
							}}
						>
							<LeftArrowBlack
								width="12px"
								height="22px"
							/>
						</Box>
					)}
					{currentPage < subitems.length - perPage && (
						<Box
							onClick={nextPage}
							sx={{
								position: "absolute",
								zIndex: 2,
								top: "40%",
								translate: "0% -50%",
								right: 0,
								cursor: "pointer",
								[RESPONSIVE_MOBILE]: {
									right: "20px",
								},
							}}
						>
							<LeftArrowBlack
								width="12px"
								height="22px"
							/>
						</Box>
					)}
					<Box
						// id="slider-next-news-desktop"
						sx={{
							overflow: "hidden",
							padding: "0",
							width: "100%",
							".slick-prev:before, .slick-next:before": {
								display: "none!important",
							},
							".slick-track": {
								display: "flex",
							},
							".slick-slide": {
								width: "100%!important",
							},
						}}
					>
						<Box
							sx={{
								position: "relative",
								"& .slick-track": {
									// width: "100%!important",
									// display: "grid",
									// gap: "10px",
									// gridTemplateColumns: "repeat(3, 1fr)",
								},
								"& .slick-slide>div": {
									display: "flex",
									mr: "40px",
									[RESPONSIVE_MOBILE]: {
										mr: "0px",
									},
								},
							}}
						>
							<Slider
								ref={(slider) => (sliderRef = slider)}
								{...deXuatSetting}
							>
								{subitems?.map((e) => {
									return (
										<Box
											sx={{
												[RESPONSIVE_MOBILE]: {
													mr: "10px",
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
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default DrinkList;
