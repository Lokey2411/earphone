import React, { useContext } from "react";
import { MobileContext } from "../../store/context/Mobile";
import Mobile from "./Mobile";
import Desktop from "./Desktop";

const Modal = ({ children, isOpen, onClose, ...otherProps }) => {
	const props = { children, isOpen, onClose, ...otherProps };
	const { isMobile } = useContext(MobileContext);
	return isMobile ? <Mobile {...props} /> : <Desktop {...props} />;
};

export default Modal;
