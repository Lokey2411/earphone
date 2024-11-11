// cái này là frontend cũ đề phòng muốn thêm lại logic
// import { Box, Container, Grid, InputAdornment, TextField } from "@mui/material";
// import React, { useState } from "react";
// import NavBar from "../../component/layout/NavBar";
// import Layout from "../../component/layout";
// import Footer from "../../component/layout/Footer";
// import { styles } from "../../styles";
// import LeftArrowBlackW9H16 from "../../component/svg/icon/LeftArrowBlackW9H16";
// import FilterArrowBlackDown from "../../component/svg/icon/FilterArrowBlackDown";
// import DrinksItems from "../../component/DrinksItems";
// import MenuSearchIconBlack from "../../component/svg/icon/MenuSearchIconBlack";
// import { useLocation, useParams } from "react-router-dom";
// import { useData } from "../../hooks/useData";
// import { useRouteName } from "../../hooks/useRouteName";

// const Mobile = () => {
//   const [openSearch, isOpenSearch] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const handleOpenSearch = () => {
//     isOpenSearch(false);
//   };
//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//   };
//   // get type
//   const { type } = useParams();
//   const decodedType =
//     useRouteName().split("/")[0] === "do-an" ? "Đồ ăn" : "Đồ uống";
//   const [drinkfilter, setDrinkFilter] = useState("Mới nhất");
//   const [isDrinkFilterOpen, setIsDrinkFilterOpen] = useState(false);
//   const [drinks] = useData(`products/search/listname?listname=${type}`);
//   return (
//     <Box>
//       <NavBar />
//       <Box
//         sx={{
//           ...styles.centerFlex,
//           p: "0px 24px",
//           justifyContent: "space-between",
//           height: "42px",
//           backgroundColor: "white",
//           borderBottom: "solid black 1px",
//           position: "fixed",
//           top: "56px",
//           right: 0,
//           left: 0,
//           zIndex: 10,
//         }}
//       >
//         <Box sx={{ ...styles.centerFlex, gap: "13px" }}>
//           <Box
//             sx={{
//               ...styles.fontSize13,
//               fontSize: "10px",
//               fontWeight: "600",
//             }}
//           >
//             MENU
//           </Box>
//           <Box sx={{ svg: { width: "6px", height: "12px" } }}>
//             <LeftArrowBlackW9H16 />
//           </Box>
//           <a
//             href="/do-uong"
//             style={{
//               ...styles.fontSize13,
//               fontSize: "10px",
//               fontWeight: "600",
//               textTransform: "uppercase",
//             }}
//           >
//             {decodedType}
//           </a>
//         </Box>
//         <Box onClick={() => isOpenSearch(true)}>
//           <MenuSearchIconBlack />
//         </Box>
//         {openSearch === true && (
//           <Box
//             sx={{
//               position: "absolute",
//               top: 0,
//               left: 0,
//               width: "100vw",
//               height: "100vh",
//             }}
//             onClick={handleOpenSearch}
//           >
//             <Box sx={{ position: "relative" }}>
//               <Box
//                 sx={{
//                   ...styles.centerFlex,
//                   position: "absolute",
//                   top: "0px",
//                   left: "24px",
//                   right: "24px",
//                   height: "42px",
//                   backgroundColor: "white",
//                   zIndex: 11,
//                 }}
//               >
//                 <Container
//                   sx={{
//                     "&.MuiContainer-root": {
//                       maxWidth: "100%",
//                     },
//                   }}
//                   disableGutters
//                 >
//                   <TextField
//                     type="search"
//                     id="search"
//                     placeholder="Tìm kiếm đồ ăn hoặc đồ uống"
//                     value={searchTerm}
//                     onChange={handleSearch}
//                     onClick={(e) => {
//                       e.stopPropagation();
//                     }}
//                     sx={{
//                       ...styles.fontSize13,
//                       color: "black",
//                       width: "100%",
//                       "& .MuiOutlinedInput-root": { border: "none" },
//                       ".MuiOutlinedInput-notchedOutline:hover,.MuiOutlinedInput-notchedOutline":
//                         { border: "none" },
//                       ".MuiInputBase-root": {
//                         paddingRight: "0px",
//                         marginRight: 0,
//                       },
//                       ".MuiInputBase-input": { p: 0 },
//                     }}
//                     InputProps={{
//                       endAdornment: (
//                         <InputAdornment
//                           sx={{
//                             ".MuiInputAdornment-outlined": {
//                               marginRight: 0,
//                             },
//                           }}
//                           position="end"
//                         >
//                           <MenuSearchIconBlack />
//                         </InputAdornment>
//                       ),
//                     }}
//                   />
//                 </Container>
//               </Box>
//             </Box>
//           </Box>
//         )}
//       </Box>
//       <Layout.MainBg>
//         <Box sx={{ pt: "42.8px" }}>
//           <Box
//             sx={{
//               backgroundColor: "white",
//               borderBottom: "solid black 1px",
//               position: "relative",
//               p: "0px 24px",
//             }}
//           >
//             <Box sx={{ height: "42px" }}>
//               <Box
//                 sx={{
//                   height: "100%",
//                   ...styles.fontSize13,
//                   fontSize: "10px",
//                 }}
//               >
//                 <Box sx={{ p: "8px 10px 0px 0px" }}>Sắp xếp</Box>
//                 <Box
//                   sx={{
//                     position: "absolute",
//                     cursor: "pointer",
//                     zIndex: "2",
//                   }}
//                 >
//                   <Box
//                     onClick={() => setIsDrinkFilterOpen(true)}
//                     onMouseOver={() => setIsDrinkFilterOpen(true)}
//                     sx={{
//                       ...styles.centerFlex,
//                       gap: "10px",
//                     }}
//                   >
//                     <Box
//                       sx={{
//                         fontSize: "13px",
//                         fontWeight: 600,
//                         p: "0.5px 10px 0.5px 0px",
//                       }}
//                     >
//                       {drinkfilter}
//                     </Box>
//                     <FilterArrowBlackDown />
//                   </Box>
//                   <Box
//                     sx={{
//                       backgroundColor: "white",
//                       borderRadius: "7px",
//                     }}
//                   >
//                     {isDrinkFilterOpen && (
//                       <Box>
//                         <Box
//                           onClick={() => {
//                             setIsDrinkFilterOpen(false);
//                             setDrinkFilter("Mới nhất");
//                             console.log(isDrinkFilterOpen);
//                           }}
//                           sx={{
//                             fontSize: "11px",
//                             fontWeight: 600,
//                             p: "5px 10px 5px 5px",
//                             ":hover": {
//                               backgroundColor: "black",
//                               color: "white",
//                             },
//                             borderRadius: "7px 7px 0px 0px",
//                           }}
//                         >
//                           Mới nhất
//                         </Box>
//                         <Box
//                           onClick={() => {
//                             setIsDrinkFilterOpen(false);
//                             setDrinkFilter("Giá - Từ thấp tới cao");
//                           }}
//                           sx={{
//                             fontSize: "11px",
//                             fontWeight: 600,
//                             p: "5px 10px 5px 5px",
//                             ":hover": {
//                               backgroundColor: "black",
//                               color: "white",
//                             },
//                             borderTop: "solid black 1px",
//                             borderBottom: "solid black 1px",
//                           }}
//                         >
//                           Giá - Từ thấp tới cao
//                         </Box>
//                         <Box
//                           onClick={() => {
//                             setIsDrinkFilterOpen(false);
//                             setDrinkFilter("Giá - Từ cao tới thấp");
//                           }}
//                           sx={{
//                             fontSize: "11px",
//                             fontWeight: 600,
//                             p: "5px 10px 5px 5px",
//                             ":hover": {
//                               backgroundColor: "black",
//                               color: "white",
//                             },
//                             borderRadius: "0px 0px 7px 7px",
//                           }}
//                         >
//                           Giá - Từ cao tới thấp
//                         </Box>
//                       </Box>
//                     )}
//                   </Box>
//                 </Box>
//               </Box>
//             </Box>
//           </Box>
//         </Box>
//         <Box sx={{ p: "56px 24px", backgroundColor: "white" }}>
//           <Grid container spacing={2}>
//             {drinks.map((items) => (
//               <DrinksItems key={items.id} item={items} />
//             ))}
//           </Grid>
//         </Box>
//       </Layout.MainBg>
//       <Footer />
//     </Box>
//   );
// };

