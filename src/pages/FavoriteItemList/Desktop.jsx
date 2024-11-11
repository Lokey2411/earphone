import React, { useMemo, useRef } from "react";
import NavBar from "../../component/layout/NavBar";
import Layout from "../../component/layout";
import Footer from "../../component/layout/Footer";
import { RESPONSIVE_MOBILE, RESPONSIVE_TABLET, styles } from "../../styles";
import { Accordion, AccordionDetails, AccordionSummary, Box, Grid } from "@mui/material";
import ArrowRightBlack from "../../component/svg/icon/ArrowRightBlack";
import DrinksItems from "../../component/DrinksItems";
import ArrowDownBlack from "../../component/svg/icon/ArrowDownBlack";
import { useData } from "../../hooks/useData";
import { getRandomSubItem } from "../../functions/controller";
import Slider from "react-slick";
import useWindowDimensions from "../../hooks/useDimension";
import LeftArrowBlack from "../../component/svg/icon/LeftArrowBlack";
import { useComponentWidth } from "../../hooks/useComponentWidth";
import MenuSidebar from "../../component/MenuDrinkList/ResponsiveComponent/MenuSidebar";

const Desktop = () => {
	const [allProduct] = useData("products");
	const deXuatItems = useMemo(() => {
		return getRandomSubItem(allProduct, 3);
	}, [allProduct]);
	const topics = require("../../json/topics/menu/menu.json");
	const slider = useRef(null);
	const firstSuggestionId = useMemo(() => deXuatItems[0]?.id, [deXuatItems]);
	const suggestionImageWidth = useComponentWidth("img" + firstSuggestionId);
	const { width: screenWidth } = useWindowDimensions();
	const isMobile = screenWidth < 1024;
	const deXuatSetting = {
		slidesToShow: isMobile ? 2 : 3,
		slidesToScroll: 1,
		infinite: true,
		arrows: false,
		// centerMode: isMobile,
		centerPadding: isMobile ? "480px" : "0px",
		variableWidth: isMobile,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
				},
			},
		],
	};
	const renderSubTopics = (sub) => {
		return sub.subTopics && sub.subTopics.length > 0 ? (
			renderTopics(sub)
		) : (
			<AccordionDetails
				sx={{
					...styles.backgroundColor.mauTra,
					p: "0px 80px",
					borderBottom: "solid black 1px",
					"&.MuiAccordionDetails-root": { border: 0 },
					"&.MuiAccordionDetails-root:last-child": {
						borderBottom: "solid black 1px",
					},
				}}
				key={sub?.id}
			>
				<Box
					sx={{
						...styles.fontSize13,
						height: "40px",
						...styles.centerFlex,
						fontSize: "16px",
					}}
				>
					<a href={sub?.link}>
						<Box>{sub?.title}</Box>
					</a>
				</Box>
				{sub?.subTopics && sub?.subTopics.length > 0 && sub?.subTopics.map(renderSubTopics)}
			</AccordionDetails>
		);
	};

	const renderTopics = (topic) => {
		return (
			<Box
				sx={{ position: "relative" }}
				key={topic?.id}
			>
				<Accordion
					sx={{
						textAlign: "justify",
						"&.MuiAccordion-root": { boxShadow: "0" },
					}}
					disableGutters={true}
				>
					<AccordionSummary
						expandIcon={<ArrowDownBlack />}
						aria-controls="panel1a-content"
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							gap: "10px",
							color: "black",
							width: "100%",
							p: "0px 18px 0px 80px",
							backgroundColor: "#F3F1EC",
							borderBottom: "solid black 1px",
							"&	.MuiAccordionSummary-content": {
								margin: 0,
							},
						}}
					>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								width: "100%",
								justifyContent: "space-between",
							}}
						>
							{topic.link && topic.link !== "#" ? (
								<a href={topic?.link}>
									<Box
										sx={{
											fontWeight: "600",
											...styles.fontSize13,
											fontSize: "16px",
										}}
									>
										{topic?.title}
									</Box>
								</a>
							) : (
								<Box
									sx={{
										fontWeight: "bold",
										...styles.fontSize13,
										fontSize: "16px",
									}}
								>
									{topic?.title}
								</Box>
							)}
							<Box sx={{ width: "50px", height: "50px" }}></Box>
						</Box>
					</AccordionSummary>
					{topic?.subTopics && topic?.subTopics.length > 0 && topic?.subTopics.map(renderSubTopics)}
				</Accordion>
			</Box>
		);
	};
	const favoriteItems = localStorage.getItem("yeuthich") ? JSON.parse(localStorage.getItem("yeuthich")) : [];
	return (
		<Box>
			<NavBar />
			<Layout.MainBg>
				<Box
					sx={{
						// height: "40px",
						...styles.backgroundColor.xamE4E3E1,
						...styles.centerFlex,
						mt: "24px",
						p: "16px 80px ",
						borderBottom: "solid black 1px",
					}}
				>
					<a
						href="/do-uong"
						rel="noreferrer"
						style={{ ...styles.centerFlex, gap: "15px" }}
					>
						<Box>
							<ArrowRightBlack />
						</Box>
						<Box sx={{ fontWeight: 500, fontSize: "16px" }}>Trở lại</Box>
					</a>
				</Box>
				<Box sx={{ display: "flex", borderBottom: "solid black 1px" }}>
					<MenuSidebar
						menuTitle={"MENU"}
						menuSubtitle={"THỰC ĐƠN NỔI BẬT"}
						topics={topics}
					/>
					<Box
						sx={{
							...styles.pad20,
							p: "80px",
							flex: 1,
						}}
					>
						<Box
							sx={{
								fontSize: "40px",
								fontWeight: "600",
								p: "0px 0px 50px",
							}}
						>
							Danh sách ưa thích của bạn ({favoriteItems?.length} mục)
						</Box>
						{favoriteItems.length > 0 ? (
							<Box className="tw-grid tw-grid-cols-3 tw-gap-5">
								{favoriteItems.map((items, index, { length }) => (
									<Box
										className="tw-flex-1"
										sx={
											{
												// maxWidth: `calc(100%/3 - 20px)`,
											}
										}
									>
										<DrinksItems
											key={items.id}
											item={items}
										/>
									</Box>
								))}
							</Box>
						) : (
							<Box sx={{ fontSize: "20px" }}>
								<Box sx={{ fontWeight: 400, pb: "50px" }}>Thêm các mục vào danh sách mong muốn của bạn để bạn có thể lưu chúng cho lần sau.</Box>
								<Box sx={{ ...styles.centerFlex }}>
									<a
										href="/do-uong"
										sx={{
											cursor: "pointer",
											padding: "10px 36px",
											backgroundColor: "#006241",
											border: 0,
											borderRadius: "7px",
											color: "white",
											fontWeight: 700,
										}}
									>
										TIẾP TỤC MUA SẮM
									</a>
								</Box>
							</Box>
						)}
						{/* gợi ý mua sắm */}
						{/* <Box
              sx={{
                fontWeight: "600",
                fontSize: "40px",
                p: "80px 0px 30px",
              }}
            >
              Gợi ý mua sắm
            </Box>
            <Box
              sx={{
                ...styles.centerFlex,
                gap: "9px",
                fontSize: "24px",
                pb: "80px",
              }}
            >
              <Box sx={{ ...styles.centerFlex }}>
                <Box
                  sx={{
                    cursor: "pointer",
                    p: "8px 40px",
                    backgroundColor: "#006241",
                    border: 0,
                    borderRadius: "7px",
                    color: "white",
                    fontWeight: 700,
                  }}
                >
                  MOCHA BẠC HÀ
                </Box>
              </Box>
              <Box sx={{ ...styles.centerFlex }}>
                <Box
                  sx={{
                    cursor: "pointer",
                    p: "8px 40px",
                    backgroundColor: "#006241",
                    border: 0,
                    borderRadius: "7px",
                    color: "white",
                    fontWeight: 700,
                  }}
                >
                  LATTE HẠT DẺ
                </Box>
              </Box>
            </Box> */}
						{/* đã xem gần đây */}
						{/* <Box
              sx={{
                fontWeight: "bold",
                fontSize: "40px",
                p: "80px 0px 60px",
              }}
            >
              Đã xem gần đây
            </Box>
            <Box
              sx={{
                ...styles.centerFlex,
                flexWrap: "wrap",
                gap: "16px",
                rowGap: "40px",
              }}
            >
              {favoriteItems.map((items) => (
                <DrinksItems key={items.id} item={items} />
              ))}
            </Box> */}
						<Box
							sx={{
								fontWeight: "600",
								fontSize: "40px",
								p: "80px 0px 60px",
							}}
						>
							Được đề xuất cho bạn
						</Box>
						<Box className="tw-grid tw-grid-cols-3 tw-gap-5">
							{deXuatItems?.map((e) => {
								// console.log(e);
								return (
									<Box
										sx={{
											[RESPONSIVE_MOBILE]: {
												width: "200px!important",
											},
											"& img": {
												height: `${suggestionImageWidth}px!important`,
											},
											flex: 1,
										}}
									>
										<DrinksItems
											key={e?.id}
											item={e}
										/>
									</Box>
								);
							})}
						</Box>
					</Box>
				</Box>
			</Layout.MainBg>
			<Footer />
		</Box>
	);
};

export default Desktop;
