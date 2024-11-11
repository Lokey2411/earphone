import { createContext, useState, useEffect } from "react";
import useWindowDimensions from "../../hooks/useDimension";

export const MobileContext = createContext({
	isMobile: false,
	setIsMobile: (isMobile) => {},
	isTablet: false,
	isDesktop: true,
});

export const MobileContextProvider = ({ children }) => {
	const [isMobile, setIsMobile] = useState(false);
	const { width: screenWidth } = useWindowDimensions();
	const [isTablet, setIsTablet] = useState(false);
	const isDesktop = !isMobile && !isTablet;
	useEffect(() => {
		setIsMobile(screenWidth < 768);
		setIsTablet(screenWidth < 1024 && screenWidth >= 768);
	}, [screenWidth]);
	return <MobileContext.Provider value={{ isMobile, setIsMobile, isTablet, isDesktop }}>{children}</MobileContext.Provider>;
};
