import { Box } from "@mui/material";
import React from "react";
import TabDecoration from "./TabDecoration";

const TabTitle = ({ title, tabIndex, setTabs, currentTab }) => {
	return (
		<Box
			onClick={() => setTabs(tabIndex)}
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: "10px",
				cursor: "pointer",
				// overflow: "unset",
			}}
		>
			<Box
				sx={{
					fontSize: 13,
				}}
			>
				{title}
			</Box>
			<TabDecoration isShow={currentTab === tabIndex} />
		</Box>
	);
};

export default TabTitle;
