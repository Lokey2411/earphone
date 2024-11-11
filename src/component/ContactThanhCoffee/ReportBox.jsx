import { Box } from "@mui/material";
import React from "react";

const ReportBox = ({ href, text, ...props }) => {
	return (
		<Box sx={{ display: "flex" }}>
			<a
				href={href}
				rel="noopener"
				{...props}
			>
				{text} &gt;
			</a>
		</Box>
	);
};

export default ReportBox;
