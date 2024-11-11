import { Box } from "@mui/material";
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from "@mui/material";
import { useState } from "react";
import NavBar from "../../component/layout/NavBar";
import Footer from "../../component/layout/Footer";
import { styles } from "../../styles";
import Layout from "../../component/layout";
import LeftArrowBlack from "../../component/svg/icon/LeftArrowBlack";
import TichVIcon from "../../component/svg/icon/TichVIcon";
import TichXIcon from "../../component/svg/icon/TichXICon";
import { useParams } from "react-router-dom";
import { useData } from "../../hooks/useData";
import moment from "moment";
import ServiceBox from "../../component/ShopOpen/ServiceBox";
import ContactShop from "../../component/ShopOpen/ContactShop";
import InShopSupportItem from "../../component/ShopOpen/InShopSupportItem";
const Mobile = () => {
	const [isSearch, setIsSearch] = useState(false);
	const opensearch = () => {
		setIsSearch(true);
	};
	const closesearch = () => {
		setIsSearch(false);
	};
	const [searchTerm, setSearchTerm] = useState("");
	const handleSearch = (event) => {
		setSearchTerm(event.target.value);
	};
	const [suggestion, setSuggestion] = useState(false);
	const weekdays = ["Hôm nay", "Ngày mai", moment().add(2, "days").format("dddd"), moment().add(3, "days").format("dddd"), moment().add(4, "days").format("dddd"), moment().add(5, "days").format("dddd"), moment().add(6, "days").format("dddd")];
	const { id } = useParams();
	const [isOpenForm, setIsOpenForm] = useState(0);
	const [shops] = useData("departments/" + id);

	return (
		<Box sx={{ ...styles.fontSize13 }}>
			<NavBar />
			<Layout.MainBg>
				{isOpenForm === 1 && (
					<Box
						sx={{
							...styles.fontSize13,
							position: "fixed",
							top: "0",
							left: "0",
							width: "100%",
							height: "100%",
							background: "#ffffff" /* Màu nền với độ mờ */,
							zIndex: "1000",
						}}
					>
						<Box
							sx={{
								width: "100%",
								height: "100%",
								maxWidth: "100%",
								maxHeight: "100%",
								overflow: "auto",
							}}
						>
							<Box
								sx={{
									p: "24px",
								}}
							>
								<Box
									sx={{
										...styles.centerFlex,
										justifyContent: "right",
										cursor: "pointer",
									}}
									onClick={() => setIsOpenForm(0)}
								>
									<TichXIcon />
								</Box>
								<Box
									sx={{
										p: "15px 0px 62px 0px",
										fontSize: "24px",
										fontWeight: "600",
									}}
								>
									Dịch vụ tại Cà phê The Thanh
								</Box>
								<Box
									sx={{
										fontSize: "17px",
										pb: "15px",
										fontWeight: "600",
									}}
								>
									Hỗ trợ tại điểm bán
								</Box>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										gap: "12px",
									}}
								>
									<InShopSupportItem title="Mua sắm tại cửa hàng" />
									<InShopSupportItem
										title="Đặt chỗ trước tại cửa hàng"
										linkDisplayText="Đặt lịch hẹn"
										to="https://www.facebook.com/profile.php?id=61560917203069&_rdc=1&_rdr"
									/>
									<InShopSupportItem
										title="Nhận đơn đặt hàng trực tuyến tại cửa hàng"
										linkDisplayText={"Tìm hiểu thêm"}
										to={"tro-giup-mua-sam"}
									/>
									<InShopSupportItem
										title="Xe ô tô chỉ được đỗ không quá 10 phút"
										icon={() => (
											<Box
												sx={{
													svg: {
														width: "20px",
														height: "20px",
													},
												}}
											>
												<TichXIcon />
											</Box>
										)}
									/>
								</Box>
							</Box>
						</Box>
					</Box>
				)}
				{isOpenForm === 2 && (
					<Box
						sx={{
							...styles.fontSize13,
							position: "fixed",
							top: "0",
							left: "0",
							width: "100%",
							height: "100%",
							background: "#ffffff" /* Màu nền với độ mờ */,
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							zIndex: "1000",
						}}
					>
						<Box
							sx={{
								width: "100%",
								height: "100%",
								maxWidth: "100%",
								maxHeight: "100%",
								overflow: "auto",
							}}
						>
							<Box
								sx={{
									...styles.centerFlex,
									justifyContent: "right",
									p: "24px 24px 0px",
								}}
								onClick={() => setIsOpenForm(0)}
							>
								<TichXIcon />
							</Box>
							<Box
								sx={{
									p: "15px 24px 62px",
									fontSize: "25px",
									fontWeight: "600",
								}}
							>
								Bản đồ và chỉ đường
							</Box>
							<Box>
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d770.6274842841947!2d105.82734475459331!3d21.034810878218945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab000b070be5%3A0xf334bd0df60de4df!2zQ8OgIFBow6ogVGhlIFRoYW5o!5e0!3m2!1svi!2s!4v1719887899465!5m2!1svi!2s"
									width="100%"
									height="379"
									title="Map"
									style={{ border: "0" }}
									allowfullscreen=""
									loading="lazy"
									referrerpolicy="no-referrer-when-downgrade"
								></iframe>
							</Box>
							<Box sx={{ p: "30px 24px 0 24px" }}>
								<Box
									sx={{
										pb: "25px",
										fontSize: "19px",
										fontWeight: "bold",
									}}
								>
									Địa chỉ
								</Box>
								<Box sx={{ pb: "30px", fontSize: 14 }}>
									<Box>Số 147, Đội Cấn</Box>
									<Box>Ba Đình, Hà Nội</Box>
									<a
										href="tel:(+84)911830666"
										style={{ color: "#006241" }}
									>
										Điện thoại hỗ trợ tìm đường: (+84) 911830666
									</a>
									<br />
									<a
										href="https://maps.app.goo.gl/997YpNTUND7ivChY9?g_st=com.google.maps.preview.copy"
										style={{ color: "#006241" }}
										target="_blank"
										rel="noreferrer"
									>
										Mở bản đồ
									</a>
								</Box>
								<Box
									sx={{
										pb: "25px",
										fontSize: "19px",
										fontWeight: "bold",
									}}
								>
									Hướng dẫn đi tới cửa hàng
								</Box>
								<Box sx={{ pb: "24px", lineHeight: "150%", fontSize: "14px" }}>Cửa hàng nằm phía phải ngã ba Giang Văn Minh và phố Đội Cấn, đối diện với ngân hàng Vietinbank. Bạn có thể nhìn bên phải nếu đi từ hướng Giang Văn Minh đi vào. Bên cạnh phải cửa hàng cà phê The Thanh là tiệm mỹ phẩm Thu Hằng, bên trái là Tiệm thuốc Nghĩa Hưng.</Box>
							</Box>
						</Box>
					</Box>
				)}
				{/* nút tìm kiếm cửa hàng */}
				{/* <Box
					sx={{
						fontSize: "16px",
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						background: "#D9D9D9",
						p: "5px 24px",
						borderBottom: "1px solid black",
					}}
				>
					<Box
						sx={{
							fontSize: "14px",
							fontWeight: "700",
						}}
					>
						Tìm cửa hàng
					</Box>
					<Box
            sx={{
              fontSize: "12px",
              background: "#000000",
              color: "#ffffff",
              borderRadius: "10px",
              p: "3px 8px",
            }}
            onClick={opensearch}
          >
            Tìm kiếm
          </Box>
				</Box> */}
				{/* {isSearch && (
          <Box
            sx={{
              position: "fixed",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              background: "#ffffff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: "1000",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                maxWidth: "100%",
                maxHeight: "100%",
                overflow: "auto",
              }}
            >
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    background: "#DBDAD5",
                    p: "17px 24px",
                    borderBottom: "1px solid black",
                    fontSize: "16px",
                  }}
                >
                  <Box
                    sx={{
                      fontWeight: "700",
                    }}
                  >
                    Tìm cửa hàng
                  </Box>
                  <Box sx={{ color: "#575757" }} onClick={closesearch}>
                    Thoát
                  </Box>
                </Box>
                <Box
                  sx={{
                    p: "16px 24px",
                    backgroundColor: "#DBDAD5",
                    borderBottom: "black solid 1px",
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
                      placeholder=" Tìm kiếm theo vị trí hoặc tên cửa hàng"
                      value={searchTerm}
                      onChange={handleSearch}
                      onClick={(e) => {
                        setSuggestion(true);
                        e.stopPropagation();
                      }}
                      sx={{
                        ...styles.fontSize13,
                        color: "black",
                        width: "100%",
                        "& .MuiOutlinedInput-root": { border: "none" },
                        ".MuiOutlinedInput-notchedOutline:hover,.MuiOutlinedInput-notchedOutline":
                          { border: "none" },
                        ".MuiInputBase-root": {
                          padding: 0,
                          margin: 0,
                        },
                        ".MuiInputBase-input": { p: 0 },
                      }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment
                            sx={{
                              "&.MuiInputAdornment-outlined": {
                                margin: 0,
                                padding: 0,
                                marginRight: "10px",
                              },
                            }}
                            position="end"
                          >
                            <MenuSearchIconBlack />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Container>
                </Box>
                {suggestion && (
                  <Box>
                    <Box
                      sx={{
                        borderBottom: "1px solid black",
                        p: "8px 50px",
                        fontWeight: "700",
                        fontSize: "12px",
                      }}
                    >
                      Gợi ý
                    </Box>
                    <Box
                      onClick={() => setSuggestion(false)}
                      sx={{
                        borderBottom: "1px solid black",
                        p: "8px 50px",
                        "&:hover": {
                          background: "#114138",
                          color: "white",
                        },
                      }}
                    >
                      Mỹ đình 1, Nam Từ Liêm, HN
                    </Box>
                    <Box
                      onClick={() => setSuggestion(false)}
                      sx={{
                        borderBottom: "1px solid black",
                        p: "8px 50px",
                        "&:hover": {
                          background: "#114138",
                          color: "white",
                        },
                      }}
                    >
                      Mỹ đình 2, Nam Từ Liêm, HN
                    </Box>
                    <Box
                      onClick={() => setSuggestion(false)}
                      sx={{
                        borderBottom: "1px solid black",
                        p: "8px 50px",
                        "&:hover": {
                          background: "#114138",
                          color: "white",
                        },
                      }}
                    >
                      Trung Hoà, Cầu Giấy, HN
                    </Box>
                  </Box>
                )}
              </Box>
            </Box>
          </Box>
        )} */}
				<Box
					sx={{
						fontSize: "23px",
						fontWeight: "700",
						p: "30px 24px 10px",
						textAlign: "center",
					}}
				>
					{shops?.name}
					<br />
					{shops?.address}
				</Box>
				<Box
					sx={{
						textAlign: "center",
						fontSize: "15px",
						pb: "30px",
					}}
				>
					Mở cửa tới {shops?.closeTime}
				</Box>
				<Box
					sx={{
						width: "100%",
					}}
				>
					<img
						width={"100%"}
						src={shops?.image}
						alt="Vườn Coffee"
					/>
				</Box>
				{/* services */}
				<Box
					sx={{
						paddingTop: "30px",
					}}
				>
					<ServiceBox
						title={"Mua sắm tại cửa hàng"}
						subtitle={"Xem hướng dẫn tới cửa hàng của chúng tôi"}
						handleClick={() => {
							setIsOpenForm(2);
						}}
						to={"#"}
					/>
					<ServiceBox
						title={"Xem Danh sách sản phẩm"}
						subtitle={"Danh sách đồ uống chúng tôi phục vụ"}
						to={"/do-uong"}
					/>
				</Box>

				<Box
					sx={{
						p: "0px 24px",
						color: "rgb(0,102,204)",
						fontWeight: "600",
						fontSize: 14,
						textDecoration: "none",
						cursor: "pointer",
					}}
					onClick={() => setIsOpenForm(1)}
				>
					Xem tất cả các dịch vụ tại của hàng và trực tuyến
				</Box>

				<Box
					sx={{
						background: "#F3F1EC",
						mt: "30px",
					}}
				>
					<Box
						sx={{
							fontWeight: "700",
							fontSize: "21px",
							p: "30px 24px 25px 24px",
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
							p: "0px 24px",
						}}
					>
						<TableContainer
							component={Paper}
							sx={{
								width: "100%",
								background: "#F3F1EC",
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
											<TableCell
												sx={{
													"&::first-letter": {
														textTransform: "uppercase",
													},
													fontWeight: index > 0 ? "400!important" : "700!important",
												}}
												align="center"
											>
												{weekday}
											</TableCell>
											<TableCell align="center">{moment().add(index, "days").format("DD/MM")}</TableCell>
											<TableCell align="center">07:00 AM - 21:30 PM</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</Box>
					<Box
						sx={{
							fontWeight: "700",
							fontSize: "21px",
							p: "30px 24px 25px 20px",
						}}
					>
						Địa chỉ
					</Box>
					<Box
						sx={{
							p: "0 24px 10px 20px",
							fontSize: 14,
						}}
					>
						<Box>Số 147, Đội Cấn</Box>
						<Box>Ba Đình, Hà Nội</Box>
						<a
							href="tel:(+84)911830666"
							style={{ color: "rgb(0,102,204)" }}
						>
							(+84) 911830666
						</a>
					</Box>
					<Box
						sx={{
							color: "rgb(0,102,204)",
							p: "0 24px 0 20px",
						}}
						onClick={() => setIsOpenForm(2)}
					>
						Xem bản đồ và chỉ đường
					</Box>

					<Box
						sx={{
							fontSize: "21px",
							p: "30px 24px 20px 20px",
							fontWeight: "600",
						}}
					>
						Các cách chúng tôi có thể hỗ trợ bạn
					</Box>
					<Box sx={{ p: "0px 24px" }}>
						<Box sx={{}}>Cần trợ giúp để tìm những gì phù hợp với bạn? Kết nối trực tiếp với Chuyên gia. Hoặc trong buổi gặp mặt trực tiếp tại The ThanhCoffee</Box>
						<Box sx={{ ...styles.centerFlex }}>
							<a
								href="https://web.facebook.com/profile.php?id=61560917203069"
								style={{
									padding: "25px 0 16px",
									color: "rgb(0,102,204)",
									display: "flex",
									gap: "5px",
								}}
							>
								<Box>Mua sắm trực tiếp với chuyên gia</Box>
								<Box
									sx={{
										"svg > path": { stroke: "rgb(0,102,204)" },
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
									color: "rgb(0,102,204)",
									display: "flex",
									gap: "5px",
								}}
							>
								<Box>Nhận hỗ trợ</Box>
								<Box
									sx={{
										"svg > path": { stroke: "rgb(0,102,204)" },
										...styles.centerFlex,
									}}
								>
									<LeftArrowBlack />
								</Box>
							</a>
						</Box>
						<Box
							sx={{
								width: "100%",
								height: "1px",
								backgroundColor: "black",
								mt: "40px",
							}}
						></Box>
					</Box>
					<Box
						sx={{
							fontSize: "32px",
							fontWeight: "700",
							textAlign: "center",
							p: "30px 20px 20px 20px",
						}}
					>
						Hãy đến và xem những sản phẩm tốt nhất
					</Box>
					<Box
						sx={{
							textAlign: "center",
							p: "0px 24px 16px",
							fontSize: 19,
						}}
					>
						Mang hương vị Thanh Coffee đến nhiều bối cảnh khác nhau trong cuộc sống hàng ngày của bạn
					</Box>
					<Box
						sx={{
							p: "0px 24px 25px",
						}}
					>
						<ContactShop
							title={"Hỗ trợ The Thanh"}
							subtitle="Trò chuyện với người hỗ trợ của chúng tôi"
							linkDisplayText={"Trao đổi ngay"}
							to="https://www.facebook.com/profile.php?id=61560917203069&_rdc=1&_rdr"
						/>
						<ContactShop
							title={"Đầu tư The Thanh"}
							subtitle="Liên hệ hợp tác và đầu tư"
							linkDisplayText={"Xem thêm về trang liên hệ"}
							to="/lien-he-dau-tu"
						/>
					</Box>
					{/* Tin tức mới nhất */}
					{/* <Box
						sx={{
							fontSize: "23px",
							textAlign: "center",
							fontWeight: "700",
							pb: "25px",
						}}
					>
						Tin tức mới từ chúng tôi
					</Box> */}
					{/* <Box
						sx={{
							p: "0px 24px 60px",
						}}
					>
						<Box
							sx={{
								background: "rgba(0,0,0,0.1)",
								mb: "20px",
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

							<Box sx={{ p: "15px 12px" }}>
								<Box sx={{ fontSize: "10px", pb: "5px" }}>Hôm nay tại Thanh Coffee</Box>
								<Box sx={{ fontSize: "14px", fontWeight: 600 }}>Giới thiệu dòng cà phê uống liền mới bao gồm các loại cà phê được người hâm mộ yêu thích</Box>
							</Box>
						</Box>
						<Box
							sx={{
								background: "rgba(0,0,0,0.1)",
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

							<Box sx={{ p: "15px 12px" }}>
								<Box sx={{ fontSize: "10px", pb: "5px" }}>Hôm nay tại Thanh Coffee</Box>
								<Box sx={{ fontSize: "14px", fontWeight: 600 }}>Đại hội đồng cổ đông thường niên năm 2024 của TheThanhCoffee</Box>
							</Box>
						</Box>
					</Box> */}
				</Box>
			</Layout.MainBg>
			<Footer />
		</Box>
	);
};

export default Mobile;
