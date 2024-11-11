import React from "react";

const BackgroundImageBox = ({ children, imageSrc, imageProps, ...props }) => {
	return (
		<div
			{...props}
			style={{ position: "relative", ...props.style }}
		>
			<img
				src={imageSrc}
				style={{ width: "100%", height: "100%", objectFit: "cover" }}
				{...imageProps}
			/>
			<div className="tw-bg-black tw-opacity-40 tw-inset-0 tw-absolute"></div>
			{children}
		</div>
	);
};

export default BackgroundImageBox;
