import React from "react";
import NavBar from "../component/layout/NavBar";
import Footer from "../component/layout/Footer";

const OutsideMenu = () => {
	return (
		<div>
			<NavBar />
			<div className="tw-mt-28 tw-mx-100">
				<div className="tw-flex tw-flex-col tw-items-center tw-text-center">
					<h1 className="tw-text-50 tw-font-Inter-Bold">MENU</h1>
					<img
						src="/images/menu.png"
						alt=""
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default OutsideMenu;
