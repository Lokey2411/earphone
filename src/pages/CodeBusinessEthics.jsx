import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import Logotop from "../component/layout/LogoTop";
import Navbardesktop from "../component/layout/NavBarDesktop";
import { RESPONSIVE_TABLET, styles } from "../styles";
import FooterDesktop from "../component/layout/FooterDesktop";
import { useTheme } from "@emotion/react";
import quytacdaoduckinhdoanh from "../component/img/quytacdaoduckinhdoanh.png";
import quytacdaoduckinhdoanh1 from "../component/img/quytacdaoduckinhdoanh1.png";
import quytacdaoduckinhdoanh2 from "../component/img/quytacdaoduckinhdoanh2.png";

const bannerContent = {
	title: "Chào mừng tới với quy tắc đạo đức kinh doanh The Thanh Coffee",
	content: "Tại The Thanh Coffee, chúng tôi đề cao việc tạo ra giá trị cho khách hàng và mang tới sự thay đổi để tốt hơn mỗi ngày. Chúng tôi cố gắng làm tất cả mọi điều có thể trong để đưa trách nhiệm xã hội vào sản phẩm và dịch vụ của mình, cùng nhau thúc đẩy đổi mới công nghệ và sức sống văn hoá. Chúng ta luôn nỗ lực để mong muốn cộng đồng gắn kết lại gần nhau hơn vì sự phát triển bền vững của xã hội",
};

const introductionRecruitmentPageContent = {
	title: "Giới thiệu trang tuyển dụng",
	subtitle: "Giới thiệu về cà phê The Thanh",
	content: "Niềm tin vào ly cà phê, niềm tin vào cộng sự và niềm tin vào việc tạo nên một cộng đồng mang tới niềm vui và niềm cảm hứng thông qua mỗi cốc cà phê tại mỗi đại phương.",
	image: quytacdaoduckinhdoanh1,
};

const valueAndRealityContent = {
	title: "Giá trị và thực tiễn",
	content: `
    <p>
      Với tôn chỉ hòa nhập và đa dạng, chúng tôi khuyến khích sự sáng tạo và đổi mới, mang đến những giải pháp mới mẻ và độc đáo. Chúng tôi tin vào sức mạnh của mỗi cá nhân và lực lượng lao động đa dạng, tạo nên một môi trường công bằng và thân thiện, nơi mọi người có thể phát triển và thăng tiến.
    </p>
    <p>
      Chúng tôi mong muốn cùng nhau đồng hành, hiện thực hóa những mục tiêu và giá trị chung, từ đó mang lại những đóng góp ý nghĩa và bền vững cho xã hội và môi trường. Hãy cùng The Thanh Coffee khám phá và trải nghiệm một không gian làm việc sáng tạo và đầy năng lượng, nơi mọi ý tưởng và nỗ lực đều được đánh giá cao và đem lại giá trị thực cho cả cộng đồng.
    </p>
  `,
	image: quytacdaoduckinhdoanh2,
};

