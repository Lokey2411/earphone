import { Box } from "@mui/material";
import React from "react";
import TabContent from "./TabContent";
import Tab2 from "./Tab2";
import Tab1 from "./Tab1";
import Tab3 from "./Tab3";
import { RESPONSIVE_DESKTOP, RESPONSIVE_MOBILE } from "../../../styles";

const TabContentBox = ({ item, currentTab, introductions, nutritions, attachments }) => {
	return (
		<Box
			sx={{
				backgroundColor: "#F2F0EB",
				flex: 1,
				p: "30px",
				[RESPONSIVE_DESKTOP]: {
					p: "50px 60px",
				},
			}}
		>
			<TabContent show={currentTab === 1}>
				<Tab1 item={item} />
			</TabContent>
			<TabContent show={currentTab === 2}>
				<Tab2
					introductions={introductions}
					nutritions={nutritions}
				/>
			</TabContent>
			<TabContent show={currentTab === 3}>
				<Tab3 attachments={attachments} />
			</TabContent>
		</Box>
	);
};

export default TabContentBox;
