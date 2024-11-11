import { Box } from "@mui/material";
import React from "react";
import { RESPONSIVE_MOBILE, RESPONSIVE_TABLET, styles } from "../../styles";

const ContentSectionHorizontal = ({ title, contentHtml, imageSrc, children, parentStyle, imgProps }) => {
	return (
		<Box
			sx={{
				display: "flex",
				pt: "140px",
				gap: "96px",
				...parentStyle,
				[RESPONSIVE_TABLET]: {
					pt: "80px",
				},
				[RESPONSIVE_MOBILE]: {
					flexDirection: "column",
					pt: "40px",
				},
			}}
		>
			<Box sx={{ flex: 1 }}>
				<Box
					sx={{
						textAlign: "left",
						...styles.heading[1.5],
						fontWeight: "bold",
						lineHeight: "44px",
						color: "black",
						pb: "40px",
						[RESPONSIVE_MOBILE]: {
							pb: "10px",
							fontSize: "24px",
							lineHeight: "32px",
						},
					}}
				>
					{title}
				</Box>
				<Box
					sx={{
						width: "197px",
						height: "8px",
						background: "black",
						[RESPONSIVE_MOBILE]: {
							height: "5px",
						},
					}}
				></Box>
				<Box
					dangerouslySetInnerHTML={{ __html: contentHtml }}
					sx={{
						"&>div": {
							[RESPONSIVE_MOBILE]: {
								pt: "10px!important",
							},
						},
					}}
				/>
				{children}
			</Box>
			<Box
				sx={{
					flex: 1,
				}}
			>
				<img
					src={imageSrc}
					{...imgProps}
					alt="Chế độ nhân tài và không phân biệt đối xử"
					style={{
						width: "100%",
						objectFit: "cover",
					}}
				/>
			</Box>
		</Box>
	);
};

export default ContentSectionHorizontal;
