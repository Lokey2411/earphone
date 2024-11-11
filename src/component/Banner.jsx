import { Box } from "@mui/material";
import React from "react";
import BackgroundImageBox from "./BackgroundImageBox";
import { styles } from "../styles";

const Banner = ({ imageSrc, children, ...props }) => {
	return (
		<Box sx={{ position: "relative" }}>
			<Box
				sx={{
					...styles.centerFlex,
					height: "600px",
					overflow: "hidden",
				}}
			>
				<BackgroundImageBox
					imageSrc={imageSrc}
					imageProps={{
						alt: "",
					}}
					style={{
						overflow: "hidden",
						display: "flex",
						alignItems: "center",
						height: "100%",
						// flex: "1",
						width: "100%",
					}}
				>
					{children}
				</BackgroundImageBox>
			</Box>
		</Box>
	);
};

export default Banner;
