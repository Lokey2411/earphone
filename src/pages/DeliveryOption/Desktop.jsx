import Layout from "../../component/layout";
import NavBar from "../../component/layout/NavBar";
import { Box } from "@mui/material";
import { RESPONSIVE_DESKTOP, RESPONSIVE_MOBILE, RESPONSIVE_TABLET, styles } from "../../styles";
import Footer from "../../component/layout/Footer";
import AddIconWhiteBg from "../../component/svg/icon/AddIconWhiteBg";
import React, { useState } from "react";
import TickXIcon from "../../component/svg/icon/TichXICon";
import { useAbouts } from "../../hooks/useAbouts";
import Modal from "../../component/Modal";
import Loading from "../../component/Loading";
import { DeliveryBox, SupportBox } from "../../component/DeliveryOption/SupportMethod";
import ShipmentAndPaymentSection from "../../component/DeliveryOption/ShipmentAndPaymentSection";
import { sectionsData } from "../../content";

const Desktop = () => {
	const [isModalOpen, setIsModalOpen] = useState(-1);
	const [abouts] = useAbouts();
	if (!abouts) return <Loading />;
	return (
		<Box sx={{ ...styles.fontSize13 }}>
			<NavBar />
			<Layout.MainBg>
				<Box sx={{ mt: "24px" }}></Box>
				<Modal isOpen={isModalOpen > 0 && isModalOpen < abouts?.length}>
					<Box
						sx={{
							backgroundColor: "white",
							opacity: 1,
							borderRadius: "19px",
						}}
					>
						<Box
							sx={{
								height: "100%",
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-between",
							}}
						>
							<Box sx={{ position: "relative" }}>
								<Box>
									<Box
										sx={{
											position: "absolute",
											top: 50,
											right: 50,
										}}
										onClick={() => setIsModalOpen(-1)}
									>
										<Box
											sx={{
												"g > path#Vector": { fill: "black" },
												"g > path#Vector_2,path#Vector_3": {
													stroke: "white",
												},
												svg: { width: "50px", height: "50px" },
											}}
										>
											<TickXIcon />
										</Box>
									</Box>
								</Box>
								{abouts.map(
									(about, index) =>
										index === isModalOpen && (
											<Box sx={{ p: "130px 70px 50px" }}>
												<Box
													sx={{
														fontSize: "40px",
														fontWeight: 600,
														pb: "40px",
													}}
												>
													{about?.popups?.title}
												</Box>
												<Box
													sx={{ fontSize: "18px", pb: "36px" }}
													dangerouslySetInnerHTML={{
														__html: about?.popups?.details,
													}}
												></Box>
												{abouts?.popups?.image && (
													<img
														src={about?.popups?.image}
														alt=""
													/>
												)}
											</Box>
										)
								)}
							</Box>
						</Box>
					</Box>
				</Modal>

				<Box
					sx={{
						p: "42px 20px 64px",
						[RESPONSIVE_DESKTOP]: {
							p: "36px 80px 64px",
						},
					}}
				>
					<Box
						sx={{
							[RESPONSIVE_DESKTOP]: {
								px: "256px",
								textAlign: "center",
							},
						}}
					>
						<Box
							sx={{
								fontWeight: "700",
								fontSize: "48px",
								pb: "32px",
								textTransform: "uppercase",
								textAlign: "center",
								[RESPONSIVE_MOBILE]: {
									fontSize: "24px",
								},
								[RESPONSIVE_TABLET]: {
									fontSize: "32px",
								},
							}}
						>
							Các lựa chọn đặt hàng, nhận và giao hàng
						</Box>
						<Box
							sx={{
								fontSize: "20px",
								[RESPONSIVE_TABLET]: {
									fontSize: "16px",
								},
								[RESPONSIVE_MOBILE]: {
									fontSize: "14px",
								},
							}}
						>
							Việc đặt hàng tại The Thanh Coffee chưa bao giờ dễ dàng hơn thế. Chỉ với vài thao tác đơn giản, bạn có thể khám phá menu phong phú của chúng tôi để tìm kiếm những món cà phê yêu thích, tự do tùy chỉnh từng ly cà phê theo sở thích riêng, và dễ dàng xác định cửa hàng The Thanh Coffee gần bạn nhất để nhận hàng hoặc chọn giao hàng tận nơi.
						</Box>
					</Box>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							gap: "30px",
						}}
					>
						{abouts?.map((item, index) => (
							<Box
								sx={{
									p: "35px",
									color: "#FFFFFF",
									background: item.image ? `url(${item.image}) center center /cover no-repeat` : "black",
									width: "calc(50% - 15px)",
								}}
							>
								<Box
									sx={{
										display: "flex",
										justifyContent: "space-between",
										pb: "40px",
										gap: "20px",
									}}
								>
									<Box
										sx={{
											fontSize: "40px",
											fontWeight: "600",
										}}
									>
										{item.title}
									</Box>
									<Box onClick={() => setIsModalOpen(index)}>
										<AddIconWhiteBg
											width="40px"
											height="40px"
										/>
									</Box>
								</Box>
								<Box
									sx={{ fontSize: "24px" }}
									dangerouslySetInnerHTML={{ __html: item.details }}
								></Box>
							</Box>
						))}
					</Box>
					<Box sx={{ textAlign: "center" }}>
						<Box
							sx={{
								p: "35px 0px 64px",
								"& a": {
									color: "#00754A",
									fontSize: "20px",
									[RESPONSIVE_TABLET]: {
										fontSize: "16px",
									},
									[RESPONSIVE_MOBILE]: {
										fontSize: "14px",
									},
								},
							}}
						>
							<a href="/tro-giup-thanh-coffee-giao-hang">Tìm hiểu thêm về The Thanh Coffee giao hàng</a>
						</Box>
						<Box
							sx={{
								fontWeight: "600",
								fontSize: "40px",
								pb: "32px",
								[RESPONSIVE_TABLET]: { fontSize: "32px" },
								[RESPONSIVE_MOBILE]: { fontSize: "24px" },
							}}
						>
							Các phương thức hỗ trợ của chúng tôi
						</Box>
					</Box>
					{/* support method */}
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							gap: "30px",
							flexDirection: "column",
							[RESPONSIVE_DESKTOP]: { flexDirection: "row" },
						}}
					>
						<SupportBox />
						<DeliveryBox />
					</Box>
					<Box
						sx={{
							p: "64px 20px",
							[RESPONSIVE_DESKTOP]: {
								p: "64px 180px",
								textAlign: "center",
							},
						}}
					>
						<Box
							sx={{
								fontSize: "40px",
								fontWeight: "600",
								pb: "30px",
								[RESPONSIVE_TABLET]: { fontSize: "32px" },
								[RESPONSIVE_MOBILE]: { fontSize: "24px" },
							}}
						>
							Các cách để đặt hàng và thanh toán
						</Box>
						<Box
							sx={{
								fontSize: "24px",
								[RESPONSIVE_TABLET]: {
									fontSize: "20px",
								},
								[RESPONSIVE_MOBILE]: {
									fontSize: "16px",
								},
							}}
						>
							Chúng tôi không ngừng đổi mới và mở rộng các phương thức đặt hàng và thanh toán để phục vụ bạn tốt hơn. Hãy theo dõi để cập nhật những tiện ích mới nhất từ The Thanh Coffee!
						</Box>
					</Box>
					{sectionsData.map((section, index) => (
						<ShipmentAndPaymentSection
							key={index}
							{...section}
						/>
					))}
				</Box>
			</Layout.MainBg>
			<Footer />
		</Box>
	);
};

export default Desktop;
