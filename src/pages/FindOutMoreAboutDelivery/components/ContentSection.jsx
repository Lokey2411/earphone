import { Box, keyframes, styled } from "@mui/material";
import { RESPONSIVE_MOBILE, RESPONSIVE_TABLET, styles } from "../../../styles";
import { useContext, useState } from "react";
import { MobileContext } from "../../../store/context/Mobile";
import { AiOutlineDown } from "react-icons/ai";

const flyIn = keyframes`
  from {
    height: 0;
	opacity: 0;
  }
  to {
    height: 1000px;
	opacity: 1;
  }`;
const flyOut = keyframes`
  from {
    height: 1000px;
	opacity: 1;
  }
  to {
    height: 0;
	opacity: 0;
  }
`;

const AnimatedBox = styled(Box)(({ theme, isOpenMobile }) => ({
	flex: 4,
	animation: `${isOpenMobile ? flyIn : flyOut} 6s ease-in-out`,
	...styles.heading[4],
	pt: "30px",
	px: 1,
	overflow: "hidden",
	// Không sử dụng display ở đây để tránh ảnh hưởng đến animation
	"& *": {
		fontSize: "16px!important",
	},
}));

const ContentBox = ({ contentHtml, isOpenMobile, setIsAnimating }) => (
	<AnimatedBox
		isOpenMobile={isOpenMobile} // Truyền trạng thái isOpenMobile vào component
		dangerouslySetInnerHTML={{ __html: contentHtml }}
		onAnimationEnd={() => !isOpenMobile && setIsAnimating(false)} // Ẩn sau khi animation kết thúc
	/>
);

const ContentSection = ({ title, contentHtml, id }) => {
	const { isMobile } = useContext(MobileContext);
	const [isOpenMobile, setIsOpenMobile] = useState(false);
	const [isAnimating, setIsAnimating] = useState(true); // Trạng thái để kiểm soát animation

	const handleToggle = () => {
		if (!isOpenMobile) {
			setIsAnimating(true); // Bắt đầu animation khi mở
		}
		setIsOpenMobile(!isOpenMobile); // Thay đổi trạng thái mở/đóng
	};

	return isMobile ? (
		<Box
			sx={{
				"& details .expand": {
					transition: "all 0.3s ease",
				},
				"& details[open] .expand": {
					transform: "rotate(180deg)",
					listStyle: "none",
					cursor: "pointer",
					transition: "all 0.3s ease",
				},
				width: "100%",
			}}
			onClick={handleToggle}
		>
			<Box
				sx={{
					...styles.heading[2],
					cursor: "pointer",
					display: "flex",
					justifyContent: "space-between",
					borderBottom: "solid black 1px",
					// marginBottom: "30px",
					width: "100%",
					padding: 1,
					py: "30px",
					alignItems: "center",
					userSelect: "none",
				}}
			>
				<h1 className="tw-font-bold">{title}</h1>
				<div
					className="expand"
					style={{
						transform: isOpenMobile ? "rotate(180deg)" : "",
						transition: "all 0.3s ease",
					}}
				>
					<AiOutlineDown />
				</div>
			</Box>

			{isAnimating && (
				<Box sx={{}}>
					<ContentBox
						contentHtml={contentHtml}
						isOpenMobile={isOpenMobile}
						setIsAnimating={setIsAnimating}
					/>
				</Box>
			)}
		</Box>
	) : (
		<Box
			id={id}
			sx={{
				borderTop: "solid black 1px",
				p: "40px 0px",
			}}
		>
			<Box
				sx={{
					display: "flex",
					gap: "60px",
					justifyContent: "space-between",
					alignItems: "flex-start",
				}}
			>
				<Box sx={{ ...styles.heading[3], fontSize: "24px", fontWeight: 600, flex: 1 }}> {title}</Box>
				<ContentBox
					contentHtml={contentHtml}
					isOpenMobile={isOpenMobile}
					setIsAnimating={setIsAnimating}
				/>
			</Box>
		</Box>
	);
};

export default ContentSection;
