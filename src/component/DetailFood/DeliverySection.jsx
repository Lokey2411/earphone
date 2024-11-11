import React from "react";
import { Box } from "@mui/material"; // Import Box from MUI or your UI library
import { RESPONSIVE_DESKTOP, RESPONSIVE_MOBILE, RESPONSIVE_TABLET } from "../../styles";
import ScaleHeader from "../../pages/DetailFood/ScaleHeader";
import useWindowDimensions from "../../hooks/useDimension";

const DeliverySection = ({ title, description, links, imgDimension, scaleRatio, constants }) => {
	const { SECTION_DISTANCE, IN_SECTION_DISTANCE } = constants;
	return (
		<Box
			sx={{
				// p: "0 200px",
				width: "100%",
				my: "80px",
				display: "flex",
				flexDirection: "column",
				"& h1": { fontSize: 34, margin: 0, fontWeight: "bold", lineHeight: "1.2" },
				"& p": { fontSize: 19, marginTop: "26px", marginBottom: "42px" },
				[RESPONSIVE_MOBILE]: {
					px: "20px",
					m: `${SECTION_DISTANCE} 0`,
					"& h1": {
						fontSize: "24px",
					},
					"& p": {
						fontSize: "16px",
						margin: `${IN_SECTION_DISTANCE} 0`,
					},
				},
				[RESPONSIVE_TABLET]: {
					px: "24px",
				},
			}}
		>
			<ScaleHeader
				title={title}
				scaleRatio={scaleRatio}
			/>
			<p>{description}</p>
			<Box
				sx={{
					display: "grid",
					gridTemplateColumns: "repeat(3, 1fr)",
					gap: "32px",
					// width: "100%",
					margin: "auto",
					[RESPONSIVE_MOBILE]: {
						gap: "10px",
					},
					// width: "50%",
				}}
			>
				{links.map((link, index) => (
					<Box
						key={index}
						item
						sx={{
							[RESPONSIVE_DESKTOP]: {
								width: imgDimension.width,
								"& img": {
									height: imgDimension.height,
								},
							},
							width: "100%",
							"& img": {
								height: "auto",
							},
						}}
					>
						<a href={link.url}>
							<img
								width={"100%"}
								alt=""
								style={{
									borderRadius: "12px",
								}}
								src={link.icon}
							/>
						</a>
					</Box>
				))}
			</Box>
		</Box>
	);
};

export default DeliverySection;
