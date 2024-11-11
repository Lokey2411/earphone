import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import useWindowDimensions from "./../../../hooks/useDimension";
import { useComponentWidth } from "../../../hooks/useComponentWidth";

const SubMenu = ({ items, isOverflowState, closeMenuHandler }) => {
	const [isOverflow, setIsOverflow] = isOverflowState;
	const { width: windowWidth } = useWindowDimensions();
	const componentWidth = useComponentWidth("submenu-container");
	useEffect(() => {
		if (componentWidth > windowWidth - 360) {
			setIsOverflow(true);
		}
	}, [componentWidth, windowWidth]);

	const columnStyle = isOverflow
		? {
				backgroundColor: "#E4E3E1",
				padding: "5px",
				// borderBottom: "1px solid #000",
		  }
		: {};
	const boxStyle = isOverflow
		? {
				backgroundColor: "#E4E3E1",
				overflow: "auto",
				gap: "0",
				flexDirection: "column",
				borderRadius: "0 0 10px 10px",
		  }
		: {
				gap: "40px",
		  };

	return (
		<Box
			id="submenu-container"
			display={"flex"}
			sx={boxStyle}
			onMouseLeave={closeMenuHandler}
		>
			{items.map((item, index, array) => (
				<Box
					key={index}
					sx={columnStyle}
					borderBottom={index < array.length - 1 && isOverflow ? "1px solid #000" : "none"}
				>
					<a
						href={item.href}
						style={{ fontSize: 14, fontWeight: "normal", fontFamily: "Inter" }}
					>
						{item.label}
					</a>
				</Box>
			))}
		</Box>
	);
};

export default SubMenu;
