import { CiSearch } from "react-icons/ci";
import { AiOutlineSearch } from "react-icons/ai";
import { Accordion, AccordionDetails, AccordionSummary, Box, Container, TextField } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import NavBar from "../../component/layout/NavBar";
import Layout from "../../component/layout";
import Footer from "../../component/layout/Footer";
import { RESPONSIVE_DESKTOP, RESPONSIVE_MOBILE, RESPONSIVE_TABLET, styles } from "../../styles";
import LeftArrowBlackW9H16 from "../../component/svg/icon/LeftArrowBlackW9H16";
import FilterArrowBlackDown from "../../component/svg/icon/FilterArrowBlackDown";
import { truncate } from "../../api/get";
import DrinkList from "../../component/DrinkList";
import { useData } from "../../hooks/useData";
import { useLocation } from "react-router-dom";
import { getRouteName } from "../../functions/controller";
import Loading from "../../component/Loading";
import { renderTopics } from "../../functions/renderTopics";
import ResponsiveComponent from "../../component/DetailFood/ResponsiveBox";
import MenuSidebar from "../../component/MenuDrinkList/ResponsiveComponent/MenuSidebar";
import useWindowDimensions from "../../hooks/useDimension";
import { useComponentWidth } from "../../hooks/useComponentWidth";
import Banner from "../../component/Banner";
import images from "../../component/img/do-uong";
import { useAbouts } from "../../hooks/useAbouts";

