import React, { memo, useContext, useState } from "react";
import { RESPONSIVE_DESKTOP, styles } from "../../styles.js";
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Drawer } from "@mui/material";
import LogoThanhCoffee from "../svg/logoThanhCoffee.jsx";
import MenuIcon from "../svg/icon/MenuIcon.jsx";
import ExitIcon from "../svg/icon/ExitIcon.jsx";
import ShopSearchIcon from "../svg/icon/ShopSearchIcon.jsx";
import FavoriteIcon from "../svg/icon/FavoriteIcon.jsx";
import Avatar1 from "../svg/icon/Avatar1.jsx";
import ArrowDownBlack from "../svg/icon/ArrowDownBlack.jsx";
import { MobileContext } from "../../store/context/Mobile.jsx";
import { useLocation } from "react-router-dom";
import { useData } from "../../hooks/useData.js";
import NavBarDesktop from "./NavBar/Desktop.jsx";

const hiddenItems = [
	28, // hồ sơ công ty
	31, //nhà cung cấp
	34, //vận chuyển và giao hàng
];

const NavBar = memo(() => {
	const [open, setOpen] = useState(false);
	const { isMobile } = useContext(MobileContext);
	const [items] = useData("topics/navbar");
	const menuLocation = useLocation();
	const renderSubTopics = (sub) => {
		return sub.subTopics && sub.subTopics.length > 0 ? (
			renderTopics(sub)
		) : hiddenItems.includes(sub?.id) ? null : (
			<AccordionDetails
				sx={{
					backgroundColor: "white",
					...styles.pad20,
					borderBottom: "solid black 1px",
				}}
				key={sub?.id}
			>
				<Box
					sx={{
						...styles.fontSize13,
						height: "50px",
						...styles.centerFlex,
					}}
				>
					<a href={sub?.link}>
						<Box>{sub?.title}</Box>
					</a>
				</Box>
				{sub?.subTopics && sub?.subTopics.length > 0 && sub?.subTopics.map(renderSubTopics)}
			</AccordionDetails>
		);
	};

	const renderTopics = (topic) => {
		return (
			<Box
				sx={{ position: "relative" }}
				key={topic?.id}
			>
				<Accordion
					sx={{
						textAlign: "justify",
						"&.MuiAccordion-root": { boxShadow: "0" },
					}}
					disableGutters={true}
				>
					<AccordionSummary
						expandIcon={<ArrowDownBlack />}
						aria-controls="panel1a-content"
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							gap: "10px",
							color: "black",
							width: "100%",
							...styles.pad20,
							backgroundColor: "#F3F1EC",
							borderBottom: "solid black 1px",
							"&	.MuiAccordionSummary-content": {
								margin: 0,
							},
						}}
					>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								width: "100%",
								justifyContent: "space-between",
							}}
						>
							{topic.link && topic.link !== "#" ? (
								<a href={topic?.link}>
									<Box
										sx={{
											fontWeight: "bold",
											...styles.fontSize13,
										}}
									>
										{topic?.title}
									</Box>
								</a>
							) : (
								<Box
									sx={{
										fontWeight: "bold",
										...styles.fontSize13,
									}}
								>
									{topic?.title}
								</Box>
							)}
							<Box sx={{ width: "50px", height: "50px" }}></Box>
						</Box>
					</AccordionSummary>
					{topic?.subTopics && topic?.subTopics.length > 0 && topic?.subTopics.map(renderSubTopics)}
				</Accordion>
				{/* <Box sx={{ position: "absolute", top: "5px", right: "50px" }}>
          <Avatar1 />
        </Box> */}
			</Box>
		);
	};

	return (
		<Box sx={{ ...styles.fontSize13 }}>
			<Box
				sx={{
					position: "fixed",
					top: 0,
					right: 0,
					left: 0,
					zIndex: 10,
					[RESPONSIVE_DESKTOP]: {
						display: "none",
					},
					display: "block",
				}}
			>
				<Box
					sx={{
						backgroundColor: "black",
						display: "flex",
						justifyContent: "space-between",
						p: "0px 24px",
						height: "56px",
					}}
				>
					<Box sx={{ ...styles.centerFlex }}>
						<a href="/">
							<LogoThanhCoffee />
						</a>
					</Box>
					<Box
						sx={{
							display: "flex",
							gap: "5px",
							alignItems: "center",
						}}
					>
						<a
							href="/tim-kiem-cua-hang"
							rel="noreferrer"
						>
							<Box
								sx={{
									"svg > path#inner-circle": {
										fill: "black",
									},
									...styles.centerFlex,
									gap: "10px",
								}}
							>
								<ShopSearchIcon />
								<Box
									sx={{
										fontWeight: 500,
										color: "white",
										fontSize: "12px",
									}}
								>
									TÌM CỬA HÀNG
								</Box>
							</Box>
						</a>
						<Button
							sx={{ p: "10px", minWidth: 0 }}
							onClick={() => setOpen(true)}
						>
							<MenuIcon />
						</Button>
					</Box>
				</Box>
			</Box>
			<NavBarDesktop />
			<Drawer
				transitionDuration={700}
				sx={{
					position: "relative",
					"& .MuiDrawer-paperAnchorLeft": {
						backgroundColor: "#F3F1EC",
						width: "87.5%",
					},
				}}
				open={open}
				anchor="left"
			>
				<Box sx={{ display: "flex" }}>
					<Box sx={{ width: "100%" }}>
						<Box
							sx={{
								backgroundColor: "black",
								display: "flex",
								justifyContent: "right",
								alignItems: "center",
								p: "0px 20px",
								height: "56px",
								gap: "30px",
							}}
						>
							<ShopSearchIcon />
							<Box sx={{ position: "relative" }}>
								<a
									href="/yeu-thich"
									rel="noreferrer"
								>
									<FavoriteIcon />
								</a>
							</Box>
							<Button
								onClick={() => setOpen(false)}
								sx={{
									p: 0,
									minWidth: 0,
									zIndex: 10,
								}}
							>
								<ExitIcon />
							</Button>
						</Box>
						{items
							?.filter((item) => {
								return !hiddenItems.includes(item?.id);
							})
							.map(renderTopics)}
					</Box>
				</Box>
			</Drawer>
		</Box>
	);
});

export default NavBar;
