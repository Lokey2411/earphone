import React, { useLayoutEffect } from "react";
import { Box } from "@mui/material";
import ExitCircleIcon from "../svg/icon/ExitCircleIcon";
import { RESPONSIVE_MOBILE, RESPONSIVE_TABLET } from "../../styles";
import useWindowDimensions from "../../hooks/useDimension";

const MAX_HEIGHT_MOBILE = 300;
const Mobile = ({ isOpen, onClose, children, ...otherProps }) => {
	const { width: screenWidth } = useWindowDimensions();
	const scaleRatio = Math.min(1, screenWidth / MAX_HEIGHT_MOBILE);
	if (!isOpen) return null;
	return (
		<Box
			sx={{
				position: "fixed",
				top: "56px",
				left: "0",
				bottom: "0",
				right: "0",
				[RESPONSIVE_TABLET]: {
					left: "5%",
					right: "5%",
				},
				width: "100%",
				background: "rgba(0,0,0,0.3)", // Màu nền với độ mờ
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				zIndex: "1000",
			}}
		>
			<Box
				id="modal-content"
				sx={{
					width: "100%",
					maxWidth: "100%",
					maxHeight: "100%",
					height: "100%",
					overflow: "auto",
					background: "#ffffff",
					borderRadius: "20px",
					position: "relative",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
				}}
			>
				<Box>
					<Box
						sx={{
							background: "#ffffff",
							padding: "40px 0 0 0",
							display: "flex",
							justifyContent: "flex-end",
							position: "relative",
							[`@media (max-width: ${MAX_HEIGHT_MOBILE}px)`]: {
								padding: "20px 0 0 0",
							},
						}}
					>
						<Box
							sx={{
								position: "absolute", // Sử dụng sticky để giữ nút đóng cố định trong box
								top: "50%", // Đặt vị trí cố định so với box chứa nó
								right: "8px",
								transform: "translateY(-50%)",
								background: "#D9D9D9",
								zIndex: 1002,
								borderRadius: "50%",
								cursor: "pointer",
								[`@media (max-width: ${MAX_HEIGHT_MOBILE}px)`]: {
									top: "20px",
									right: "1px",
								},
							}}
							onClick={onClose}
						>
							<ExitCircleIcon />
						</Box>
					</Box>

					<Box
						sx={{
							"& *": {
								textAlign: "left!important",
							},
						}}
						{...otherProps}
					>
						{children}
					</Box>
				</Box>
				<div className="tw-flex tw-flex-col tw-items-center tw-gap-[1px] tw-px-2 tw-py-4 tw-bg-gray-200 tw-rounded-b-xl tw-mt-1 twself-end">
					<p className="tw-text-sm tw-select-none tw-font-Inter-Semibold">Bạn đang cần hỗ trợ</p>
					<a
						href="#"
						className="tw-text-sm tw-text-primary"
					>
						Liên hệ hỗ trợ the thanh coffee
					</a>
				</div>
			</Box>
		</Box>
	);
};

export default Mobile;
