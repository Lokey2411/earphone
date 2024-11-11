import React, { useContext, useState } from "react";
import { appKeyFrames, styles } from "../../styles.js";
import { Box, Drawer, IconButton, List, ListItemButton, ListItemText } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import { MobileContext } from "../../store/context/Mobile.jsx";

const Navbardesktop = () => {
	const theme = useTheme();
	const { isDesktop } = useContext(MobileContext);
	const [drawerOpen, setDrawerOpen] = useState(false);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	const handleDrawerToggle = () => {
		setDrawerOpen(!drawerOpen);
	};

	const menuItems = [
		{ text: "Thông điệp gửi gắm", href: "/thong-diep-gui-gam" },
		{ text: "Nhiệm vụ giá trị", href: "/nhiem-vu-va-gia-tri" },
		{ text: "Môi trường làm việc", href: "/moi-truong-lam-viec" },
		{ text: "Văn hóa tuân thủ", href: "/van-hoa-tuan-thu" },
		{ text: "Trách nhiệm", href: "/trach-nhiem" },
		{ text: "Tuyển dụng", href: "/tham-gia-the-thanh" },
		{ text: "Hỗ trợ", href: "/ho-tro" },
		{ text: "Lợi ích & đặc quyền", href: "/loi-ich-va-dac-quyen" },
	];

	const drawer = (
		<Box
			role="presentation"
			onClick={handleDrawerToggle}
			onKeyDown={handleDrawerToggle}
		>
			<List>
				{menuItems.map((item, index) => (
					<ListItemButton
						component="a"
						href={item.href}
						key={item.text}
						sx={{
							animation: `${appKeyFrames.slideIn} ${index * 0.1}s ease-in-out`,
							"&:hover": {
								color: "#dad8d4",
								textDecoration: "none",
							},
						}}
					>
						<ListItemText primary={item.text} />
					</ListItemButton>
				))}
			</List>
		</Box>
	);

	return (
		<Box>
			{!isDesktop ? (
				<Box
					// mobile navbar
					sx={{
						...styles.fontSize13,
						top: 0,
						right: 0,
						left: 0,
						position: "fixed",
						backgroundColor: "white",
						zIndex: 10,
						width: "100%",
						height: "95px",
						display: "flex",
						alignItems: "center",
						mt: "50px",
						justifyContent: "space-between",
						borderBottom: "1px solid #bebebe",
						boxSizing: "border-box",
					}}
				>
					<a
						href="/gia-tri-va-van-hoa"
						rel="Trang chủ"
					>
						<Box
							sx={{
								p: "auto",
								boxSizing: "border-box",
								textAlign: "center",
								px: 2,
							}}
						>
							<Box>THE</Box>
							<Box sx={{ fontWeight: "bold", fontSize: "20px" }}>THANH COFFEE</Box>
							<Box>CA PHE TOT & TRA NGON</Box>
						</Box>
					</a>
					<IconButton
						edge="start"
						color="inherit"
						aria-label="menu"
						onClick={handleDrawerToggle}
					>
						<MenuIcon />
					</IconButton>
					<Drawer
						anchor="right"
						open={drawerOpen}
						onClose={handleDrawerToggle}
					>
						{drawer}
					</Drawer>
				</Box>
			) : (
				<Box
					sx={{
						...styles.fontSize13,
						top: 0,
						right: 0,
						left: 0,
						position: "fixed",
						backgroundColor: "white",
						fontFamily: "Inter",
						zIndex: 10,
						width: "100%",
						// height: "95px",
						display: "flex",
						alignItems: "center",
						mt: "50px",
						justifyContent: "space-around",
						borderBottom: "1px solid #bebebe",
					}}
				>
					<a
						href="/gia-tri-va-van-hoa"
						rel="Trang chủ"
					>
						<Box
							sx={{
								p: "auto",
								boxSizing: "border-box",
								textAlign: "center",
							}}
						>
							<Box>THE</Box>
							<Box sx={{ fontWeight: "bold", fontSize: "20px" }}>THANH COFFEE</Box>
							<Box>CA PHE TOT & TRA NGON</Box>
						</Box>
					</a>
					<Box
						id="navbar-desktop"
						sx={{
							display: "flex",
							fontSize: "14px",
							boxSizing: "border-box",
							gap: "16px",
							textAlign: "left",
							"@media (max-width: 1115px)": {
								gap: "10px",
								fontSize: "12px",
							},
						}}
					>
						<a href="/thong-diep-gui-gam">
							<Box sx={{}}>Thông điệp gửi gắm</Box>
						</a>
						<a href="/nhiem-vu-va-gia-tri">
							<Box sx={{}}>Nhiệm vụ giá trị</Box>
						</a>
						<a href="/moi-truong-lam-viec">
							<Box sx={{}}>Môi trường làm việc</Box>
						</a>
						<a href="/van-hoa-tuan-thu">
							<Box sx={{}}>Văn hóa tuân thủ</Box>
						</a>
						<a href="/trach-nhiem">
							<Box sx={{}}>Trách nhiệm</Box>
						</a>
						<a href="/tham-gia-the-thanh">
							<Box sx={{}}>Tuyển dụng</Box>
						</a>
						<a href="/ho-tro">
							<Box sx={{}}>Hỗ trợ</Box>
						</a>
						<div style={{ position: "relative" }}>
							<Box
								onClick={toggleDropdown}
								sx={{
									display: "flex",
									alignItems: "center",
									cursor: "pointer",
								}}
							>
								<Box sx={{ pr: "6.5px" }}>Lợi ích & Đặc quyền</Box>
								<svg
									width="12"
									height="6"
									viewBox="0 0 12 6"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M1.5 0.75L6 5.25L10.5 0.75"
										stroke="#101828"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</Box>
							{isDropdownOpen && (
								<Box
									sx={{
										position: "absolute",
										top: "150%",
										right: 0,
										backgroundColor: "white",
										boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
										zIndex: 20,
										width: "max-content",
										border: "1px solid #D7D7D7",
										borderRadius: "8px",
									}}
								>
									<a href="/loi-ich-va-dac-quyen">
										<Box sx={{ p: "8px 16px", borderBottom: "2px solid #D7D7D7" }}>Lợi ích và đặc quyền</Box>
									</a>
									<a href="/loi-ich-va-dac-quyen#quyen-loi-va-dang-ky">
										<Box sx={{ p: "8px 16px" }}>Điều kiện Quyền lợi và Đăng ký</Box>
									</a>
									<a href="/loi-ich-va-dac-quyen#suc-khoe-va-cuoc-song">
										<Box sx={{ p: "8px 16px" }}>Lợi ích sức khỏe & cuộc sống</Box>
									</a>
									<a href="/loi-ich-va-dac-quyen#dac-quyen">
										<Box sx={{ p: "8px 16px" }}>Đặc quyền dành cho cộng sự</Box>
									</a>
									<a href="/loi-ich-va-dac-quyen#qua-tang">
										<Box sx={{ p: "8px 16px" }}>Giảm giá vật phẩm và Quà tặng</Box>
									</a>
								</Box>
							)}
						</div>
					</Box>
				</Box>
			)}
		</Box>
	);
};

export default Navbardesktop;
