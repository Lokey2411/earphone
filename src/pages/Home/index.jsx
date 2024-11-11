import React, { useContext } from "react";
import { Box } from "@mui/material";
import { MobileContext } from "../../store/context/Mobile";
import { styles } from "../../styles";
import Mobile from "./Mobile";
import Desktop from "./Desktop";

const Home = () => {
	const { isMobile } = useContext(MobileContext);
	return (
		<Box sx={{ ...styles.fontSize13 }}>
			<Desktop />
		</Box>
	);
};

export default Home;
