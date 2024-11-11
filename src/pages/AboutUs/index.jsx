import React, { useContext } from "react";
import { styles } from "../../styles";
import { Box } from "@mui/material";
import { MobileContext } from "../../store/context/Mobile";
import Mobile from "./Mobile";
import Desktop from "./Desktop";

const AboutUs = () => {
	const { isMobile } = useContext(MobileContext);
	return (
		<Box sx={{ ...styles.fontSize13 }}>
			<Desktop />
		</Box>
	);
};
export default AboutUs;
