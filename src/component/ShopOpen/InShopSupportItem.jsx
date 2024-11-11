import { Box } from "@mui/material";
import React from "react";
import TichVIcon from "../../component/svg/icon/TichVIcon";
import { styles } from "../../styles";
import LeftArrowBlack from "../../component/svg/icon/LeftArrowBlack";

const InShopSupportItem = ({ title, to, linkDisplayText, ...props }) => {
	const Icon = props.icon || TichVIcon;
	return (
		<Box>
			<Box sx={{ display: "flex", alignItems: "center" }}>
				<Box sx={{ pr: "15px" }}>
					<Icon />
				</Box>
				<Box
					sx={{
						fontSize: 14,
					}}
				>
					{title}
				</Box>
			</Box>
			{linkDisplayText && (
				<Box sx={{ ...styles.centerFlex }}>
					<a href={to}>
						<Box
							sx={{
								display: "flex",
								"svg>path": {
									stroke: "#00754A",
								},
							}}
						>
							<Box
								sx={{
									color: "#00754A",
									mr: "5px",
									ml: "35px",
								}}
							>
								{linkDisplayText}
							</Box>
							<LeftArrowBlack />
						</Box>
					</a>
				</Box>
			)}
		</Box>
	);
};

export default InShopSupportItem;
