import { Box } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import AddIconWhiteBg from "./../../component/svg/icon/AddIconWhiteBg";
import ArrowPrevGray from "./../../component/svg/icon/ArrowPrevGray";
import ArrowNextGray from "./../../component/svg/icon/ArrowNextGray";
import { styles } from "../../styles";

const DeliveryBox = ({ vanChuyenSlider, vanChuyenSetting, vanchuyenitem, deliveryIcon, setIsModalOpen }) => {
	return (
		<Box
			sx={{
				borderBottom: "black solid 1px",
				p: "70px",
			}}
		>
			<div
				id="slider-san-pham"
				style={{ margin: "0px -20px" }}
			>
				<Box sx={{ position: "relative" }}>
					<Slider
						ref={vanChuyenSlider}
						{...vanChuyenSetting}
					>
						{vanchuyenitem?.map((e) => (
							<Box
								key={e.id}
								sx={{
									position: "relative",
									height: "320px",
									background: "#EEEDE9",
								}}
							>
								<Box sx={{ p: "50px 30px 20px" }}>
									<img
										alt="?"
										width={"30px"}
										src={deliveryIcon}
									/>
								</Box>
								<Box
									sx={{
										p: "0 30px 10px",
										fontWeight: 500,
										fontSize: "24px",
									}}
								>
									{e.title}
								</Box>
								<Box
									sx={{
										padding: "0 30px 0",
										fontSize: "16px",
									}}
									dangerouslySetInnerHTML={{
										__html: e.details,
									}}
								></Box>
								<Box
									sx={{
										position: "absolute",
										top: 35,
										right: 35,
										zIndex: 5,
									}}
								>
									<Box
										onClick={() => {
											setIsModalOpen(e.id + 5);
										}}
										sx={{
											"g > path": {
												fill: "black",
											},
											"g > path#Vector_2,path#Vector_3": {
												stroke: "white",
											},
										}}
									>
										<AddIconWhiteBg
											width="35px"
											height="35px"
										/>
									</Box>
								</Box>
							</Box>
						))}
					</Slider>
					<Box
						sx={{
							...styles.centerFlex,
							justifyContent: "right",
							p: "40px 140px 0px",
						}}
					>
						<Box
							sx={{
								...styles.centerFlex,
								gap: "10px",
							}}
						>
							<Box
								sx={{
									cursor: "pointer",
								}}
								onClick={() => vanChuyenSlider?.current?.slickPrev()}
							>
								<ArrowPrevGray
									width="45"
									height="45"
								/>
							</Box>
							<Box
								sx={{
									cursor: "pointer",
								}}
								onClick={() => vanChuyenSlider?.current?.slickNext()}
							>
								<ArrowNextGray
									width="45"
									height="45"
								/>
							</Box>
						</Box>
					</Box>
				</Box>
			</div>
		</Box>
	);
};

export default DeliveryBox;
