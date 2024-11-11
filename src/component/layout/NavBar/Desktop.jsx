import { Box } from "@mui/material";
import NavItem from "./NavItem";
import SubMenu from "./SubMenu";
import LogoThanhCoffee from "../../svg/logoThanhCoffee";
import ShopSearchIcon from "../../svg/icon/ShopSearchIcon";
import FavoriteIcon from "../../svg/icon/FavoriteIcon";
import React, { useEffect, useState } from "react";
import { RESPONSIVE_DESKTOP, RESPONSIVE_MOBILE } from "../../../styles";

const NavBarDesktop = () => {
	const [openMenu, setOpenMenu] = useState(0);
	const [isOverflow, setIsOverflow] = useState(false);
	const closeMenu = () => {
		setOpenMenu(0);
		setIsOverflow(false);
	};
	useEffect(() => {
		setIsOverflow(false);
	}, [openMenu]);
	return (
		<Box
			sx={{
				position: "fixed",
				top: 0,
				right: 0,
				left: 0,
				zIndex: 11,
				borderBottom: "solid black 1px",
				display: "none",
				[RESPONSIVE_DESKTOP]: { display: "block" },
			}}
		>
			{openMenu > 0 && !isOverflow && (
				<Box sx={{ position: "relative" }}>
					<Box
						sx={{
							position: "absolute",
							backgroundColor: "#E4E3E1", // xamE4E3E1
							width: "100vw",
							height: "44px",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							gap: "40px",
							borderBottom: "solid black 1px",
							top: "81px",
							zIndex: 3,
						}}
						onMouseLeave={() => {
							closeMenu();
						}}
					/>
				</Box>
			)}

			<Box
				sx={{
					backgroundColor: "white",
					display: "flex",
					justifyContent: "space-between",
					p: "0px 80px",
					height: "80px",
				}}
			>
				<Box
					sx={{
						"svg > path": { fill: "black" },
						svg: { height: "37px", width: "176px" },
						display: "flex",
						alignItems: "center",
					}}
				>
					<a href="/">
						<LogoThanhCoffee />
					</a>
				</Box>
				<Box
					sx={{
						fontSize: "15px",
						fontFamily: "Inter Bold",
						color: "black",
						display: "flex",
						alignItems: "center",
						gap: "50px",
					}}
				>
					<NavItem
						label="COFFEE"
						openMenu={openMenu}
						setOpenMenu={setOpenMenu}
						menuIndex={1}
					>
						<SubMenu
							closeMenuHandler={closeMenu}
							isOverflowState={[isOverflow, setIsOverflow]}
							items={[
								{ href: "/nguon-nguyen-lieu", label: "Nguồn nguyên liệu" },
								{ href: "/moi-truong", label: "Môi trường" },
							]}
						/>
					</NavItem>
					<NavItem
						label="MENU"
						openMenu={openMenu}
						setOpenMenu={setOpenMenu}
						menuIndex={2}
					>
						<SubMenu
							closeMenuHandler={closeMenu}
							isOverflowState={[isOverflow, setIsOverflow]}
							items={[{ href: "/do-uong", label: "Đồ uống" }]}
						/>
					</NavItem>
					{/* dành cho doanh nghiệp */}
					{/* <NavItem
						label="DÀNH CHO DOANH NGHIỆP"
						openMenu={openMenu}
						setOpenMenu={setOpenMenu}
						menuIndex={3}
					>
						<SubMenu
							closeMenuHandler={closeMenu}
							isOverflowState={[isOverflow, setIsOverflow]}
							items={[
								{ href: "/thiet-bi-nha-hang", label: "Thiết bị nhà hàng" },
								{
									href: "do-uong",
									label: "Thiết bị làm lạnh",
								},
								{
									href: "do-uong",
									label: "Trang bị nhỏ",
								},
								{
									href: "do-uong",
									label: "Thực phẩm và đồ uống",
								},
								{
									href: "do-uong",
									label: "Dụng cụ ăn uống",
								},
								{
									href: "do-uong",
									label: "Tabletop",
								},
								{
									href: "do-uong",
									label: "Đồ dùng một lần",
								},
								{
									href: "do-uong",
									label: "Đồ nội thất",
								},
								{
									href: "do-uong",
									label: "Lưu trữ & vận chuyển",
								},
								{
									href: "do-uong",
									label: "Đồ dùng vệ sinh",
								},
								{
									href: "do-uong",
									label: "Đồ dùng công nghiệp",
								},
							]}
						/>
					</NavItem> */}
					<NavItem
						label="THAM GIA THE THANH"
						openMenu={openMenu}
						setOpenMenu={setOpenMenu}
						menuIndex={4}
					>
						<SubMenu
							closeMenuHandler={closeMenu}
							isOverflowState={[isOverflow, setIsOverflow]}
							items={[
								{ href: "/gia-tri-va-van-hoa", label: "Đạo đức & tuân thủ" },
								// { href: "/tuyen-dung", label: "Tuyển dụng" },
								{ href: "/tham-gia-the-thanh", label: "Tham gia The Thanh" },
							]}
						/>
					</NavItem>
					<NavItem
						label="VỀ CHÚNG TÔI"
						openMenu={openMenu}
						setOpenMenu={setOpenMenu}
						menuIndex={5}
					>
						<SubMenu
							closeMenuHandler={closeMenu}
							isOverflowState={[isOverflow, setIsOverflow]}
							items={[
								{ href: "/cong-ty-cua-chung-toi", label: "Sứ mệnh, lời hứa và giá trị" },
								{ href: "/tin-san-pham", label: "Tin sản phẩm" },
								// { href: "/ho-so-cong-ty", label: "Hồ sơ công ty" },
							]}
						/>
					</NavItem>
					<NavItem
						label="CHỨNG CHỈ"
						openMenu={openMenu}
						setOpenMenu={setOpenMenu}
						menuIndex={6}
					>
						<SubMenu
							closeMenuHandler={closeMenu}
							isOverflowState={[isOverflow, setIsOverflow]}
							items={[
								{ href: "/chung-chi", label: "Chứng chỉ" },
								// { href: "/ho-so-cong-ty", label: "Hồ sơ công ty" },
							]}
						/>
					</NavItem>
				</Box>
				<Box
					sx={{
						display: "flex",
						gap: "30px",
						alignItems: "center",
					}}
				>
					<Box
						sx={{
							svg: { width: "25px", height: "25px" },
							"svg > path": { fill: "black" },
							cursor: "pointer",
						}}
					>
						<a
							href="/yeu-thich"
							rel="noreferrer"
						>
							<FavoriteIcon />
						</a>
					</Box>
					<a
						href="/tim-kiem-cua-hang"
						rel="noreferrer"
					>
						<Box
							sx={{
								svg: { width: "25px", height: "25px" },
								"svg > path": { fill: "black" },
								"svg > path#inner-circle": {
									fill: "white",
								},
								display: "flex",
								alignItems: "center",
								gap: "10px",
							}}
						>
							<ShopSearchIcon />
							<Box sx={{ fontWeight: 500 }}>TÌM CỬA HÀNG</Box>
						</Box>
					</a>
				</Box>
			</Box>
		</Box>
	);
};

export default NavBarDesktop;