const Desktop = ({ title, menuTitle, menuSubtitle, topicJsonPath, productRoute }) => {
	const props = { title, menuTitle, menuSubtitle, topicJsonPath };
	const [searchTerm, setSearchTerm] = useState("");
	const { width: screenWidth } = useWindowDimensions();
	const handleSearch = (event) => {
		setSearchTerm(event.target.value);
		if (searchTerm === "") setDrinks(allDrinks);
		else
			setDrinks(
				allDrinks?.filter((item) => {
					console.log(searchTerm.toLowerCase(), item.name.toLowerCase(), item.name.toLowerCase() === searchTerm.toLowerCase());
					return item.name.toLowerCase().includes(searchTerm.toLowerCase());
				})
			);
	};
	const [drinkfilter, setDrinkFilter] = useState("Mới nhất");
	const [isDrinkFilterOpen, setIsDrinkFilterOpen] = useState(false);
	const location = useLocation();
	const type = getRouteName(location.pathname);
	const decodedType = title;
	const [allDrinks] = useData("products/search/type?type=" + type);
	const listname = useMemo(() => {
		return allDrinks
			? truncate(
					allDrinks.map((d) => d.listname),
					(item) => item
			  )
			: [];
	}, [allDrinks]);
	const [drinks, setDrinks] = useState([]);
	const topics = require("../../json/topics/" + topicJsonPath);
	const menuSidebarWidth = useComponentWidth("menuSidebar");
	useEffect(() => {
		if (searchTerm === "") setDrinks(allDrinks);
		else
			setDrinks(
				allDrinks.filter((item) => {
					return item.name.toLowerCase().includes(searchTerm.toLowerCase());
				})
			);
	}, [searchTerm, allDrinks]);

	const navigationItems = [
		{
			displayText: menuTitle,
			href: "#",
		},
		{
			displayText: title,
			href: "#",
		},
	];
	const [abouts] = useAbouts();
	const [banner] = useMemo(() => {
		return abouts && abouts[0] ? abouts[0] : [{ image: images.banner, title: "", subtitle: "" }];
	}, [abouts]);
	if (!allDrinks || !drinks || !abouts) return <Loading />;
	return (
		<Box sx={{ overflow: "hidden" }}>
			<NavBar />
			<ResponsiveComponent.NavigationBarDesktop
				{...props}
				decodedType={decodedType}
				items={navigationItems}
			/>
			<ResponsiveComponent.NavigationBarMobile
				{...props}
				decodedType={decodedType}
				items={navigationItems}
				searchHandler={handleSearch}
			/>
			<Layout.MainBg>
				<Box
					sx={{
						pt: "0px",
						mt: "-56px",
						[RESPONSIVE_MOBILE]: {
							// pt: "66.8px",
							mt: "0",
						},
						[RESPONSIVE_DESKTOP]: { pt: "66.8px", mt: "0" },
					}}
				></Box>
				<Banner imageSrc={banner.image}></Banner>
				<Box sx={{ display: "flex" }}>
					{/* sidebar */}
					<MenuSidebar
						menuSubtitle={menuSubtitle}
						menuTitle={menuTitle}
						topics={topics}
						id="menuSidebar"
					/>
					<Box
						sx={{
							backgroundColor: "white",
							width: `calc(100% - 320px)`,
							[RESPONSIVE_MOBILE]: {
								width: "100%",
							},
						}}
					>
						<Box
							sx={{
								...styles.centerFlex,
								justifyContent: "space-between",
								p: "72px 72px 0px",
								[RESPONSIVE_MOBILE]: {
									p: "20px 20px 0px",
									flexDirection: "column",
									alignItems: "flex-start",
									gap: "10px",
									display: "none",
								},
								[RESPONSIVE_TABLET]: {
									flexDirection: "column",
									alignItems: "flex-start",
									pr: "0px",
									gap: "10px",
								},
							}}
						>
							<Box
								sx={{
									fontSize: "36px",
									color: "#000",
									fontWeight: 600,
								}}
							>
								{decodedType}
							</Box>
							<Box
								sx={{
									p: "10px 20px",
									// width: "30%",
									width: "50%",
									maxWidth: screenWidth * 0.25,
									border: "solid black 1px",
									borderRadius: "19px",
									[RESPONSIVE_TABLET]: {
										width: "100%",
										maxWidth: "unset",
									},
									// width: "270px",
								}}
							>
								<Container
									sx={{
										"&.MuiContainer-root": {
											maxWidth: "100%",
										},
										display: "flex",
										justifyContent: "space-between",
										alignItems: "center",
									}}
									disableGutters
								>
									<TextField
										type="search"
										id="search"
										placeholder="Tìm kiếm đồ ăn hoặc đồ uống"
										value={searchTerm}
										onChange={handleSearch}
										onClick={(e) => {
											e.stopPropagation();
										}}
										sx={{
											...styles.fontSize13,
											color: "black",
											width: "100%",
											"& .MuiOutlinedInput-root": { border: "none" },
											".MuiOutlinedInput-notchedOutline:hover,.MuiOutlinedInput-notchedOutline": { border: "none" },
											".MuiInputBase-root": {
												paddingRight: "0px",
												marginRight: 0,
											},
											".MuiInputBase-input": { p: 0, fontSize: "15px", width: "100%" },
										}}
									/>
									<CiSearch size={24} />
								</Container>
							</Box>
						</Box>
						<Box sx={{ position: "relative" }}>
							{/* Box selector sort */}
							{/* <Box
                sx={{
                  ...styles.fontSize13,
                  fontSize: "10px",
                  position: "absolute",
                  top: 0,
                  right: 100,
                  width: "150px",
                  zIndex: 2,
                }}
              >
                <Box sx={{ p: "8px 10px 0px 0px" }}>Sắp xếp</Box>
                <Box
                  sx={{
                    cursor: "pointer",
                  }}
                >
                  <Box
                    sx={{
                      ...styles.centerFlex,
                      gap: "10px",
                    }}
                  >
                    <Box
                      onClick={() => setIsDrinkFilterOpen(true)}
                      onMouseOver={() => setIsDrinkFilterOpen(true)}
                      sx={{
                        fontSize: "11px",
                        fontWeight: 600,
                        p: "0.5px 10px 0.5px 0px",
                      }}
                    >
                      {drinkfilter}
                    </Box>
                    <FilterArrowBlackDown />
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: "white",
                      borderRadius: "7px",
                    }}
                  >
                    {isDrinkFilterOpen && (
                      <Box>
                        <Box
                          onClick={() => {
                            setIsDrinkFilterOpen(false);
                            setDrinkFilter("Mới nhất");
                            console.log(isDrinkFilterOpen);
                          }}
                          sx={{
                            fontSize: "11px",
                            fontWeight: 600,
                            p: "5px 10px 5px 5px",
                            ":hover": {
                              backgroundColor: "black",
                              color: "white",
                            },
                            borderRadius: "7px 7px 0px 0px",
                          }}
                        >
                          Mới nhất
                        </Box>
                        <Box
                          onClick={() => {
                            setIsDrinkFilterOpen(false);
                            setDrinkFilter("Giá - Từ thấp tới cao");
                          }}
                          sx={{
                            fontSize: "11px",
                            fontWeight: 600,
                            p: "5px 10px 5px 5px",
                            ":hover": {
                              backgroundColor: "black",
                              color: "white",
                            },
                            borderTop: "solid black 1px",
                            borderBottom: "solid black 1px",
                          }}
                        >
                          Giá - Từ thấp tới cao
                        </Box>
                        <Box
                          onClick={() => {
                            setIsDrinkFilterOpen(false);
                            setDrinkFilter("Giá - Từ cao tới thấp");
                          }}
                          sx={{
                            fontSize: "11px",
                            fontWeight: 600,
                            p: "5px 10px 5px 5px",
                            ":hover": {
                              backgroundColor: "black",
                              color: "white",
                            },
                            borderRadius: "0px 0px 7px 7px",
                          }}
                        >
                          Giá - Từ cao tới thấp
                        </Box>
                      </Box>
                    )}
                  </Box>
                </Box>
              </Box> */}
							<Box>
								{listname?.map((item) => {
									return (
										<DrinkList
											to={productRoute}
											item={item}
											drinks={drinks}
										/>
									);
								})}
							</Box>
						</Box>
					</Box>
				</Box>
			</Layout.MainBg>
			<Footer />
		</Box>
	);
};

export default Desktop;