// export default Mobile;
import { Box, Container, Grid, InputAdornment, TextField } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import NavBar from "../../component/layout/NavBar";
import Layout from "../../component/layout";
import Footer from "../../component/layout/Footer";
import { styles } from "../../styles";
import LeftArrowBlackW9H16 from "../../component/svg/icon/LeftArrowBlackW9H16";
import FilterArrowBlackDown from "../../component/svg/icon/FilterArrowBlackDown";
import DrinksItems from "../../component/DrinksItems";
import MenuSearchIconBlack from "../../component/svg/icon/MenuSearchIconBlack";
import { useData } from "../../hooks/useData";
import { useRouteName } from "../../hooks/useRouteName";
import { useParams } from "react-router-dom";
import moment from "moment";
import { cocktailSort } from "../../functions/controller";
import Loading from "../../component/Loading";

const Mobile = () => {
	const [openSearch, isOpenSearch] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");
	const type = useRouteName();
	const decodedType = useRouteName().split("/")[0] === "do-an" ? "Đồ ăn" : "Đồ uống";
	const { type: listname } = useParams();
	const [drinkfilter, setDrinkFilter] = useState("Mới nhất");
	const [isDrinkFilterOpen, setIsDrinkFilterOpen] = useState(false);
	const [drinks, setDrinks] = useState([]);
	const [allDrinks] = useData("products/search/listname?listname=" + listname);
	const handleSearch = (event) => {
		setSearchTerm(event.target.value);
		if (searchTerm === "") setDrinks(allDrinks);
		else
			setDrinks(
				allDrinks.filter((item) => {
					console.log(searchTerm.toLowerCase(), item.name.toLowerCase(), item.name.toLowerCase() === searchTerm.toLowerCase());
					return item.name.toLowerCase().includes(searchTerm.toLowerCase());
				})
			);
	};
	useEffect(() => {
		if (searchTerm === "") setDrinks(allDrinks);
		else
			setDrinks(
				allDrinks.filter((item) => {
					console.log(searchTerm.toLowerCase(), item.name.toLowerCase(), item.name.toLowerCase() === searchTerm.toLowerCase());
					return item.name.toLowerCase().includes(searchTerm.toLowerCase());
				})
			);
	}, [searchTerm, allDrinks]);
	useMemo(() => {
		if (drinkfilter === "Mới nhất") {
			setDrinks(cocktailSort(allDrinks, (prev, current) => (moment(prev.created_at).isBefore(current.created_at) ? 1 : -1)));
		} else if (drinkfilter === "Giá - Từ cao tới thấp") {
			setDrinks(cocktailSort(allDrinks, (prev, current) => (prev.price < current.price ? 1 : -1)));
		} else if (drinkfilter === "Giá - Từ thấp tới cao") {
			setDrinks(cocktailSort(allDrinks, (prev, current) => (prev.price > current.price ? 1 : -1)));
		}
	}, [allDrinks, drinkfilter]);
	useEffect(() => {
		setDrinks(allDrinks);
	}, [allDrinks]);
	// useEffect(() => {
	//   if (drinkfilter === "Mới nhất") {
	//     cocktailSort(allDrinks, (prev, current) =>
	//       moment(prev.created_at).isBefore(current.created_at) ? 1 : -1
	//     );
	//   } else if (drinkfilter === "Giá - Từ cao tới thấp") {
	//     cocktailSort(allDrinks, (prev, current) =>
	//       prev.price < current.price ? 1 : -1
	//     );
	//   } else if (drinkfilter === "Giá - Từ thấp tới cao") {
	//     cocktailSort(allDrinks, (prev, current) =>
	//       prev.price > current.price ? 1 : -1
	//     );
	//   }
	// }, [drinkfilter]);
	if (!drinks) return <Loading />;
	return (
		<Box>
			<NavBar />
			<Box
				sx={{
					...styles.centerFlex,
					p: "0px 24px",
					justifyContent: "space-between",
					height: "42px",
					backgroundColor: "white",
					borderBottom: "solid black 1px",
					position: "fixed",
					top: "56px",
					right: 0,
					left: 0,
					zIndex: 10,
				}}
			>
				<Box sx={{ ...styles.centerFlex, gap: "13px" }}>
					<Box
						sx={{
							...styles.fontSize13,
							fontSize: "10px",
							fontWeight: "600",
						}}
					>
						MENU
					</Box>
					<Box sx={{ svg: { width: "6px", height: "12px" } }}>
						<LeftArrowBlackW9H16 />
					</Box>
					<Box
						sx={{
							...styles.fontSize13,
							fontSize: "10px",
							fontWeight: "600",
							textTransform: "uppercase",
						}}
					>
						<a href={`/${type.split("/")[0]}`}>{decodedType}</a>
					</Box>
					<Box sx={{ svg: { width: "6px", height: "12px" } }}>
						<LeftArrowBlackW9H16 />
					</Box>
					<Box
						sx={{
							...styles.fontSize13,
							fontSize: "10px",
							fontWeight: "600",
							textTransform: "uppercase",
						}}
					>
						{listname}
					</Box>
				</Box>
				<Box onClick={() => isOpenSearch(true)}>
					<MenuSearchIconBlack />
				</Box>
				{openSearch === true && (
					<Box
						sx={{
							position: "absolute",
							top: 0,
							left: 0,
							width: "100vw",
							height: "100vh",
						}}
						onClick={() => isOpenSearch(false)}
					>
						<Box sx={{ position: "relative" }}>
							<Box
								sx={{
									...styles.centerFlex,
									position: "absolute",
									top: "0px",
									left: "24px",
									right: "24px",
									height: "42px",
									backgroundColor: "white",
									zIndex: 11,
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
										placeholder="Tìm kiếm đồ ăn hoặc đồ uống"
										value={searchTerm}
										onChange={handleSearch}
										onClick={(e) => {
											e.stopPropagation();
										}}
										sx={{
											...styles.fontSize13,
											color: "black",
											width: "100%",
											"& .MuiOutlinedInput-root": { border: "none" },
											".MuiOutlinedInput-notchedOutline:hover,.MuiOutlinedInput-notchedOutline": { border: "none" },
											".MuiInputBase-root": {
												paddingRight: "0px",
												marginRight: 0,
											},
											".MuiInputBase-input": { p: 0 },
										}}
										InputProps={{
											endAdornment: (
												<InputAdornment
													sx={{
														".MuiInputAdornment-outlined": {
															marginRight: 0,
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
						</Box>
					</Box>
				)}
			</Box>
			<Layout.MainBg>
				<Box sx={{ pt: "42.8px" }}>
					<Box
						sx={{
							backgroundColor: "white",
							borderBottom: "solid black 1px",
							position: "relative",
							p: "0px 24px",
						}}
					>
						<Box sx={{ height: "42px" }}>
							<Box
								sx={{
									height: "100%",
									...styles.fontSize13,
									fontSize: "10px",
								}}
							>
								<Box sx={{ p: "8px 10px 0px 0px" }}>Sắp xếp</Box>
								<Box
									sx={{
										position: "absolute",
										cursor: "pointer",
										zIndex: "2",
									}}
								>
									<Box
										onClick={() => setIsDrinkFilterOpen(true)}
										onMouseOver={() => setIsDrinkFilterOpen(true)}
										onMouseOut={() => setIsDrinkFilterOpen(false)}
										sx={{
											...styles.centerFlex,
											gap: "10px",
										}}
									>
										<Box
											sx={{
												fontSize: "13px",
												fontWeight: 600,
												p: "0.5px 10px 0.5px 0px",
											}}
										>
											{drinkfilter}
										</Box>
										<FilterArrowBlackDown />
									</Box>
									<Box
										sx={{
											backgroundColor: "white",
											borderRadius: "7px",
										}}
									>
										{isDrinkFilterOpen && (
											<Box>
												<Box
													onClick={() => setDrinkFilter("Mới nhất")}
													sx={{
														fontSize: "11px",
														fontWeight: 600,
														p: "5px 10px 5px 5px",
														":hover": {
															backgroundColor: "black",
															color: "white",
														},
														borderRadius: "7px 7px 0px 0px",
													}}
												>
													Mới nhất
												</Box>
												<Box
													onClick={() => setDrinkFilter("Giá - Từ thấp tới cao")}
													sx={{
														fontSize: "11px",
														fontWeight: 600,
														p: "5px 10px 5px 5px",
														":hover": {
															backgroundColor: "black",
															color: "white",
														},
														borderTop: "solid black 1px",
														borderBottom: "solid black 1px",
													}}
												>
													Giá - Từ thấp tới cao
												</Box>
												<Box
													onClick={() => setDrinkFilter("Giá - Từ cao tới thấp")}
													sx={{
														fontSize: "11px",
														fontWeight: 600,
														p: "5px 10px 5px 5px",
														":hover": {
															backgroundColor: "black",
															color: "white",
														},
														borderRadius: "0px 0px 7px 7px",
													}}
												>
													Giá - Từ cao tới thấp
												</Box>
											</Box>
										)}
									</Box>
								</Box>
							</Box>
						</Box>
					</Box>
				</Box>
				<Box sx={{ p: "56px 24px 56px", backgroundColor: "white" }}>
					<Grid
						container
						spacing={2}
						rowSpacing={4}
					>
						{drinks.map((items) => {
							return (
								<DrinksItems
									key={items.id}
									item={items}
								/>
							);
						})}
					</Grid>
				</Box>
			</Layout.MainBg>
			<Footer />
		</Box>
	);
};

export default Mobile;
