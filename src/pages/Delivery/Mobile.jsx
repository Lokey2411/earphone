import { Box, Grid } from "@mui/material";
import React from "react";
import { styles } from "../../styles";
import NavBar from "../../component/layout/NavBar";
import Layout from "../../component/layout";
import giaohang from "../../component/img/giaohang.png";
import giaohang2 from "../../component/img/giaohang2.png";
import ShopeeIcon from "../../component/img/ShopeeIcon.png";
import GrabIcon from "../../component/img/GrabIcon.png";
import BefoodIcon from "../../component/img/BefoodIcon.png";
import ArrowDownGreen from "../../component/svg/icon/ArrowDownGreen";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowNextGray from "../../component/svg/icon/ArrowNextGray";
import ArrowPrevGray from "../../component/svg/icon/ArrowPrevGray";
import Footer from "../../component/layout/Footer";
import { useData } from "../../hooks/useData";
import CacCauHoi from "../../component/CacCauHoi";
import { useQuestions } from "../../hooks/useQuestions";
import Loading from "../../component/Loading";

const Mobile = () => {
	const [abouts] = useData("abouts/giao-hang");
	const niceThings = abouts?.filter((item) => item.parent.includes("nice-things"));
	const suggestions = abouts?.filter((item) => item.title.toUpperCase() === "CHÚNG TÔI ĐỀ XUẤT CẢNH NÀY");
	const slider = React.useRef(null);
	var giaohangSetting = {
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
	};
	// const deXuatItems = suggestions.map((item) => ({ img: item.image }));
	const [questions] = useQuestions();
	return (
		<Box sx={{ ...styles.fontSize13 }}>
			<NavBar />
			<Layout.SecondaryBg>
				<Box sx={{ pb: "56px" }}>
					<Box
						sx={{
							height: "42px",
							...styles.backgroundColor.mauTra,
							...styles.centerFlex,
							...styles.pad20,
							fontWeight: 600,
							gap: "10px",
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
							background: "rgba(0,0,0,0.1)",
							p: "30px 24px",
						}}
					>
						<Box
							sx={{
								fontSize: "23px",
								fontWeight: 700,
								pb: "5px",
								textAlign: "center",
							}}
						>
							GIAO HÀNG THANHCOFFEE
						</Box>
						<Box
							sx={{
								fontWeight: 600,
								fontSize: "16px",
								textAlign: "center",
							}}
						>
							The ThanhCoffee nơi bạn đang ở.
						</Box>
					</Box>
					<Box sx={{ p: "30px 24px" }}>
						<Grid
							container
							spacing={1}
							sx={{
								p: "0px 10% 20px",
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
						<a href="#section1">
							<Box
								sx={{
									color: "#000000",
									fontWeight: 600,
									...styles.backgroundColor.xamF2F2F2,
									p: "22px 18px",
									m: "0px 8px",
								}}
							>
								<Box sx={{ position: "relative" }}>
									<Box sx={{ textAlign: "center" }}>Đặt hàng từ đây</Box>
									<Box
										sx={{
											position: "absolute",
											top: "50%",
											right: "0px",
											transform: "translate(-50%, -50%)",
										}}
									>
										<ArrowDownGreen />
									</Box>
								</Box>
							</Box>
						</a>
						<a href="#section2">
							<Box
								sx={{
									color: "#000000",
									fontWeight: 600,
									...styles.backgroundColor.xamF2F2F2,
									p: "22px 18px",
									m: "0px 8px",
									borderTop: "solid #575757 0.3px",
								}}
							>
								<Box sx={{ position: "relative" }}>
									<Box sx={{ textAlign: "center" }}>Chúng tôi đề xuất cảnh này</Box>
									<Box
										sx={{
											position: "absolute",
											top: "50%",
											right: "0px",
											transform: "translate(-50%, -50%)",
										}}
									>
										<ArrowDownGreen />
									</Box>
								</Box>
							</Box>
						</a>
						<a href="#section3">
							<Box
								sx={{
									color: "#000000",
									fontWeight: 600,
									...styles.backgroundColor.xamF2F2F2,
									p: "22px 18px",
									m: "0px 8px",
									borderTop: "solid #575757 0.3px",
								}}
							>
								<Box sx={{ position: "relative" }}>
									<Box sx={{ textAlign: "center" }}>Câu hỏi thường gặp</Box>
									<Box
										sx={{
											position: "absolute",
											top: "50%",
											right: "0px",
											transform: "translate(-50%, -50%)",
										}}
									>
										<ArrowDownGreen />
									</Box>
								</Box>
							</Box>
						</a>
						<Box
							sx={{
								fontSize: "23px",
								...styles.fontColor.xanh083A1D,
								fontWeight: "bold",
								textAlign: "center",
								p: "30px",
							}}
						>
							CHỦ ĐỀ MỚI
						</Box>
						<Box sx={{ ...styles.centerFlex }}>
							<img
								width={"100%"}
								alt=""
								src={giaohang2}
							/>
						</Box>
						<Box sx={{ position: "relative" }}>
							<div
								id="section1"
								style={{ position: "absolute", top: -55 }}
							></div>
						</Box>
						<Box
							sx={{
								fontSize: "23px",
								...styles.fontColor.xanh083A1D,
								fontWeight: "bold",
								textAlign: "center",
								p: "30px 0px 15px",
							}}
						>
							ĐẶT HÀNG TỪ ĐÂY
						</Box>
						<Box sx={{ textAlign: "center", pb: "20px" }}>Bạn có thể chọn dịch vụ giao hàng yêu thích của mình và đặt hàng</Box>
						<Grid
							container
							spacing={1}
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
					<Box
						sx={{
							p: "30px 24px",
							...styles.backgroundColor.mauTra,
						}}
					>
						<Box
							sx={{
								fontSize: "23px",
								...styles.fontColor.xanh083A1D,
								fontWeight: 700,
								textAlign: "center",
							}}
						>
							{abouts ? abouts[0]?.title.toUpperCase() : ""}
						</Box>

						{niceThings?.map((item) => (
							<Box
								sx={{
									p: "35px 0px 20px",
									...styles.centerFlex,
									flexDirection: "column",
									gap: "20px",
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
										textAlign: "center",
										fontWeight: 600,
										fontSize: "14px",
										p: "0px 13px",
									}}
								>
									{item?.title}
								</Box>
								<Box
									sx={{
										fontSize: "12px",
										lineHeight: "150%",
										fontWeight: 400,
									}}
								>
									{item?.subtitle}
								</Box>
							</Box>
						))}

						<Box
							sx={{
								fontSize: "8px",
								...styles.centerFlex,
								justifyContent: "center",
							}}
						>
							<ul style={{ padding: 0, margin: 0 }}>
								<li>Để biết thêm chi tiết, vui lòng kiểm tra ứng dụng của từng dịch vụ giao hàng</li>
							</ul>
						</Box>
					</Box>
					<Box sx={{ position: "relative" }}>
						<div
							id="section2"
							style={{ position: "absolute", top: -55 }}
						></div>
					</Box>
					{/* <Box sx={{ p: "30px 24px" }}>
                        <Box
                            sx={{
                                fontSize: "23px",
                                fontWeight: "bold",
                                textAlign: "center",
                            }}
                        >
                            {suggestions[0]?.title}
                        </Box>
                        <Box
                            sx={{
                                fontSize: "14px",
                                lineHeight: "150%",
                                p: "30px 0px 0px",
                                textAlign: "center",
                            }}
                        >
                            {suggestions[0]?.subtitle}
                        </Box>
                    </Box> */}
					<center>
						<h1 style={{ fontSize: 26 }}>CHÚNG TÔI ĐỀ XUẤT CẢNH NÀY</h1>
					</center>
					<div
						id="giaohang"
						style={{ padding: "20px 24px 0" }}
					>
						<Slider
							ref={slider}
							{...giaohangSetting}
						>
							{/* {deXuatItems?.map((e, index) => (
                <Box
                  sx={{
                    ...styles.centerFlex,
                    justifyContent: "center",
                  }}
                  key={index}
                >
                  <img loading="lazy" width={"100%"} alt="" src={e?.img} />
                </Box>
              ))} */}
							<Box>
								<img
									src="img/van-chuyen-giao-hang-canh1.jfif"
									alt=""
									style={{
										width: "100%",
										objectFit: "cover",
										height: "250px",
									}}
								/>
								<p
									style={{
										fontSize: "16px",
										margin: "10px 0 0",
									}}
								>
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
										height: "250px",
									}}
								/>
								<p
									style={{
										fontSize: "16px",
										margin: "10px 0 0",
									}}
								>
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
										height: "250px",
									}}
								/>
								<p
									style={{
										fontSize: "16px",
										margin: "10px 0 0",
									}}
								>
									<h3>Để nghỉ ngơi hoặc thư giãn</h3>
									Hoàn hảo cho một kỳ nghỉ thư giãn hoặc như một phần thưởng cho một ngày làm việc vất vả. Thưởng thức đồ uống yêu thích của bạn ở nhà.
								</p>
							</Box>
						</Slider>
					</div>
					<Box
						sx={{
							...styles.centerFlex,
							justifyContent: "right",
							p: "20px 24px 0px",
						}}
					>
						<button
							style={{
								margin: 0,
								padding: 0,
								border: 0,
								cursor: "pointer",
							}}
							onClick={() => slider?.current?.slickPrev()}
						>
							<ArrowPrevGray />
						</button>
						<button
							style={{
								margin: 0,
								padding: 0,
								border: 0,
								cursor: "pointer",
							}}
							onClick={() => slider?.current?.slickNext()}
						>
							<ArrowNextGray />
						</button>
					</Box>

					<Box
						sx={{
							...styles.centerFlex,
							justifyContent: "center",
							p: "64px 0px 35px",
						}}
					>
						<Box sx={{ width: "198px" }}>
							<Box sx={{ position: "relative" }}>
								<div
									id="section3"
									style={{
										position: "absolute",
										top: -55,
									}}
								></div>
							</Box>
							<Box
								sx={{
									...styles.centerFlex,
									...styles.fontColor.xanh00754A,
									border: "solid #006241 0.5px",
									borderRadius: "39px",
									p: "15px 32px",
									fontWeight: "600",
								}}
							>
								<Box>Câu hỏi thường gặp</Box>
							</Box>
						</Box>
					</Box>
					<Box sx={{ p: "0px 24px 56px" }}>
						<Box sx={{ pt: "24px" }}>
							<CacCauHoi questions={questions} />
						</Box>
					</Box>
					<Box
						sx={{
							...styles.backgroundColor.mauTra,
							p: "35px 24px",
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
			</Layout.SecondaryBg>
			<Footer />
		</Box>
	);
};

export default Mobile;
