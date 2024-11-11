import { FiDelete } from "react-icons/fi";
import React, { useContext, useEffect, useMemo } from "react";
import { appKeyFrames, RESPONSIVE_DESKTOP, RESPONSIVE_MOBILE, RESPONSIVE_TABLET, styles } from "../../styles.js";
import { Box, Card, CardContent, CardMedia, Container, FormControl, FormControlLabel, Grid, List, ListItem, ListItemText, Radio, RadioGroup, Table, TableBody, TableCell, TableContainer, TableRow, ThemeProvider, Typography, createTheme, styled } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { InputAdornment, TextField } from "@mui/material";
import CustomerSearchIcon from "../../component/svg/icon/CustomerSearchIcon";
import NavBar from "../../component/layout/NavBar";
import Layout from "../../component/layout";
import PhoneNenMauXanhIcon from "../../component/svg/icon/PhoneNenMauXanhIcon.jsx";
import Footer from "../../component/layout/Footer";
import { useState } from "react";
import { Link } from "react-router-dom";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { MenuOutlined, Search } from "@mui/icons-material";
import ChatIcon from "../../component/svg/icon/ChatIcon.jsx";
import CallIcon from "../../component/svg/icon/CallIcon.jsx";
import ArrowBack from "../../component/svg/icon/ArrowBack.jsx";
import FakeYoutube from "../../component/img/youtube.jpg";
import { set } from "react-hook-form";
import images from "../../component/img/dich-vu-khach-hang/index.js";
import { removeLastChar } from "../../functions/controller.js";
import { CallButton, ChatButton } from "../../component/CustomerService/Contact.jsx";
import { MobileContext } from "../../store/context/Mobile.jsx";
import { items, options, serviceTime } from "../../content/";
const theme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 960,
			lg: 1440,
			xl: 1920,
		},
	},
});

