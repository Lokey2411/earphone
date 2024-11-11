import React from "react";
import ContentSectionHorizontal from "./ContentSectionHorizontal";
import ContentSectionVertical from "./ContentSectionVertical";

const ContentSection = ({ horizontal, ...props }) => {
	return horizontal ? <ContentSectionHorizontal {...props} /> : <ContentSectionVertical {...props} />;
};

export default ContentSection;
