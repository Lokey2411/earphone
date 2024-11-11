import { Box } from "@mui/material";
import { styles } from "../styles";
import React, { useContext, useState } from "react";
import MenuFavoriteIconInactive from "./svg/icon/MenuFavoriteIconInactive";
import { addFavorite, removeFavorite } from "../functions/localstorage";
import { MobileContext } from "../store/context/Mobile";
import { useComponentWidth } from "../hooks/useComponentWidth";
const PLACEHOLDER_IMAGE = "https://fakeimg.pl/600x600/000000/ffffff?text=S%E1%BA%A3n+ph%E1%BA%A9m+ch%C6%B0a+c%C3%B3+h%C3%ACnh+%E1%BA%A3nh&font=noto&font_size=36";
const FAVORITE_ICON_RATIO = 0.08;
const DrinksItems = ({ item }) => {
	// console.log(item);
	const [favorite, isFavorite] = useState(localStorage.getItem("yeuthich") ? JSON.parse(localStorage.getItem("yeuthich")).some((favItem) => item?.id === favItem.id) : false);
	const { isMobile } = useContext(MobileContext);
	const componentWidth = useComponentWidth("img" + item?.id);
	const mobileFavoriteIconStyle = favorite
		? {
				"svg > path": {
					fill: "#575757",
					stroke: "white",
					strokeWidth: "0.5px",
				},
		  }
		: {
				"svg > path": {
					stroke: "black",
					strokeWidth: "0.5px",
					fill: "#E8E7E7",
				},
		  };
	return (
		<Box
			item
			xs={isMobile ? 6 : 4}
			id={"product" + item.index}
			sx={
				isMobile
					? {
							...styles.fontSize13,
							flex: 1,
					  }
					: {
							...styles.fontSize13,
							flex: 1,
					  }
			}
		>
			{isMobile ? (
				<Box
					sx={{
						fontWeight: 400,
					}}
				>
					<Box sx={{ position: "relative", top: 0 }}>
						<a href={`/san-pham/${item?.id}`}>
							<img
								id={"img" + item?.id}
								width={"100%"}
								alt=""
								loading="lazy"
								src={item.image || PLACEHOLDER_IMAGE}
								style={{
									objectFit: "cover",
									height: componentWidth + "px",
								}}
							/>
						</a>
						<Box
							onClick={() => {
								if (favorite) {
									isFavorite(false);
									removeFavorite(item);
								} else {
									isFavorite(true);
									addFavorite(item);
								}
							}}
							sx={{
								position: "absolute",
								top: "5px",
								right: "5px",
								cursor: "pointer",
								zIndex: 3,
							}}
						>
							<Box
								sx={{
									...mobileFavoriteIconStyle,
									svg: {
										width: componentWidth * FAVORITE_ICON_RATIO + "px",
										height: componentWidth * FAVORITE_ICON_RATIO + "px",
									},
								}}
							>
								<MenuFavoriteIconInactive />
							</Box>
						</Box>
					</Box>
					<Box
						sx={{
							p: "10px 0px",
						}}
					>
						<Box sx={{ fontSize: "14px", p: "10px 0px 5px 0px" }}>{item?.name}</Box>
					</Box>
				</Box>
			) : (
				<Box
					sx={{
						fontWeight: 400,
						width: "100%",
					}}
				>
					<Box sx={{ position: "relative", width: "100%" }}>
						<a href={`/san-pham/${item?.id}`}>
							<img
								id={"img" + item?.id}
								width={"100%"}
								height={componentWidth}
								alt=""
								loading="lazy"
								src={item.image || PLACEHOLDER_IMAGE}
								style={{
									objectFit: "cover",
									minWidth: "200px",
									height: `${componentWidth}px`,
								}}
							/>
						</a>
						<Box
							onClick={() => {
								if (favorite) {
									isFavorite(false);
									removeFavorite(item);
								} else {
									isFavorite(true);
									addFavorite(item);
								}
							}}
							sx={{
								position: "absolute",
								top: "15px",
								right: "15px",
								cursor: "pointer",
								svg: { width: "25px", height: "21px" },
							}}
						>
							<Box
								sx={
									favorite
										? {
												"svg > path": {
													fill: "#575757",
													stroke: "white",
													strokeWidth: "0.5px",
												},
										  }
										: {
												"svg > path": {
													stroke: "black",
													strokeWidth: "0.5px",
													fill: "#E8E7E7",
												},
										  }
								}
							>
								<MenuFavoriteIconInactive />
							</Box>
						</Box>
					</Box>
					<Box sx={{ fontSize: "18px", p: "20px 0px 10px" }}>{item?.name}</Box>
				</Box>
			)}
		</Box>
	);
};

export default DrinksItems;
