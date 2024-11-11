import { Box } from "@mui/material";
import React from "react";
import { RESPONSIVE_TABLET, styles } from "../../styles.js";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const navItems = [
	{ href: "/gia-tri-chung-toi-coi-trong", label: "Giá trị mà chúng tôi coi trọng" },
	{ href: "/cau-hoi-thuong-gap", label: "Câu hỏi thường gặp" },
	{ href: "/tuan-thu-phap-luat", label: "Tuân thủ pháp luật" },
	{ href: "/dieu-khoan-su-dung", label: "Điều khoản sử dụng" },
	{ href: "/dieu-kien-chinh-sach", label: "Điều khoản, điều kiện chính sách" },
];

const NavItemDesktop = ({ href, label, sx, isLast }) => (
	<Box
		sx={{
			...sx,
			borderRight: isLast ? "none" : "1px solid #000",
			px: "5px",
		}}
	>
		<a href={href}>{label}</a>
	</Box>
);

const FooterDesktop = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));
	return (
		<Box>
			{isMobile ? (
				<Box
					sx={{
						...styles.fontSize13,
						...styles.backgroundColor.xamdad8d4,
						color: "black",
						justifyContent: "center",
						alignItems: "center",
						textAlign: "center",
						p: "10px",
					}}
				>
					<Box sx={{ pb: "5px" }}>Copyright © 2024 THE THANH COFFEE. All rights reserved. </Box>
					<Box sx={{ pb: "5px" }}>
						<a href="/gia-tri-chung-toi-coi-trong">Giá trị mà chúng tôi coi trọng</a>
					</Box>
					<Box sx={{ pb: "5px" }}>
						<a href="/cau-hoi-thuong-gap">Câu hỏi thường gặp</a>
					</Box>
					<Box sx={{ pb: "5px" }}>
						<a href="/tuan-thu-phap-luat">Tuân thủ pháp luật</a>
					</Box>
					<Box sx={{ pb: "5px" }}>
						<a href="/dieu-khoan-su-dung">Điều khoản sử dụng</a>
					</Box>
					<Box sx={{ pb: "5px" }}>
						<a href="/dieu-kien-chinh-sach">Điều khoản, điều kiện chính sách</a>
					</Box>
				</Box>
			) : (
				<Box
					sx={{
						...styles.fontSize13,
						display: "flex",
						...styles.backgroundColor.xamdad8d4,
						color: "black",
						p: "15px 48px",
						justifyContent: "space-between",
						fontSize: "14px",
						top: 0,
						textAlign: "left",
						[RESPONSIVE_TABLET]: {
							fontSize: "10px",
							px: "24px",
						},
					}}
				>
					<Box sx={{ mr: "42px" }}>Copyright © 2024 THE THANH COFFEE. All rights reserved.</Box>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
						}}
					>
						{navItems.map((item, index, { length }) => (
							<NavItemDesktop
								key={index}
								{...item}
								isLast={index === length - 1}
							/>
						))}
					</Box>
				</Box>
			)}
		</Box>
	);
};

export default FooterDesktop;
