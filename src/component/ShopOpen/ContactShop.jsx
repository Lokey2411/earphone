import { Box } from "@mui/material";
import React from "react";

const ContactShop = ({ title, subtitle, linkDisplayText, to, handleClick }) => {
	return (
		<Box
			sx={{
				background: "rgba(0,0,0,0.1)",
				textAlign: "center",
				p: "30px",
				margin: "0 auto 19px auto",
			}}
		>
			<h1 style={{ fontSize: 14 }}>{title}</h1>
			<Box
				sx={{
					pb: "6px",
					fontSize: 17,
					fontWeight: 600,
				}}
			>
				{subtitle}
			</Box>
			<a
				href={to}
				onClick={handleClick}
				style={{
					fontSize: 17,
					color: "rgb(0,102,204)",
				}}
			>
				{linkDisplayText}
			</a>
		</Box>
	);
};

export default ContactShop;
