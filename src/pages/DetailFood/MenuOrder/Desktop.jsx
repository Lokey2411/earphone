import { Accordion, AccordionDetails, AccordionSummary, Box } from "@mui/material";
import ArrowDownBlack from "../../../component/svg/icon/ArrowDownBlack";
import { styles } from "../../../styles";
import FakeVideo from "../../../component/img/FakeVideo.jpg";
import coffeeorder from "../../../component/img/coffeeorder.jpg";
import Footer from "../../../component/layout/Footer";
import { useQuestions } from "../../../hooks/useQuestions";
import ExitCircleIcon from "../../../component/svg/icon/ExitCircleIcon";
import PayQR from "../../PayQR";
import { useState } from "react";
import DrinkHelp from "../../../component/img/DrinkHelp.png";
import BuyOnAppIcon from "../../../component/img/sanphamtrenapp.png";
const Desktop = () => {
	const [questions] = useQuestions();
	const [qr, setQr] = useState(false);
	return (
		<Box sx={{ ...styles.fontSize13 }}>
			{qr && (
				<Box
					sx={{
						position: "fixed",
						top: 0,
						left: 0,
						bottom: 0,
						right: 0,
						background: " rgba(0, 0, 0, 0.70)",
						zIndex: "1000",
						p: "60px 325px",
						overflow: "auto",
					}}
				>
					<Box
						sx={{
							backgroundColor: "white",
							opacity: 1,
							borderRadius: "19px",
						}}
					>
						<Box
							sx={{
								height: "100%",
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-between",
							}}
						>
							<Box sx={{ position: "relative" }}>
								<Box>
									<Box
										sx={{
											position: "absolute",
											top: 40,
											right: 40,
										}}
										onClick={() => setQr(false)}
									>
										<Box
											sx={{
												"g > path#Vector": { fill: "black" },
												"g > path#Vector_2,path#Vector_3": {
													stroke: "white",
												},
												svg: { width: "50px", height: "50px" },
											}}
										>
											<ExitCircleIcon />
										</Box>
									</Box>
								</Box>
								{qr && (
									<Box>
										<PayQR />
									</Box>
								)}
							</Box>
							<Box
								sx={{
									...styles.centerFlex,
									justifyContent: "center",
									flexDirection: "column",
									borderRadius: " 0px 0px 19px 19px",
									...styles.backgroundColor.xamD9,
									fontSize: "15px",
									fontWeight: 400,
									p: "10px 0px",
								}}
							>
								<Box>
									<img
										src={DrinkHelp}
										alt=""
									/>
								</Box>
								<Box>Bạn có thêm câu hỏi nào nữa không?</Box>
								<Box sx={{ ...styles.fontColor.xanhNhat006241 }}>Hỏi chuyên gia Coffee</Box>
							</Box>
						</Box>
					</Box>
				</Box>
			)}
			<Box
				sx={{
					position: "fixed",
					left: 0,
					right: 0,
					zIndex: "4",
				}}
			>
				<Box
					sx={{
						height: "60px",
						background: "#DBDAD5",
						p: "0px 80px",
						borderBottom: "1px #575757 solid",
						...styles.centerFlex,
						justifyContent: "space-between",
						fontSize: "20px",
						fontWeight: "600",
					}}
				>
					<Box>Americano</Box>
					<Box>Chỉ từ 35.000đ/ly</Box>
				</Box>
				<Box
					sx={{
						fontSize: "8px",
						display: "flex",
						background: "#DBDAD5",
						justifyContent: "right",
						alignItems: "center",
						height: "67px",
						p: "0px 80px",
					}}
				>
					<Box sx={{ fontSize: "14px" }}>Mua qua ứng dụng</Box>
					<Box
						sx={{
							pl: "15px",
						}}
					>
						<img
							alt="?"
							src={BuyOnAppIcon}
						/>
					</Box>
					<Box
						sx={{
							pl: "50px",
						}}
					>
						<Box sx={{ fontSize: "14px" }}>Mua tại cửa hàng</Box>
						<Box
							sx={{
								fontWeight: "600",
								textDecorationLine: "underline",
								fontSize: "16px",
							}}
						>
							Chọn một cửa hàng
						</Box>
					</Box>
					<Box
						sx={{
							pl: "22px",
						}}
					>
						<ArrowDownBlack />
					</Box>
				</Box>
			</Box>
			<Box sx={{ display: "flex", p: "207px 80px 80px", gap: "40px" }}>
				<Box sx={{ width: "70%" }}>
					<img
						style={{
							borderRadius: "10px",
							width: "100%",
						}}
						src={FakeVideo}
						alt="lựa chọn tốt nhất cho bạn"
					/>
				</Box>
				<Box sx={{ width: "calc(30% - 40px)" }}>
					<Box
						sx={{
							fontSize: "32px",
							textTransform: "uppercase",
							fontWeight: "600",
						}}
					>
						Lựa chọn nào tốt nhất cho bạn?
					</Box>
					<Box
						sx={{
							display: "flex",
							fontSize: "15px",
							fontWeight: "600",
							m: "30px 0 25px",
							textAlign: "center",
							justifyContent: "center",
							alignItems: "center",
							border: "1px solid #000",
							borderRadius: "10px",
							p: "32px 0",
						}}
					>
						Nóng
					</Box>
					<Box
						sx={{
							display: "flex",
							fontSize: "15px",
							fontWeight: "600",
							textAlign: "center",
							justifyContent: "center",
							alignItems: "center",
							border: "1px solid #000",
							borderRadius: "10px",
							p: "32px 0",
						}}
					>
						Lạnh
					</Box>
				</Box>
			</Box>
			<Box sx={{ display: "flex", p: "0 80px 80px", gap: "40px" }}>
				<Box sx={{ width: "70%" }}>
					<img
						style={{
							borderRadius: "10px",
							width: "100%",
						}}
						src={FakeVideo}
						alt="Bạn có muốn thay đổi loại sữa không?"
					/>
				</Box>
				<Box sx={{ width: "calc(30% - 40px)" }}>
					<Box
						sx={{
							fontSize: "32px",
							textTransform: "uppercase",
							fontWeight: "600",
						}}
					>
						Bạn có muốn thay đổi loại sữa không?
					</Box>
					<Box
						sx={{
							fontSize: "15px",
							m: "30px 0 25px",
							border: "1px solid #000",
							borderRadius: "10px",
							p: "15px 20px",
						}}
					>
						<strong>Sữa ít kem béo </strong>
						<br />
						+10.000đ
					</Box>
					<Box
						sx={{
							fontSize: "15px",
							m: "25px 0 ",
							border: "1px solid #000",
							borderRadius: "10px",
							p: "15px 20px",
						}}
					>
						<strong>Kem muối </strong>
						<br />
						+10.000đ
					</Box>
					<Box
						sx={{
							fontSize: "15px",
							border: "1px solid #000",
							borderRadius: "10px",
							p: "15px 20px",
						}}
					>
						<strong>Milk foam </strong>
						<br />
						+10.000đ
					</Box>
				</Box>
			</Box>
			<Box sx={{ display: "flex", p: "0 80px 80px", gap: "40px" }}>
				<Box sx={{ width: "70%" }}>
					<img
						style={{
							borderRadius: "10px",
							width: "100%",
						}}
						src={FakeVideo}
						alt="Bạn có muốn thêm topping vào ly cafe không ?"
					/>
				</Box>
				<Box sx={{ width: "calc(30% - 40px)" }}>
					<Box
						sx={{
							fontSize: "32px",
							textTransform: "uppercase",
							fontWeight: "600",
						}}
					>
						Bạn có muốn thêm topping vào ly cafe không ?
					</Box>
					<Box
						sx={{
							fontSize: "15px",
							m: "30px 0 25px",
							border: "1px solid #000",
							borderRadius: "10px",
							p: "15px 20px",
						}}
					>
						<strong>Trân châu hoàng kim </strong>
						<br />
						+10.000đ
					</Box>
					<Box
						sx={{
							fontSize: "15px",
							m: "25px 0 ",
							border: "1px solid #000",
							borderRadius: "10px",
							p: "15px 20px",
						}}
					>
						<strong>Thạch pudding </strong>
						<br />
						+10.000đ
					</Box>
					<Box
						sx={{
							fontSize: "15px",
							border: "1px solid #000",
							borderRadius: "10px",
							p: "15px 20px",
						}}
					>
						<strong>Kem muối</strong>
						<br />
						+10.000đ
					</Box>
				</Box>
			</Box>
			<Box
				sx={{
					display: "flex",
					gap: "136px",
					justifyContent: "space-between",
					p: "0 80px 30px",
					borderBottom: "solid black 1px",
				}}
			>
				<Box sx={{ width: "33.33%" }}>
					<Box sx={{}}>
						<Box
							sx={{
								...styles.centerFlex,
								fontWeight: "600",
								fontSize: "32px",
							}}
						>
							Ly cafe của bạn đã sẵn sàng
						</Box>
						<Box
							sx={{
								...styles.centerFlex,
								fontWeight: 600,
								fontSize: "32px",
								color: "#00754A",
							}}
						>
							Hãy thưởng thức như cách bạn muốn
						</Box>
					</Box>
					<Box
						sx={{
							borderRadius: "15px",
							p: "50px 50px",
							...styles.centerFlex,
							height: "250px",
							justifyContent: "center",
						}}
					>
						<img
							style={{
								borderRadius: "10px",
								height: "100%",
							}}
							src={coffeeorder}
							alt="lựa chọn tốt nhất cho bạn"
						/>
					</Box>
				</Box>
				<Box sx={{ width: "33.33%" }}>
					<Box
						sx={{
							fontSize: "24px",
							fontWeight: "bold",
						}}
					>
						Americano
					</Box>
					<Box
						sx={{
							fontSize: "16px",
							p: "15px 0",
						}}
					>
						Chỉ từ 35.000đ/ly
					</Box>
					<Box
						sx={{
							fontSize: "16px",
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						<Box>Số lượng</Box>
						<Box
							sx={{
								fontSize: "16px",
								display: "flex",
							}}
						>
							<Box
								sx={{
									border: "1px solid black",
									p: "0 5px",
								}}
							>
								-
							</Box>
							<Box
								sx={{
									border: "1px solid black",
									p: "0 20px",
								}}
							>
								1
							</Box>
							<Box
								sx={{
									...styles.centerFlex,
									border: "1px solid black",
									p: "0 5px",
								}}
							>
								+
							</Box>
						</Box>
					</Box>
					<Box
						sx={{
							p: "20px 20px 20px 20px",
							borderBottom: "1px solid black",
						}}
					></Box>
					<Box
						sx={{
							fontSize: "24px",
							fontWeight: "bold",
							p: "30px 0 15px",
						}}
					>
						Americano
					</Box>
					<Box
						sx={{
							fontSize: "16px",
						}}
					>
						<ul style={{ paddingLeft: "20px", paddingBottom: "20px" }}>
							<li>Lạnh</li>
							<li>Kem muối</li>
							<li>Thạch Pudding</li>
						</ul>
					</Box>

					<Box
						onClick={() => (setQr(1), console.log(qr))}
						sx={{
							fontSize: "14px",
							color: "#ffffff",
							background: "#1E3932",
							height: "40px",
							width: "auto",
							display: "flex",
							alignItems: "center",
							textAlign: "center",
							justifyContent: "center",
						}}
					>
						Hiển thị mã đơn hàng
					</Box>
					<Box
						sx={{
							p: "20px 20px 20px 20px",
							borderBottom: "1px solid black",
						}}
					></Box>
					<Box sx={{ pt: "30px" }}>Chi tiết giao hàng cho khu vực của bạn sẽ được hiển thị trong Checkout.</Box>
				</Box>
				<Box sx={{ width: "33.33%", fontSize: "16px" }}>
					<Box sx={{ fontSize: "20px", fontWeight: 700 }}>Nhận hàng:</Box>
					<Box>Đặt hàng trước 3:00 chiều</Box>
					<Box>
						Giao hàng đến <span style={{ color: "#006241" }}>Hà Nội</span>
					</Box>
					<Box sx={{ fontWeight: "600" }}>Thứ 4 17/04/2024 - Miễn phí</Box>
				</Box>
			</Box>
			<Box sx={{ p: "80px 200px" }}>
				<Box
					sx={{
						fontSize: "40px",
						fontWeight: "600",
						pb: "30px",
						borderBottom: "solid black 1px",
					}}
				>
					Các câu hỏi thường gặp
				</Box>
				{questions?.map((q) => (
					<Accordion
						key={q?.id}
						sx={{
							"&.MuiAccordion-root": { boxShadow: "none" },
							"&.Mui-expanded": { margin: 0 },
						}}
					>
						<AccordionSummary
							expandIcon={<ArrowDownBlack />}
							aria-controls="panel1-content"
							id="panel1-header"
							sx={{
								"& .MuiAccordionSummary-content": {
									margin: "20px 0",
									padding: 0,
								},
								fontSize: "24px",
								"&.MuiAccordionSummary-root": {
									padding: 0,
									borderBottom: "solid black 1px",
								},
							}}
						>
							{q?.title}
						</AccordionSummary>
						<AccordionDetails
							sx={{
								fontSize: "20px",
								"&.MuiAccordionDetails-root": { p: "20px" },
								borderBottom: "solid black 1px",
								background: "#D9D9D9",
							}}
						>
							{q?.answer}.
						</AccordionDetails>
					</Accordion>
				))}
			</Box>
			<Footer />
		</Box>
	);
};

export default Desktop;
