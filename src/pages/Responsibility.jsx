import { Box, Typography, useMediaQuery } from "@mui/material";
import Logotop from "../component/layout/LogoTop";
import Navbardesktop from "../component/layout/NavBarDesktop";
import FooterDesktop from "../component/layout/FooterDesktop";
import { RESPONSIVE_MOBILE, styles } from "../styles";
import trachnhiem1 from "../component/img/trachnhiem1.jpg";
import sohuutritue2 from "../component/img/sohuutritue2.jpg";
import { useState } from "react";
import { useTheme } from "@emotion/react";
import ContentBox from "../component/Complianceculture/ContentBox";
import { useResponsibilityContent } from "../content/responsibility";

const Responsibility = () => {
	const [expandLearnMore, setExpandLeanrnMore] = useState(0);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));
	const { content } = useResponsibilityContent();
	return (
		<Box sx={{ ...styles.fontSize13, textAlign: "justify" }}>
			<Box>
				<Logotop />
				<Navbardesktop />
				<Box sx={{ pt: "145px", position: "relative" }}>
					<Box>
						<img
							src={trachnhiem1}
							width={"100%"}
							height={"1031px"}
							style={{ objectFit: "cover" }}
							alt="Bảo mật dữ liệu"
						/>
						<div className="tw-bg-black tw-absolute tw-inset-0 tw-opacity-40"></div>
						<Box
							sx={{
								position: "absolute",
								bottom: "10%",
								left: "50%",
								transform: "translate(-50%, 0)",
								textAlign: "center",
								color: "white",
								width: "80%",
							}}
						>
							<Typography
								variant="h1"
								sx={{
									fontSize: "36px",
									[RESPONSIVE_MOBILE]: {
										fontSize: "24px",
									},
									fontWeight: "600",
									lineHeight: "44px",
								}}
							>
								Bảo mật dữ liệu
							</Typography>
							<Box
								sx={{
									display: "flex",
									justifyContent: "center",
									pt: "30px",
									gap: "32px",
									[RESPONSIVE_MOBILE]: {
										flexDirection: "column",
										gap: "4px",
									},
								}}
							>
								<a
									href="/bao-mat-du-lieu"
									rel="noopener noreferrer"
								>
									<Box
										sx={{
											fontSize: "20px",
											fontWeight: "bold",
											border: "2px solid #dad8d4",
											color: "black",
											background: "#dad8d4",
											p: "16px 40px",
											textTransform: "uppercase",
											[RESPONSIVE_MOBILE]: {
												fontSize: "16px",
												py: "10px",
											},
										}}
									>
										+ Tìm hiểu thêm
									</Box>
								</a>
								<a href="/">
									<Box
										sx={{
											fontSize: "20px",
											fontWeight: "bold",
											border: "2px solid #dad8d4",
											color: "black",
											background: "#dad8d4",
											p: "16px 40px",
											textTransform: "uppercase",
											[RESPONSIVE_MOBILE]: {
												fontSize: "16px",
												py: "10px",
											},
										}}
									>
										Câu hỏi thường gặp
									</Box>
								</a>
							</Box>
						</Box>
					</Box>
				</Box>
				<Box sx={{ position: "relative" }}>
					<Box>
						<img
							src={sohuutritue2}
							width={"100%"}
							height={"1031px"}
							style={{ objectFit: "cover" }}
							alt="Bảo mật dữ liệu"
						/>
						<div className="tw-bg-black tw-absolute tw-inset-0 tw-opacity-40"></div>
						<Box
							sx={{
								position: "absolute",
								bottom: "10%",
								left: "50%",
								transform: "translate(-50%, 0)",
								color: "white",
								width: "80%",
							}}
						>
							<Typography
								variant="h1"
								sx={{
									fontSize: "36px",
									[RESPONSIVE_MOBILE]: {
										fontSize: "28px",
									},
									fontWeight: "600",
									lineHeight: "44px",
									pb: "20px",
								}}
							>
								Sở hữu trí tuệ
							</Typography>
							<Typography
								variant="h1"
								sx={{
									fontSize: "16px",
									lineHeight: "24px",
									maxWidth: "492px",
									[RESPONSIVE_MOBILE]: {
										fontSize: "14px",
									},
								}}
							>
								Chúng tôi bảo vệ và tôn trọng quyền sở hữu trí tuệ của những người khác cũng như bảo vệ quyền sở hữu trí tuệ của The Thanh Coffee, bao gồm cả kiến thức đã được đóng gói thành tài liệu.
							</Typography>
							<Box
								sx={{
									display: "flex",
									justifyContent: "flex-start",
									pt: "30px",
								}}
							>
								<a href="/so-huu-tri-tue">
									<Box
										sx={{
											fontSize: "20px",
											fontWeight: "bold",
											border: "2px solid #dad8d4",
											color: "black",
											background: "#dad8d4",
											p: "16px 40px",
											textTransform: "uppercase",
											mr: "16px",
											[RESPONSIVE_MOBILE]: {
												backgroundColor: "black",
												color: "white",
												border: "none",
												fontSize: "16px",
												py: "10px",
											},
										}}
									>
										Tìm hiểu thêm {"->"}
									</Box>
								</a>
							</Box>
						</Box>
					</Box>
				</Box>
				<Box
					sx={{
						[RESPONSIVE_MOBILE]: {
							p: "20px",
						},
					}}
				>
					{content.map((item, index) => (
						<ContentBox
							key={index}
							{...item}
							isReverse={!!(index % 2)}
						/>
					))}
				</Box>
				<FooterDesktop />
			</Box>
		</Box>
	);
};

export default Responsibility;
