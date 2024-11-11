import React from "react";
import { Box, Container } from "@mui/material";
import NavBar from "./layout/NavBar";
import Layout from "./layout";
import { styles } from "../styles";
import { InputAdornment, TextField } from "@mui/material";
import chamsockhachhang from "../component/img/chamsockhachhang.png";
import CustomerSearchIcon from "./svg/icon/CustomerSearchIcon";
import CustomerAnswerIcon from "./svg/icon/CustomerAnswerIcon";
import Footer from "./layout/Footer";
const CustomerServiceAnswerThieuSao = () => {
	return (
		<Box sx={{ ...styles.fontSize13 }}>
			<NavBar />
			<Layout.MainBg>
				<Box
					sx={{
						background: "linear-gradient(90deg, #1D3B33 0%, #027249 99.99%)",
					}}
				>
					<Box
						sx={{
							...styles.pad20,
						}}
					>
						<Box
							sx={{
								fontSize: "16px",
								...styles.fontColor.mauTrang,
								fontWeight: "700",
								pt: "16px",
								textAlign: "center",
							}}
						>
							Dịch vụ chăm sóc khách hàng
						</Box>
						<Box sx={{ pt: "12px", pb: "12px" }}>
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
									id="dichvuchamsoc"
									placeholder="Chúng tôi có thể giúp gì cho bạn?"
									//   value={}
									//   onChange={}
									//   onClick={(e) => {
									//     e.stopPropagation();
									//   }}
									sx={{
										...styles.fontSize13,
										color: "black",
										width: "100%",
										...styles.backgroundColor.mauTrang,
										"& .MuiOutlinedInput-root": { borderRadius: "8px" },
										".MuiOutlinedInput-notchedOutline:hover,.MuiOutlinedInput-notchedOutline,&.MuiTextField-root": { borderRadius: "8px", border: "none" },
										".MuiInputBase-root": {
											paddingRight: "0px",
											marginRight: 0,
										},
										".MuiInputBase-input": { p: "12px 0px" },
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
					</Box>
				</Box>
				<Box sx={{ p: "105px 24px 64px" }}>
					<Box sx={{ fontSize: "22px", fontWeight: 700, pb: "24px" }}>Kết quả cho “Thiếu sao”</Box>
					<Box sx={{ display: "flex", gap: "12px" }}>
						<Box sx={{ pt: "5px" }}>
							<CustomerAnswerIcon />
						</Box>
						<Box sx={{ fontSize: "15px", lineHeight: "150%" }}>Điều gì sẽ xảy ra nếu số dư Star của tôi trông không ổn? Mất bao lâu để Ngôi sao của tôi xuất hiện?</Box>
					</Box>
					<Box sx={{ display: "flex", gap: "12px" }}>
						<Box sx={{ pt: "5px" }}>
							<CustomerAnswerIcon />
						</Box>
						<Box sx={{ fontSize: "15px", lineHeight: "150%" }}>Tại sao tôi không nhận được điểm thưởng của mình?</Box>
					</Box>
				</Box>
			</Layout.MainBg>
			<Footer />
		</Box>
	);
};

export default CustomerServiceAnswerThieuSao;
