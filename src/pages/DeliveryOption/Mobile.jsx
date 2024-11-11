import Layout from "../../component/layout";
import NavBar from "../../component/layout/NavBar";
import { Box, styled } from "@mui/material";
import { styles } from "../../styles";
import Footer from "../../component/layout/Footer";
import AddIconWhiteBg from "../../component/svg/icon/AddIconWhiteBg";
import React, { useEffect, useState } from "react";
import monqua from "../../component/img/monqua.jpg";
import thanhtoan from "../../component/img/thanhtoan.jpg";
import cachdathangvathanhtoan from "../../component/img/trogiupmuasam_cachdathangvathanhtoan.jpg";
import benthuba from "../../component/img/trogiupmuasam_benthuba.jpg";
import dientructiep from "../../component/img/trogiupmuasam_dientructiep.jpg";
import TichXIcon from "../../component/svg/icon/TichXICon";
import { useAbouts } from "../../hooks/useAbouts";
import images from "../../component/img/tro-giup-mua-sam";
const Mobile = () => {
	const [isModalOpen, setIsModalOpen] = useState(-1);
	const [abouts] = useAbouts();
	const modalOpened = abouts[isModalOpen];
	useEffect(() => {
		console.log(modalOpened?.popups.details);
	}, [modalOpened]);
	const ContentBox = styled(Box)(({ theme }) => ({
		color: "#000000",
		background: "#0000001a",
		p: 0,
		m: 0,
	}));
	return (
		<Box sx={{ ...styles.fontSize13 }}>
			<NavBar />
			<Layout.SecondaryBg>
				{isModalOpen >= 0 && isModalOpen < abouts.length && (
					<Box
						sx={{
							...styles.fontSize13,
							position: "fixed",
							top: "0",
							left: "0",
							width: "100%",
							height: "100%",
							background: "#ffffff" /* Màu nền với độ mờ */,
							zIndex: "1000",
						}}
					>
						<Box
							sx={{
								width: "100%",
								height: "100%",
								maxWidth: "100%",
								maxHeight: "100%",
								overflow: "auto",
							}}
						>
							<Box
								sx={{
									p: "24px",
								}}
							>
								<Box
									sx={{ ...styles.centerFlex, justifyContent: "right" }}
									onClick={() => setIsModalOpen(-1)}
								>
									<TichXIcon />
								</Box>
								<Box>
									<Box
										sx={{
											fontSize: "25px",
											fontWeight: 600,
											p: "15px 0px 40px",
										}}
									>
										{modalOpened?.popups?.title}
									</Box>
									<Box
										sx={{ lineHeight: "150%" }}
										dangerouslySetInnerHTML={{
											__html: modalOpened?.popups?.details,
										}}
									></Box>
								</Box>
							</Box>
						</Box>
					</Box>
				)}
				<Box sx={{ p: "60px 30px 24px" }}>
					<Box sx={{ textAlign: "center" }}>
						<Box sx={{ fontWeight: "600", fontSize: "36px", pb: "25px" }}>Các lựa chọn trợ giúp đặt hàng, nhận và giao hàng</Box>
						<Box sx={{ fontWeight: "700", fontSize: "20px", pb: "25px" }}>Đặt hàng và thanh toán</Box>
						<Box sx={{ lineHeight: "15px", pb: "25px", fontSize: 14 }}>Việc đặt hàng tại The Thanh Coffee chưa bao giờ dễ dàng hơn thế. Chỉ với vài thao tác đơn giản, bạn có thể khám phá menu phong phú của chúng tôi để tìm kiếm những món cà phê yêu thích, tự do tùy chỉnh từng ly cà phê theo sở thích riêng, và dễ dàng xác định cửa hàng The Thanh Coffee gần bạn nhất để nhận hàng hoặc chọn giao hàng tận nơi.</Box>
					</Box>
					{abouts?.map((item, index) => (
						<Box
							sx={{
								p: "30px 25px",
								color: "#FFFFFF",
								background: "#006241",
								mb: "25px",
							}}
						>
							<Box
								sx={{
									display: "flex",
									justifyContent: "space-between",
									pb: "10px",
									gap: "20px",
								}}
							>
								<Box
									sx={{
										fontSize: "28px",
										fontWeight: "700",
									}}
								>
									{item?.title}
								</Box>
								<Box onClick={() => setIsModalOpen(index)}>
									<AddIconWhiteBg
										width="23px"
										height="23px"
									/>
								</Box>
							</Box>
							<Box dangerouslySetInnerHTML={{ __html: item?.details }}></Box>
						</Box>
					))}
					<Box sx={{ textAlign: "center" }}>
						<Box sx={{ color: "#00754A", pt: "30px", pb: "25px", fontWeight: 600 }}>
							<a href="/tro-giup-thanh-coffee-giao-hang">Tìm hiểu thêm về The ThanhCoffee giao hàng</a>
						</Box>
						<Box sx={{ fontWeight: "700", fontSize: "23px", pb: "30px" }}>Chúng tôi sẽ phục vụ theo cách bạn cần</Box>
					</Box>
				</Box>
				<ContentBox>
					<Box>
						<Box
							sx={{
								fontSize: "20px",
								fontWeight: "600",
								p: "25px 24px 20px 24px",
							}}
						>
							Đặt hàng trực tiếp
						</Box>
						<Box sx={{ lineHeight: "15px", p: "0 24px 25px 24px" }}>Lên lịch buổi gặp trực tiếp miễn phí với Chuyên gia cà phê khi bạn mua các sản phẩm được chọn từ The ThanhCoffee. Từ những điều cơ bản đến những mẹo chuyên nghiệp. </Box>
						<Box sx={{ ...styles.centerFlex }}>
							<img
								width={"100%"}
								src={images.datHangTrucTiep}
								alt="Giao hàng"
							/>
						</Box>
					</Box>
				</ContentBox>
				<Box sx={{ textAlign: "center", p: "30px 24px" }}>
					<Box sx={{ fontSize: "23px", fontWeight: "700", pb: "30px" }}>Cách để đặt hàng và thanh toán</Box>
					<Box sx={{ lineHeight: "15px" }}>Chúng tôi không ngừng đổi mới và mở rộng các phương thức đặt hàng và thanh toán để phục vụ bạn tốt hơn. Hãy theo dõi để cập nhật những tiện ích mới nhất từ The Thanh Coffee!</Box>
				</Box>
				<ContentBox>
					<Box>
						<Box sx={{ ...styles.centerFlex }}>
							<img
								width={"100%"}
								src={cachdathangvathanhtoan}
								alt="Đặt hàng trực tiếp"
							/>
						</Box>
						<Box
							sx={{
								fontSize: "20px",
								fontWeight: "600",
								p: "25px 24px 20px 24px",
							}}
						>
							Đặt hàng qua ứng dụng của bên thứ ba
						</Box>
						<Box sx={{ lineHeight: "15px", p: "0 24px 25px 24px" }}>Chúng tôi mang đến cho bạn trải nghiệm mua sắm thuận tiện và nhanh chóng thông qua ứng dụng của các bên thứ ba. Bạn có thể dễ dàng sử dụng ứng dụng trên điện thoại di động của mình và lựa chọn các sản phẩm mà bạn muốn mua. Sau đó, thực hiện thanh toán trực tuyến một cách nhanh nhất thông qua các phương thức thanh toán an toàn được chúng tôi hỗ trợ</Box>
					</Box>
				</ContentBox>
				<ContentBox>
					<Box>
						<Box sx={{ ...styles.centerFlex }}>
							<img
								width={"100%"}
								src={benthuba}
								alt="Đặt hàng trực tiếp"
							/>
						</Box>
						<Box
							sx={{
								fontSize: "20px",
								fontWeight: "600",
								p: "25px 24px 20px 24px",
							}}
						>
							Nhận hàng tại cửa hàng
						</Box>
						<Box sx={{ lineHeight: "15px", p: "0 24px 25px 24px" }}>Tiết kiệm thời gian bằng cách đặt hàng trước và thanh toán trên ứng dụng. Sau khi đơn hàng của bạn được đặt, hãy vào trong, đi đến khu vực chờ và chúng tôi sẽ gọi tên bạn khi sẵn sàng. Kiểm tra xem bạn có thể ghé thăm địa điểm Nhận hàng của The Thanh Coffee gần bạn không.</Box>
					</Box>
				</ContentBox>
				<ContentBox>
					<Box>
						<Box sx={{ ...styles.centerFlex }}>
							<img
								style={{ width: "100%", objectFit: "cover", height: "210px" }}
								src={dientructiep}
								alt="Đặt hàng trực tiếp"
							/>
						</Box>
						<Box
							sx={{
								fontSize: "20px",
								fontWeight: "600",
								p: "25px 24px 20px 24px",
							}}
						>
							Gọi điện trực tiếp để đặt hàng
						</Box>
						<Box sx={{ lineHeight: "15px", p: "0 24px 25px 24px" }}>
							Nói lời chào với một trong những cách dễ nhất để nhận được đơn đặt hàng của bạn. Mở ứng dụng, tham gia The ThanhCoffee® Rewards , đặt hàng và thanh toán. Chúng tôi sẽ cho bạn biết còn bao lâu nữa.
							<Box sx={{ ...styles.centerFlex, pt: "30px" }}>
								<a href="tel:19001009">
									<Box
										sx={{
											border: "solid black 1px",
											borderRadius: "19px",
											p: "7px 44px",
										}}
									>
										Gọi ngay
									</Box>
								</a>
							</Box>
						</Box>
					</Box>
				</ContentBox>
			</Layout.SecondaryBg>
			<Footer />
		</Box>
	);
};

export default Mobile;
