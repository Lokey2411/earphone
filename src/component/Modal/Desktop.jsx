import { Box } from "@mui/material";
import React from "react";
import ExitCircleIcon from "../svg/icon/ExitCircleIcon";
import { RESPONSIVE_TABLET, styles } from "../../styles";

const Desktop = ({ isOpen, onClose, children, ...otherProps }) => {
	if (!isOpen) return null;
	return (
		<Box
			sx={{
				position: "fixed",
				top: 0,
				left: 0,
				bottom: 0,
				right: 0,
				background: " rgba(0, 0, 0, 0.70)",
				zIndex: "1000",
				p: "60px 325px",
				"@media (max-width:1200px)": {
					px: "100px",
				},
				display: "grid",
				placeItems: "center",
				[RESPONSIVE_TABLET]: {
					p: "60px 20px",
				},
			}}
		>
			<Box
				sx={{
					backgroundColor: "white",
					opacity: 1,
					borderRadius: "20px",
					overflow: "hidden",
				}}
			>
				<Box
					sx={{
						position: "relative",
						zIndex: "1000",
						height: "100%",
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
						minHeight: "400px",
					}}
				>
					<Box sx={{ position: "relative" }}>
						<Box
							sx={{
								position: "absolute",
								top: 40,
								right: 40,
								cursor: "pointer",
								zIndex: "1000",
							}}
							onClick={onClose}
						>
							<Box
								sx={{
									"g > path#Vector": {
										fill: "black",
									},
									"g > path#Vector_2,path#Vector_3": {
										stroke: "white",
									},
									svg: {
										width: "30px",
										height: "30px",
									},
									cursor: "pointer",
								}}
							>
								<ExitCircleIcon />
							</Box>
						</Box>
					</Box>
					<Box
						{...otherProps}
						sx={{
							minHeight: "100%",
							overflow: "auto",
							borderRadius: "20px",
							height: "calc(100vh - 240px)",
						}}
					>
						{children}
					</Box>
					<Box
						sx={{
							...styles.centerFlex,
							justifyContent: "center",
							flexDirection: "column",
							borderRadius: " 0px 0px 19px 19px",
							...styles.backgroundColor.xamD9,
							fontSize: "15px",
							fontWeight: 400,
							p: "10px",
						}}
					>
						<Box>
							{/* <img
												src={DrinkHelp}
												alt=""
											/> */}
						</Box>
						<Box>Vui lòng liên hệ với chúng tôi nếu cần thêm hỗ trợ nhé</Box>
						<a href="https://www.facebook.com/profile.php?id=61560917203069">
							<Box
								sx={{
									...styles.fontColor.xanhNhat006241,
								}}
							>
								Liên hệ The Thanh
							</Box>
						</a>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Desktop;
