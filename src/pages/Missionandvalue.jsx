import { Box, useMediaQuery } from "@mui/material";
import React, { useContext } from "react";
import Logotop from "../component/layout/LogoTop";
import Navbardesktop from "../component/layout/NavBarDesktop";
import FooterDesktop from "../component/layout/FooterDesktop";
import { RESPONSIVE_TABLET, styles } from "../styles";
import PlayCircleIcon from "../component/svg/icon/PlayCircle";
import giatricuachungtoi1 from "../component/img/giatricuachungtoi1.jpg";
import giatricuachungtoi2 from "../component/img/giatricuachungtoi2.jpg";
import giatricuachungtoi3 from "../component/img/giatricuachungtoi3.jpg";
import Slider from "react-slick";
import { useTheme } from "@emotion/react";
import { MobileContext } from "../store/context/Mobile";

const MyvaluesItems = [
	{
		img: giatricuachungtoi1,
		content: "Chúng tôi duy trì các quy tắc kinh doanh nghiêm ngặt để đảm bảo mọi hoạt động đều minh bạch và chính trực.",
	},
	{
		img: giatricuachungtoi2,
		content: "The Thanh Coffee luôn tuân thủ các quy định pháp luật và chuẩn mực đạo đức trong mọi giao dịch và hoạt động kinh doanh.",
	},
	{
		img: giatricuachungtoi3,
		content: "Chúng tôi cam kết chịu trách nhiệm với khách hàng, cộng đồng và môi trường, luôn hướng đến phát triển bền vững và bền vững.",
	},
	{
		img: giatricuachungtoi1,
		content: "Chúng tôi xây dựng và củng cố mối quan hệ bền chặt với các cộng sự và đối tác, tạo nên một mạng lưới hỗ trợ và hợp tác vững mạnh.",
	},
];

