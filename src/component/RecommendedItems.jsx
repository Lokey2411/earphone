import { Box } from "@mui/material";
import { styles } from "../styles";
import React, { useState } from "react";
import MenuFavoriteIconInactive from "./svg/icon/MenuFavoriteIconInactive";
import MenuFavoriteIconActive from "./svg/icon/MenuFavoriteIconActive";
import { formatCurrency } from "../functions/controller";

const RecommendedItems = ({ item }) => {
	const [favorite, isFavorite] = useState(false);
	return (
		<Box
			sx={{
				position: "relative",
				...styles.centerFlex,
				...styles.fontSize13,
				fontWeight: 400,
				flexDirection: "column",
				alignItems: "left",
				gap: "9px",
				width: "calc(50% - 4px)",
			}}
		>
			<img
				width={"100%"}
				alt=""
				src={item.img}
			/>
			<Box sx={{ fontSize: "14px" }}>{item.name}</Box>
			<Box sx={{ fontSize: "16px", fontWeight: "700" }}>{formatCurrency(item.price)}</Box>
			<Box
				onClick={() => (favorite === true ? isFavorite(false) : isFavorite(true))}
				sx={{
					position: "absolute",
					top: "5px",
					right: "5px",
					cursor: "pointer",
				}}
			>
				{favorite === false && <MenuFavoriteIconInactive />}
				{favorite === true && <MenuFavoriteIconActive />}
			</Box>
		</Box>
	);
};

export default RecommendedItems;
