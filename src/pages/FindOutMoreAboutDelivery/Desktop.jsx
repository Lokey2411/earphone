import { Box } from "@mui/material";
import NavBar from "../../component/layout/NavBar";
import Footer from "../../component/layout/Footer";
import { color, RESPONSIVE_MOBILE, RESPONSIVE_TABLET, styles } from "../../styles";
import Layout from "../../component/layout";
import ContentSection from "./components/ContentSection";
import { useContentItems } from "./../../content/findoutMoreAboutDelivery";
const navigateItems = [
	{
		title: "Tùy chọn giao hàng",
		href: "#tuy-chon-giao-hang",
	},
	{
		title: "Mua hàng",
		href: "#mua-hang",
	},
	{
		title: "Điều gì tiếp theo",
		href: "#dieu-gi-tiep-theo",
	},
	{
		title: "Thông báo văn bản",
		href: "#thong-bao-van-ban",
	},
	{
		title: "Thông tin ngày giao hàng",
		href: "#thong-tin-ngay-giao-hang",
	},
	{
		title: "Chữ ký khi giao hàng",
		href: "#chu-ky-khi-giao-hang",
	},
	{
		title: "Hạn chế vận chuyển",
		href: "#han-che-van-chuyen",
	},
	{
		title: "Vấn đề với đồ uống của bạn",
		href: "#van-de-voi-do-uong-cua-ban",
	},
];

const Desktop = () => {
	const contentItems = useContentItems();
	return (
		<Box sx={{ ...styles.fontSize13, fontSize: "24px", "div>p": { margin: 0 } }}>
			<NavBar />
			<Layout.MainBg>
				<Box sx={{ pt: "24px" }}></Box>
				<Box
					sx={{
						p: "60px 70px 40px",
						[RESPONSIVE_TABLET]: {
							pt: "30px",
						},
						[RESPONSIVE_MOBILE]: {
							px: "20px",
							borderBottom: "1px solid #000",
						},
					}}
				>
					<Box
						sx={{
							display: "flex",
							gap: "130px",
							[RESPONSIVE_MOBILE]: {
								flexDirection: "column",
								gap: "30px",
							},
						}}
					>
						<Box
							sx={{
								width: "65%",
								[RESPONSIVE_MOBILE]: {
									width: "100%",
								},
							}}
						>
							<Box
								sx={{
									...styles.heading[1.5],
									fontWeight: 500,
									pb: "20px",
									[RESPONSIVE_MOBILE]: {
										fontSize: "24px",
									},
								}}
							>
								VẬN CHUYỂN & NHẬN HÀNG
							</Box>
							<Box
								sx={{
									...styles.heading[4],
									[RESPONSIVE_MOBILE]: {
										fontSize: "16px",
									},
								}}
							>
								Bạn có thể mua các mặt hàng của mình trực tuyến và nhận tại The Thanh Coffee hoặc giao hàng trực tiếp đến tận nhà. Tại đây bạn sẽ tìm thấy mọi thứ bạn cần biết về giao hàng, nhận hàng và quản lý đơn hàng của mình.
							</Box>
						</Box>
						<Box
							sx={{
								...styles.fontColor.xanhNhat006241,
								width: "35%",
								[RESPONSIVE_MOBILE]: {
									display: "none",
								},
							}}
						>
							<Box
								sx={{
									...styles.heading[3],
									fontSize: "28px",
									fontWeight: "600",
									color: "black",
									pb: "20px",
								}}
							>
								Chọn một chủ đề:
							</Box>
							<Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
								{navigateItems.map((item) => (
									<Box
										key={item.title}
										sx={{
											color: color.blue,
											...styles.heading[4],
											"&:hover": { textDecoration: "underline" },
										}}
									>
										<a href={item.href}>{item.title}</a>
									</Box>
								))}
							</Box>
						</Box>
					</Box>
				</Box>
				<Box
					sx={{
						p: "0px 80px 40px",
						ul: { paddingLeft: "20px" },
						overflowWrap: "break-word",
						wordWrap: "break-word",
						a: { ...styles.fontColor.xanhNhat006241 },
						"a#gach-chan": { textDecoration: "underline" },
						lineHeight: "140%",
						[RESPONSIVE_MOBILE]: {
							px: "20px",
						},
					}}
				>
					{contentItems.map((item) => (
						<ContentSection {...item} />
					))}
				</Box>
			</Layout.MainBg>
			<Footer />
		</Box>
	);
};

export default Desktop;
