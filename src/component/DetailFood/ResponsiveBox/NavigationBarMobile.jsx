import { BiSearch } from "react-icons/bi";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import LeftArrowBlackW9H16 from "../../svg/icon/LeftArrowBlackW9H16";
import { RESPONSIVE_DESKTOP, styles } from "../../../styles";
import { convertToSlug } from "../../../functions/controller";

const NavigationBarMobile = ({ items, searchHandler, hideSearch }) => {
	const [openSearch, setOpenSearch] = useState(false);
	useEffect(() => {
		if (openSearch) {
			setTimeout(() => {
				setOpenSearch(false);
			}, [10000]);
		}
	}, [openSearch]);
	return (
		<Box
			sx={{
				...styles.centerFlex,
				p: "0px 24px",
				// height: "42px",
				py: hideSearch ? "10px" : "0",
				gap: "10px",
				backgroundColor: "#fff",
				borderBottom: "solid black 1px",
				marginTop: "56px",
				justifyContent: "space-between",
				position: "relative",
				...styles.hideInDesktop,
			}}
		>
			{!openSearch && (
				<Box
					sx={{ ...styles.centerFlex, gap: "10px" }}
					className="tw-animate-slide-in"
				>
					{items.map((item, index, { length }) => (
						<>
							<a
								key={index}
								href={item.href}
								style={{
									fontSize: "10px",
									fontWeight: "700",
									textTransform: "uppercase",
								}}
							>
								{item.displayText}
							</a>
							{index < length - 1 && (
								<Box sx={{ svg: { width: "6px", height: "12px" } }}>
									<LeftArrowBlackW9H16 />
								</Box>
							)}
						</>
					))}
				</Box>
			)}
			{/* tên sản phẩm */}
			{/* <Box sx={{ "svg>path": { stroke: "black", strokeWidth: "1.5" } }}>
            <SearchIcon />
          </Box> */}
			{openSearch && !hideSearch && (
				<input
					type="text"
					className={`tw-bg-white tw-text-13 tw-outline-none tw-animate-slide-in  tw-flex-1 tw-h-fit`}
					placeholder="Tìm kiếm đồ ăn hoặc đồ uống"
					onChange={(e) => {
						searchHandler(e);
						setOpenSearch(true);
					}}
				/>
			)}
			{!hideSearch && (
				<Box
					sx={{
						cursor: "pointer",
						zIndex: "1000",
						py: "10px",
					}}
					onClick={() => setOpenSearch(!openSearch)}
				>
					<BiSearch size={20} />
				</Box>
			)}
		</Box>
	);
};

export default NavigationBarMobile;
