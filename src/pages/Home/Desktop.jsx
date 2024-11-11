import React, { useMemo } from "react";
import { Box } from "@mui/material";
import NavBar from "../../component/layout/NavBar";
import Layout from "../../component/layout";
import CacCauHoi from "../../component/CacCauHoi";
import Footer from "../../component/layout/Footer";
import { RESPONSIVE_DESKTOP, RESPONSIVE_MOBILE, RESPONSIVE_TABLET, styles } from "../../styles";
import { useAbouts } from "../../hooks/useAbouts";
import { useQuestions } from "../../hooks/useQuestions";
import Banner from "../../component/Banner";
import Loading from "../../component/Loading";
const Desktop = () => {
	// const [informations] = useData("basic-information/0");
	// console.time("useData");
	const [about] = useAbouts();
	const [questions] = useQuestions();
	const firstAbout = useMemo(() => {
		return about ? about[0] : {};
	}, [about]);
	if (!about) return <Loading />;
	return (
		<Box>
			{/* <SEO
				title={informations?.name}
				description={informations?.introduction}
				keywords={informations?.keyword}
				imageUrl={informations?.image}
				url={informations?.url}
				type="article"
				siteName="The Thanh Coffee"
				locale="vi_VN"
			/> */}
			<NavBar />
			<Layout.SecondaryBg>
				<Box
					sx={{
						pt: "32px",
						[RESPONSIVE_DESKTOP]: { pt: "24px" },
					}}
				>
					<Banner imageSrc={firstAbout.image}>
						<Box
							sx={{
								position: "absolute",
								zIndex: 3,
								top: "50%",
								transform: "translate(0 , -50%)",
								left: 0,
								right: 0,
							}}
						>
							<Box sx={{}}>
								<Box
									sx={{
										color: "white",
										textAlign: "center",
										fontSize: "32px",
										fontWeight: 600,
										p: "0px 200px 16px",
										[RESPONSIVE_MOBILE]: {
											fontSize: "14px",
											p: "0px 20px 16px",
										},
									}}
								>
									{firstAbout.title}
									<br />
									<Box
										sx={{
											pt: "16px",
											fontWeight: 400,
											fontSize: "20px",
											[RESPONSIVE_MOBILE]: {
												fontSize: "16px",
											},
										}}
									>
										{firstAbout.subtitle}
									</Box>
								</Box>
								<Box dangerouslySetInnerHTML={{ __html: firstAbout.details }}></Box>
							</Box>
						</Box>
					</Banner>
				</Box>
				<Box
					sx={{
						height: "5px",
						width: "100%",
						...styles.backgroundColor.mauTra,
					}}
				></Box>
				<Box sx={{ [RESPONSIVE_MOBILE]: { background: "white" } }}>
					<div className="lg:tw-pt-16 md:tw-pt-3 sm:tw-pl-0 sm:tw-pt-3 tw-text-center tw-bg-[rgba(0,0,0,0.1)] lg:tw-bg-transparent">
						<h1 className="lg:tw-text-50 tw-font-bold sm:tw-text-32 ">Giới thiệu về chúng tôi</h1>
						<h3 className="lg:tw-text-18 tw-mt-6 sm:tw-text-18">Trải nghiệm Cà phê tốt & Trà ngon cùng chúng tôi</h3>
					</div>
				</Box>
				{about?.map(
					(info, index) =>
						index > 0 && (
							<Box sx={{ ...styles.backgroundColor.mauTra, [RESPONSIVE_MOBILE]: { background: "white" } }}>
								<Box
									sx={{
										backgroundColor: "rgba(0, 0, 0, 0.1)",
										m: "0px 0px 60px",
										flexDirection: "column",
										[RESPONSIVE_DESKTOP]: {
											m: "56px 80px",
											...styles.centerFlex,
											// height: "fit-content",
											justifyContent: "space-between",
											flexDirection: "row",
										},
									}}
								>
									<Box
										sx={{
											// width: "calc(100% - 630px)",
											flex: 3,
											p: "30px 50px",
											[RESPONSIVE_MOBILE]: {
												width: "100%",
												p: "40px 20px",
											},
											[RESPONSIVE_TABLET]: {
												width: "100%",
											},
										}}
									>
										<Box
											sx={{
												...styles.centerFlex,
												flexDirection: "column",
												justifyContent: "center",
												height: "100%",
												textAlign: "center",
											}}
										>
											<Box>
												<Box
													sx={{
														fontSize: "50px",
														fontWeight: "bold",
														textAlign: "center",
														lineHeight: "1.3",
														[RESPONSIVE_DESKTOP]: {
															// textAlign: "left",
														},
														[RESPONSIVE_MOBILE]: {
															fontSize: "30px",
														},
													}}
												>
													{info.title}
												</Box>
												<Box
													sx={{
														fontSize: "18px",
														pt: "20px",
													}}
												>
													{info.subtitle}
												</Box>
											</Box>
										</Box>
									</Box>
									<Box
										sx={{
											...styles.centerFlex,
											// height: "580px",
											// minHeight: "580px",
											flex: 2,
											width: "100%",
											// maxHeight: "100%",
											px: "20px",
											[RESPONSIVE_DESKTOP]: {
												px: "0",
											},
										}}
									>
										<img
											src={info.image}
											alt=""
											width={"100%"}
											style={{ objectFit: "cover", height: "600px" }}
										/>
									</Box>
								</Box>
								<Box
									sx={{
										height: "6px",
										width: "100%",
										backgroundColor: "#625C5E",
									}}
								></Box>
							</Box>
						)
				)}
				<Box
					sx={{
						p: "60px 80px",
						[RESPONSIVE_MOBILE]: { p: "40px 20px" },
						[RESPONSIVE_TABLET]: {
							px: "20px",
							pb: "60px",
						},
					}}
				>
					<Box
						sx={{
							fontSize: "50px",
							fontWeight: "bold",
							textAlign: "center",
							[RESPONSIVE_MOBILE]: {
								fontSize: "32px",
							},
						}}
					>
						Câu hỏi thường gặp
					</Box>
					<Box
						sx={{
							py: "24px",
							[RESPONSIVE_DESKTOP]: {},
						}}
					>
						<CacCauHoi questions={questions} />
					</Box>
				</Box>
			</Layout.SecondaryBg>
			<Footer />
		</Box>
	);
};

export default Desktop;
