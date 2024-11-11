import { Box, Dialog, useMediaQuery } from "@mui/material";
import Logotop from "../component/layout/LogoTop";
import Navbardesktop from "../component/layout/NavBarDesktop";
import FooterDesktop from "../component/layout/FooterDesktop";
import { RESPONSIVE_MOBILE, RESPONSIVE_TABLET, styles } from "../styles";
import { useMemo, useState } from "react";
import { useTheme } from "@emotion/react";
import vanhoatuanthu1 from "../component/img/vanhoatuanthu1.jpg";
import ContentBox, { ContentBoxWrapper, ContentImageBoxWrapper, ContentTitleBox } from "../component/Complianceculture/ContentBox";
import { useLiemsContent } from "../content";
import Loading from "../component/Loading";

const Complianceculture = () => {
	const [expandLearnMore, setExpandLeanrnMore] = useState(0);
	const [expandExample, setExpandExample] = useState(0);
	const [questions, setQuestions] = useState(false);
	const { data: contentData } = useLiemsContent();
	const middleIndex = Math.max(Math.floor(contentData?.length / 2), 1);
	const middleContent = useMemo(() => {
		return contentData[middleIndex] ?? {};
	}, [contentData, middleIndex]);
	const topContent = useMemo(() => {
		console.log(contentData);
		return contentData.filter((_, index) => index < middleIndex);
	}, [contentData, middleIndex]);
	const botContent = useMemo(() => {
		return contentData.filter((_, index) => index > middleIndex);
	});

	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));
	if (!contentData) return <Loading />;
	return (
		<Box sx={{ ...styles.fontSize13, textAlign: "justify" }}>
			<Box>
				<Logotop />
				<Navbardesktop />
				<Box
					sx={{
						pt: "145px",
						[RESPONSIVE_MOBILE]: {
							padding: "20px",
							pt: "150px",
						},
					}}
				>
					<ContentBoxWrapper
						flexDirection={isMobile ? "column" : "row"}
						bgcolor={isMobile ? "transparent" : "#dad8d4"}
					>
						<ContentImageBoxWrapper
							sx={{
								flex: 1,
							}}
						>
							<img
								src="https://working.vn/vnt_upload/news/hinh_ky_nang/H32-min.gif"
								alt="Xung đột lợi ích cá nhân"
								style={{
									width: "100%",
									objectFit: "cover",
								}}
							/>
						</ContentImageBoxWrapper>
						<Box sx={{ flex: 1, margin: "auto" }}>
							<ContentTitleBox>Xung đột lợi ích cá nhân</ContentTitleBox>
							<Box
								sx={{
									fontSize: "16px",
									lineHeight: "24px",
									color: "#353535",
								}}
							>
								Chúng tôi đảm bảo các mối quan hệ và lợi ích cá nhân của chúng tôi không tạo ra xung đột cho The Thanh Coffee.
							</Box>
						</Box>
					</ContentBoxWrapper>
					{topContent.map((item, index) => {
						return (
							<ContentBox
								isReverse={index % 2}
								{...item}
								key={index}
							/>
						);
					})}
					<Box
						sx={{
							textAlign: "center",
							p: "192px 140px 96px 140px",
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
							[RESPONSIVE_TABLET]: {
								p: "96px 40px",
							},
							[RESPONSIVE_MOBILE]: {
								p: 0,
							},
						}}
					>
						<Box
							sx={{
								...styles.heading[1.5],
								fontWeight: "600",
								color: "black",
								lineHeight: "44px",
								p: "0 116px 20px 116px",
								[RESPONSIVE_MOBILE]: {
									p: "0",
									fontSize: "28px",
								},
							}}
						>
							{middleContent.title}
						</Box>
						<Box
							sx={{
								[RESPONSIVE_MOBILE]: {
									p: "0",
									"& p": {
										padding: "0!important",
									},
								},
							}}
							dangerouslySetInnerHTML={{
								__html: middleContent.contentHtml,
							}}
						/>
					</Box>
					{botContent.map((item, index) => {
						return (
							<ContentBox
								isReverse={index % 2}
								{...item}
								key={index}
							/>
						);
					})}
				</Box>
				<FooterDesktop />
			</Box>
		</Box>
	);
};
export default Complianceculture;
