import React from "react";
import { RESPONSIVE_MOBILE, RESPONSIVE_TABLET, styles } from "../../styles";
import { Box } from "@mui/material";

const ScaleHeader = ({ title, scaleRatio }) => {
	return (
		<Box
			sx={{
				"& h1": {
					...styles.heading[2],
				},
			}}
		>
			<h1
				className="tw-p-0 tw-text-left tw-font-bold "
				style={{ lineHeight: "1.25" }}
			>
				{title}
			</h1>
		</Box>
	);
};

export default React.memo(ScaleHeader);
