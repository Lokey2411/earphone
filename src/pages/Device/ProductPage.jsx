import React, { useEffect } from "react";
import NavBar from "../../component/layout/NavBar";
import Footer from "../../component/layout/Footer";
import { useParams } from "react-router-dom";
import { useData } from "../../hooks/useData";
import Loading from "../../component/Loading";
import { getRandomSubItem } from "../../functions/controller";

const Product = () => {
	const { id } = useParams();
	const [product] = useData("products/" + id);
	useEffect(() => {
		console.log(product);
	}, [product]);
	const [products] = useData("product");
	const accessories = getRandomSubItem(products, 5);
	if (!product) return <Loading />;
	return (
		<div className="tw-font-Inter">
			<NavBar />
			<div className="container lg:tw-mt-20 sm:tw-mt-14 tw-bg-gray50 lg:tw-px-20 sm:tw-px-5 tw-min-h-screen ">
				{/* navigation box */}
				<div className="tw-flex tw-gap-2 tw-items-center tw-mt-2 tw-border-b tw-w-full tw-border-primary tw-py-2">
					<a
						href="/thiet-bi-nha-hang"
						className="tw-text-primary tw-text-sm"
					>
						Thiết bị nhà hàng {">"}
					</a>
					<a
						href="/thiet-bi"
						className="tw-text-primary tw-text-sm"
					>
						Thiết bị {">"}
					</a>
					<a
						href="#"
						className="tw-text-primary tw-text-sm"
					>
						{product.name}
					</a>
				</div>
				{/* information box */}
				{/* product name */}
				<h1 className="tw-text-3xl tw-font-bold tw-font-Inter">{product.name}</h1>
				<p className="tw-text-gray-400 tw-font-300 tw-mt-1 tw-ml-3">Item: #{product.id}</p>
				{/* content */}
				<div className="tw-flex content tw-gap-4">
					<div className="tw-flex tw-flex-col tw-gap-2 tw-flex-1">
						{/* image box */}
						<div className=" tw-bg-white tw-p-2 tw-rounded">
							<div className="tw-w-40 tw-h-40 tw-mb-2">
								<img
									src={product.image}
									alt={"Hình ảnh thiết bị " + product.name}
									className="tw-w-full tw-h-full"
								/>
							</div>
							{/* accessories box */}
							<div className="tw-border-t tw-p-2">
								{accessories.map((item) => (
									<div className="tw-p-2">.tw-flex.tw-</div>
								))}
							</div>
						</div>
						{/* description box */}
					</div>
					<div className="tw-flex tw-flex-col tw-gap-2 tw-flex-1">
						{/* description box */}
						<div className="tw-w-50 tw-h-50 tw-bg-white tw-p-2 tw-rounded">
							<p
								dangerouslySetInnerHTML={{
									__html: product.description,
								}}
							></p>
						</div>
						{/* price box */}
						<div className="tw-w-50 tw-h-50 tw-bg-white tw-p-2 tw-rounded tw-flex tw-flex-col tw-gap-2"></div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Product;
