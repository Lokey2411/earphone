import { Box, Container, InputAdornment, TextField } from "@mui/material";
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from "@mui/material";
import { useState } from "react";
import NavBar from "../../component/layout/NavBar";
import Footer from "../../component/layout/Footer";
import { styles } from "../../styles";
import VIconDesktop from "../../component/svg/icon/VIconDesktop";
import Layout from "../../component/layout";
import vuoncoffee from "../../component/img/vuoncoffee.jpg";
import TichVIcon from "../../component/svg/icon/TichVIcon";
import TichXIcon from "../../component/svg/icon/TichXICon";
import tintuc1 from "../../component/img/tintuc1.jpg";
import MenuSearchIconBlack from "../../component/svg/icon/MenuSearchIconBlack";
import LeftArrowBlack from "../../component/svg/icon/LeftArrowBlack";
import ShopOpenLeftArrowBlack from "../../component/svg/icon/ShopOpenLeftArrowBlack";
import ShopIcon from "../../component/svg/icon/ShopIcon";
import PanToolIcon from "../../component/svg/icon/PanToolIcon";
import { useParams } from "react-router-dom";
import { useData } from "../../hooks/useData";
import cuahang1 from "../../component/img/cuahang1.png";
import trogiupchuyengia from "../../component/img/trogiupchuyengia.png";
import timcuahang1 from "../../component/img/timcuahang1.png";
import timcuahang2 from "../../component/img/timcuahang2.png";
const Desktop = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const handleSearch = (event) => {
		setSearchTerm(event.target.value);
	};
	const [suggestion, setSuggestion] = useState(false);
	const weekdays = ["Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy", "Chủ Nhật"];
	const { id } = useParams();
	const [isOpenForm, setIsOpenForm] = useState(0);
	const [shops] = useData("departments/" + id);
	return (
		<Box sx={{ ...styles.fontSize13 }}>
			<NavBar />
			<Layout.MainBg>
				{[1, 2, 3, 4].includes(isOpenForm) && (
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
												top: 50,
												right: 50,
											}}
											onClick={() => setIsOpenForm(0)}
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
												<TichXIcon />
											</Box>
										</Box>
									</Box>
									{isOpenForm === 1 && (
										<Box
											sx={{
												p: "130px 80px",
											}}
										>
											<Box
												sx={{
													pb: "30px",
													fontSize: "40px",
													fontWeight: "600",
													textAlign: "center",
												}}
											>
												Dịch vụ tại Thanh Coffee
											</Box>
											<Box
												sx={{
													display: "flex",
													justifyContent: "space-between",
													gap: "70px",
												}}
											>
												<Box sx={{ width: "-webkit-fill-available" }}>
													<Box sx={{ pb: "10px" }}>
														<Box
															sx={{
																fontSize: "16px",
																pb: "15px",
																fontWeight: "600",
															}}
														>
															Hỗ trợ điểm bán
														</Box>
														<Box
															sx={{
																display: "flex",
																flexDirection: "column",
																gap: "5px",
															}}
														>
															<Box sx={{ display: "flex" }}>
																<Box sx={{ pr: "10px" }}>
																	<TichVIcon />
																</Box>
																<Box>Mua sắm tại cửa hàng</Box>
															</Box>
															<Box sx={{ display: "flex" }}>
																<Box sx={{ pr: "10px" }}>
																	<TichVIcon />
																</Box>
																<Box>Đặt chỗ trước tại cửa hàng</Box>
															</Box>
															<a
																href="https://web.facebook.com/profile.php?id=61560917203069"
																style={{
																	display: "flex",
																	"svg>path": { stroke: "#00754A" },
																}}
															>
																<Box
																	sx={{
																		color: "#00754A",
																		mr: "5px",
																		ml: "30px",
																	}}
																>
																	Đặt lịch hẹn
																</Box>
																<LeftArrowBlack />
															</a>
															<Box sx={{ display: "flex" }}>
																<Box
																	sx={{
																		pr: "10px",
																		svg: { width: "20px", height: "20px" },
																	}}
																>
																	<TichXIcon />
																</Box>
																<Box>Xe ô tô chỉ được dừng đỗ không quá 10 phút</Box>
															</Box>
														</Box>
													</Box>
													<Box>
														<Box
															sx={{
																fontSize: "16px",
																pb: "15px",
																fontWeight: "600",
															}}
														>
															Nhận / Giao hàng
														</Box>
														<Box
															sx={{
																display: "flex",
																flexDirection: "column",
																gap: "5px",
															}}
														>
															<Box sx={{ display: "flex" }}>
																<Box sx={{ pr: "10px" }}>
																	<TichVIcon />
																</Box>
																<Box>Nhận đơn đặt hàng trực tuyến tại cửa hàng</Box>
															</Box>
															<a
																href="/tro-giup-mua-sam"
																style={{
																	display: "flex",
																	"svg>path": { stroke: "#00754A" },
																}}
															>
																<Box
																	sx={{
																		color: "#00754A",
																		mr: "5px",
																		ml: "30px",
																	}}
																>
																	Tìm hiểu thêm
																</Box>
																<LeftArrowBlack />
															</a>
														</Box>
													</Box>
												</Box>
											</Box>
											<Box
												sx={{
													p: "30px 0px",
													fontSize: "40px",
													fontWeight: "600",
													textAlign: "center",
												}}
											>
												Dịch vụ có sẵn trực tuyến
											</Box>
											<Box
												sx={{
													display: "flex",
													justifyContent: "space-between",
													gap: "70px",
												}}
											>
												<Box sx={{ width: "-webkit-fill-available" }}>
													<Box
														sx={{
															display: "flex",
															svg: { width: "20px", height: "20px" },
														}}
													>
														<Box sx={{ pr: "10px" }}>
															<ShopIcon />
														</Box>
														<Box>Hỗ trợ thắc mắc sản phẩm </Box>
													</Box>
													<a
														href="https://web.facebook.com/profile.php?id=61560917203069"
														style={{
															display: "flex",
															"svg>path": { stroke: "#00754A" },
														}}
													>
														<Box
															sx={{
																color: "#00754A",
																mr: "5px",
																ml: "30px",
															}}
														>
															Trò chuyện cùng chúng tôi
														</Box>
														<LeftArrowBlack />
													</a>
												</Box>
											</Box>
										</Box>
									)}
									{isOpenForm === 2 && (
										<Box sx={{ p: "130px 50px", fontSize: "16px" }}>
											<Box
												sx={{
													pb: "50px",
													fontSize: "40px",
													fontWeight: "600",
													textAlign: "center",
												}}
											>
												Bản đồ và chỉ đường
											</Box>
											<Box sx={{ display: "flex", gap: "50px" }}>
												<Box>
													<iframe
														src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d770.6274842841947!2d105.82734475459331!3d21.034810878218945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab000b070be5%3A0xf334bd0df60de4df!2zQ8OgIFBow6ogVGhlIFRoYW5o!5e0!3m2!1svi!2s!4v1719887899465!5m2!1svi!2s"
														width="600"
														height="450"
														title="Map"
														style={{ border: "0" }}
														allowfullscreen=""
														loading="lazy"
														referrerpolicy="no-referrer-when-downgrade"
													></iframe>
												</Box>
												<Box>
													<Box
														sx={{
															pb: "15px",
															fontSize: "24px",
															fontWeight: "bold",
														}}
													>
														Địa chỉ
													</Box>
													<Box sx={{ pb: "25px", lineHeight: "150%" }}>
														<Box>Cửa hàng Cà Phê TheThanh</Box>
														<Box>Số 147, Đội Cấn</Box>
														<Box>Ba Đình, Hà Nội</Box>
														<a
															href="tel:(+84)911830666"
															style={{ color: "#006241" }}
														>
															(+84) 911830666
														</a>
													</Box>
													<Box
														sx={{
															pb: "15px",
															fontSize: "24px",
															fontWeight: "bold",
														}}
													>
														Làm sao để tới đây?
													</Box>
													<Box sx={{ pb: "24px", lineHeight: "150%" }}>Quán cà phê nằm ở giữa Ba Đình, Nơi Bác Hồ đọc tuyên ngôn độc lập khai sinh ra nước Cộng Hoà Xã Hội Chủ Nghĩa Việt Nam. Chúng tôi đem đến những thức uống đậm chất Việt Nam, các bạn có thể ghé qua để uống những thức uống tuyệt hảo: 147 Đội Cấn, Ba Đình, Hà Nội</Box>
												</Box>
											</Box>
										</Box>
									)}
								</Box>
							</Box>
						</Box>
					</Box>
				)}
				<Box sx={{ pt: "24px" }}></Box>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						background: "#D9D9D9",
						p: "5px 80px",
						borderBottom: "1px solid black",
					}}
				>
					<Box
						sx={{
							fontWeight: "500",
							width: "85px",
						}}
					>
						Tìm cửa hàng
					</Box>
					<Box
						sx={{
							p: "7px 20px",
							backgroundColor: "white",
							border: "black solid 1px",
							borderRadius: "19px",
							width: "300px",
						}}
					>
						<Container
							sx={{
								"&.MuiContainer-root": {
									maxWidth: "100%",
								},
							}}
							disableGutters
						>
							<TextField
								type="search"
								id="search"
								placeholder=" Tìm kiếm theo vị trí hoặc tên cửa hàng,..."
								value={searchTerm}
								onChange={handleSearch}
								onClick={(e) => {
									setSuggestion(true);
									e.stopPropagation();
								}}
								sx={{
									width: "100%",
									"& .MuiOutlinedInput-root": { border: "none" },
									".MuiOutlinedInput-notchedOutline:hover,.MuiOutlinedInput-notchedOutline": { border: "none" },
									".MuiInputBase-root": {
										padding: 0,
										margin: 0,
									},
									".MuiInputBase-input": { p: 0, fontSize: "13px" },
								}}
								InputProps={{
									startAdornment: (
										<InputAdornment
											sx={{
												"&.MuiInputAdornment-outlined": {
													margin: 0,
													padding: 0,
													marginRight: "10px",
													svg: { width: "14px", height: "14px" },
												},
											}}
											position="start"
										>
											<MenuSearchIconBlack />
										</InputAdornment>
									),
								}}
							/>
						</Container>
					</Box>
					<Box sx={{ width: "85px" }}></Box>
				</Box>
				<Box
					sx={{
						...styles.centerFlex,
						justifyContent: "space-between",
						p: "60px 155px 15px",
					}}
				>
					<a
						href="/tim-kiem-cua-hang"
						styles={{ svg: { width: "50px", height: "30px" } }}
					>
						<ShopOpenLeftArrowBlack />
					</a>
					<Box
						sx={{
							fontSize: "40px",
							fontWeight: "600",
							textAlign: "center",
						}}
					>
						{shops?.name} {shops?.address}
					</Box>
					<Box sx={{ width: "50px" }}></Box>
				</Box>
				<Box
					sx={{
						textAlign: "center",
						fontSize: "20px",
						pb: "60px",
					}}
				>
					Mở cửa tới {shops?.closeTime}
				</Box>
				<Box
					sx={{
						...styles.centerFlex,
					}}
				>
					<img
						width={"100%"}
						height={"1000px"}
						src={shops?.image}
						alt="Vườn Coffee"
						style={{ objectFit: "cover" }}
					/>
				</Box>
				<Box sx={{ backgroundColor: "#EDEBE8", p: "70px 300px 16px" }}>
					<Box
						sx={{
							...styles.centerFlex,
							justifyContent: "space-between",
							svg: { width: "70px", height: "70px" },
							pb: "30px",
						}}
					>
						<Box>
							<Box
								sx={{
									pb: "10px",
								}}
							>
								<VIconDesktop />
							</Box>
							<Box
								sx={{
									fontWeight: "bold",
									fontSize: "16px",
								}}
							>
								Mua sắm
								<Box sx={{ fontWeight: 400, fontSize: "11px" }}>bằng cách tới cửa hàng</Box>
							</Box>
							<Box
								onClick={() => setIsOpenForm(2)}
								sx={{
									color: "#00754A",
									display: "flex",
									gap: "5px",
									paddingTop: "5px",
									cursor: "pointer",
								}}
							>
								<Box>Xem thêm</Box>
								<Box
									sx={{
										"svg > path": { stroke: "#006241" },
										svg: { width: "7px", height: "13px" },
										...styles.centerFlex,
									}}
								>
									<LeftArrowBlack />
								</Box>
							</Box>
						</Box>
						<Box>
							<Box
								sx={{
									pb: "10px",
								}}
							>
								<VIconDesktop />
							</Box>
							<Box
								sx={{
									fontWeight: "bold",
									fontSize: "16px",
								}}
							>
								Xem Danh sách
								<Box sx={{ fontWeight: 400, fontSize: "11px" }}>Đồ uống của chúng tôi</Box>
							</Box>
							<a
								href="/do-uong"
								style={{
									color: "#00754A",
									display: "flex",
									gap: "5px",
									paddingTop: "5px",
								}}
							>
								<Box>Xem thêm</Box>
								<Box
									sx={{
										"svg > path": { stroke: "#006241" },
										svg: { width: "7px", height: "13px" },
										...styles.centerFlex,
									}}
								>
									<LeftArrowBlack />
								</Box>
							</a>
						</Box>
						<Box>
							<Box
								sx={{
									pb: "10px",
								}}
							>
								<VIconDesktop />
							</Box>
							<Box
								sx={{
									fontWeight: "bold",
									fontSize: "16px",
								}}
							>
								Mua sắm
								<Box sx={{ fontWeight: 400, fontSize: "11px" }}>bằng ứng dụng đặt hàng</Box>
							</Box>
							<Box
								onMouseOver={() => setIsOpenForm(-10)}
								onMouseOut={() => setIsOpenForm(0)}
								sx={{
									position: "relative",
									color: "#00754A",
									display: "flex",
									gap: "5px",
									paddingTop: "5px",
									cursor: "pointer",
								}}
							>
								<Box>Xem thêm</Box>
								<Box
									sx={{
										"svg > path": { stroke: "#006241" },
										svg: { width: "7px", height: "13px" },
										...styles.centerFlex,
									}}
								>
									<LeftArrowBlack />
								</Box>
								{isOpenForm === -10 && (
									<Box
										sx={{
											position: "absolute",
											top: 30,
											background: "black",
											color: "white",
											p: "5px 10px",
											borderRadius: "10px",
										}}
									>
										Sắp ra mắt
									</Box>
								)}
							</Box>
						</Box>
					</Box>
					<Box
						sx={{
							p: "0px 24px",
							color: "#006241",
							textDecoration: "none",
							textAlign: "center",
							cursor: "pointer",
						}}
						onClick={() => setIsOpenForm(1)}
					>
						Xem tất cả các dịch vụ tại của hàng và trực tuyến
					</Box>
				</Box>
				<Box
					sx={{
						mt: "50px",
						display: "flex",
						justifyContent: "space-between",
						p: "0px 80px 80px",
						gap: "125px",
					}}
				>
					<Box>
						<Box
							sx={{
								fontWeight: "700",
								fontSize: "24px",
								p: "30px 0px 25px",
							}}
						>
							Địa chỉ
						</Box>
						<Box sx={{}}>
							<Box>Số 147, Đội Cấn</Box>
							<Box>Ba Đình, Hà Nội</Box>
							<a
								href="tel:(+84)911830666"
								style={{ color: "#006241" }}
							>
								(+84) 911830666
							</a>
						</Box>
						<Box
							sx={{ color: "#006241", pt: "20px", cursor: "pointer" }}
							onClick={() => setIsOpenForm(2)}
						>
							Xem bản đồ và chỉ đường
						</Box>
					</Box>
					<Box>
						<Box
							sx={{
								fontWeight: "700",
								fontSize: "24px",
								p: "30px 0px 25px ",
							}}
						>
							Giờ mở cửa
						</Box>
						<Box
							sx={{
								".MuiTableContainer-root": {
									border: 0,
									boxShadow: 0,
									borderRadius: 0,
								},
								p: "0px",
							}}
						>
							<TableContainer
								component={Paper}
								sx={{
									width: "100%",
									background: "white",
								}}
							>
								<Table sx={{ minWidth: 360, fontWeight: "700" }}>
									<TableBody
										sx={{
											".MuiTableCell-root": {
												textAlign: "start",
												fontFamily: "inherit",
												fontWeight: 500,
												fontSize: "14px",
												p: "5px",
												border: 0,
											},
										}}
									>
										{weekdays.map((weekday, index) => (
											<TableRow key={index}>
												<TableCell align="center">{weekday}</TableCell>
												<TableCell align="center">0{index + 1}/11</TableCell>
												<TableCell align="center">08:00 AM - 22:30 PM</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</TableContainer>
						</Box>
					</Box>
					<Box>
						<Box
							sx={{
								fontSize: "24px",
								p: "30px 0 25px ",
								fontWeight: "600",
							}}
						>
							Làm thế nào để chúng tôi có thể giúp bạn
						</Box>
						<Box sx={{ p: "10px 0px" }}>
							<Box sx={{}}>Cần trợ giúp để tìm những gì phù hợp với bạn? Kết nối trực tiếp với Chuyên gia. Hoặc trong buổi gặp mặt trực tiếp tại The ThanhCoffee</Box>
							<Box sx={{ ...styles.centerFlex }}>
								<a
									href="https://web.facebook.com/profile.php?id=61560917203069"
									style={{
										padding: "25px 0 16px",
										color: "#00754A",
										display: "flex",
										gap: "5px",
									}}
								>
									<Box>Mua sắm trực tiếp với chuyên gia</Box>
									<Box
										sx={{
											"svg > path": { stroke: "#006241" },
											...styles.centerFlex,
										}}
									>
										<LeftArrowBlack />
									</Box>
								</a>
							</Box>
							<Box sx={{ p: "25px 0px" }}>Từ việc thiết lập ly cà phê của bạn đến khôi phục ID ThanhCoffee cho đến thay đổi tài khoản, Genius Support đều hỗ trợ bạn</Box>
							<Box sx={{ ...styles.centerFlex }}>
								<a
									href="/tro-giup-mua-sam"
									style={{
										color: "#00754A",
										display: "flex",
										gap: "5px",
									}}
								>
									<Box>Nhận hỗ trợ</Box>
									<Box
										sx={{
											"svg > path": { stroke: "#006241" },
											...styles.centerFlex,
										}}
									>
										<LeftArrowBlack />
									</Box>
								</a>
							</Box>
						</Box>
					</Box>
				</Box>
				<Box>
					<Box
						sx={{
							textAlign: "center",
							p: "80px",
						}}
					>
						<Box sx={{ fontSize: "40px", fontWeight: "600", pb: "30px" }}>Hãy đến và xem những sản phẩm tốt nhất</Box>
						<Box
							sx={{
								fontSize: "24px",
							}}
						>
							Mang hương vị Thanh Coffee đến nhiều bối cảnh khác nhau trong cuộc sống hàng ngày của bạn
						</Box>
					</Box>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							gap: "50px",
							p: "0px 160px 80px",
						}}
					>
						<Box
							sx={{
								width: "calc(50% - 25px)",
								background: "#F2F0EB",
								textAlign: "center",
								p: "128px 70px",
							}}
						>
							<Box
								sx={{
									pb: "30px",
									fontSize: "32px",
									fontWeight: 500,
								}}
							>
								<Box
									sx={{
										...styles.centerFlex,
										pb: "40px",
										justifyContent: "center",
									}}
								>
									<img
										alt="?"
										src={trogiupchuyengia}
									/>
								</Box>
								Trò chuyện với người hỗ trợ của chúng tôi
							</Box>
							<Box sx={{ ...styles.centerFlex, justifyContent: "center" }}>
								<a
									href="https://web.facebook.com/profile.php?id=61560917203069"
									style={{
										...styles.centerFlex,
										gap: "10px",
									}}
								>
									<Box
										sx={{
											fontSize: "20px",
											...styles.fontColor.xanhNhat006241,
										}}
									>
										Trao đổi ngay
									</Box>
									<Box
										sx={{
											svg: { width: "8px", height: "16px" },
											"svg>path": { stroke: "#006241" },
										}}
									>
										<LeftArrowBlack />
									</Box>
								</a>
							</Box>
						</Box>
						<Box
							sx={{
								width: "calc(50% - 25px)",
								background: "#F2F0EB",
								textAlign: "center",
								p: "128px 70px",
							}}
						>
							<Box
								sx={{
									...styles.centerFlex,
									pb: "40px",
									justifyContent: "center",
								}}
							>
								<img
									alt="?"
									src={trogiupchuyengia}
								/>
							</Box>
							<Box
								sx={{
									pb: "30px",
									fontSize: "32px",
									fontWeight: 500,
								}}
							>
								Liên hệ hợp tác và Đầu tư
							</Box>
							<Box sx={{ ...styles.centerFlex, justifyContent: "center" }}>
								<a
									href="/lien-he-dau-tu"
									style={{
										...styles.centerFlex,
										gap: "10px",
									}}
								>
									<Box
										sx={{
											fontSize: "20px",
											...styles.fontColor.xanhNhat006241,
										}}
									>
										Xem thêm về Trang liên hệ
									</Box>
									<Box
										sx={{
											svg: { width: "8px", height: "16px" },
											"svg>path": { stroke: "#006241" },
										}}
									>
										<LeftArrowBlack />
									</Box>
								</a>
							</Box>
						</Box>
					</Box>
					<Box
						sx={{
							fontSize: "40px",
							textAlign: "center",
							fontWeight: "600",
							pb: "80px",
						}}
					>
						Tin tức mới từ chúng tôi
					</Box>
					<Box
						sx={{
							display: "flex",
							p: "0px 160px 70px",
							justifyContent: "center",
							gap: "50px",
						}}
					>
						<Box
							sx={{
								width: "calc(50% - 25px)",
								background: "#1E3932",
							}}
						>
							<Box
								sx={{
									width: "100%",
								}}
							>
								<img
									width={"100%"}
									height={"auto"}
									src={timcuahang2}
									alt=""
								/>
							</Box>
							<Box sx={{ p: "25px 30px", color: "white" }}>
								<Box sx={{ fontSize: "20px", pb: "25px" }}>Hôm nay tại Thanh Coffee</Box>
								<Box sx={{ fontSize: "32px", fontWeight: 600 }}>Giới thiệu dòng cà phê uống liền mới bao gồm các loại cà phê được người hâm mộ yêu thích</Box>
							</Box>
						</Box>
						<Box
							sx={{
								width: "calc(50% - 25px)",
								background: "#1E3932",
							}}
						>
							<Box
								sx={{
									width: "100%",
								}}
							>
								<img
									width={"100%"}
									height={"auto"}
									src={timcuahang1}
									alt=""
								/>
							</Box>
							<Box sx={{ p: "25px 30px", color: "white" }}>
								<Box sx={{ fontSize: "20px", pb: "25px" }}>Hôm nay tại Thanh Coffee</Box>
								<Box sx={{ fontSize: "32px", fontWeight: 600 }}>Giới thiệu dòng cà phê uống liền mới bao gồm các loại cà phê được người hâm mộ yêu thích</Box>
							</Box>
						</Box>
					</Box>
				</Box>
			</Layout.MainBg>
			<Footer />
		</Box>
	);
};

export default Desktop;
