import { Box } from "@mui/material";
import React from "react";
import { RESPONSIVE_DESKTOP, RESPONSIVE_MOBILE, styles } from "../../../styles";
import LeftArrowBlackW9H16 from "../../svg/icon/LeftArrowBlackW9H16";

const NavigationBarDesktop = ({ menuTitle, decodedType, items }) => {
	return (
		<Box
			sx={{
				...styles.centerFlex,
				p: "0px 80px",
				justifyContent: "space-between",
				height: "42px",
				background: "#fff",
				borderBottom: "solid black 1px",
				borderTop: "solid black 1px",
				position: "fixed",
				top: "80px",
				right: 0,
				left: 0,
				zIndex: 10,
				...styles.displayInDesktop,
			}}
		>
			<Box
				sx={{
					...styles.centerFlex,
					gap: "13px",
				}}
			>
				{items.map((item, index, { length }) => (
					<>
						<Box
							sx={{
								...styles.fontSize13,
								fontSize: "13px",
								fontWeight: "600",
								textTransform: "uppercase",
							}}
						>
							<a href={item.href}>{item.displayText}</a>
						</Box>
						{index < length - 1 && (
							<Box sx={{ svg: { width: "6px", height: "12px" } }}>
								<LeftArrowBlackW9H16 />
							</Box>
						)}
					</>
				))}
			</Box>
		</Box>
	);
};

export default NavigationBarDesktop;
