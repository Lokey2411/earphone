import React from "react";
import images from "../component/img/chung-chi";
import { content } from "../content/certificate";
import NavBar from "../component/layout/NavBar";
import Footer from "../component/layout/Footer";

const renderChildContent = (content, index) =>
	"children" in content && content.children && content.children.length > 0
		? renderParentContent(content, index)
		: "images" in content && (
				<div className="tw-flex tw-items-start tw-gap-8 lg:tw-mt-6 css-content sm:tw-mt-2">
					<div className="">
						<img
							src={content.images[0] ?? images.filePlaceholder}
							alt=""
							className="tw-object-cover tw-w-full tw-h-full"
						/>
					</div>
					<div className="tw-flex-1">
						<div className="tw-mb-6 tw-font-bold lg:tw-text-20 sm:tw-text-16">{content.title}</div>
						<div
							className="lg:tw-text-18 sm:tw-text-14"
							dangerouslySetInnerHTML={{
								__html: content.subtitle,
							}}
						></div>
					</div>
				</div>
		  );

const renderParentContent = (content, index) => {
	return (
		<div className="lg:tw-pt-24 lg:tw-pb-12 tw-border-t tw-border-grey800 sm:tw-pb-5 sm:tw-pt-2">
			<div className="tw-leading-none tw-font-Inter-Semibold lg:tw-text-36 sm:tw-text-24 md:tw-text-28">{content.title}</div>
			<div className="tw-mt-4 tw-leading-7 lg:tw-text-18 sm:tw-text-14">{content.subtitle}</div>
			<div className="tw-flex tw-flex-col tw-gap-10">{"children" in content && content.children && content.children.length > 0 && content.children.map((item) => renderChildContent(item, index))}</div>
		</div>
	);
};

const Certificate = () => {
	return (
		<div>
			<NavBar />
			<div className="lg:tw-mt-32 sm:tw-mt-16"></div>
			<div className="lg:tw-mx-[400px] sm:tw-mx-5">
				<div className="tw-font-Inter-Semibold lg:tw-text-36 sm:tw-text-24">{content.title}</div>
				<div
					className="lg:tw-pb-12 tw-border-b lg:tw-mt-7 lg:tw-text-18 sm:tw-pb-5 sm:tw-mt-2 sm:tw-text-14"
					dangerouslySetInnerHTML={{ __html: content.subtitle }}
				></div>
				{"children" in content && content.children.map(renderParentContent)}
			</div>
			<Footer />
		</div>
	);
};

export default Certificate;
