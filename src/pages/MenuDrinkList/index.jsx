import React from "react";
import { styles } from "../../styles";
import { Box } from "@mui/material";
import Desktop from "./Desktop";

const MenuDrinkList = ({ title, menuTitle, menuSubtitle, topicJsonPath, productRoute }) => {
	const props = { title, menuTitle, menuSubtitle, topicJsonPath, productRoute };
	return (
		<Box sx={{ ...styles.fontSize13 }}>
			<Desktop {...props} />
		</Box>
	);
};

export default MenuDrinkList;
