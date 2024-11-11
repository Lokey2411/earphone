import { Box } from "@mui/material";
import React from "react";
import { RESPONSIVE_MOBILE, RESPONSIVE_TABLET, styles } from "../../../styles";
import { renderTopics } from "../../../functions/renderTopics";

const MenuSidebar = ({ menuTitle, menuSubtitle, topics, id }) => {
	return (
		<Box
			id={id}
			sx={{
				p: "80px 0px",
				...styles.backgroundColor.mauTra,
				borderRight: "solid black 1px",
				borderBottom: "1px solid black",
				minWidth: "306px",
				maxWidth: "306px",
				[RESPONSIVE_MOBILE]: {
					display: "none",
				},
			}}
		>
			<Box sx={{ position: "sticky", top: 160 }}>
				<Box
					sx={{
						fontSize: "36px",
						fontWeight: 600,
						p: "0px 80px",
						pb: "36px",
						[RESPONSIVE_TABLET]: {
							px: "20px",
						},
					}}
				>
					{menuTitle}
				</Box>
				<Box
					sx={{
						fontSize: "13px",
						fontWeight: 600,
						borderBottom: "black solid 1px",
						p: "0px 80px",
						pb: "20px",
						textTransform: "uppercase",
						[RESPONSIVE_TABLET]: {
							px: "20px",
						},
					}}
				>
					{menuSubtitle}
				</Box>
				{topics?.map(renderTopics)}
			</Box>
		</Box>
	);
};

export default MenuSidebar;
