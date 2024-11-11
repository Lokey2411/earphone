import React from "react";
import NavBar from "../../component/layout/NavBar";
import Footer from "../../component/layout/Footer";
import restaurant from "../../component/img/CateList_restaurant.jpg";
import ArrowRightBlack from "../../component/svg/icon/ArrowRightBlack";
import product from "../../component/img/CateList_restaurant_product1.png";
import Product from "../../component/CateList/Product";

const CateList = () => {
	const products = {
		"": [
			{
				name: "Product 1",
				image: product,
				price: "100000",
				id: 36,
				description: "Description of product 1",
			},
			{
				name: "Product 1",
				image: product,
				price: "100000",
				id: 36,
				description: "Description of product 1",
			},
			{
				name: "Product 1",
				image: product,
				price: "100000",
				id: 36,
				description: "Description of product 1",
			},
			{
				name: "Product 1",
				image: product,
				price: "100000",
				id: 36,
				description: "Description of product 1",
			},
			{
				name: "Product 1",
				image: product,
				price: "100000",
				id: 36,
				description: "Description of product 1",
			},
			{
				name: "Product 1",
				image: product,
				price: "100000",
				id: 36,
				description: "Description of product 1",
			},
		],
		"list 1": [
			{
				name: "Product 1",
				image: product,
				price: "100000",
				id: 36,
				description: "Description of product 1",
			},
			{
				name: "Product 1",
				image: product,
				price: "100000",
				id: 36,
				description: "Description of product 1",
			},
			{
				name: "Product 1",
				image: product,
				price: "100000",
				id: 36,
				description: "Description of product 1",
			},
			{
				name: "Product 1",
				image: product,
				price: "100000",
				id: 36,
				description: "Description of product 1",
			},
			{
				name: "Product 1",
				image: product,
				price: "100000",
				id: 36,
				description: "Description of product 1",
			},
			{
				name: "Product 1",
				image: product,
				price: "100000",
				id: 36,
				description: "Description of product 1",
			},
		],
	};
	return (
		<>
			<NavBar />
			<div className="lg:tw-mt-20 sm:tw-mt-14 tw-bg-gray50 tw-min-h-screen tw-relative lg:tw-px-20 sm:tw-px-5">
				{/* banner */}
				<div className="tw-w-full tw-relative tw-h-[400px]">
					<img
						src={restaurant}
						alt=""
						className="tw-w-full tw-object-cover tw-h-full"
					/>
					<div className="tw-absolute tw-top-0 tw-bottom-0 tw-left-0 tw-right-0 tw-bg-black tw-opacity-40 tw-inset-0"></div>
					{/* content */}
					<div className="tw-text-md tw-text-white tw-font-normal tw-absolute tw-top-0 tw-left-0 tw-right-0 tw-bottom-0 tw-p-2">
						<div className="tw-flex tw-items-center tw-gap-1 tw-font-Inter tw-text-sm">
							<a href="/">Thanh Coffee</a>
							{">"}
							<a href="/thiet-bi-nha-hang">Thiết bị nhà hàng</a>
						</div>
						<div className="tw-h-full tw-flex tw-flex-col tw-justify-center tw-pl-[38px]">
							<h1 className="tw-text-[52px] tw-text-white tw-textfont-bold tw-align-middle">Thiết bị nhà hàng</h1>
							<h3 className="tw-text-white tw-text-3xl">Thiết bị dành cho nhà hàng</h3>
						</div>
					</div>
				</div>
				{/* content */}
				<div className="tw-w-full tw-bg-white tw-p-3">
					{Object.keys(products).map((keys) => (
						<div key={keys}>
							<h1 className="tw-text-4xl tw-text-center tw-font-bold">{keys}</h1>
							<div className="tw-grid lg:tw-grid-cols-3 tw-gap-2 md:tw-grid-cols-2 sm:tw-grid-cols-1">
								{products[keys].map((item, index) => (
									<Product
										key={index}
										{...item}
									/>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default CateList;
