import React from "react";
import { Box } from "@mui/material";
import { styles } from "../../styles";
import NavBar from "../../component/layout/NavBar";
import Layout from "../../component/layout";
import NewsArticleItems from "./NewsArticleItems";
import Footer from "../../component/layout/Footer";
import moment from "moment-timezone";
import { useData } from "../../hooks/useData";
import Loading from "../../component/Loading";
const Mobile = () => {
	// const newsflash = [
	//   {
	//     content: "The Thanh Coffee tăng thêm 100% lương cho nhân viên",
	//     date: "29/02/2024",
	//   },
	//   {
	//     content:
	//       "Khi bạn đang ngủ: Tại sao The Thanh Coffee lại chuyển sang màu đỏ chỉ sau một đêm nghỉ lễ",
	//     date: "29/02/2024",
	//   },
	//   {
	//     content:
	//       "Cái gì tiếp theo? The Thanh Coffee công bố chiến lược tăng trưởng dài hạn cho một tương lại không giới hạn",
	//     date: "29/02/2024",
	//   },
	//   {
	//     content:
	//       "The Thanh Coffee công bố chiến lược tái tạo ba lần với nhiều con đường để tăng trưởng dài hạn",
	//     date: "29/02/2024",
	//   },
	// ];
	// const news = [
	//   {
	//     id: 1,
	//     type: "THÔNG CÁO BÁO CHÍ",
	//     content: "The Thanh Coffee tăng thêm 100% lương cho nhân viên",
	//     date: "Ngày 05 tháng 03 năm 2024",
	//     image: tintuc1,
	//   },
	//   {
	//     id: 2,
	//     type: "TIN DOANH NGHIỆP",
	//     content: "Thành viên The Thanh Coffee được tha hồ tùy chỉnh món ",
	//     date: "Ngày 05 tháng 03 năm 2024",
	//     image: tintuc1,
	//   },
	//   {
	//     id: 3,
	//     type: "TÌM SẢN PHẢM",
	//     content: "Ra mắt đồ uống mới “FRENCH VANILA MILLE-FEUILE CATMILK”",
	//     date: "Ngày 05 tháng 03 năm 2024",
	//     image: tintuc1,
	//   },
	// ];
	const [newsflash] = useData("news/fast_news");
	const [news] = useData("news");
	if (!news) return <Loading />;
	return (
		<Box sx={{ ...styles.fontSize13, fontSize: "14px" }}>
			<NavBar />
			<Layout.MainBg>
				<Box
					sx={{
						height: "42px",
						...styles.backgroundColor.mauTra,
						...styles.centerFlex,
						...styles.pad20,
						fontWeight: 600,
						gap: "10px",
						fontSize: "16px",
						lineHeight: "150%",
					}}
				>
					<Box>Tin tức</Box>
				</Box>
				<Box sx={{ p: "32px 24px", ...styles.backgroundColor.xamF5F5F7 }}>
					<Box sx={{ fontWeight: 700, fontSize: "16px", pb: "20px" }}>Câu chuyện của chúng tôi</Box>
					{news.map((items) => (
						<NewsArticleItems
							key={items.id}
							item={items}
						/>
					))}
				</Box>
				<Box sx={{ p: "32px 24px 16px" }}>
					<Box sx={{ pb: "54px", fontWeight: 700, fontSize: "16px" }}>Tin mới nhất</Box>
					{news
						?.sort((a, b) => (moment(a.time).isBefore(b.time) ? 1 : -1))
						.map((e, index) => (
							<Box
								sx={{
									borderBottom: "solid #666666 0.2px",
									mb: "16px",
								}}
							>
								<Box key={index}>
									<Box
										sx={{
											lineHeight: "150%",
											fontSize: "16px",
											pb: "2px",
										}}
									>
										{e.title}
									</Box>
									<Box
										sx={{
											...styles.fontColor.xam666666,
											lineHeight: "150%",
											fontSize: "14px",
											pb: "18px",
										}}
									>
										{moment(e.time).format("LL")}
									</Box>
								</Box>
							</Box>
						))}
				</Box>
				<Box sx={{ ...styles.pad20 }}>
					<Box
						sx={{
							...styles.backgroundColor.xamE6E6E6,
							p: "48px 0px 36px",
							textAlign: "center",
						}}
					>
						<Box
							sx={{
								...styles.centerFlex,
								flexDirection: "column",
								...styles.pad20,
							}}
						>
							<Box
								sx={{
									fontSize: "16px",
									fontWeight: 700,
									pb: "28px",
								}}
							>
								Con người địa phương
							</Box>
							<Box sx={{ fontSize: "16px" }}>The Thanh Coffee vinh danh và kết nối cộng đồng địa phương qua mỗi ly cà phê. Chúng tôi tôn trọng và đón nhận những câu chuyện, kỷ niệm và giá trị đích thực của cộng đồng. Mỗi ly cà phê tại The Thanh Coffee mang theo hương vị đặc biệt và một phần của những nụ cười, những cuộc hẹn và những lời chia sẻ, góp phần tạo nên một không gian thân thiện và đáng nhớ cho tất cả.</Box>
							<Box
								sx={{
									...styles.backgroundColor.xanhlacay06542D,
									height: "1px",
									width: "calc(100% - 212px)",
									m: "34px 0px 30px",
								}}
							></Box>
						</Box>
						<Box
							sx={{
								...styles.centerFlex,
								flexDirection: "column",
								...styles.pad20,
							}}
						>
							<Box
								sx={{
									fontSize: "16px",
									fontWeight: 700,
									pb: "28px",
								}}
							>
								Môi trường
							</Box>
							<Box sx={{ fontSize: "16px" }}>Chúng tôi tự hào về các sản phẩm và dịch vụ mang tính bền vững mà chúng tôi cung cấp. Từ việc sử dụng nguyên liệu hữu cơ đến việc giảm thiểu lượng chất thải, chúng tôi luôn nỗ lực để ngày càng hoàn thiện quy trình sản xuất và kinh doanh của mình. Sự hoàn thiện không chỉ đến từ chất lượng sản phẩm mà còn từ sự đóng góp tích cực của chúng tôi vào việc bảo vệ môi trường và xây dựng một cộng đồng bền vững hơn.</Box>
							<Box
								sx={{
									...styles.backgroundColor.xanhlacay06542D,
									height: "1px",
									width: "calc(100% - 212px)",
									m: "34px 0px 30px",
								}}
							></Box>
						</Box>
						<Box
							sx={{
								...styles.centerFlex,
								flexDirection: "column",
								...styles.pad20,
							}}
						>
							<Box
								sx={{
									fontSize: "16px",
									fontWeight: 700,
									pb: "28px",
								}}
							>
								Cà phê & Thủ công
							</Box>
							<Box sx={{ fontSize: "16px" }}>Đây là thành quả của quá trình nỗ lực đáng kinh ngạc đằng sau mỗi ly cà phê, là triết lý trong công việc của chúng tôi, từ việc chăm sóc cây cà phê, rang xay hạt cho đến pha chế đồ uống, mọi quy trình đều được thực hiện một cách tỉ mỉ và tinh xảo. Thông qua những ly cà phê, chúng tôi hiểu giá trị của việc pha chế thủ công và chúng tôi cũng muốn bạn hiểu được nỗ lực mang tới giá trị trọn vẹn trong từng sản phẩm và dịch vụ của The Thanh.</Box>
						</Box>
					</Box>
					<Box
						sx={{
							// ...styles.backgroundColor.xanhlacay06542D,
							height: "1px",
							width: "100%",
							mt: "24px",
						}}
					></Box>
				</Box>
				{/* <Box sx={{ p: "24px 24px 48px" }}>
					<Box
						sx={{
							textAlign: "center",
							fontSize: "18px",
							fontWeight: 700,
							pb: "30px",
						}}
					>
						HÃY ĐỂ CÓ SỰ THAY ĐỔI
					</Box>
					<Box sx={{ p: "50px 20px", ...styles.backgroundColor.xamE6E6E6 }}>
						<Box sx={{ fontSize: "32px", fontWeight: 700 }}>Giữ liên lạc</Box>
						<Box sx={{ fontSize: "16px", p: "24px 0px" }}>Thay đổi sự nghiệp của bạn và thay đổi thế giới</Box>
						<Box sx={{ ...styles.centerFlex }}>
							<Box
								sx={{
									p: "16px 55px",
									backgroundColor: "black",
									borderRadius: "22px",
									...styles.fontColor.mauTrang,
								}}
							>
								THEO DÕI
							</Box>
						</Box>
					</Box>
					<Box
						sx={{
							p: "50px 20px",
							...styles.backgroundColor.xamE6E6E6,
							mt: "18px",
						}}
					>
						<Box sx={{ fontSize: "32px", fontWeight: 700 }}>Trung tâm tin tức</Box>
						<Box sx={{ fontSize: "16px", p: "24px 0px" }}>Cập nhật thông tin sản phẩm và dịch vụ mới nhất</Box>
						<Box sx={{ ...styles.centerFlex }}>
							<Box
								sx={{
									p: "16px 55px",
									backgroundColor: "black",
									borderRadius: "22px",
									...styles.fontColor.mauTrang,
								}}
							>
								XEM THÊM
							</Box>
						</Box>
					</Box>
				</Box> */}
			</Layout.MainBg>
			<Footer />
		</Box>
	);
};

export default Mobile;
