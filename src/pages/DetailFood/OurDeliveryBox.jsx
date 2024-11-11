import { Box } from "@mui/material";
import React from "react";
import DeliverySection from "../../component/DetailFood/DeliverySection";
import ShopeeIcon from "../../component/img/ShopeeIcon.png";
import GrabIcon from "../../component/img/GrabIcon.png";
import BefoodIcon from "../../component/img/BefoodIcon.png";
import WhatsAppIcon from "../../component/img/WhatsAppIcon.png";
import ZaloIcon from "../../component/img/ZaloIcon.png";
import ViberIcon from "../../component/img/ViberIcon.png";

const orderLinks = [
	{ url: "https://shopeefood.vn/u/crsGW6z", icon: ShopeeIcon },
	{ url: "#", icon: GrabIcon },
	{ url: "https://begroup.onelink.me/n83F/u9n96maf", icon: BefoodIcon },
];

const businessLinks = [
	// Add your business contact links or icons here
	{ url: "https://zalo.me/+84911830666", icon: ZaloIcon },
	{ url: "https://wa.me/+84911830666", icon: WhatsAppIcon },
	{ url: "https://msng.link/o?0911830666=vi", icon: ViberIcon },
];

const OurDeliveryBox = ({ constants, scaleHeaderRatio }) => {
	return (
		<Box
			sx={{
				mt: "10px",
				borderBottom: "1px solid #000",
			}}
		>
			<DeliverySection
				constants={constants}
				title="Bấm vào đây để đặt hàng"
				description="Bạn có thể chọn dịch vụ giao hàng yêu thích của mình và đặt hàng"
				scaleRatio={scaleHeaderRatio}
				links={orderLinks}
				imgDimension={{
					width: "260px",
					height: "194px",
				}}
			/>
			<DeliverySection
				constants={constants}
				scaleRatio={scaleHeaderRatio}
				title="Đối với sản phẩm dành cho doanh nghiệp"
				description="Bạn có thể chọn hình thức liên lạc sau"
				links={businessLinks}
				imgDimension={{
					width: "260px",
					height: "260px",
				}}
			/>
		</Box>
	);
};

export default OurDeliveryBox;
