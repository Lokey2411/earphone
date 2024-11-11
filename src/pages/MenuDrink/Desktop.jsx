import { BiSearch } from "react-icons/bi";
import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Grid, styled, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import NavBar from "../../component/layout/NavBar";
import Layout from "../../component/layout";
import Footer from "../../component/layout/Footer";
import { RESPONSIVE_MOBILE, RESPONSIVE_TABLET, styles } from "../../styles";
import LeftArrowBlackW9H16 from "../../component/svg/icon/LeftArrowBlackW9H16";
import DrinksItems from "../../component/DrinksItems";
import { useParams } from "react-router-dom";
import { useData } from "../../hooks/useData";
import { useRouteName } from "../../hooks/useRouteName";
import Avatar1 from "../../component/svg/icon/Avatar1";
import ArrowDownBlack from "../../component/svg/icon/ArrowDownBlack";
import Loading from "../../component/Loading";
import { renderTopics } from "../../functions/renderTopics";
import NewsCenterArrow from "./../../component/svg/icon/NewsCenterArrow";
import ResponsiveComponent from "../../component/DetailFood/ResponsiveBox";
import { convertToSlug } from "../../functions/controller";
import MenuSidebar from "../../component/MenuDrinkList/ResponsiveComponent/MenuSidebar";

const Desktop = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const handleSearch = (event) => {
		setSearchTerm(event.target.value);
	};
	const { type } = useParams();
	const productType = useRouteName().split("/")[0];
	const decodedType = productType === "do-an" ? "Đồ ăn" : "Đồ uống";
	const [topics] = useData("topics/navbar");
	const [drinkfilter, setDrinkFilter] = useState("Mới nhất");
	const [isDrinkFilterOpen, setIsDrinkFilterOpen] = useState(false);
	const [allDrinks] = useData(`products/search/listname?listname=${type}`);
	const [drinks, setDrinks] = useState([]);
	useEffect(() => {
		if (searchTerm === "") setDrinks(allDrinks);
		else
			setDrinks(
				allDrinks.filter((item) => {
					console.log(searchTerm.toLowerCase(), item.name.toLowerCase(), item.name.toLowerCase() === searchTerm.toLowerCase());
					return item.name.toLowerCase().includes(searchTerm.toLowerCase());
				})
			);
	}, [searchTerm, allDrinks]);
	const NavbarTitle = styled(Box)(({ theme }) => ({ ...styles.fontSize13, fontSize: "10px", fontWeight: "600" }));
	const navigationBarItem = [
		{
			displayText: "MENU",
			href: "#",
		},
		{
			displayText: decodedType,
			href: "/" + convertToSlug(productType),
		},
		{
			displayText: type,
			href: `/${convertToSlug(productType)}/${type}`,
		},
	];
	if (!drinks) return <Loading />;
	return (
		<Box
			sx={{
				overflow: "hidden",
			}}
		>
			<NavBar />
			<ResponsiveComponent.NavigationBarDesktop items={navigationBarItem} />
			<ResponsiveComponent.NavigationBarMobile
				items={navigationBarItem}
				searchHandler={handleSearch}
			/>
			<Layout.MainBg>
				<Box
					sx={{
						pt: "66.8px",
						[RESPONSIVE_MOBILE]: {
							pt: "0",
							mt: "0px",
						},
						[RESPONSIVE_TABLET]: {
							pt: "0",
							mt: "0",
						},
					}}
				></Box>
				<Box
					sx={{
						display: "flex",
						borderBottom: "solid black 1px",
						justifyContent: "space-between",
						[RESPONSIVE_TABLET]: {
							mt: "-56px",
						},
					}}
				>
					{/* sidebar */}
					<MenuSidebar
						menuTitle={"Menu"}
						menuSubtitle={"Thực đơn nổi bật"}
						topics={require("../../json/topics/menu/menu.json")}
					/>
					<Box
						sx={{
							p: "76px",
							backgroundColor: "white",
							flex: 1,
							[RESPONSIVE_MOBILE]: {
								width: "100%",
								p: "20px",
							},
							[RESPONSIVE_TABLET]: {
								p: "20px",
							},
						}}
					>
						<Box
							sx={{
								display: "grid",
								gridTemplateColumns: "repeat(3, 1fr)",
								gap: "20px",
								[RESPONSIVE_MOBILE]: {
									gridTemplateColumns: "repeat(2, 1fr)",
								},
								[RESPONSIVE_TABLET]: {
									gridTemplateColumns: "repeat(2, 1fr)",
								},
							}}
						>
							{drinks.map((items) => (
								<DrinksItems
									key={items.id}
									item={items}
								/>
							))}
						</Box>
					</Box>
				</Box>
			</Layout.MainBg>
			<Footer />
		</Box>
	);
};

export default Desktop;
