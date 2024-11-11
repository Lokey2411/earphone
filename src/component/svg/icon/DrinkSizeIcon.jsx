import { Box } from "@mui/material";
import { styles } from "../../../styles";
import React from "react";

const DrinkSizeIcon = () => {
	return (
		<Box sx={{ ...styles.centerFlex }}>
			<svg
				width="33"
				height="35"
				viewBox="0 0 33 35"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					id="nap-coc"
					d="M0.810164 5.10999L2.11016 1.40999C2.25016 1.00999 2.63016 0.73999 3.05016 0.73999H29.6702C30.1002 0.73999 30.4902 1.01999 30.6202 1.42999L31.8302 5.12999C32.0402 5.77999 31.5602 6.43999 30.8802 6.43999H1.75016C1.06016 6.43999 0.580164 5.75999 0.810164 5.10999Z"
					fill="#006241"
					stroke="#231F20"
					stroke-width="1.5"
					stroke-miterlimit="20"
				/>
				<path
					id="than-coc"
					d="M2.73047 6.44994L6.44047 33.6399C6.51047 34.1399 6.93047 34.4999 7.43047 34.4999H25.4405C25.9505 34.4999 26.3805 34.1199 26.4305 33.6099L29.5405 6.43994H2.73047V6.44994Z"
					fill="#006241"
					stroke="#231F20"
					stroke-miterlimit="20"
					strokeWidth={"2px"}
				/>
				<path
					id="logo-coc"
					d="M16.3209 25.1399C19.6014 25.1399 22.2609 22.4805 22.2609 19.1999C22.2609 15.9193 19.6014 13.2599 16.3209 13.2599C13.0403 13.2599 10.3809 15.9193 10.3809 19.1999C10.3809 22.4805 13.0403 25.1399 16.3209 25.1399Z"
					fill="white"
					stroke="#231F20"
					stroke-width="1.5"
					stroke-miterlimit="20"
				/>
			</svg>
		</Box>
	);
};

export default DrinkSizeIcon;
