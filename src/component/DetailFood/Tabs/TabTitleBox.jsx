import { Box } from "@mui/material";
import React from "react";
import TabTitle from "./TabTitle";

const TabTitleBox = ({ tabs, setTabs }) => {
	return (
		<Box
			sx={{
				fontSize: "16px",
				fontWeight: "bold",
				display: "flex",
				gap: "60px",
				p: "0px 70px",
				marginTop: 50 / 8,
				"@media (max-width:1024px)": {
					p: "24px",
					pb: "0",
					gap: "20px",
					flexWrap: "wrap",
					mt: "0",
				},
			}}
		>
			<TabTitle
				setTabs={setTabs}
				tabIndex={1}
				title={"MÔ TẢ"}
				currentTab={tabs}
			/>
			<TabTitle
				setTabs={setTabs}
				tabIndex={2}
				title={"THÔNG TIN DINH DƯỠNG"}
				currentTab={tabs}
			/>
			<TabTitle
				setTabs={setTabs}
				tabIndex={3}
				title={"CÁC TÀI LIỆU"}
				currentTab={tabs}
			/>
		</Box>
	);
};

export default TabTitleBox;
