import React, { useEffect, useRef, useState } from "react";
import { styles } from "../../styles";
import { Box } from "@mui/material";
import Desktop from "./Desktop";
import useWindowDimensions from "../../hooks/useDimension";
import { useLocation } from "react-router-dom";
import { useData } from "../../hooks/useData";
import { getRandomSubItem } from "../../functions/controller";
import { useAbouts } from "../../hooks/useAbouts";
import { useRouteName } from "../../hooks/useRouteName";
import { useQuestions } from "../../hooks/useQuestions";
import { useComponentWidth } from "../../hooks/useComponentWidth";

export const useDetailFoodProps = () => {
	const slider = React.useRef(null);
	const vanChuyenSlider = React.useRef(null);
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

	const vanChuyenSetting = {
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: false,
		infinite: true,
	};

	const location = useLocation();
	const id = decodeURIComponent(location.pathname.split("/")[2]);
	const [item, _, isLoading] = useData("products/" + id);

	const { descriptions = [], categories = [], parts: nutritions = [], attachments = [] } = item || {};
	const filterByType = (array, type) => array.filter((item) => item.type === type);

	const suggestions = filterByType(descriptions, "suggestion");
	const sizeHelper = filterByType(descriptions, "size_helper");
	const optionals = filterByType(descriptions, "optional");
	const introductions = filterByType(descriptions, "introduction");
	const sales = filterByType(descriptions, "sale");

	const categorySizes = filterByType(categories, "size");
	const categoryCategories = filterByType(categories, "category");

	const [allProduct] = useData("products");
	const deXuatItems = getRandomSubItem(allProduct, 5);

	const [vanchuyenitem] = useAbouts();
	const [isModalOpen, setIsModalOpen] = useState(0);
	const [selectedCategory, setSelectedCategory] = useState(-1);
	const [anchorEl, setAnchorEl] = useState(null);
	const boxRef = useRef(null);
	const productType = useRouteName().split("/")[0];
	const decodedType = productType === "do-an" ? "Đồ ăn" : "Đồ uống";

	const [drinkfilter, setDrinkFilter] = useState("Mới nhất");
	const [selectedSize, setSelectedSize] = useState(0);
	const [isDrinkFilterOpen, setIsDrinkFilterOpen] = useState(false);

	const deliveryModalOpened = vanchuyenitem?.find((item) => item.id === isModalOpen - 5)?.popups;

	const [favorite, isFavorite] = useState(localStorage?.getItem("yeuthich") ? JSON?.parse(localStorage?.getItem("yeuthich")).some((favItem) => item?.id === favItem?.id) : false);

	const [questions] = useQuestions();

	const [deliveryImageWidth, setDeliveryImageWidth] = useState(0);
	useEffect(() => {
		isFavorite(JSON?.parse(localStorage?.getItem("yeuthich"))?.some((favItem) => item?.id === favItem?.id));
	}, [item]);
	return {
		slider,
		vanChuyenSlider,
		deXuatSetting,
		vanChuyenSetting,
		item,
		isLoading,
		suggestions,
		sizeHelper,
		optionals,
		introductions,
		sales,
		categorySizes,
		categoryCategories,
		deXuatItems,
		vanchuyenitem,
		isModalOpen,
		setIsModalOpen,
		selectedCategory,
		setSelectedCategory,
		anchorEl,
		setAnchorEl,
		boxRef,
		decodedType,
		drinkfilter,
		setDrinkFilter,
		selectedSize,
		setSelectedSize,
		isDrinkFilterOpen,
		setIsDrinkFilterOpen,
		deliveryModalOpened,
		favorite,
		questions,
		deliveryImageWidth,
		nutritions,
		attachments,
		screenWidth,
		setDeliveryImageWidth,
	};
};

const DetailFood = () => {
	const props = useDetailFoodProps();
	return (
		<Box sx={{ ...styles.fontSize13 }}>
			<Desktop {...props} />
		</Box>
	);
};

export default DetailFood;
