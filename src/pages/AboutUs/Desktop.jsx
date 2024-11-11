import Layout from "../../component/layout";
import NavBar from "../../component/layout/NavBar";
import { Box } from "@mui/material";
import { RESPONSIVE_DESKTOP, RESPONSIVE_MOBILE, RESPONSIVE_TABLET, styles } from "../../styles";
import Footer from "../../component/layout/Footer";
import AddIconWhiteBg from "../../component/svg/icon/AddIconWhiteBg";
import React, { useContext, useMemo, useState } from "react";
import Slider from "react-slick";
import gioiThieu from "../../component/img/cong-ty-cua-chung-toi/gioi-thieu.jpg";
import ArrowPrevGray from "../../component/svg/icon/ArrowPrevGray";
import ArrowNextGray from "../../component/svg/icon/ArrowNextGray";
import PlayCircleIcon from "../../component/svg/icon/PlayCircleIcon";
import PauseCircleIcon from "../../component/svg/icon/PauseCircleIcon";
import { useAbouts } from "../../hooks/useAbouts";
import { MobileContext } from "../../store/context/Mobile";
import Modal from "../../component/Modal";
import { ourValueContents } from "../../content";
import Banner from "../../component/Banner";

const Desktop = () => {
	const slider = React.useRef(null);
	const [isModalOpen, setIsModalOpen] = useState(-1);
	const [abouts] = useAbouts() ?? [];
	const contentBoxWrapperClassName = "tw-flex tw-justify-between tw-w-full tw-p-2 tw-gap-2 sm:tw-hidden lg:tw-flex";

	const { isMobile, isTablet } = useContext(MobileContext);
	// split abouts
	const { firstAbout, sliderAbouts, normalAbouts, modalOpened } = useMemo(() => {
		const firstAbout = abouts ? abouts[0] : {};
		const sliderAbouts = abouts?.filter((item) => item.type === "slider");
		const normalAbouts = abouts?.filter((item, index) => !item.type && index !== 0);
		const modalOpened = abouts?.find((item) => item.id === isModalOpen)?.popups;
		return { firstAbout, sliderAbouts, normalAbouts, modalOpened };
	}, [abouts, isModalOpen]);
	const [isSliderPlaying, setISSLiderPlaying] = useState(false);
	// var deXuatSetting = {
	// 	slidesToShow: Math.min(sliderAbouts?.length, 3),
	// 	slidesToScroll: 1,
	// 	arrows: false,
	// 	infinite: true,
	// 	autoplay: isSliderPlaying,
	// 	autoplaySpeed: 2000,
	// 	centerMode: true,
	// 	// centerPadding: "320px",
	// };
	var deXuatSetting = {
		centerMode: true,
		centerPadding: isMobile || isTablet ? "50px" : "320px",
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		infinite: true,
		autoplay: isSliderPlaying,
		autoplaySpeed: 2000,
	};

	const introduceWrapperText = "tw-text-base tw-mb-5";
	return (
		<Box sx={{ ...styles.fontSize13 }}>
			<NavBar />
			<Layout.MainBg>
				<Box sx={{ mt: "56px", [RESPONSIVE_DESKTOP]: { mt: 3 }, [RESPONSIVE_TABLET]: { mt: 0 } }}></Box>
				<Modal
					isOpen={isModalOpen > 0}
					onClose={() => setIsModalOpen(-1)}
				>
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
								<Box sx={{ m: "130px 70px 50px", [RESPONSIVE_MOBILE]: { m: "20px" } }}>
									<Box
										sx={{
											...styles.heading[1],
											fontWeight: 600,
											pb: "40px",
										}}
									>
										{modalOpened?.title}
									</Box>
									<Box
										sx={{
											lineHeight: "150%",
											fontSize: "18px",
											...styles.heading[3],
										}}
										dangerouslySetInnerHTML={{
											__html: modalOpened?.details,
										}}
									></Box>
								</Box>
							</Box>
						</Box>
					</Box>
				</Modal>
				<Banner imageSrc={firstAbout?.image}>
					<Box
						sx={{
							position: "absolute",
							color: "white",
							ml: "102px",
							width: "500px",
							top: "50%",
							transform: "translateY(-50%)",
							[RESPONSIVE_MOBILE]: {
								px: "20px",
								m: 0,
								width: "100%",
							},
						}}
					>
						<Box
							sx={{
								fontSize: "36px",
								pb: "20px",
								[RESPONSIVE_MOBILE]: {
									fontSize: "24px",
								},
							}}
						>
							{firstAbout?.title}
						</Box>
						<Box
							sx={{
								fontSize: "24px",
								[RESPONSIVE_MOBILE]: {
									fontSize: "18px",
								},
							}}
						>
							{firstAbout?.subtitle}
						</Box>
					</Box>
				</Banner>
				{/* <Box
					sx={{
						p: "120px 150px",
						fontSize: "24px",
						textAlign: "center",
						backgroundColor: "#F2F0EB",
					}}
				>
					{firstAbout?.details}
				</Box> */}
				<Box
					sx={{
						p: "50px 80px 26px",
						...styles.heading[2],
						fontWeight: "600",
						[RESPONSIVE_MOBILE]: {
							p: "20px",
						},
					}}
				>
					Mục đích, Tuyên ngôn và Nhiệm vụ của chúng tôi
				</Box>
				<p className="md:tw-text-lg sm:tw-text-base lg:tw-text-2xl sm:tw-mx-5 md:tw-mx-[76px] tw-mb-[50px] tw-font-Inter">Chúng tôi không chỉ quan tâm đến nghề thủ công pha chế đồ uống mà còn quan tâm đến việc kể chuyện và kết nối để mang tới trải nghiệm cà phê đặc sản hằng ngày.</p>
				<div id="slider-next-news-desktop">
					<Box
						sx={{
							position: "relative",
							overflow: "hidden",
							".slick-track": {
								gap: "20px!important",
								// justifyContent: "center",
							},
							".slick-slide": {
								// width: "980px!important",
							},
						}}
					>
						<Slider
							ref={slider}
							{...deXuatSetting}
						>
							{sliderAbouts?.map((e, index) => (
								<Box
									sx={{
										position: "relative",
										// width: "980px",
										height: "516px",
									}}
								>
									<img
										width={"100%"}
										height={"100%"}
										alt="Loại bỏ carbon bắt đầu từ sự phục hồi"
										key={index}
										src={e.image}
										style={{
											objectFit: "cover",
											borderRadius: "19px",
											height: "100%",
										}}
									/>
									<Box
										sx={{
											position: "absolute",
											top: 0,
											right: 0,
											bottom: 0,
											left: 0,
											backgroundColor: "black",
											opacity: "0.4",
											borderRadius: "19px",
										}}
									></Box>
									<Box
										sx={{
											position: "absolute",
											bottom: 35,
											left: 35,
											right: -35,
										}}
									>
										<Box
											sx={{
												color: "white",
												fontSize: "35px",
												width: "35%",
												fontWeight: 600,
												[RESPONSIVE_MOBILE]: {
													fontSize: "20px",
													width: "100%",
												},
											}}
										>
											{e.title}
										</Box>
									</Box>
									<Box
										sx={{
											position: "absolute",
											top: 35,
											right: 35,
											zIndex: 5,
										}}
									>
										<Box onClick={() => setIsModalOpen(e.id)}>
											<AddIconWhiteBg
												width="50px"
												height="50px"
											/>
										</Box>
									</Box>
								</Box>
							))}
						</Slider>
						<Box
							sx={{
								...styles.centerFlex,
								justifyContent: "space-between",
								p: "40px 350px 0px",
								[RESPONSIVE_MOBILE]: {
									p: "40px 20px 0px",
								},
								[RESPONSIVE_TABLET]: {
									p: "40px 20px 0px",
								},
							}}
						>
							<Box>
								{!isSliderPlaying ? (
									<Box
										sx={{
											cursor: "pointer",
										}}
										onClick={() => {
											slider?.current?.slickPlay();
											setISSLiderPlaying(true);
										}}
									>
										<Box
											sx={{
												svg: {
													width: "45px",
													height: "45px",
												},
											}}
										>
											<PlayCircleIcon />
										</Box>
									</Box>
								) : (
									<Box
										sx={{
											cursor: "pointer",
										}}
										onClick={() => {
											slider?.current?.slickPause();
											setISSLiderPlaying(false);
										}}
									>
										<Box
											sx={{
												svg: {
													width: "45px",
													height: "45px",
												},
											}}
										>
											<PauseCircleIcon />
										</Box>
									</Box>
								)}
							</Box>
							<Box sx={{ ...styles.centerFlex, gap: "10px" }}>
								<Box
									sx={{
										cursor: "pointer",
									}}
									onClick={() => slider?.current?.slickPrev()}
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
									onClick={() => slider?.current?.slickNext()}
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
				{/* our value */}
				<Box
					sx={{
						padding: 8,
						py: "60px",
						gap: 2,
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
						fontFamily: "Inter",
						[RESPONSIVE_MOBILE]: {
							py: 7.5,
							px: 2.5,
						},
						"& h1": {
							...styles.heading[1],
						},
						"& h3": {
							...styles.heading[3],
						},
					}}
					id="our-value"
				>
					<h1 className="tw-text-4xl -tw-mb-1">Giá trị của chúng tôi</h1>
					<h3 className="tw-text-sm tw-font-Inter tw-my-[30px]">Giá trị gắn liền với quy tắc ứng xử của chúng tôi</h3>
					<p className="tw-text-xl tw-font-Inter tw-mb-[30px] lg:tw-text-center sm:tw-text-left">
						Các giá trị chúng tôi đặt lên hàng đầu trong hoạt động và xuyên suốt <br /> trong hành trình phát triển của chúng tôi.
					</p>
					{/* title box */}
					<div className="">
						<div className={contentBoxWrapperClassName}>
							{ourValueContents.map(({ title }) => (
								<div
									key={title}
									className="tw-text-2xl tw-font-Inter-Semibold tw-w-1/5 tw-p-2"
								>
									{title}
								</div>
							))}
						</div>
						<div className={contentBoxWrapperClassName}>
							{ourValueContents.map(({ subtitle }) => (
								<div
									key={subtitle}
									className="tw-font-bold tw-text-base tw-w-1/5 tw-p-2"
								>
									{subtitle}
								</div>
							))}
						</div>
						<div className={contentBoxWrapperClassName}>
							{ourValueContents.map(({ desc }) => (
								<div
									key={desc}
									className="tw-text-13 tw-w-1/5 tw-p-2"
								>
									{desc.map((item) => (
										<p>{item}</p>
									))}
								</div>
							))}
						</div>
					</div>
					{/* our value mobile */}
					<div className="tw-flex-col lg:tw-hidden sm:tw-flex tw-gap-4 lg:tw-m-0 md:-tw-mx-8 tw-mt-[34px]">
						{ourValueContents.map(({ title, subtitle, desc }, index) => (
							<div
								key={title}
								className="tw-w-fit tw-gap-2 tw-flex tw-flex-col md:tw-px-24 "
							>
								<h1 className="tw-text-4xl tw-font-Inter-Semibold tw-uppercase">{title}</h1>
								<h3
									className="tw-font-bold tw-text-xl tw-w-fit tw-mb-2"
									id={"our-value" + index + "subtitle"}
								>
									{subtitle}
								</h3>
								<div
									id={"our-value-" + index + "-desc"}
									className="tw-text-lg tw-max-w-full"
								>
									{desc.map((item) => (
										<>
											<p>{item}</p>
											<br />
										</>
									))}
								</div>
							</div>
						))}
					</div>
				</Box>
				{normalAbouts?.map((item) => (
					<Box
						sx={{
							p: "0px 145px 40px",
							color: "#ffffff",
							display: "flex",
							flexDirection: "reverse",
						}}
					>
						<Box sx={{ ...styles.centerFlex, width: "50%" }}>
							<img
								style={{
									width: "100%",
									height: "100%",
									objectFit: "cover",
								}}
								src={item.image}
								alt="chính sách ứng xử"
							/>
						</Box>
						<Box
							sx={{
								background: "#006241",
								width: "50%",
							}}
						>
							<Box sx={{ p: "25px 25px 25px 40px" }}>
								<Box
									sx={{
										...styles.centerFlex,

										width: "100%",
										justifyContent: "right",
									}}
									onClick={() => {
										console.log(item.id);
										setIsModalOpen(item.id);
									}}
								>
									<Box sx={{ cursor: "pointer" }}>
										<AddIconWhiteBg
											width="50px"
											height="50px"
										/>
									</Box>
								</Box>
								<Box sx={{}}>
									<Box sx={{ pr: "50px" }}>
										<Box
											sx={{
												fontSize: "40px",
												fontWeight: 600,
												pb: "15px",
											}}
										>
											{item.title}
										</Box>
										<Box
											sx={{
												fontSize: "40px",
												fontWeight: 600,
												pb: "15px",
											}}
										>
											{item.subtitle}
										</Box>
										<Box
											sx={{ fontSize: "24px" }}
											dangerouslySetInnerHTML={{
												__html: item.details,
											}}
										></Box>
									</Box>
								</Box>
							</Box>
						</Box>
					</Box>
				))}
				<Box
					sx={{
						"& h3": {
							...styles.heading[3],
						},
						"& h1": {
							...styles.heading[1],
						},
						"& p": {
							...styles.heading[4],
						},
						"& *": {
							lineHeight: "1.2!important",
						},
					}}
				>
					<div className="tw-flex tw-flex-col lg:tw-px-[64px] sm:tw-px-5">
						<h1 className="tw-text-4xl tw-font-Inter sm:tw-text-xl md:tw-text-2xl">Điểm khởi đầu của chúng tôi</h1>
						<h3 className="tw-py-5 tw-flex tw-flex-wrap tw-gap-4">
							<h3 className="tw-text-xl lg:tw-mb-[30px] sm:tw-mb-5">Trần Thanh Kiên là Nhà Sáng lập của The Thanh Coffee.</h3>
							<p className={introduceWrapperText}>Sinh ra trong một gia đình Công chức, với bố là Bác sĩ và mẹ là Giáo viên tiểu học tại Thanh Hoá, Việt Nam vào ngày 09/08/1997. Ông Thanh Kiên theo học trường trung học Trần Phú và trường Phổ thông Nông Cống 1 tại Thanh Hoá. Sau đó, ông tiếp tục học Công nghệ thông tin rồi chuyển qua ngành Ngôn ngữ Anh tại trường Đại học Văn Lang tại TP Hồ Chí Minh và nghỉ học ở năm 2 đại học.</p>
							<p className={introduceWrapperText}>Ông bắt đầu sự nghiệp trong nhiều ngành nghề khác nhau từ những năm cấp 3 bằng các cách kiếm tiền thông qua Internet và các nền tảng Mạng xã hội. Cơ duyên kinh doanh bắt đầu tới từ khi ông quyết định nghỉ học vào năm thứ 2 Đại học sau đó trải qua nhiều ngành nghề kinh doanh từ Bán lẻ, Làm đẹp cho tới Thương mại điện tử. Tháng 11/2019, ông sáng lập một chuỗi cửa hàng nước hoa Morra với quy mô cửa hàng lên con số 12 và tổng số nhân sự 150 người trong 3 năm cho tới đầu năm 2022 ông rời công ty này. Nhận thấy phần lớn nội lực của doanh nghiệp cần nhiều điều kiện để phát triển từ Kĩ năng, Kiến thức cho tới bài toán Nền tảng nên vào cuối năm 2022 ông thành lập Công ty TNHH SaintGiong hoạt động trong lĩnh vực tư vấn quản lý Doanh nghiệp nhằm Xây dựng và thiết lập nên những điều này.</p>
							<p className={introduceWrapperText}>
								Từ những kinh nghiệm tích luỹ trong 10 năm sự nghiệp và với vốn sống sau khi đi nhiều nước trên thế giới. Ông hiểu được giá trị khi tiêu chuẩn hoá trong các hoạt động Kinh doanh sẽ ảnh hưởng cực đoan tới sự phát triển sống còn của Doanh nghiệp. Với mỗi vùng miền tại khắp nơi trên trái đất họ đều tận dụng lợi thế địa phương và cùng giúp đỡ nhau trên tinh thần hợp tác để xây dựng nên một cộng đồng địa phương vững mạnh giúp đỡ cho các ngành nghề kinh doanh đa dạng, phong phú. Điều này tạo ra không gian sáng tạo và cho phép mọi người tạo nên những sản phẩm tuyệt vời và phát triển bền vững theo hàng trăm năm. Điều này giúp ông có niềm tin vào tiềm năng của sự kết nối giữa người với người sẽ mang tới những điều tuyệt vời cho Việt Nam. Từ nguồn cảm hứng này, ông cùng người anh em thân thiết quyết định mở ra cửa hàng Cà phê The Thanh để xây dựng trải nghiệm kết nối giữa mọi người thông qua mỗi tách cà phê đặc sản cho người Việt vào mọi thời điểm trong ngày.
							</p>
							<p className={introduceWrapperText}>The Thanh bắt đầu với ước mơ sẽ luôn cung cấp cà phê đặc sản(Specialty Coffee) như một nhu cầu thiết yếu hàng ngày để tất cả mọi người cùng thưởng thức. Tại Việt Nam, cà phê từ lâu đã là đồ uống truyền thống và thân thuộc tuy nhiên cà phê đặc sản (Specialty Coffee) đối với nhiều người thường được coi là một thứ xa xỉ với mức giá cao và thường dành cho những dịp đặc biệt.</p>
							<p className={introduceWrapperText}>The Thanh muốn thay đổi định kiến này để mang cà phê đặc sản kèm các tuỳ chỉnh nhằm đáp ứng thị hiếu dành riêng cho người Việt.</p>
							<p className={introduceWrapperText}>Mỗi ly cà phê The Thanh là một tách cà phê sạch, đồng nhất và được chế biến tốt. Với các thành phần nguyên liệu chất lượng tốt nhất, công nghệ pha chế cà phê cao cấp và mô hình kinh doanh đặt Khách hàng là trung tâm của dịch vụ. Chúng tôi đang phát triển khái niệm tiêu thụ cà phê để làm cho cà phê đặc sản trở nên giá cả phải chăng, hợp khẩu vị người Việt và thuận tiện trong quá trình mua hàng.</p>
							<p className={introduceWrapperText}>The Thanh Coffee muốn khách hàng trả tiền cho những gì họ uống, chứ không phải không gian cửa hàng, quảng cáo và đồ đạc sang trọng. Chúng tôi kiểm soát hoàn toàn chất lượng và giá cả của sản phẩm để đảm bảo mọi người đều có thể mua và an tâm dùng sản phẩm hằng ngày.</p>
						</h3>
						<img
							src={gioiThieu}
							alt=""
							loading="lazy"
							className="tw-w-full tw-h-full tw-mb-[50px] tw-rounded-lg"
						/>
					</div>
				</Box>

				{/* <Box
					sx={{
						p: "0px 160px 80px",
					}}
				>
					<Box
						sx={{
							textAlign: "center",
							fontSize: "48px",
							fontWeight: 700,
							pb: "40px",
						}}
					>
						Câu hỏi thường gặp Về tuyển dụng
					</Box>
					<CacCauHoi questions={questions} /> 
				</Box> */}
			</Layout.MainBg>
			<Footer />
		</Box>
	);
};

export default Desktop;
