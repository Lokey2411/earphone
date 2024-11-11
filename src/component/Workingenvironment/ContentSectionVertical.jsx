import { Box } from "@mui/material";
import React from "react";
import { RESPONSIVE_MOBILE, RESPONSIVE_TABLET, styles } from "../../styles";

const ContentSectionVertical = ({ title, subtitle, content, imageSrc, children, hasDecoration, decorationProps, imgProps, ...props }) => {
	console.log(title, subtitle);
	return (
		<Box
			sx={{
				textAlign: "center",
				pt: "192px",
				[RESPONSIVE_TABLET]: {
					pt: "80px",
				},
				[RESPONSIVE_MOBILE]: {
					pt: "40px",
				},
			}}
			{...props}
		>
			<Box
				sx={{
					...styles.heading[1],
					fontWeight: "600",
					color: "black",
					pb: "40px",
					[RESPONSIVE_MOBILE]: {
						fontSize: "24px",
						lineHeight: "32px",
						pb: "10px",
					},
				}}
			>
				{title}
			</Box>
			{hasDecoration && <Box {...decorationProps}></Box>}
			<Box
				sx={{
					pt: "32px",
					pb: "40px",
					...styles.heading[3],
					color: "#5A5A5A",
					[RESPONSIVE_MOBILE]: {
						fontSize: "16px",
						lineHeight: "24px",
						pb: "10px",
						pt: "10px",
					},
				}}
			>
				{subtitle}
			</Box>
			{imageSrc && (
				<img
					src={imageSrc}
					{...imgProps}
				/>
			)}
			{children}
		</Box>
	);
};

export default React.memo(ContentSectionVertical);
