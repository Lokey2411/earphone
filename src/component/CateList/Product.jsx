import React, { useState, useCallback, useEffect } from "react";
import { formatCurrency } from "../../functions/controller";
import { Box } from "@mui/material";

const Product = (item) => {
	const [isHover, setIsHover] = useState(false);

	const handleMouseEnter = useCallback(() => setIsHover(true), []);
	const handleMouseLeave = useCallback(() => setIsHover(false), []);
	return (
		<a href={"/thiet-bi/" + item.id}>
			<div className="tw-w-full tw-bg-cover tw-bg-center tw-rounded-3xl tw-p-3 tw-relative">
				<div
					className="tw-w-full tw-h-full tw-relative"
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					<img
						src={item.image}
						alt=""
						className="tw-w-full tw-h-full tw-object-cover tw-rounded tw-shadow-sm"
					/>
					<Box sx={{ display: isHover ? "flex" : "none", flexDirection: "center", justifyContent: "center" }}>
						<div className="tw-absolute tw-top-0 tw-bottom-0 tw-left-0 tw-right-0 tw-bg-black tw-opacity-40 tw-inset-0"></div>
						<div className="tw-border tw-border-white tw-rounded tw-px-3 tw-py-2 tw-absolute tw-left-1/2 tw-top-1/2 -tw-translate-x-1/2 -tw-translate-y-1/2 tw-text-white tw-font-Inter-Semibold">Xem thêm</div>
					</Box>
				</div>
				<h1 className="tw-text-xl tw-font-bold mt-2 tw-mt-[18px] tw-mb-2">{item.name}</h1>
				<p className="tw-text-md tw-font-normal tw-text-gray-600 tw-italic">{formatCurrency(item.price)}</p>
				<p className="tw-text-md tw-font-normal tw-text-gray-600">{item.description}</p>
			</div>
		</a>
	);
};

export default React.memo(Product);
