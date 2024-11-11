import React from "react";
import Modal from "../Modal";
import { Box } from "@mui/material";
import PayQR from "../../pages/PayQR";
import kichcodouongnong from "../img/kichcodouongnong.jpg";
import kichcodouonglanh from "../img/kichcodouonglanh.jpg";
import deliveryIcon from "../img/deliveryIcon.png";
import fakevideo3 from "../img/fakevideo3.png";
import { RESPONSIVE_MOBILE } from "../../styles";

const TitleModal = ({ children, styles, ...props }) => (
	<Box
		sx={{
			fontSize: "36px",
			fontWeight: "700",
			pb: "20px",
			[RESPONSIVE_MOBILE]: {
				fontSize: "28px",
			},
			...styles,
		}}
		{...props}
	>
		{children}
	</Box>
);

const Modals = ({ sizeHelper, closeModal, qr, isModalOpen, optionals, sales, deliveryModalOpened }) => {
	return (
		<>
			<Modal
				onClose={closeModal}
				isOpen={qr}
			>
				<Box>
					<PayQR />
				</Box>
			</Modal>
			<Modal
				onClose={closeModal}
				isOpen={isModalOpen === 1}
			>
				<Box
					sx={{
						p: "66px",
						pb: "68px",
						[RESPONSIVE_MOBILE]: {
							p: "30px",
							pt: "0",
						},
					}}
				>
					<TitleModal
						styles={{
							textAlign: "center",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Box>Bạn cần trợ giúp về kích cỡ?</Box>
					</TitleModal>
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							gap: "20px",
						}}
					>
						<Box
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								"& img": {
									maxWidth: "400px",
								},
								[RESPONSIVE_MOBILE]: {
									"& img": {
										maxWidth: "100%",
									},
								},
							}}
						>
							<img
								width={"100%"}
								src={kichcodouonglanh}
								alt=""
							/>
						</Box>
						<Box
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								[RESPONSIVE_MOBILE]: {
									display: "none",
								},
							}}
						>
							<img
								width={"400px"}
								src={kichcodouongnong}
								alt=""
							/>
						</Box>
					</Box>
					<Box
						sx={{
							mt: "20px",
							"& *": {
								fontFamily: "Inter !important",
								fontSize: "16px !important",
							},
							[RESPONSIVE_MOBILE]: {
								// padding: "17px 35px 20px 20px",
								p: 0,
								mt: "33px",
							},
						}}
					>
						{sizeHelper?.map((item) => {
							return (
								<p key={item?.id}>
									<b
										style={{
											fontSize: "20px",
										}}
									>
										{item.title}
									</b>
									<div
										dangerouslySetInnerHTML={{
											__html: item.details,
										}}
									></div>
								</p>
							);
						})}
					</Box>
				</Box>
			</Modal>
			<Modal
				onClose={closeModal}
				isOpen={isModalOpen === 2}
			>
				<Box>
					<Box
						sx={{
							p: "20px 46px 0px 46px",
							fontSize: "28px",
							fontWeight: "700",
						}}
					>
						<Box>Ly cafe nào sẽ phù hợp với bạn?</Box>
					</Box>
					<Box
						sx={{
							p: "17px 35px 20px 29px",
						}}
					>
						{optionals && optionals.map((item) => <p key={item?.id}>{item?.title}</p>)}
					</Box>
				</Box>
			</Modal>
			<Modal
				onClose={closeModal}
				isOpen={isModalOpen === 3}
			>
				<Box sx={{}}>
					<Box
						sx={{
							p: "120px 70px 40px",
							fontSize: "40px",
							fontWeight: "700",
						}}
					>
						<Box>Quá trình tùy chỉnh diễn ra như thế nào?</Box>
					</Box>
					<Box
						sx={{
							p: "0px 70px",
						}}
					>
						{optionals?.map((item) => (
							<p
								key={item?.id}
								dangerouslySetInnerHTML={{
									__html: item?.details,
								}}
							></p>
						))}
					</Box>
					<Box sx={{ p: "0px 70px 40px" }}>
						<img
							width={"100%"}
							src={fakevideo3}
							alt=""
						/>
					</Box>
				</Box>
			</Modal>
			<Modal
				onClose={closeModal}
				isOpen={isModalOpen === 4}
			>
				<Box
					sx={{
						p: "66px",
						pb: "68px",
						[RESPONSIVE_MOBILE]: {
							p: "0px 28px 68px",
						},
					}}
				>
					<TitleModal>Ưu đãi dành cho bạn</TitleModal>
					<Box>
						{sales?.map((item) => (
							<Box
								key={item?.id}
								sx={{
									[RESPONSIVE_MOBILE]: {
										"& *": {
											fontSize: "16px!important",
										},
									},
								}}
								dangerouslySetInnerHTML={{
									__html: item?.details,
								}}
							></Box>
						))}
					</Box>
				</Box>
			</Modal>
			<Modal
				isOpen={isModalOpen >= 5}
				onClose={closeModal}
			>
				<Box sx={{ p: "120px 70px" }}>
					<Box
						sx={{
							position: "absolute",
							top: 40,
							left: 70,
						}}
					>
						<Box
							sx={{
								width: "50px",
								height: "50px",
							}}
						>
							<img
								width={"100%"}
								alt="?"
								src={deliveryIcon}
							/>
						</Box>
					</Box>
					<Box
						sx={{
							fontSize: "24px",
							fontWeight: "700",
							pb: "40px",
						}}
					>
						<Box>{deliveryModalOpened?.title}</Box>
					</Box>
					<Box
						sx={{
							p: { fontSize: "16px" },
						}}
						dangerouslySetInnerHTML={{
							__html: deliveryModalOpened?.details,
						}}
					></Box>
				</Box>
			</Modal>
		</>
	);
};

export default Modals;