const Missionandvalue = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));
	const slider = React.useRef(null);
	var Myvalues = {
		className: "center",
		centerMode: true,
		infinite: true,
		slidesToShow: 3,
		speed: 500,
		dots: true,
		focusOnSelect: true,
	};
	var MyvaluesMobile = {
		className: "center",
		infinite: true,
		slidesToShow: 1,
		speed: 500,
	};

	return (
		<Box sx={{ ...styles.fontSize13 }}>
			<Logotop />
			<Navbardesktop />
			{isMobile ? (
				<Box>
					<Box sx={{ pt: "145px" }}>
						<div className="slider-container"></div>
						<Box
							sx={{
								justifyContent: "center",
								alignItems: "center",
								textAlign: "center",
								background: "#dad8d4",
								p: "20px",
							}}
						>
							<Box>
								<PlayCircleIcon />
							</Box>
							<Box sx={{ fontSize: "30px", fontWeight: "bold", pb: "15px" }}>Nhiệm vụ của chúng tôi</Box>
							<Box sx={{ fontSize: "18px", lineHeight: "30px" }}>Tại The Thanh Coffee, chúng tôi kết nối các đối tác, chia sẻ ước mơ và lan tỏa cảm hứng để tạo nên sự thân tình và ấm áp giữa mọi người. Chúng tôi mong muốn mỗi khoảnh khắc đều trở nên đáng nhớ và tràn đầy niềm vui, qua mỗi cốc cà phê và tại mỗi cửa hàng The Thanh Coffee, ở mọi thời điểm.</Box>
						</Box>
					</Box>
					<Box>
						<Box
							sx={{
								justifyContent: "center",
								alignItems: "center",
								textAlign: "center",
								fontSize: "30px",
								fontWeight: "bold",
								p: "20px",
							}}
						>
							Giá trị của chúng tôi
						</Box>
						<Box
							sx={{
								position: "relative",
								mb: "60px",
								boxSizing: "border-box",
								overflow: "hidden",
							}}
						>
							<Slider
								ref={slider}
								{...MyvaluesMobile}
							>
								{MyvaluesItems.map((e, index) => (
									<Box key={index}>
										<div
											style={{
												position: "relative",
												width: "100%",
												height: "300px",
											}}
										>
											<img
												loading="lazy"
												style={{
													width: "100%",
													height: "100%",
													objectFit: "cover",
												}}
												alt="giá trị của chúng tôi"
												key={index}
												src={e.img}
											/>
											<div
												style={{
													position: "absolute",
													bottom: 30,
													textAlign: "center",
													color: "white",
													fontSize: "14px",
													lineHeight: "20px",
												}}
											>
												{e.content}
											</div>
										</div>
									</Box>
								))}
							</Slider>
							<Box
								sx={{
									position: "absolute",
									top: "50%",
									bottom: 0,
									left: 0,
									cursor: "pointer",
								}}
								onClick={() => slider?.current?.slickPrev()}
							>
								<svg
									width="31"
									height="31"
									viewBox="0 0 31 31"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<circle
										cx="15.5"
										cy="15.5"
										r="14.3857"
										fill="white"
										stroke="#B2CABE"
										stroke-width="1.22858"
									/>
									<path
										d="M18.2 10.1L12.8 15.5L18.2 20.9"
										stroke="#054C29"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</Box>
							<Box
								sx={{
									position: "absolute",
									top: "50%",
									bottom: 0,
									right: 0,
									cursor: "pointer",
								}}
								onClick={() => slider?.current?.slickNext()}
							>
								<svg
									width="31"
									height="31"
									viewBox="0 0 31 31"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<circle
										cx="15.5"
										cy="15.5"
										r="14.3857"
										fill="white"
										stroke="#B2CABE"
										stroke-width="1.22858"
									/>
									<path
										d="M12.8 20.9L18.2 15.5L12.8 10.1"
										stroke="#054C29"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</Box>
						</Box>
					</Box>
				</Box>
			) : (
				<Box>
					<Box sx={{ p: "145px 0 0" }}>
						<div className="slider-container"></div>
						<Box
							sx={{
								justifyContent: "center",
								alignItems: "center",
								textAlign: "center",
								background: "#dad8d4",
								p: "289px 280px 80px 280px",
								[RESPONSIVE_TABLET]: {
									p: "80px 20px 80px 20px",
								},
							}}
						>
							<Box>
								<PlayCircleIcon />
							</Box>
							<Box sx={{ fontSize: "48px", fontWeight: "bold" }}>Nhiệm vụ của chúng tôi</Box>
							<Box sx={{ fontSize: "20px", lineHeight: "30px" }}>Tại The Thanh Coffee, chúng tôi kết nối các đối tác, chia sẻ ước mơ và lan tỏa cảm hứng để tạo nên sự thân tình và ấm áp giữa mọi người. Chúng tôi mong muốn mỗi khoảnh khắc đều trở nên đáng nhớ và tràn đầy niềm vui, qua mỗi cốc cà phê và tại mỗi cửa hàng The Thanh Coffee, ở mọi thời điểm.</Box>
						</Box>
					</Box>
					<Box>
						<Box
							sx={{
								justifyContent: "center",
								alignItems: "center",
								textAlign: "center",
								fontSize: "48px",
								fontWeight: "bold",
								pt: "96px",
							}}
						>
							Giá trị của chúng tôi
						</Box>
						<div id="mission-and-value">
							<Box
								sx={{
									position: "relative",
									p: "96px 126px",
									[RESPONSIVE_TABLET]: {
										p: "96px 20px",
									},
								}}
							>
								<Slider
									ref={slider}
									{...Myvalues}
								>
									{MyvaluesItems.map((e, index) => (
										<Box key={index}>
											<div
												style={{
													position: "relative",
													width: "100%",
													height: "245px",
												}}
											>
												<img
													loading="lazy"
													style={{
														width: "100%",
														height: "100%",
														objectFit: "cover",
													}}
													alt="giá trị của chúng tôi"
													key={index}
													src={e.img}
												/>
												<div className="tw-bg-black tw-opacity-40 tw-inset-0 tw-absolute"></div>
												<div
													style={{
														position: "absolute",
														bottom: 30,
														textAlign: "center",
														color: "white",
														fontSize: "14px",
														lineHeight: "20px",
													}}
												>
													{e.content}
												</div>
											</div>
										</Box>
									))}
								</Slider>
								<Box
									sx={{
										position: "absolute",
										top: "50%",
										bottom: 0,
										ml: "20px",
										cursor: "pointer",
									}}
									onClick={() => slider?.current?.slickPrev()}
								>
									<svg
										width="31"
										height="31"
										viewBox="0 0 31 31"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<circle
											cx="15.5"
											cy="15.5"
											r="14.3857"
											fill="white"
											stroke="#B2CABE"
											stroke-width="1.22858"
										/>
										<path
											d="M18.2 10.1L12.8 15.5L18.2 20.9"
											stroke="#054C29"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</Box>
								<Box
									sx={{
										position: "absolute",
										top: "50%",
										bottom: 0,
										right: "126px",
										mr: "20px",
										cursor: "pointer",
									}}
									onClick={() => slider?.current?.slickNext()}
								>
									<svg
										width="31"
										height="31"
										viewBox="0 0 31 31"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<circle
											cx="15.5"
											cy="15.5"
											r="14.3857"
											fill="white"
											stroke="#B2CABE"
											stroke-width="1.22858"
										/>
										<path
											d="M12.8 20.9L18.2 15.5L12.8 10.1"
											stroke="#054C29"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</Box>
							</Box>
						</div>
					</Box>
				</Box>
			)}
			<FooterDesktop />
		</Box>
	);
};

export default Missionandvalue;
