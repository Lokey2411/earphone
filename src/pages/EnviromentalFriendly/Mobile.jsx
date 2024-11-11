import Layout from "../../component/layout";
import NavBar from "../../component/layout/NavBar";
import { Box } from "@mui/material";
import { styles } from "../../styles";
import Footer from "../../component/layout/Footer";
import AddIcon from "../../component/svg/icon/AddIcon";
import AddIconWhiteBg from "../../component/svg/icon/AddIconWhiteBg";
import ArrowNextGray from "../../component/svg/icon/ArrowNextGray";
import meomeo from "../../component/img/meomeo.jpg";
import meomeomeo from "../../component/img/meomeomeo.jpg";
import meokiwi from "../../component/img/meokiwi.jpg";
import React, { useMemo, useState } from "react";
import Slider from "react-slick";
import TichXIcon from "../../component/svg/icon/TichXICon";
import { useAbouts } from "../../hooks/useAbouts";
import Loading from "../../component/Loading";
const Mobile = () => {
	const slider = React.useRef(null);
	var deXuatSetting = {
		centerMode: true,
		centerPadding: "24px",
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		infinite: true,
	};
	const [isModalOpen, setIsModalOpen] = useState(-1);
	const [proof] = useAbouts();
	// const [popup] = useState([]);
	const sliderProof = useMemo(() => proof?.filter((item) => item.type === "slider"), [proof]);
	const normalProof = useMemo(() => proof?.filter((item) => !item.type), [proof]);
	const openedPopup = useMemo(() => proof?.find((item) => item.id === isModalOpen)?.popups, [proof, isModalOpen]);
	// const deXuatItems = [{ img: meokiwi }, { img: meokiwi }, { img: meokiwi }];
	if (!proof) return <Loading />;
	return (
		<Box sx={{ ...styles.fontSize13 }}>
			<NavBar />
			<Layout.MainBg>
				{/* Modal */}
				{isModalOpen > 0 && (
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
									sx={{
										...styles.centerFlex,
										justifyContent: "right",
									}}
									onClick={() => setIsModalOpen(0)}
								>
									<TichXIcon />
								</Box>
								{isModalOpen === 1 && (
									<Box>
										<Box
											sx={{
												fontSize: "25px",
												fontWeight: 600,
												p: "15px 0px 40px",
											}}
										>
											THAY THẾ DẦN ỐNG HÚT NHỰA BẰNG ỐNG HÚT TỰ PHÂN HỦY
										</Box>
										<Box sx={{ lineHeight: "150%" }}>
											Đây là vật dụng được nhiều người tiêu dùng thải ra hàng ngày cùng với ly nhựa và túi ni-lông sau khi tiêu thụ các sản phẩm đồ uống. Ống hút nhựa cần từ 200 đến 500 năm để phân hủy và là một trong những tác nhân gây ô nhiễm cho môi trường biển và các sinh vật trong đại dương.
											<br />
											<br />
											Mặc dù không chiếm quá nhiều không gian và có kích thước nhỏ bé nhưng ống hút nhựa lại có khả năng gây ô nhiễm môi trường đất, nước... và cực kỳ nguy hiểm cho sức khỏe con người nếu không được tái chế và tiêu hủy đúng cách.
											<br />
											<br />
											Để giảm rác thải nhựa, trước hết cần tập trung thay đổi thói quen sử dụng với những vật dụng bằng nhựa hay được dùng và vứt đi nhiều nhất, trong đó có ống hút nhựa. 
											<br />
											<br />
											Mặc dù, giá thành các loại ống hút khác làm từ inox, thủy tinh, gạo, cỏ, trẻ, giấy... cao hơn so với ống hút nhựa nhưng nghĩ xa hơn, chi phí để cải tạo môi trường do rác thải nhựa gây ra lớn hơn rất nhiều lần. 
										</Box>
									</Box>
								)}
								{isModalOpen === 2 && (
									<Box>
										<Box
											sx={{
												fontSize: "25px",
												fontWeight: 600,
												p: "15px 0px 40px",
											}}
										>
											THÊM CHẤT LIỆU TÁI TẠO, CẦN DÙNG LÀ CÓ
										</Box>
										<Box sx={{ lineHeight: "150%" }}>
											Hợp tác với Goldman Sachs và Tổ Chức Bảo Tồn Quốc Tế, chúng tôi đã tạo ra một sáng kiến tiên phong mang tên Quỹ Phục Hồi. Mục tiêu của quỹ là loại bỏ lượng phát thải carbon từ khí quyển thông qua đầu tư vào các dự án khôi phục các khu rừng, các vùng đất ngập nước và đồng cỏ – đồng thời mang lại lợi nhuận tài chính. Chúng tôi kỳ vọng sẽ vượt mục tiêu loại bỏ 1 triệu tấn carbon dioxide khỏi không khí vào năm 2025 nhờ quỹ đầu tiên này.
											<br />
											<br />
											Quỹ Phục Hồi đã đầu tư vào ba tổ chức quản lý rừng chất lượng cao. Dự án đầu tiên của chúng tôi là ở Paraguay với khoản đầu tư vào Arbaro Advisors. Chúng tôi hỗ trợ họ trong việc phát triển các khu rừng đang khai thác có chứng nhận bền vững, đồng thời mang lại cơ hội cho cộng đồng địa phương. Chúng tôi cũng hợp tác với Symbiosis để hỗ trợ họ trong hoạt động trồng cây gỗ cứng bản địa và phục hồi đa dạng sinh học ở Rừng Đại Tây Dương tại Brazil. Với BTG Pactual Timberland Investment Group, chúng tôi đang hỗ trợ họ khôi phục các cánh rừng và bảo vệ hệ sinh thái tự nhiên ở Brazil.
										</Box>
									</Box>
								)}
								{openedPopup && (
									<Box>
										<Box
											sx={{
												fontSize: "25px",
												fontWeight: 600,
												p: "15px 0px 40px",
											}}
										>
											{openedPopup.title}
										</Box>
										<Box
											sx={{ lineHeight: "150%" }}
											dangerouslySetInnerHTML={{
												__html: openedPopup.details,
											}}
										></Box>
									</Box>
								)}
							</Box>
						</Box>
					</Box>
				)}
				<Box
					sx={{
						background: "#DBDAD5",
						fontSize: "16px",
						p: "8px 24px",
						fontWeight: "600",
					}}
				>
					Môi trường
				</Box>
				<Box sx={{ ...styles.pad20 }}>
					<Box
						sx={{
							textTransform: "uppercase",
							p: "48px 0 32px 0",
							fontSize: "30px",
							fontWeight: "700",
							lineHeight: "45px",
							textAlign: "center",
						}}
					>
						THE THANH CHIA SẺ CAM KẾT ĐỐI VỚI MÔI TRƯỜNG
					</Box>
					<Box
						sx={{
							color: "#393939",
							fontSize: "16px",
							fontWeight: "400",
							lineHeight: "24px",
							pb: "24px",
						}}
					>
						The Thanh không chỉ nhìn nhận môi trường là nơi cung cấp nguồn nguyên liệu cho sản xuất mà còn coi đó như một người bạn đồng hành quan trọng trong sự phát triển của thương hiệu. Chúng tôi luôn biết ơn và đánh giá cao những gì mà hành tinh đã mang lại cho cuộc sống, cam kết cho đi nhiều hơn để bảo vệ và chăm sóc môi trường. Thương hiệu tự hào về những sản phẩm và dịch vụ được cung cấp, và tất cả đang là những điều mà chúng tôi không ngừng cố gắng và nỗ lực để hoàn thiện hơn.
					</Box>
					<Box
						sx={{
							display: "flex",
							border: "1px solid black",
							borderRadius: "20px",
							width: "173px",
							height: "38px",
							m: "0 auto",
							justifyContent: "space-around",
							alignItems: "center",
						}}
						onClick={() => setIsModalOpen(1)}
					>
						<Box sx={{ fontSize: "16px", fontWeight: "bold" }}>Tìm hiểu thêm</Box>
						<Box sx={{ width: "18px", height: "18px" }}>
							<AddIcon
								width="18px"
								height="18px"
							/>
						</Box>
					</Box>
					<Box
						sx={{
							pt: "80px",
							height: "328px",
							width: "calc(100% + 48px)",
							m: "0px -24px",
						}}
					>
						<img
							width={"100%"}
							height={"100%"}
							src={"https://www.rainforest-alliance.org/wp-content/uploads/2021/07/blue_globe_icon.png.webp"}
							alt=""
							style={{ objectFit: "cover" }}
						/>
					</Box>
					<Box
						sx={{
							p: "64px 0 94px 0",
							fontSize: "30px",
							fontWeight: "bold",
							textAlign: "center",
						}}
					>
						TRÁCH NHIỆM CỦA CHÚNG TÔI TRONG TỪNG SẢN PHẨM
					</Box>
					<Box
						sx={{
							display: "flex",
							gap: "18px",
							flexDirection: "column",
						}}
					>
						<Box
							sx={{
								position: "relative",
								height: "450px",
								width: "calc(100% + 48px)",
								m: "0px -24px",
							}}
						>
							<img
								width={"100%"}
								height={"100%"}
								style={{
									transparent: 0.7,
									objectFit: "cover",
								}}
								src="img/moi-truong-nd1.jpeg"
								alt=""
							/>
							<Box
								sx={{
									position: "absolute",
									top: 0,
									bottom: 0,
									left: 0,
									right: 0,
									backgroundColor: "black",
									opacity: "0.4",
								}}
							></Box>
							<Box
								sx={{
									position: "absolute",
									top: 15,
									right: 15,
								}}
								onClick={() => setIsModalOpen(normalProof ? normalProof[0].id : 0)}
							>
								<AddIconWhiteBg
									width="25px"
									height="25px"
								/>
							</Box>
							<Box
								sx={{
									position: "absolute",
									bottom: 15,
									left: 15,
									color: "#fff",
									fontSize: 28,
									fontWeight: "bold",
								}}
							>
								TRÁCH NHIỆM TRONG TỪNG HÀNH ĐỘNG
							</Box>
						</Box>
						<Box
							sx={{
								position: "relative",
								height: "450px",
								width: "calc(100% + 48px)",
								m: "0px -24px",
							}}
						>
							<img
								width={"100%"}
								height={"100%"}
								style={{
									transparent: 0.7,
									objectFit: "cover",
								}}
								src="img/moi-truong-nd2.jpg"
								alt=""
							/>
							<Box
								sx={{
									position: "absolute",
									top: 0,
									bottom: 0,
									left: 0,
									right: 0,
									backgroundColor: "black",
									opacity: "0.4",
								}}
							></Box>
							<Box
								sx={{
									position: "absolute",
									top: 15,
									right: 15,
								}}
								onClick={() => setIsModalOpen(normalProof ? normalProof[1].id : 0)}
							>
								<AddIconWhiteBg
									width="25px"
									height="25px"
								/>
							</Box>
							<Box
								sx={{
									position: "absolute",
									bottom: 15,
									left: 15,
									color: "#fff",
									fontSize: 28,
									fontWeight: "bold",
								}}
							>
								CAM KẾT SỬ DỤNG 100% NGUYÊN, VẬT LIỆU TÁI CHẾ VÀ TÁI SỬ DỤNG ĐƯỢC
							</Box>
						</Box>
					</Box>
					<Box
						sx={{
							p: "64px 0 108px 0",
							fontSize: "30px",
							fontWeight: "bold",
							textAlign: "center",
						}}
					>
						Hành động vì khí hậu là hành động của cộng đồng
					</Box>
					<div
						id="slider-next-news"
						style={{ margin: "0px -24px 30px" }}
					>
						<Box sx={{ position: "relative" }}>
							<Slider
								ref={slider}
								{...deXuatSetting}
							>
								{sliderProof?.map((e, index) => (
									<Box
										sx={{
											...styles.centerFlex,
											width: "288px",
											position: "relative",
										}}
										key={e.id}
									>
										<Box
											sx={{
												position: "absolute",
												top: 15,
												right: 15,
												border: "solid 1px black",
												borderRadius: "50%",
											}}
											onClick={() => setIsModalOpen(e.id)}
										>
											<AddIconWhiteBg
												width="25px"
												height="25px"
											/>
										</Box>
										<img
											loading="lazy"
											width={"100%"}
											height={"250px"}
											alt="Loại bỏ carbon bắt đầu từ sự phục hồi"
											key={index}
											src={e.image}
											style={{ objectFit: "cover" }}
										/>
										<Box
											sx={{
												height: "200px",
												background: "#E6E6E6",
											}}
										>
											<Box
												sx={{
													fontSize: "20px",
													fontWeight: "bold",
													p: "24px",
												}}
											>
												{e.title}
											</Box>
											<Box
												sx={{
													fontSize: "14px",
													pl: "24px",
												}}
											>
												Mỹ Đình, Hà Nội
											</Box>
										</Box>
									</Box>
								))}
							</Slider>
							<Box
								sx={{
									position: "absolute",
									top: "50%",
									right: 10,
									transform: "translate(0 , -50%)",
								}}
							>
								<Box
									sx={{
										cursor: "pointer",
									}}
									onClick={() => slider?.current?.slickNext()}
								>
									<ArrowNextGray
										width="25"
										height="25"
									/>
								</Box>
							</Box>
							<Box
								sx={{
									position: "absolute",
									top: "50%",
									left: 10,
									transform: "translate(0 , -50%)",
								}}
							>
								<Box
									sx={{
										cursor: "pointer",
										transform: "rotate(180deg)",
									}}
									onClick={() => slider?.current?.slickPrev()}
								>
									<ArrowNextGray
										width="25"
										height="25"
									/>
								</Box>
							</Box>
						</Box>
					</div>
				</Box>
			</Layout.MainBg>
			<Footer />
		</Box>
	);
};

export default Mobile;
