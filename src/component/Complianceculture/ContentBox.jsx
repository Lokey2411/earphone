import { Box, styled } from "@mui/material";
import { RESPONSIVE_MOBILE, RESPONSIVE_TABLET } from "../../styles";
import { useContext } from "react";
import { MobileContext } from "../../store/context/Mobile";

export const ContentBoxWrapper = styled(Box)(({ theme }) => ({
	display: "flex",
	padding: "140px 140px 96px",
	gap: "96px",
	[RESPONSIVE_TABLET]: {
		padding: "40px 20px",
		gap: "36px",
	},
	[RESPONSIVE_MOBILE]: {
		padding: 0,
		gap: "20px",
		marginBottom: "20px",
	},
	"& details summary": {
		listStyle: "none",
		userSelect: "none",
		cursor: "pointer",
	},
	"details summary::before": {
		content: "'+'",
	},
	"details[open] summary::before": {
		content: "'-'",
	},
}));

export const ContentImageBoxWrapper = styled(Box)(({ theme }) => ({ flex: 1 }));
export const ContentTitleBox = styled(Box)(({ theme }) => ({
	fontSize: "36px",
	[RESPONSIVE_MOBILE]: {
		fontSize: "28px",
	},
	fontWeight: "bold",
	lineHeight: "44px",
	color: "black",
	marginBottom: "20px",
}));

const ContentSubtitleBox = styled(Box)(({ theme }) => ({
	fontSize: "24px",
	[RESPONSIVE_MOBILE]: {
		fontSize: "18px",
	},
	fontWeight: "bold",
	lineHeight: "32px",
	marginBottom: "20px",
}));

const ContentBox = ({ children, title, subtitle, contentHtml, isReverse, imgSrc, imgProps, ...props }) => {
	const { isMobile } = useContext(MobileContext);
	const mobileDirection = isReverse ? "column-reverse" : "column";
	const desktopDirection = isReverse ? "row-reverse" : "row";
	console.log(contentHtml);
	return (
		<ContentBoxWrapper
			flexDirection={isMobile ? mobileDirection : desktopDirection}
			{...props}
		>
			<Box
				sx={{
					flex: 1,
				}}
			>
				{title && <ContentTitleBox>{title}</ContentTitleBox>}
				{subtitle && <ContentSubtitleBox>{subtitle}</ContentSubtitleBox>}
				{contentHtml && (
					<Box
						sx={{
							[RESPONSIVE_MOBILE]: {
								fontSize: "14px!important",
							},
						}}
						dangerouslySetInnerHTML={{
							__html: contentHtml,
						}}
					/>
				)}
				{children}
			</Box>
			<ContentImageBoxWrapper>
				<img
					src={imgSrc}
					alt={title}
					style={{
						width: "100%",
						objectFit: "cover",
					}}
					{...imgProps}
				/>
			</ContentImageBoxWrapper>
		</ContentBoxWrapper>
	);
};
export default ContentBox;
