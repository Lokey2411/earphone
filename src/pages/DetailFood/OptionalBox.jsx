import { Box } from "@mui/material";
import React from "react";
import { styles } from "../../styles";
import FilterArrowBlackDown from "./../../component/svg/icon/FilterArrowBlackDown";

const OptionalBox = ({ drinkfilter, isDrinkFilterOpen, setIsDrinkFilterOpen, setDrinkFilter }) => {
	return (
		<>
			<Box
				sx={{
					fontSize: "24px",
					fontWeight: 600,
					borderBottom: "solid black 1px",
					pb: "10px",
				}}
			>
				Tùy chọn
			</Box>
			<Box sx={{ pt: "15px", fontSize: "16px" }}>Loại</Box>
			<Box
				sx={{
					position: "relative",
					cursor: "pointer",
					pb: "15px",
					borderBottom: "solid black 1px",
				}}
			>
				<Box
					onClick={() => setIsDrinkFilterOpen(true)}
					sx={{
						...styles.centerFlex,
						justifyContent: "space-between",
						svg: { width: "16px", height: "24px" },
					}}
				>
					<Box
						sx={{
							fontSize: "20px",
							fontWeight: 600,
						}}
					>
						{drinkfilter}
					</Box>
					<FilterArrowBlackDown />
				</Box>
				<Box
					sx={{
						backgroundColor: "white",
						borderRadius: "7px",
					}}
				>
					{isDrinkFilterOpen && (
						<Box sx={{ position: "absolute", left: 0, right: 0 }}>
							<Box
								sx={{
									border: "solid black 1px",
									background: "white",
									borderRadius: "19px",
								}}
							>
								<Box
									onClick={() => {
										setIsDrinkFilterOpen(false);
										setDrinkFilter("Mới nhất");
										console.log(isDrinkFilterOpen);
									}}
									sx={{
										fontSize: "24px",
										fontWeight: 600,
										p: "13px 20px",
										":hover": {
											backgroundColor: "black",
											color: "white",
										},
										borderRadius: "7px 7px 0px 0px",
									}}
								>
									Mới nhất
								</Box>
								<Box
									onClick={() => {
										setIsDrinkFilterOpen(false);
										setDrinkFilter("Giá - Từ thấp tới cao");
									}}
									sx={{
										fontSize: "24px",
										fontWeight: 600,
										p: "13px 20px",
										":hover": {
											backgroundColor: "black",
											color: "white",
										},
										borderTop: "solid black 1px",
										borderBottom: "solid black 1px",
									}}
								>
									Giá - Từ thấp tới cao
								</Box>
								<Box
									onClick={() => {
										setIsDrinkFilterOpen(false);
										setDrinkFilter("Giá - Từ cao tới thấp");
									}}
									sx={{
										fontSize: "24px",
										fontWeight: 600,
										p: "13px 20px",
										":hover": {
											backgroundColor: "black",
											color: "white",
										},
										borderRadius: "0px 0px 7px 7px",
									}}
								>
									Giá - Từ cao tới thấp
								</Box>
							</Box>
						</Box>
					)}
				</Box>
			</Box>
		</>
	);
};

export default OptionalBox;
