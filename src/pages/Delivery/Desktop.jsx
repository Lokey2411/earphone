import { Box, Grid } from "@mui/material";
import React from "react";
import { styles } from "../../styles";
import NavBar from "../../component/layout/NavBar";
import Layout from "../../component/layout";
import giaohang from "../../component/img/giaohang.png";
import ShopeeIcon from "../../component/img/ShopeeIcon.png";
import GrabIcon from "../../component/img/GrabIcon.png";
import BefoodIcon from "../../component/img/BefoodIcon.png";
import ArrowDownGreen from "../../component/svg/icon/ArrowDownGreen";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../../component/layout/Footer";
import { useData } from "../../hooks/useData";
import CacCauHoi from "../../component/CacCauHoi";
import { useQuestions } from "../../hooks/useQuestions";

const Desktop = () => {
	const [abouts] = useData("abouts/giao-hang");
	// const suggestions = abouts?.filter((item) => item.title.toUpperCase() === "CHÚNG TÔI ĐỀ XUẤT CẢNH NÀY");
	const slider = React.useRef(null);
	var giaohangSetting = {
		// centerMode: true,
		// centerPadding: "160px",
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true,
		dotsClass: "slick-dots slick-thumb",
		arrows: false,
	};
	// const deXuatItems = suggestions.map((item) => ({ img: item.image }));
	const [questions] = useQuestions();
	return (
		<Box sx={{ ...styles.fontSize13 }}>
			<NavBar />
			<Layout.MainBg>
				<Box sx={{ mt: "24px" }}></Box>
				<Box>
					<Box
						sx={{
							height: "42px",
							...styles.backgroundColor.mauTra,
							...styles.centerFlex,
							p: "0px 80px",
							fontWeight: 600,
						}}
					>
						<Box>Giao hàng</Box>
					</Box>
					<Box sx={{ display: "flex" }}>
						<img
							width={"100%"}
							height={"100%"}
							alt=""
							src={giaohang}
						/>
					</Box>
					<Box
						sx={{
							backgroundColor: "#000000",
							p: "70px 0px",
							...styles.fontColor.mauTrang,
						}}
					>
						<Box
							sx={{
								fontSize: "45px",
								fontWeight: 700,
								textAlign: "center",
							}}
						>
							GIAO HÀNG TẠI THE THANHCOFFEE
						</Box>
						<center style={{ fontSize: "16px" }}>
							<p>Khám phá các tuỳ chọn Giao hàng tại nơi bạn ở cùng The Thanh</p>
						</center>
					</Box>
					<Box sx={{ p: "50px 80px" }}>
						<Grid
							container
							spacing={2}
							sx={{
								p: "0px 35% 50px",
							}}
						>
							<Grid
								item
								width={"33.33%"}
							>
								<img
									width={"100%"}
									alt=""
									src={ShopeeIcon}
								/>
							</Grid>
							<Grid
								item
								width={"33.33%"}
							>
								<img
									width={"100%"}
									alt=""
									src={GrabIcon}
								/>
							</Grid>
							<Grid
								item
								width={"33.33%"}
							>
								<img
									width={"100%"}
									alt=""
									src={BefoodIcon}
								/>
							</Grid>
						</Grid>
						<Box
							sx={{
								display: "flex",
								m: "0px 40px",
								height: "60px",
								...styles.fontColor.xanhNhat006241,
								fontWeight: 600,
								backgroundColor: "#EEEDE9",
								fontSize: "18px",
								svg: { width: "18px", height: "10px" },
							}}
						>
							<a
								href="#dat-hang-tu-day"
								style={{
									position: "relative",
									width: "33.33%",
									p: "19px 0px",
									...styles.centerFlex,
									justifyContent: "center",
									":hover svg > path": { fill: "#006241" },
								}}
							>
								<Box>Đặt hàng tại đây</Box>
								<Box
									sx={{
										position: "absolute",
										top: "50%",
										right: "26px",
										transform: "translate(-50%, -50%)",
									}}
								>
									<ArrowDownGreen />
								</Box>
							</a>
							<a
								href="#de-xuat-canh-nay"
								style={{
									position: "relative",
									width: "33.33%",
									p: "19px 0px",
									...styles.centerFlex,
									justifyContent: "center",
									borderLeft: "solid #575757 0.3px",
									":hover svg > path": { fill: "#006241" },
								}}
							>
								<Box>Chúng tôi đề xuất cảnh này</Box>
								<Box
									sx={{
										position: "absolute",
										top: "50%",
										right: "26px",
										transform: "translate(-50%, -50%)",
									}}
								>
									<ArrowDownGreen />
								</Box>
							</a>
							<a
								href="#cau-hoi-thuong-gap"
								style={{
									position: "relative",
									width: "33.33%",
									p: "19px 0px",
									...styles.centerFlex,
									justifyContent: "center",
									borderLeft: "solid #575757 0.3px",
									":hover svg > path": { fill: "#006241" },
								}}
							>
								<Box>Câu hỏi thường gặp</Box>
								<Box
									sx={{
										position: "absolute",
										top: "50%",
										right: "26px",
										transform: "translate(-50%, -50%)",
									}}
								>
									<ArrowDownGreen />
								</Box>
							</a>
						</Box>
						<Box
							id="dat-hang-tu-day"
							sx={{
								fontSize: "34px",
								...styles.fontColor.xanh083A1D,
								fontWeight: "600",
								textAlign: "center",
								p: "80px 0px 40px",
							}}
						>
							ĐẶT HÀNG TỪ ĐÂY
						</Box>
						<Box
							sx={{
								textAlign: "center",
								pb: "40px",
								fontSize: "19px",
							}}
						>
							Bạn có thể chọn dịch vụ giao hàng yêu thích của mình và đặt hàng
						</Box>
						<Grid
							container
							spacing={5}
							sx={{
								p: "0px 200px",
							}}
						>
							<Grid
								item
								width={"33.33%"}
							>
								<img
									width={"100%"}
									alt=""
									src={ShopeeIcon}
								/>
							</Grid>
							<Grid
								item
								width={"33.33%"}
							>
								<img
									width={"100%"}
									alt=""
									src={GrabIcon}
								/>
							</Grid>
							<Grid
								item
								width={"33.33%"}
							>
								<img
									width={"100%"}
									alt=""
									src={BefoodIcon}
								/>
							</Grid>
						</Grid>
					</Box>
					{/* <Box sx={{ p: "70px 80px", backgroundColor: "#D4E8E2" }}>
						<Box
							sx={{
								fontSize: "40px",
								...styles.fontColor.xanh083A1D,
								fontWeight: 600,
								textAlign: "center",
							}}
						>
							{abouts[0]?.title?.toUpperCase()}
						</Box>
						<Box sx={{ position: "relative" }}>
							<div style={{ position: "absolute", top: -80 }}></div>
						</Box>
						<Box sx={{ display: "flex", gap: "75px" }}>
							{niceThings?.map((item) => (
								<Box
									sx={{
										width: "33.33%",
										p: "80px 0px 40px",
										display: "flex",
										flexDirection: "column",
										gap: "40px",
									}}
									key={item?.id}
								>
									<Box
										sx={{
											...styles.centerFlex,
											justifyContent: "center",
										}}
									>
										<Box
											sx={{
												backgroundColor: "black",
												border: "solid",
												borderRadius: "50%",
												width: "100px",
												height: "100px",
											}}
										></Box>
									</Box>
									<Box
										sx={{
											...styles.fontColor.xanh083A1D,
											fontWeight: 600,
											fontSize: "20px",
											textAlign: "center",
											height: "48px",
										}}
									>
										{item?.title}
									</Box>
									<Box
										sx={{
											fontSize: "16px",
											lineHeight: "150%",
											fontWeight: 400,
										}}
									>
										{item?.subtitle}
									</Box>
								</Box>
							))}
						</Box>
						<Box
							sx={{
								...styles.centerFlex,
							}}
						>
							*Để biết chi tiết, vui lòng kiểm tra ứng dụng của từng dịch vụ giao hàng.
						</Box>
					</Box> */}
					<Box sx={{ position: "relative" }}>
						<div
							id="de-xuat-canh-nay"
							style={{ position: "absolute", top: -80 }}
						></div>
					</Box>
					{/* <Box sx={{ p: "160px 80px 60px" }}>
                        <Box
                            sx={{
                                fontSize: "40px",
                                fontWeight: "600",
                                textAlign: "center",
                            }}
                        >
                            {suggestions[0]?.title}
                        </Box>
                        <Box
                            sx={{
                                fontSize: "24px",
                                p: "40px 0px 0px",
                                textAlign: "center",
                            }}
                        >
                            {suggestions[0]?.subtitle}
                        </Box>
                    </Box> */}
					<center style={{ paddingTop: "60px" }}>
						<h1
							style={{
								fontSize: 34,
							}}
						>
							CHÚNG TÔI ĐỀ XUẤT CẢNH NÀY
						</h1>
						<p style={{ fontSize: "19px" }}>Mang hương vị Cà phê The Thanh tới với bạn trong các khoảnh khắc hằng ngày</p>
					</center>
					<div
						id="giaohang-desktop"
						style={{ paddingTop: "60px" }}
					>
						<Slider
							ref={slider}
							{...giaohangSetting}
						>
							{/* {deXuatItems?.map((e, index) => (
                                <a href="/" key={index}>
                                    <img
                                        loading="lazy"
                                        width={"100%"}
                                        alt=""
                                        src={e?.img}
                                    />
                                </a>
                            ))} */}
							<Box>
								<img
									src="img/van-chuyen-giao-hang-canh1.jfif"
									alt=""
									style={{
										width: "100%",
										objectFit: "cover",
										height: "500px",
									}}
								/>
								<p style={{ fontSize: "16px" }}>
									<h3>Ngoài trời</h3>
									Bạn có thể chỉ định địa điểm bạn muốn giao hàng để bạn không cần phải mang theo bất cứ thứ gì ngay cả khi bạn đang đi dã ngoại. Với việc giao hàng, bạn không cần phải mang theo và rất tiện lợi.
								</p>
							</Box>
							<Box>
								<img
									src="img/van-chuyen-giao-hang-canh2.jfif"
									alt=""
									style={{
										width: "100%",
										objectFit: "cover",
										height: "500px",
									}}
								/>
								<p style={{ fontSize: "16px" }}>
									<h3>An tâm mua sắm</h3>
									Chúng tôi đóng gói đơn hàng cẩn thận và chuẩn bị sẵn sàng những thứ cần thiết để bạn an tâm đặt hàng và dành tặng đồ uống cho những người thân yêu.
								</p>
							</Box>
							<Box>
								<img
									src="img/van-chuyen-giao-hang-canh3.jfif"
									alt=""
									style={{
										width: "100%",
										objectFit: "cover",
										height: "500px",
									}}
								/>
								<p style={{ fontSize: "16px" }}>
									<h3>Để nghỉ ngơi hoặc thư giãn</h3>
									Hoàn hảo cho một kỳ nghỉ thư giãn hoặc như một phần thưởng cho một ngày làm việc vất vả. Thưởng thức đồ uống yêu thích của bạn ở nhà.
								</p>
							</Box>
						</Slider>
					</div>
					<Box
						sx={{
							position: "relative",
							...styles.centerFlex,
							justifyContent: "center",
							mt: "120px",
						}}
					>
						<div
							style={{ position: "absolute", top: -80 }}
							id="cau-hoi-thuong-gap"
						></div>
						<Box
							sx={{
								...styles.centerFlex,
								...styles.fontColor.xanh00754A,
								border: "solid #006241 2px",
								borderRadius: "50px",
								p: "36px",
								fontSize: "24px",
								fontWeight: "600",
							}}
						>
							<Box>Câu hỏi thường gặp</Box>
						</Box>
					</Box>
					<Box
						sx={{
							p: "30px 160px 80px",
						}}
					>
						<CacCauHoi questions={questions} />
					</Box>
					<Box
						sx={{
							...styles.backgroundColor.mauTra,
							p: "48px 80px",
						}}
					>
						<Box
							sx={{
								...styles.centerFlex,
								justifyContent: "center",
								pl: "14px",
								lineHeight: "150%",
							}}
						>
							<ul style={{ padding: 0, margin: 0 }}>
								<li>Hình ảnh và hình minh họa được sử dụng trên trang này bao gồm hình ảnh thực của sản phẩm.</li>
								<li>Giá hiển thị đã bao gồm thuế tiêu thụ.</li>
								<li>Các cửa hàng tương thích với dịch vụ giao hàng là các cửa hàng ThanhCoffee tại Việt Nam đã áp dụng ShopeeFood, Grab và Be. (Vui lòng kiểm tra các cửa hàng hiện hành gần bạn từ mỗi ứng dụng giao hàng)</li>
								<li>Mỗi chiến dịch và menu cố định có thể không có sẵn tại một số cửa hàng. (Vui lòng kiểm tra các cửa hàng hiện hành gần bạn từ mỗi ứng dụng giao hàng)</li>
								<li>Chiến dịch có thể kết thúc mà không cần thông báo trước trước ngày kết thúc.</li>
								<li>Tùy thuộc vào tình hình cửa hàng, việc tiếp nhận giao hàng có thể tạm thời bị đình chỉ. Ngoài ra, cửa hàng có thể đóng cửa sớm hơn giờ mở cửa thực tế.</li>
								<li>Để biết thêm thông tin chi tiết về dịch vụ giao hàng của ThanhCoffee, vui lòng xem phần "Câu hỏi thường gặp" ở trên.</li>
							</ul>
						</Box>
					</Box>
				</Box>
			</Layout.MainBg>
			<Footer />
		</Box>
	);
};

export default Desktop;
