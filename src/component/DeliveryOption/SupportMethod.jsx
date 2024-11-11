import React from "react";
import { Box } from "@mui/material";
import images from "../img/tro-giup-mua-sam";
import { RESPONSIVE_DESKTOP } from "../../styles";

// Component chung cho các Box
const InfoBox = ({ title, description, link, linkText, imgSrc, imgAlt }) => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				alignItems: "center",
				background: "#F2F0EB",
				width: "100%",
			}}
		>
			<Box
				sx={{
					[RESPONSIVE_DESKTOP]: {
						p: "40px",
					},
					p: "20px",
				}}
			>
				<Box
					sx={{
						fontSize: "24px",
						fontWeight: "600",
						pb: "35px",
					}}
				>
					{title}
				</Box>
				<Box sx={{ fontSize: "20px" }}>{description} </Box>
				{link && (
					<a
						href={link}
						className="tw-text-blue-400 tw-underline tw-text-base visited:tw-text-blue-400"
					>
						{linkText}
					</a>
				)}
			</Box>
			<Box
				sx={{
					display: "flex",
					width: "100%",
					[RESPONSIVE_DESKTOP]: {
						height: "540px",
					},
				}}
			>
				<img
					height={"100%"}
					width="100%"
					src={imgSrc}
					style={{
						objectFit: "cover",
					}}
					alt={imgAlt}
				/>
			</Box>
		</Box>
	);
};

// Component cho "Hỗ trợ trực tiếp"
const SupportBox = () => {
	return (
		<InfoBox
			title="Hỗ trợ trực tiếp"
			description="Lên lịch buổi gặp trực tiếp miễn phí với Chuyên gia cà phê khi bạn mua các sản phẩm được chọn từ The ThanhCoffee. Từ những điều cơ bản đến những mẹo chuyên nghiệp."
			link="https://www.facebook.com/profile.php?id=61560917203069"
			linkText="Đặt lịch ngay"
			imgSrc={images.hoTroTrucTiep}
			imgAlt="Đặt hàng trực tiếp"
		/>
	);
};

// Component cho "GIAO HÀNG"
const DeliveryBox = () => {
	return (
		<InfoBox
			title="Tuỳ chọn khi giao hàng"
			description="Chúng tôi cung cấp các bao bì và sản phẩm tối ưu cho quá trình giao hàng và vận chuyển để mang tới sự tiện lợi tối đa cho khách hàng."
			imgSrc={images.tuyChonKhiGiaoHang}
			imgAlt="Đặt hàng trực tiếp"
		/>
	);
};

export { SupportBox, DeliveryBox };