const SearchSuggestionBox = styled(Box)(({ theme }) => ({
	backgroundColor: "rgb(107 114 128)",
	fontWeight: 700,
	fontSize: "14px",
	padding: "6px 12px",
	...styles.fontColor.mauTrang,
	border: 0,
	borderRadius: "18px",
	cursor: "pointer",
	textAlign: "center",
}));
const Desktop = () => {
	const [selectedOptionValue, setSelectedOptionValue] = useState("option1");
	const [selectedItemId, setSelectedItemId] = useState(null);
	const [searchHelp, setSearchHelp] = useState();
	const [isHelpPage, setIsHelpPage] = useState(true);
	const [serviceSearch, setServiceSearch] = useState("");
	const [services, setServices] = useState([]);
	const { isDesktop } = useContext(MobileContext);
	const handleOptionChange = (event) => {
		setSelectedOptionValue(event.target.value);
		setSelectedItemId(null);
	};
	const handleItemClick = (id) => {
		setSelectedItemId(id);
	};
	const handleSearch = (event) => {
		setServiceSearch(event.target.value);
	};
	const handleSuggestionClick = (e, option) => {
		setSelectedOptionValue(option);
		setSelectedItemId("");
		setServiceSearch(e.target.innerText);
	};
	const handleDelete = () => {
		setServiceSearch((prev) => removeLastChar(prev));
	};
	const selectedOption = options.find((option) => option.value === selectedOptionValue);
	const selectedItem = selectedOption?.list.find((item) => item.id === selectedItemId);
	useEffect(() => {
		if (serviceSearch === "") setSearchHelp(null);
		else {
			setSearchHelp(
				options?.filter((items, id) => {
					return items?.list[id].name?.toLowerCase().includes(serviceSearch?.toLowerCase());
				})
			);
			setServices(allServices.filter((item) => item.name.toLowerCase().includes(serviceSearch.toLowerCase())));
		}
	}, [serviceSearch]);
	const allServices = useMemo(() => {
		let values = [];
		options.forEach((item) => {
			const { list } = item;
			list.forEach((listItem) => {
				values.push(listItem);
			});
		});
		return values;
	}, [options]);
	const [time, setTime] = useState("Hiện đã đóng cửa");
	useEffect(() => {
		setInterval(() => {
			var now = new Date().getHours();
			if (now >= 9 && now < 17) {
				setTime("Hiện đang mở");
			}
		});
	});
	return (
		<ThemeProvider theme={theme}>
			<Box sx={{ ...styles.fontSize13 }}>
				<NavBar />
				<Layout.MainBg>
					<Box
						sx={{
							mt: "0",
							[RESPONSIVE_DESKTOP]: {
								mt: "24px",
							},
						}}
					></Box>
					<Box
						sx={{
							background: `url(${images.banner}) no-repeat`,
							p: "70px 20px 28px",
							[RESPONSIVE_DESKTOP]: {
								p: "100px 356px",
							},
						}}
					>
						<Box
							sx={{
								fontSize: "24px",
								color: "#FFFFFF",
								textAlign: "center",
							}}
						>
							Dịch vụ chăm sóc khách hàng
						</Box>
						<Box sx={{ pt: "25px", position: "relative" }}>
							{searchHelp && (
								<Box
									sx={{
										position: "absolute",
										left: 0,
										right: 0,
										top: "calc(100% - 6px)",
										// top: "85px",
										zIndex: 2,
										borderTop: "1px solid  #E5E5E5",
										background: "white",
										borderBottomRightRadius: "12px",
										borderBottomLeftRadius: "12px",
									}}
								>
									<p className="tw-text-gray-400 tw-text-xs tw-uppercase tw-p-2">Gợi ý ưu tiên</p>
									{services?.map((items, index, { length }) => (
										<Box
											onClick={() => {
												setIsHelpPage(false);
												const id = items.id.charAt(4);
												console.log(id);
												setSelectedOptionValue("option" + id);
												setSelectedItemId(items.id);
												setServices([]);
											}}
											// className="tw-border-b tw-border-b-3"
											key={items.id}
											className={index < length - 1 ? "tw-border-b tw-border-b-3" : "tw-border-none"}
											sx={{
												p: "12px 20px",
												animation: `${appKeyFrames.floatIn} ${(index + 1) * 0.1}s ease-in-out`,
												":hover": {
													backgroundColor: "#E5E5E5",
													cursor: "pointer",
												},
											}}
										>
											<Box
												sx={{
													fontSize: "16px",
												}}
											>
												{items.name}
											</Box>
										</Box>
									))}
									<div className="tw-w-full tw-bg-gray-200 tw-flex tw-justify-center tw-items-center tw-py-3 tw-rounded-b-xl">
										<div className="hover:tw-border hover:tw-border-primary tw-p-[2px] tw-rounded-full">
											<button className="tw-bg-primary tw-text-center tw-px-3 tw-py-3 tw-rounded-full tw-text-white ">Tất cả kết quả tìm kiếm</button>
										</div>
									</div>
								</Box>
							)}
							<Container
								sx={{
									"&.MuiContainer-root": {
										maxWidth: "100%",
									},
								}}
								disableGutters
							>
								<TextField
									// type="search"
									id="dichvuchamsoc"
									placeholder="Chúng tôi có thể giúp gì cho bạn?"
									value={serviceSearch}
									onChange={handleSearch}
									onKeyDown={handleSearch}
									onClick={(e) => {
										e.stopPropagation();
									}}
									sx={{
										...styles.fontSize13,
										fontSize: "24px",
										width: "100%",
										...styles.backgroundColor.mauTrang,
										"& .MuiOutlinedInput-root": {
											borderRadius: "8px",
										},
										".MuiOutlinedInput-notchedOutline:hover,.MuiOutlinedInput-notchedOutline,&.MuiTextField-root": {
											borderRadius: "8px",
											border: "none",
										},
										".MuiInputBase-root": {
											paddingRight: "0px",
											marginRight: 0,
										},
										".MuiInputBase-input": {
											p: "16px 0px 12px",
											fontSize: "18px",
											[RESPONSIVE_MOBILE]: {
												fontSize: "14px",
											},
										},
										"& .MuiInputBase-input::placeholder": {
											color: "black",
										},
									}}
									InputProps={{
										startAdornment: (
											<InputAdornment
												sx={{
													".MuiInputAdornment-outlined": {
														marginRight: 0,
													},
												}}
												position="start"
											>
												<CustomerSearchIcon />
											</InputAdornment>
										),
										endAdornment: (
											<InputAdornment
												sx={{
													marginRight: "20px",
													".MuiInputAdornment-outlined": {},
													cursor: "pointer",
												}}
												onClick={handleDelete}
											>
												<FiDelete size={24} />
											</InputAdornment>
										),
									}}
								/>
							</Container>
						</Box>
						<Box
							sx={{
								...styles.centerFlex,
								pt: "30px",
								flexWrap: "wrap",
								justifyContent: "center",
								columnGap: "12px",
								rowGap: "12px",
								[RESPONSIVE_MOBILE]: {
									columnGap: "6px",
									rowGap: "6px",
								},
							}}
						>
							<Box
								sx={{
									color: "#FFFFFF",
									fontSize: "14px",
								}}
							>
								Gợi ý:
							</Box>
							<div className="tw-flex lg:tw-items-center tw-gap-[6px] tw-flex-wrap tw-justify-center">
								<SearchSuggestionBox onClick={(e) => handleSuggestionClick(e, "option1")}>Công việc</SearchSuggestionBox>
								<SearchSuggestionBox onClick={(e) => handleSuggestionClick(e, "option2")}>Đơn hàng</SearchSuggestionBox>
								<SearchSuggestionBox onClick={(e) => handleSuggestionClick(e, "option3")}>Sản phẩm</SearchSuggestionBox>
							</div>
						</Box>
					</Box>
					{isHelpPage ? (
						<Box>
							<Box
								sx={{
									p: "0px 20px",
									[RESPONSIVE_DESKTOP]: {
										p: "52px 146px",
									},
								}}
							>
								<Box
									sx={{
										fontSize: "24px",
										fontWeight: "600",
										my: "24px",
										cursor: "pointer",
									}}
								>
									<Box onClick={() => setIsHelpPage(false)}>Trợ giúp về các chủ đề {"->"}</Box>
								</Box>
								<Box sx={{ boxSizing: "border-box" }}>
									<Grid
										container
										spacing={isDesktop ? 6.5 : 0}
										sx={{
											".MuiPaper-root": { boxShadow: 0 },
										}}
									>
										{items.map((item) => (
											<Grid
												item
												xs={12}
												sm={12}
												md={6}
												key={item.id}
												sx={{
													".MuiGrid-root>.MuiGrid-item": { pb: "40px", [RESPONSIVE_DESKTOP]: { pb: "80px" } },
												}}
											>
												<Card
													sx={{
														"& .MuiCardContent-root": { padding: 0 },
													}}
												>
													<CardContent
														sx={{
															".MuiCardContent-root": { pt: "50px" },
														}}
													>
														<Typography
															gutterBottom
															fontSize={"24px"}
															fontWeight={"600"}
															component="div"
															mb={"12px"}
														>
															{item.title}
														</Typography>
														<Typography
															gutterBottom
															fontSize={"16px"}
															component="div"
														>
															{item.content}
														</Typography>

														<Typography
															variant="body2"
															className="tw-text-blue-400"
															fontSize={"16px"}
														>
															<a
																href={item.link}
																rel="noopener"
																underline="none"
															>
																{item.linkText}
															</a>
														</Typography>
													</CardContent>
												</Card>
											</Grid>
										))}
									</Grid>
								</Box>
							</Box>
							<Box sx={{ p: "0 20px 0 20px", [RESPONSIVE_DESKTOP]: { p: "0 146px 0 146px" } }}>
								<Box
									sx={{
										fontSize: "24px",
										fontWeight: "600",
										pb: "20px",
										[RESPONSIVE_DESKTOP]: {
											pb: "50px",
										},
									}}
								>
									Liên hệ
								</Box>
								<Box
									sx={{
										display: "grid",
										gridTemplateColumns: "repeat(2, 1fr)",
										gap: "10px",
										[RESPONSIVE_MOBILE]: {
											gridTemplateColumns: "repeat(1, 1fr)",
										},
									}}
								>
									<ChatButton />
									<CallButton />
								</Box>
							</Box>
							{/* Tìm kiếm thêm chủ đề */}
							{/* <Box
                sx={{
                  textAlign: "center",
                  fontSize: "40px",
                  fontWeight: "600",
                }}
              >
                Tìm kiếm thêm chủ đề
              </Box>
              <Box
                sx={{
                  pt: "25px",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  display: "flex",
                }}
              >
                <Box>
                  <Container
                    sx={{
                      "&.MuiContainer-root": {
                        Width: "100%",
                      },
                    }}
                    disableGutters
                  >
                    <TextField
                      type="search"
                      id="hotrotimkiem"
                      placeholder="Hỗ trợ tìm kiếm"
                      //   value={}
                      //   onChange={}
                      //   onClick={(e) => {
                      //     e.stopPropagation();
                      //   }}
                      sx={{
                        width: "727px",
                        ...styles.fontSize13,
                        fontSize: "24px",
                        ...styles.backgroundColor.mauTrang,
                      }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment
                            sx={{
                              ".MuiInputAdornment-outlined": {
                                marginRight: 0,
                              },
                            }}
                            position="start"
                          >
                            <CustomerSearchIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Container>
                </Box>
              </Box> */}
							<Box sx={{ p: "40px 20px", [RESPONSIVE_DESKTOP]: { p: "68px 150px" } }}>
								<Box
									sx={{
										background: "#E4E3E1",
										[RESPONSIVE_DESKTOP]: {
											textAlign: "center",
										},
									}}
								>
									<Box
										sx={{
											fontSize: "24px",
											fontWeight: "600",
											paddingTop: "35px",
											paddingLeft: "20px",
										}}
									>
										Xem video hỗ trợ của The Thanh Coffee
									</Box>
									<Box
										sx={{
											fontSize: "18px",
											padding: "20px",
											[RESPONSIVE_DESKTOP]: {
												p: "20px 121px 14px",
											},
										}}
									>
										Bạn chưa tìm được thông tin hỗ trợ bạn mong muốn, bạn có thể truy cập thêm video thông tin hỗ trợ The Thanh tại Youtube chính thức của chúng tôi.
									</Box>
									<Box
										className="tw-text-blue-400"
										sx={{
											display: "flex",
											pt: "0px",
											fontSize: "18px",
											justifyContent: "center",
											pb: "12px",
											[RESPONSIVE_MOBILE]: {
												px: "20px",
												fontSize: "14px",
											},
										}}
									>
										<Box>
											<a href="https://www.youtube.com/channel/UCy2mvbfD_-dFGKu_sVc4Ulg">Truy cập hỗ trợ của The Thanh Coffee trên Youtube</a>
										</Box>
										<Box>
											<ArrowOutwardIcon />
										</Box>
									</Box>
									<Box>
										<img
											width={"100%"}
											src={FakeYoutube}
										/>
									</Box>
								</Box>
							</Box>
						</Box>
					) : (
						<Box>
							<Box sx={{ p: "70px 60px", [RESPONSIVE_MOBILE]: { p: " 20px" } }}>
								<Box
									sx={{
										display: "flex",
										[RESPONSIVE_MOBILE]: {
											flexDirection: "column",
										},
									}}
								>
									<Box
										sx={{
											mr: "60px",
											width: "55%",
											[RESPONSIVE_MOBILE]: {
												width: "100%",
												mr: "0",
											},
										}}
									>
										<Box
											onClick={() => setIsHelpPage(true)}
											sx={{
												...styles.heading[3],
												fontWeight: "500",
												cursor: "pointer",
												borderRadius: "40px",
												border: "1px solid black",
												p: "15px 28px",
												[RESPONSIVE_MOBILE]: {
													width: "100%",
													fontSize: "14px",
													p: "15px 20px",
												},
											}}
										>
											{"<-"} Quay lại Trang chủ trợ giúp
										</Box>
										<Box sx={{ pt: "60px", [RESPONSIVE_MOBILE]: { pt: "20px" } }}>
											<Box
												sx={{
													...styles.heading[1],
													fontWeight: "600",
													pb: "30px",
													[RESPONSIVE_MOBILE]: {
														textAlign: "center",
														fontSize: "24px",
														pb: "10px",
													},
												}}
											>
												Các câu hỏi chủ đề
											</Box>
											<Box sx={{ ...styles.heading[2] }}>
												<FormControl component="fieldset">
													<RadioGroup
														aria-label="options"
														name="options"
														value={selectedOptionValue}
														onChange={handleOptionChange}
													>
														{options.map((option, index) => (
															<FormControlLabel
																key={index}
																value={option.value}
																control={
																	<Radio
																		sx={{
																			"&.Mui-checked": {
																				color: "#000000",
																			},
																		}}
																	/>
																}
																label={
																	<Typography
																		sx={{
																			fontWeight: selectedOptionValue === option.value ? "bold" : "normal",
																		}}
																	>
																		{option.title}
																	</Typography>
																}
															/>
														))}
													</RadioGroup>
												</FormControl>
											</Box>
										</Box>
									</Box>
									<Box
										sx={{
											borderRight: "1px solid black",
											display: "unset",
											[RESPONSIVE_MOBILE]: {
												display: "none",
											},
										}}
									></Box>
									<Box
										sx={{
											width: "100%",
											ml: "60px",
											[RESPONSIVE_MOBILE]: {
												width: "100%",
												ml: "10px",
											},
										}}
									>
										<Box
											sx={{
												...styles.heading[3],
												color: "#1C1B1F",
											}}
										>
											Trang Chủ Trợ Giúp / {selectedOption.title}
										</Box>
										<Box
											sx={{
												pt: "97px",
												[RESPONSIVE_MOBILE]: {
													pt: "20px",
												},
											}}
										>
											{!selectedItem ? (
												<>
													<Typography
														fontSize="36px"
														fontWeight="600"
														sx={{
															...styles.heading[1.5],
														}}
													>
														{selectedOption.title}
													</Typography>
													<Typography variant="body1">{selectedOption.content}</Typography>
													<List>
														{selectedOption.list.map((item, index) => (
															<ListItem
																button
																sx={{
																	animation: `${appKeyFrames.slideIn} ${(index + 1) * 0.3}s ease-in-out`,
																}}
																key={item.id}
																selected={item.id === selectedItemId}
																onClick={() => handleItemClick(item.id)}
															>
																<MenuOutlined />
																<Box
																	sx={{
																		ml: "15px",
																		"& .MuiTypography-root": {
																			...styles.heading[3],
																		},
																	}}
																>
																	<ListItemText primary={item.name} />
																</Box>
															</ListItem>
														))}
													</List>
												</>
											) : (
												<Box>
													<Typography
														fontSize="36px"
														fontWeight="600"
														marginBottom="30px"
														sx={{
															...styles.heading[1.5],
														}}
													>
														{selectedItem.name}
													</Typography>
													<Typography variant="body1">{selectedItem.content}</Typography>
													<Box mt="40px">
														<Box
															variant="button"
															onClick={() => setSelectedItemId(null)}
															sx={{
																padding: "10px 28px",
																cursor: "pointer",
																border: "2px solid #000000",
																borderRadius: "39px",
																boxSizing: "border-box",
																display: "inline-flex",
																[RESPONSIVE_MOBILE]: {
																	padding: "5px 15px",
																},
															}}
														>
															<ArrowBack />
															<Box
																sx={{
																	ml: "15px",
																	fontSize: "24px",
																	fontWeight: "500",
																	[RESPONSIVE_MOBILE]: {
																		fontSize: "18px",
																	},
																}}
															>
																Trở về
															</Box>
														</Box>
													</Box>
												</Box>
											)}
										</Box>
									</Box>
								</Box>
							</Box>
							<Box
								sx={{
									p: "120px 318px",
									[theme.breakpoints.between(933, 1377)]: {
										p: "50px 150px",
									},
									[RESPONSIVE_MOBILE]: {
										p: "50px 20px",
									},
								}}
							>
								<Box
									sx={{
										...styles.heading[1],
										fontWeight: "600",
										pb: "5px",
									}}
								>
									Bạn cần liên hệ?
								</Box>
								<Box sx={{ ...styles.heading[3], pb: "24px" }}>Bạn cần liên hệ? Đội ngũ chăm sóc khách hàng của chúng tôi luôn sẵn sàng</Box>
								<Box
									sx={{
										justifyContent: "space-between",
										display: "flex",
										fontSize: "24px",
										fontWeight: "500",
										pb: "40px",
										[theme.breakpoints.between(933, 1377)]: {
											display: "grid",
											justifyContent: "center",
											fontSize: "24px",
											fontWeight: "500",
											pb: "40px",
										},
										[RESPONSIVE_MOBILE]: {
											flexDirection: "column",
											gap: "20px",
											fontSize: "16px",
										},
									}}
								>
									<a href="https://web.facebook.com/profile.php?id=61560917203069">
										<Box
											sx={{
												display: "flex",
												border: "2px solid #000000",
												borderRadius: "39px",
												p: "17px 25px",
												gap: "15px",
												[theme.breakpoints.between(933, 1377)]: {
													display: "flex",
													border: "2px solid #000000",
													borderRadius: "39px",
													p: "17px 25px",
													gap: "15px",
													mb: "10px",
												},
											}}
										>
											<ChatIcon />
											<Box>Trò chuyện với chúng tôi</Box>
										</Box>
									</a>
									<a href="tel:0911.830.666">
										<Box
											sx={{
												display: "flex",
												border: "2px solid #000000",
												borderRadius: "39px",
												p: "17px 25px",
												gap: "15px",
											}}
										>
											<CallIcon />
											<Box>Gọi cho chúng tôi</Box>
										</Box>
									</a>
								</Box>
								<Box
									sx={{
										...styles.heading[3],
										fontWeight: "500",
										pb: "10px",
									}}
								>
									Giờ phục vụ khách hàng
								</Box>
								<Table
									sx={{
										"& .MuiTableCell-root": {
											fontFamily: "Inter",
											border: 0,
											fontSize: "20px",
											[RESPONSIVE_TABLET]: {
												fontSize: "16px",
											},
											[RESPONSIVE_MOBILE]: {
												fontSize: "10px",
											},
											pl: "0px",
										},
									}}
								>
									<TableBody>
										{serviceTime.map((item) => (
											<TableRow key={item.id}>
												<TableCell align="left">{item.type}</TableCell>
												<TableCell align="left">{item.activeDay}</TableCell>
												<TableCell align="left">{item.hours}</TableCell>
												<TableCell
													sx={
														time === "Hiện đã đóng cửa"
															? {
																	color: "#F90000",
															  }
															: {
																	color: "#006421",
															  }
													}
													align="left"
												>
													{time === "Hiện đã đóng cửa" ? <Box>Hiện đã đóng cửa</Box> : <Box>Hiện đang mở</Box>}
												</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</Box>
						</Box>
					)}
				</Layout.MainBg>
				<Footer />
			</Box>
		</ThemeProvider>
	);
};

export default Desktop;
