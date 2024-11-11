import { Box } from "@mui/material";
import React from "react";

const Tab1 = ({ item }) => {
	return (
		<Box>
			<Box
				sx={{
					fontSize: "16px",
				}}
			>
				{item?.shortDesc}
			</Box>
			{/* <Box
                      sx={{
                        position: "relative",
                        backgroundColor: "#D9D9D9",
                        borderRadius: "10px",
                        cursor: "pointer",
                      }}
                      onClick={() => setIsModalOpen(2)}
                    >
                      <Box sx={{ position: "absolute", top: 12, right: 12 }}>
                        <AddIcon />
                      </Box> */}
			{/* Optional khuyến cáo */}
			{/* <Box
												sx={{
													display: "flex",
													justifyContent: "space-between",
												}}
											>
												<Box sx={{ ...styles.centerFlex, height: "152px" }}>
													<img
														src={fakevideo3}
														alt=""
													/>
												</Box>
												<Box sx={{ p: "12px 40px 12px 15px" }}>
													<Box
														sx={{
															display: "flex",
															justifyContent: "space-between",
														}}
													>
														<Box
															sx={{
																fontSize: "16px",
																fontWeight: "700",
																pb: "15px",
															}}
														>
															Bạn không biết chắc chắn nên uống bao nhiêu ly cafe?
														</Box>
													</Box>
													<Box
														sx={{
															fontSize: "11px",
														}}
													>
														<Box>Hiểu rõ hơn về số lượng ly cafe bạn nên uống.</Box>
													</Box>
												</Box>
											</Box> */}
			{/* </Box> */}
			{/* Quantity */}
			{/* <Box
				sx={{
					borderTop: "1px solid #000",
					padding: 2,
				}}
			>
				<h1>Số lượng có sẵn</h1>
				<Box
					sx={{
						display: "flex",
					}}
				></Box> */}
			{/* </Box> */}
		</Box>
	);
};

export default Tab1;
