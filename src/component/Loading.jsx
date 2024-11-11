import { Box, CircularProgress } from "@mui/material";
import React from "react";

const Loading = () => {
	return (
		<Box
			sx={{
				width: "100%vw",
				height: "100vh",
				display: "flex",
				justifyContent: "center",
				flexDirection: "column",
				alignItems: "center",
				gap: "10px",
				"& h1": {
					userSelect: "none",
				},
				cursor: "progress",
			}}
		>
			<CircularProgress sx={{ width: "100px", height: "100px" }} />
			<h1>Đang tải ...</h1>
		</Box>
	);
};

export default Loading;
