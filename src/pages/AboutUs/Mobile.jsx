import Layout from "../../component/layout";
import NavBar from "../../component/layout/NavBar";
import { Box } from "@mui/material";
import { styles } from "../../styles";
import Footer from "../../component/layout/Footer";
import AddIconWhiteBg from "../../component/svg/icon/AddIconWhiteBg";
import React, { useEffect, useMemo, useState } from "react";
import Slider from "react-slick";
import phache from "../../component/img/phache.jpg";
import customerexperience from "../../component/img/customerexperience.jpg";
import ArrowPrevGray from "../../component/svg/icon/ArrowPrevGray";
import ArrowNextGray from "../../component/svg/icon/ArrowNextGray";
import TichXIcon from "../../component/svg/icon/TichXICon";
import LeftArrowBlack from "../../component/svg/icon/LeftArrowBlack";
import { useAbouts } from "../../hooks/useAbouts";
import congtycuachungtoi5 from "../../component/img/congtycuachungtoi5.png";
import congtycuachungtoi6 from "../../component/img/congtycuachungtoi6.png";
import thamgiathethanh5 from "../../component/img/thamgiathethanh5.jpg";
import thamgiathethanh6 from "../../component/img/giatrimachungtoicoitrongdoivoiungvien.jpg";
import { useQuestions } from "../../hooks/useQuestions";
import CacCauHoi from "../../component/CacCauHoi";
const Mobile = () => {
	const slider = React.useRef(null);
	var deXuatSetting = {
		centerMode: true,
		centerPadding: "30px",
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		infinite: true,
	};

	const deXuatItems = [{ img: phache }, { img: phache }, { img: phache }];

	const [isModalOpen, setIsModalOpen] = useState(0);
	const [abouts] = useAbouts();
	// split abouts
	const { firstAbout, sliderAbouts, normalAbouts, modalOpened } = useMemo(() => {
		const firstAbout = abouts ? abouts[0] : {};
		const sliderAbouts = abouts?.filter((item) => item.type === "slider");
		const normalAbouts = abouts?.filter((item, index) => !item.type && index !== 0);
		const modalOpened = abouts?.find((item) => item.id === isModalOpen)?.popups;
		return { firstAbout, sliderAbouts, normalAbouts, modalOpened };
	}, [abouts, isModalOpen]);
	const [questions] = useQuestions();
	return (
		<Box sx={{ ...styles.fontSize13 }}>
			<NavBar />
			<Layout.SecondaryBg>
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
										{modalOpened?.title}
									</Box>
									<Box
										sx={{ lineHeight: "150%" }}
										dangerouslySetInnerHTML={{
											__html: modalOpened?.details,
										}}
									/>
								</Box>
							</Box>
						</Box>
					</Box>
				)}
				<Box
					sx={{
						p: "50px 36px 50px 36px",
						fontSize: "36px",
						fontWeight: "600",
						lineHeight: "43px",
						textAlign: "center",
					}}
				>
					{firstAbout?.title}
				</Box>
				<Box
					sx={{
						p: "0 24px 50px",
						lineHeight: "15px",
						textAlign: "center",
					}}
				>
					{firstAbout?.subtitle}
				</Box>
				<Box
					sx={{
						p: "0 24px 40px 24px",
						fontSize: "23px",
						fontWeight: "700",
						textAlign: "center",
					}}
				>
					Hãy đến và xem những sản phẩm tốt nhất
				</Box>
				<div id="about-us">
					<Box sx={{ position: "relative" }}>
						<Slider
							ref={slider}
							{...deXuatSetting}
						>
							{sliderAbouts?.map((e) => (
								<Box
									sx={{
										position: "relative",
									}}
									key={e.id}
								>
									<Box sx={{ ...styles.centerFlex }}>
										<img
											loading="lazy"
											width={"100%"}
											height={"auto"}
											alt="Loại bỏ carbon bắt đầu từ sự phục hồi"
											src={e.image}
										/>
									</Box>
									<Box
										sx={{
											position: "absolute",
											top: 10,
											right: 10,
										}}
										onClick={() => setIsModalOpen(e.id)}
									>
										<AddIconWhiteBg
											width="23px"
											height="23px"
										/>
									</Box>
									<Box
										sx={{
											position: "absolute",
											top: "50%",
											transform: "translate( 0 , -50% )",
											left: 0,
											right: 0,
											textAlign: "center",
											color: "white",
											padding: "0px 40px",
										}}
									>
										<Box
											sx={{
												fontSize: "20px",
												fontWeight: 700,
											}}
										>
											{e.title}
										</Box>
									</Box>
								</Box>
							))}
						</Slider>
						<Box
							sx={{
								position: "absolute",
								top: "50%",
								left: 15,
								transform: "translate(0, -50%)",
							}}
						>
							<Box
								style={{
									margin: 0,
									padding: 0,
									border: 0,
									cursor: "pointer",
								}}
								onClick={() => slider?.current?.slickPrev()}
							>
								<ArrowPrevGray
									width="45"
									height="45"
								/>
							</Box>
						</Box>
						<Box
							sx={{
								position: "absolute",
								top: "50%",
								right: 15,
								transform: "translate(0, -50%)",
							}}
						>
							<Box
								style={{
									margin: 0,
									padding: 0,
									border: 0,
									cursor: "pointer",
								}}
								onClick={() => slider?.current?.slickNext()}
							>
								<ArrowNextGray
									width="45"
									height="45"
								/>
							</Box>
						</Box>
					</Box>
				</div>
				{normalAbouts?.map((e) => (
					<Box
						sx={{ p: "13px 24px 15px 24px", color: "#ffffff" }}
						key={e.id}
					>
						<Box sx={{ ...styles.centerFlex }}>
							<img
								style={{
									width: "100%",
									height: "241px",
									objectFit: "cover",
									borderRadius: "7px 7px 0px 0px",
								}}
								src={customerexperience}
								alt="chính sách ứng xử"
							/>
						</Box>
						<Box
							sx={{
								background: "#006241",
								borderRadius: "0px 0px 7px 7px",
								p: "25px",
							}}
						>
							<Box
								sx={{
									display: "flex",
									justifyContent: "space-between",
									fontSize: "28px",
								}}
							>
								<Box sx={{ pb: "10px" }}>{e.title}</Box>
								<Box onClick={() => setIsModalOpen(e.id)}>
									<AddIconWhiteBg
										width="23px"
										height="23px"
									/>
								</Box>
							</Box>
							<Box>T{e.subtitle}</Box>
						</Box>
					</Box>
				))}
				<Box
					sx={{
						p: "40px 24px",
						lineHeight: "15px",
						textAlign: "center",
					}}
				></Box>
				{/* Quan hệ nhà đầu tư */}
				{/* <Box sx={{ p: "0px 24px 30px" }}>
					<Box sx={{ ...styles.centerFlex }}>
						<img
							style={{
								width: "100%",
								height: "241px",
								objectFit: "cover",
							}}
							src={congtycuachungtoi5}
							alt="chính sách ứng xử"
						/>
					</Box>
					<Box sx={{ background: "rgba(0,0,0,0.1)", p: "25px" }}>
						<Box
							sx={{
								fontSize: "20px",
							}}
						>
							Quan hệ nhà đầu tư
						</Box>
						<Box sx={{ p: "20px 0px" }}>Bạn muốn trở thành nhà đầu tư của chúng tôi? Khám phá ngay các cơ hội đầu tư vào The Thanh Coffee, tìm hiểu về chiến lược phát triển, tiềm năng tăng trưởng, và lợi ích khi trở thành nhà đầu tư của chúng tôi. Cùng The Thanh Coffee xây dựng mối quan hệ bền vững, hỗ trợ lẫn nhau để phát triển và góp phần vào một tương lai bền vững.</Box>
						<a
							href="/lien-he-dau-tu"
							style={{
								...styles.centerFlex,
								width: "fit-content",
							}}
						>
							<Box sx={{ ...styles.centerFlex, gap: "5px" }}>
								<Box sx={{ color: "#006421" }}>Tìm hiểu thêm</Box>
								<Box
									sx={{
										...styles.centerFlex,
										"svg>path": { stroke: "#006421" },
									}}
								>
									<LeftArrowBlack
										width="6px"
										height="11px"
									/>
								</Box>
							</Box>
						</a>
					</Box>
				</Box> */}
				<Box sx={{ p: "0px 24px 30px" }}>
					<Box sx={{ ...styles.centerFlex }}>
						<img
							style={{
								width: "100%",
								height: "241px",
								objectFit: "cover",
							}}
							src={congtycuachungtoi6}
							alt="chính sách ứng xử"
						/>
					</Box>
					<Box sx={{ background: "rgba(0,0,0,0.1)", p: "25px" }}>
						<Box
							sx={{
								fontSize: "20px",
							}}
						>
							Nghề nghiệp
						</Box>
						<Box sx={{ p: "20px 0px" }}>Bạn muốn làm việc cùng chúng tôi? Khám phá các cơ hội nghề nghiệp tại The Thanh Coffee, tìm hiểu về đội ngũ nhân viên, văn hóa làm việc, và những giá trị mà chúng tôi theo đuổi. Hãy cùng lắng nghe những chia sẻ từ chính những nhân viên của chúng tôi để hiểu rõ hơn về môi trường làm việc đầy năng động và sáng tạo tại The Thanh Coffee.</Box>
						<a
							href="/ve-chung-toi"
							style={{
								...styles.centerFlex,
								width: "fit-content",
							}}
						>
							<Box sx={{ ...styles.centerFlex, gap: "5px" }}>
								<Box sx={{ color: "#006421" }}>Tìm hiểu thêm</Box>
								<Box
									sx={{
										...styles.centerFlex,
										"svg>path": { stroke: "#006421" },
									}}
								>
									<LeftArrowBlack
										width="6px"
										height="11px"
									/>
								</Box>
							</Box>
						</a>
					</Box>
				</Box>
				<Box sx={{ p: "0px 24px 30px" }}>
					<Box sx={{ ...styles.centerFlex }}>
						<img
							style={{
								width: "100%",
								height: "241px",
								objectFit: "cover",
							}}
							src={thamgiathethanh5}
							alt="chính sách ứng xử"
						/>
					</Box>
					<Box sx={{ background: "rgba(0,0,0,0.1)", p: "25px" }}>
						<Box
							sx={{
								fontSize: "20px",
							}}
						>
							Nhà cung cấp
						</Box>
						<Box sx={{ p: "20px 0px" }}>Bạn muốn trở thành đối tác cung cấp cho chúng tôi? Tìm hiểu thêm về tiêu chuẩn, quy trình hợp tác, lợi ích khi trở thành nhà cung cấp của The Thanh Coffee, khám phá cách chúng tôi xây dựng mối quan hệ bền vững và hỗ trợ lẫn nhau để phát triển.</Box>
						<a
							href="/nha-cung-cap"
							style={{
								...styles.centerFlex,
								width: "fit-content",
							}}
						>
							<Box sx={{ ...styles.centerFlex, gap: "5px" }}>
								<Box sx={{ color: "#006421" }}>Tìm hiểu thêm</Box>
								<Box
									sx={{
										...styles.centerFlex,
										"svg>path": { stroke: "#006421" },
									}}
								>
									<LeftArrowBlack
										width="6px"
										height="11px"
									/>
								</Box>
							</Box>
						</a>
					</Box>
				</Box>
				<Box sx={{ p: "0px 24px 60px" }}>
					<Box sx={{ ...styles.centerFlex }}>
						<img
							style={{
								width: "100%",
								height: "241px",
								objectFit: "cover",
							}}
							src={congtycuachungtoi5}
							alt="chính sách ứng xử"
						/>
					</Box>
					<Box sx={{ background: "rgba(0,0,0,0.1)", p: "25px" }}>
						<Box
							sx={{
								fontSize: "20px",
							}}
						>
							Cộng đồng
						</Box>
						<Box sx={{ p: "20px 0px" }}>Bạn muốn biết cách chúng tôi hỗ trợ và kết nối với cộng đồng? Tìm hiểu thêm về các dự án xã hội, hoạt động từ thiện, và sáng kiến bền vững của The Thanh Coffee.</Box>
						<a
							href="/ve-tuyen-dung"
							style={{
								...styles.centerFlex,
								width: "fit-content",
							}}
						>
							<Box sx={{ ...styles.centerFlex, gap: "5px" }}>
								<Box sx={{ color: "#006421" }}>Tìm hiểu thêm</Box>
								<Box
									sx={{
										...styles.centerFlex,
										"svg>path": { stroke: "#006421" },
									}}
								>
									<LeftArrowBlack
										width="6px"
										height="11px"
									/>
								</Box>
							</Box>
						</a>
					</Box>
				</Box>
				{/* <Box sx={{ p: "0px 24px 56px" }}>
          <Box
            sx={{
              fontSize: "32px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Câu hỏi thường gặp
          </Box>
          <Box sx={{ pt: "24px" }}>
            <CacCauHoi questions={questions} />
          </Box>
        </Box> */}
			</Layout.SecondaryBg>
			<Footer />
		</Box>
	);
};

export default Mobile;