const CodeBusinessEthics = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));
	return (
		<Box sx={{ textAlign: "justify" }}>
			{isMobile ? (
				<Box>
					<Logotop />
					<Navbardesktop />
					<Box sx={{ p: "150px 0 0" }}>
						{/* Sẽ có background-image ở đây, tạm thời để màu  */}
						<Box
							sx={{
								textAlign: "center",
								justifyContent: "center",
								justifyItems: "center",
								...styles.fontSize13,
								p: "20px",
								minHeight: "100vh",
								flexGrow: 1,
							}}
						>
							<Box sx={{ fontSize: "32px", pb: "40px", fontWeight: "bold" }}>{bannerContent.title}</Box>
							<Box sx={{ fontSize: "14px", lineHeight: "24px", pb: "40px" }}>{bannerContent.content}</Box>
							<Box
								sx={{
									display: "flex",
									justifyContent: "center",
								}}
							>
								<a
									href="/thong-diep-gui-gam"
									rel="noopener noreferrer"
								>
									<Box
										sx={{
											fontSize: "20px",
											fontWeight: "bold",
											border: "2px solid #06542D",
											color: "black",
											p: "16px 50px",
											textTransform: "uppercase",
											maxWidth: "100%",
											background: "#dad8d4",
										}}
									>
										Bắt đầu
									</Box>
								</a>
							</Box>
							<Box
								sx={{
									position: "relative",
									justifyContent: "flex-end",
									display: "flex",
								}}
							>
								<img
									src={quytacdaoduckinhdoanh}
									width={"100%"}
									alt="Giới thiệu trang tuyển dụng"
								/>
							</Box>
							<Box>
								<Box
									sx={{
										fontSize: "30px",
										fontWeight: "700",
										pb: "10px",
										textAlign: "left",
									}}
								>
									{introductionRecruitmentPageContent.title}
								</Box>
								<Box
									sx={{
										justifyContent: "center",
										justifyItems: "center",
										alignItems: "center",
									}}
								>
									<Box sx={{ fontSize: "20px", fontWeight: "700", pb: "10px" }}>{introductionRecruitmentPageContent.subtitle}</Box>
									<Box sx={{ fontSize: "14px", lineHeight: "24px", pb: "15px" }}>{introductionRecruitmentPageContent.content}</Box>
								</Box>
							</Box>
							<Box>
								<img
									style={{ objectFit: "cover" }}
									src={introductionRecruitmentPageContent.image}
									width={"100%"}
									height={"400px"}
									alt="Giới thiệu về trang tuyển dụng"
								/>
							</Box>
							<Box sx={{ pt: "20px" }}>
								<Box>
									<Box sx={{ fontSize: "30px", fontWeight: "700", pb: "10px" }}>{valueAndRealityContent.title}</Box>
									<Box
										sx={{ fontSize: "14px", lineHeight: "24px" }}
										dangerouslySetInnerHTML={{ __html: valueAndRealityContent.content }}
									></Box>
								</Box>
								<Box>
									<img
										src={valueAndRealityContent.image}
										width={"100%"}
										alt="giá trị và thực tiễn"
									/>
								</Box>
							</Box>
						</Box>
					</Box>
					<FooterDesktop />
				</Box>
			) : (
				<Box>
					<Logotop />
					<Navbardesktop />
					<Box sx={{ p: "145px 0px 0px" }}>
						{/* Sẽ có background-image ở đây, tạm thời để màu  */}
						<Box
							sx={{
								textAlign: "center",
								justifyContent: "center",
								justifyItems: "center",
								...styles.fontSize13,
								p: "140px 239px 0px 239px ",
								[RESPONSIVE_TABLET]: {
									px: "40px",
									pt: "80px",
								},
							}}
						>
							<Box
								sx={{
									fontSize: "60px",
									pb: "40px",
									fontWeight: "bold",
									[RESPONSIVE_TABLET]: {
										fontSize: "32px",
									},
								}}
							>
								{bannerContent.title}
							</Box>
							<Box sx={{ fontSize: "16px", lineHeight: "24px", pb: "40px" }}>{bannerContent.content}</Box>
						</Box>
						<Box
							sx={{
								textAlign: "center",
								justifyContent: "center",
								justifyItems: "center",
								...styles.fontSize13,
								display: "flex",
							}}
						>
							<a
								href="/thong-diep-gui-gam"
								rel="noopener noreferrer"
							>
								<Box
									sx={{
										fontSize: "20px",
										fontWeight: "bold",
										border: "2px solid #06542D",
										color: "black",
										p: "16px 100px",
										textTransform: "uppercase",
										position: "relative",
										zIndex: 2,
										background: "#dad8d4",
									}}
								>
									Bắt đầu
								</Box>
							</a>
						</Box>
						<Box
							sx={{
								justifyContent: "right",
								display: "flex",
								position: "relative",
								transform: "translate(0, -30%)",
								zIndex: 1,
							}}
						>
							<img
								src={quytacdaoduckinhdoanh}
								width={"553px"}
								alt=""
							/>
						</Box>
						<Box
							sx={{
								display: "flex",
								mt: "-100px",
								p: "0 140px",
								gap: "212px",
								...styles.fontSize13,
								pb: "96px",
								[RESPONSIVE_TABLET]: {
									p: "0 40px",
									gap: "40px",
									mb: "20px",
								},
							}}
						>
							<Box
								sx={{
									fontSize: "60px",
									[RESPONSIVE_TABLET]: {
										fontSize: "30px",
										lineHeight: "40px",
									},
									fontWeight: "700",
									flex: 1,
									lineHeight: "72px",
									textAlign: "left",
								}}
							>
								{introductionRecruitmentPageContent.title}
							</Box>
							<Box
								sx={{
									flex: 1,
									justifyContent: "center",
									justifyItems: "center",
									alignItems: "center",
								}}
							>
								<Box sx={{ fontSize: "24px", fontWeight: "700", pb: "20px" }}>{introductionRecruitmentPageContent.subtitle}</Box>
								<Box sx={{ fontSize: "16px", lineHeight: "24px" }}>{introductionRecruitmentPageContent.content}</Box>
							</Box>
						</Box>
						<Box sx={{ p: "0 140px", [RESPONSIVE_TABLET]: { p: "0 40px" } }}>
							<img
								style={{ objectFit: "cover" }}
								src={introductionRecruitmentPageContent.image}
								width={"100%"}
								height={"400px"}
								alt="Giới thiệu về trang tuyển dụng"
							/>
						</Box>
						<Box
							sx={{
								p: "192px 140px 140px 140px",
								display: "flex",
								...styles.fontSize13,
								[RESPONSIVE_TABLET]: {
									p: "80px 40px 40px 40px",
								},
							}}
						>
							<Box sx={{ flex: 1 }}>
								<Box sx={{ fontSize: "60px", fontWeight: "700", pb: "32px", textAlign: "left", [RESPONSIVE_TABLET]: { fontSize: "40px" } }}>{valueAndRealityContent.title}</Box>
								<Box
									sx={{ fontSize: "16px", lineHeight: "24px", display: "ruby", [RESPONSIVE_TABLET]: { fontSize: "14px" } }}
									dangerouslySetInnerHTML={{ __html: valueAndRealityContent.content }}
								></Box>
							</Box>
							<Box sx={{ width: "50%", mt: "-100px" }}>
								<img
									src={valueAndRealityContent.image}
									width={"100%"}
									alt="giá trị và thực tiễn"
								/>
							</Box>
						</Box>
					</Box>
					<FooterDesktop />
				</Box>
			)}
		</Box>
	);
};

export default CodeBusinessEthics;
