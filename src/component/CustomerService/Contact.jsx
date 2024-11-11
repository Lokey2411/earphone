import React from "react";
import { Box } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import CallIcon from "@mui/icons-material/Call";

const ContactButton = ({ href, bgColor, iconBgColor, icon, textLines }) => {
	return (
		<a href={href}>
			<Box
				sx={{
					background: bgColor,
					p: "12px",
					display: "flex",
					// justifyContent: "space-between",
					borderRadius: "10px",
					alignItems: "center",
					border: "2px solid #000",
				}}
			>
				<Box
					sx={{
						"svg>path": {
							fill: "black",
						},
						background: iconBgColor,
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						mr: "16px",
						borderRadius: "10px",
					}}
				>
					{icon}
				</Box>
				<Box
					sx={{
						fontSize: "14px",
						color: "#000",
					}}
				>
					{textLines.map((line, index) => (
						<Box key={index}>{line}</Box>
					))}
				</Box>
			</Box>
		</a>
	);
};

// Component cho nút nhắn tin
const ChatButton = () => {
	return (
		<ContactButton
			href="https://web.facebook.com/profile.php?id=61560917203069"
			bgColor="#ffffff"
			iconBgColor="#ffffff"
			icon={<ChatIcon color="black" />}
			textLines={["Nhắn tin trực tiếp qua", "Fanpage của The Thanh Coffee"]}
		/>
	);
};

// Component cho nút gọi điện
const CallButton = () => {
	return (
		<ContactButton
			href="tel:0911.830.666"
			bgColor="#ffffff"
			iconBgColor="#ffffff"
			icon={<CallIcon />}
			textLines={["Số hotline:", "(+84) 0911.830.666"]}
		/>
	);
};

export { ChatButton, CallButton };
