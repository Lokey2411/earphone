import { Box } from "@mui/material";
import React from "react";
import { styles } from "../../styles";

const OrderButton = ({ onSubmit }) => {
	return (
		<Box
			sx={{
				pt: "15px",
				display: "flex",
				gap: "15px",
				height: "40px",
			}}
			onClick={onSubmit}
		>
			<Box
				sx={{
					...styles.backgroundColor.xanhNhat006241,
					p: "0px 20px",
					...styles.centerFlex,
					borderRadius: "23px",
				}}
			>
				<Box sx={{ color: "white", fontWeight: 700, fontSize: "15px" }}>ĐẶT HÀNG NGAY</Box>
			</Box>
		</Box>
	);
};

export default OrderButton;
