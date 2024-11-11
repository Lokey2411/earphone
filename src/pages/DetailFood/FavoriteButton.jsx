import { Box } from "@mui/material";
import React from "react";
import { styles } from "../../styles";
import MenuFavoriteIconInactive from "../../component/svg/icon/MenuFavoriteIconInactive";

const FavoriteButton = ({ favorite, isFavorite, removeFavorite, addFavorite, item }) => {
	return (
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
			sx={favorite ? { "svg > path": { fill: "black" } } : { "svg > path": { stroke: "black" } }}
		>
			<Box
				sx={{
					width: "40px",
					height: "40px",
					background: "#E8E7E7",
					...styles.centerFlex,
					justifyContent: "center",
					cursor: "pointer",
					svg: { width: "25px", height: "20px" },
				}}
			>
				<MenuFavoriteIconInactive />
			</Box>
		</Box>
	);
};

export default FavoriteButton;
