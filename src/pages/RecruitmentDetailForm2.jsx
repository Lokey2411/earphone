import { Box, Button, Checkbox, FormControlLabel, Grid, InputAdornment, InputLabel, MenuItem, Select, TextField, Typography, styled } from "@mui/material";
import React, { useMemo, useState } from "react";
import { styles } from "../styles";
import { EmailOutlined } from "@mui/icons-material";
import { useData } from "../hooks/useData";
import { useLocation, useNavigate } from "react-router-dom";

const RecruitmentDetailForm2 = () => {
	const location = useLocation();
	const { id } = location.state;
	const [allJobs] = useData("jobs/" + id);
	const job = useMemo(() => {
		return allJobs ? allJobs[0] : {};
	}, [allJobs]);
	const [countryCode, setCountryCode] = useState("+1");
	const handleCountryCodeChange = (event) => {
		setCountryCode(event.target.value);
	};
	const navigate = useNavigate();
	const StyledInputLabel = styled(InputLabel)(({ theme }) => ({
		"& .MuiFormLabel-asterisk": {
			color: "red",
		},
	}));
	const [selectedFile, setSelectedFile] = useState(null);

	const handleFileChange = (event) => {
		setSelectedFile(event.target.files[0]);
	};
	const handleUpload = () => {
		if (selectedFile) {
			// Xử lý tải lên tệp tại đây
			console.log("File selected:", selectedFile);
		} else {
			console.log("No file selected");
		}
	};
	if (!job)
		return (
			<div>
				<h1>Đang tải ...</h1>
			</div>
		);
	return (
		<Box
			sx={{
				...styles.fontSize13,
				fontSize: "14px",
			}}
		>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					p: "17px 140px",
					"@media (max-width:1200px)": {
						p: "17px 30px",
					},
					"@media (max-width:900px)": {
						p: "17px 20px",
						display: "grid",
						textAlign: "center",
					},
				}}
			>
				<Box>
					<a
						href="/gia-tri-va-van-hoa"
						rel="Trang chủ"
					>
						<Box
							sx={{
								boxSizing: "border-box",
								textAlign: "center",
								"@media (max-width:900px)": {
									pb: "10px",
								},
							}}
						>
							<Box>THE</Box>
							<Box sx={{ fontWeight: "bold", fontSize: "20px" }}>THANH COFFEE</Box>
							<Box>CA PHE TOT & TRA NGON</Box>
						</Box>
					</a>
				</Box>
				<Box>
					<Box sx={{ fontSize: 18 }}>{job.position}</Box>
					<Box sx={{ display: "flex", gap: "2px" }}>
						<Box>
							<svg
								width="14"
								height="16"
								viewBox="0 0 14 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M13 6.66669C13 11.3334 7 15.3334 7 15.3334C7 15.3334 1 11.3334 1 6.66669C1 5.07539 1.63214 3.54926 2.75736 2.42405C3.88258 1.29883 5.4087 0.666687 7 0.666687C8.5913 0.666687 10.1174 1.29883 11.2426 2.42405C12.3679 3.54926 13 5.07539 13 6.66669Z"
									stroke="#353535"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M7 8.66669C8.10457 8.66669 9 7.77126 9 6.66669C9 5.56212 8.10457 4.66669 7 4.66669C5.89543 4.66669 5 5.56212 5 6.66669C5 7.77126 5.89543 8.66669 7 8.66669Z"
									stroke="#353535"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</Box>
						{job.department.address}
					</Box>
					<Box
						sx={{
							border: "1px solid black",
							p: "5px",
							fontSize: "14px",
							width: "max-content",
							background: "black",
							color: "white",
							borderRadius: "15px",
							"&:hover": {
								backgroundColor: "#333131",
							},
						}}
					>
						<Box
							sx={{
								cursor: "pointer",
							}}
							rel="noreferrer"
							onClick={() => {
								navigate(`/chi-tiet-cong-viec/${id}`, {
									state: {
										id,
									},
								});
							}}
						>
							Trở về
						</Box>
					</Box>
				</Box>
			</Box>
			<Box sx={{ borderBottom: "1px solid #35353524" }}></Box>
			<Box
				sx={{
					p: "0 207px 38px 207px",
					"@media (max-width:1200px)": {
						p: "17px 30px",
					},
					"@media (max-width:900px)": {
						p: "17px 20px",
						display: "grid",
					},
				}}
			>
				<Box sx={{ pt: "24px" }}>
					<Box
						sx={{
							color: "#353535",
							fontSize: "30px",
							fontWeight: "700",
							pt: "32px",
						}}
					>
						Về thông tin người giới thiệu cho bạn
					</Box>
					<Box sx={{ color: "#353535", fontSize: "16px", pb: "20px" }}>Trước tiên, vui lòng nhập một số chi tiết về người giới thiệu cho bạn</Box>
					<Box sx={{ flexGrow: 1 }}>
						<Grid
							container
							spacing={2}
						>
							{/* Row 1 */}
							<Grid
								item
								xs={6}
							>
								<StyledInputLabel
									htmlFor="firstname"
									required
								>
									Họ
								</StyledInputLabel>
								<TextField
									fullWidth
									required
									variant="outlined"
									InputLabelProps={{ shrink: true }}
								/>
							</Grid>
							<Grid
								item
								xs={6}
							>
								<StyledInputLabel
									htmlFor="lastname"
									required
								>
									Tên
								</StyledInputLabel>
								<TextField
									fullWidth
									required
									variant="outlined"
									InputLabelProps={{ shrink: true }}
								/>
							</Grid>
							{/* Row 2 */}
							<Grid
								item
								xs={6}
							>
								<StyledInputLabel
									htmlFor="email"
									required
								>
									Email
								</StyledInputLabel>
								<TextField
									fullWidth
									required
									variant="outlined"
									placeholder="olivia@untitledui.com"
									InputLabelProps={{ shrink: true }}
									InputProps={{
										startAdornment: (
											<InputAdornment position="start">
												<EmailOutlined />
											</InputAdornment>
										),
									}}
								/>
							</Grid>
							<Grid
								item
								xs={6}
							>
								<StyledInputLabel
									htmlFor="confirm-email"
									required
								>
									Nhập lại email
								</StyledInputLabel>
								<TextField
									fullWidth
									required
									variant="outlined"
									InputLabelProps={{ shrink: true }}
								/>
							</Grid>
							<Grid
								item
								xs={6}
							>
								<StyledInputLabel
									htmlFor="number"
									required
								>
									Số điện thoại
								</StyledInputLabel>
								<TextField
									fullWidth
									required
									variant="outlined"
									placeholder="+84"
									InputLabelProps={{ shrink: true }}
									InputProps={{
										startAdornment: (
											<InputAdornment
												position="start"
												sx={{ pl: 0 }}
											>
												<Select
													value={countryCode}
													onChange={handleCountryCodeChange}
													inputProps={{ "aria-label": "Country code" }}
													sx={{
														"& .MuiOutlinedInput-notchedOutline": {
															border: "none",
															p: 0,
														},
														"& .MuiOutlinedInput-root": {
															paddingRight: 0,
															color: "#353535",
															p: 0,
														},
														"& .MuiSelect-select": {
															color: "#353535", // Ensure text color change applies to the selected text
														},
														"& .MuiOutlinedInput-input": {
															p: 0,
														},
													}}
												>
													<MenuItem value="+44">UK</MenuItem>
													<MenuItem value="+1">USA</MenuItem>
													<MenuItem value="+84">VN</MenuItem>
													{/* Add more country codes here */}
												</Select>
											</InputAdornment>
										),
									}}
								/>
							</Grid>
							<Grid
								item
								xs={6}
							>
								<StyledInputLabel
									htmlFor="address"
									required
								>
									Nơi cư trú
								</StyledInputLabel>
								<TextField
									fullWidth
									required
									variant="outlined"
									InputLabelProps={{ shrink: true }}
								/>
							</Grid>
							<Grid
								item
								xs={12}
							>
								<StyledInputLabel
									htmlFor="text"
									required
								>
									Sự giới thiệu
								</StyledInputLabel>
								<TextField
									fullWidth
									multiline
									rows={4}
									variant="outlined"
								/>
							</Grid>
							<Grid
								item
								xs={12}
							>
								<StyledInputLabel
									htmlFor="text"
									required
								>
									Bản tóm tắt
								</StyledInputLabel>
								<Box
									sx={{
										border: "1px dashed #A9A9A9",
										justifyContent: "center",
										alignItems: "center",
										display: "grid",
										textAlign: "center",
										p: "18px",
									}}
								>
									<Box
										sx={{
											fontSize: "16px",
											fontWeight: "600",
											color: "#353535",
										}}
									>
										<input
											type="file"
											onChange={handleFileChange}
										/>
										<span onClick={handleUpload}>Duyệt sơ yếu lý lịch</span>
									</Box>
									<Box sx={{ fontSize: "16px", color: "#5A5A5A" }}>(Không bắt buộc)</Box>
								</Box>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Box>
			<Box
				sx={{
					p: "0 140px",
					"@media (max-width:900px)": {
						p: 0,
					},
				}}
			>
				<Box
					sx={{
						borderBottom: "1px solid #A9A9A9",
					}}
				></Box>
			</Box>
			<Box
				sx={{
					p: "64px 207px 140px 207px",
					"@media (max-width:1200px)": {
						p: "17px 30px",
					},
					"@media (max-width:900px)": {
						p: "17px 20px",
						display: "grid",
						textAlign: "center",
					},
				}}
			>
				<Box sx={{ fontSize: "30px", color: "#353535", fontWeight: "700" }}>Thông tin của bạn</Box>
				<Box sx={{ fontSize: "16px", color: "#353535", pb: "20px" }}>Tiếp theo, vui lòng nhập thông tin liên hệ của bạn để cho đội ngũ tuyển dụng biết ai là người giới thiệu</Box>
				<Box sx={{ flexGrow: 1 }}>
					<Grid
						container
						spacing={2}
					>
						<Grid
							item
							xs={6}
						>
							<StyledInputLabel
								htmlFor="firstname"
								required
							>
								Họ
							</StyledInputLabel>
							<TextField
								fullWidth
								required
								variant="outlined"
								InputLabelProps={{ shrink: true }}
							/>
						</Grid>
						<Grid
							item
							xs={6}
						>
							<StyledInputLabel
								htmlFor="lastname"
								required
							>
								Tên
							</StyledInputLabel>
							<TextField
								fullWidth
								required
								variant="outlined"
								InputLabelProps={{ shrink: true }}
							/>
						</Grid>
						<Grid
							item
							xs={6}
						>
							<StyledInputLabel
								htmlFor="email"
								required
							>
								Email của bạn
							</StyledInputLabel>
							<TextField
								fullWidth
								required
								variant="outlined"
								placeholder="olivia@untitledui.com"
								InputLabelProps={{ shrink: true }}
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<EmailOutlined />
										</InputAdornment>
									),
								}}
							/>
						</Grid>
					</Grid>
				</Box>
				<Box sx={{ fontSize: "16px", color: "#353535", p: "24px 0 18px 0" }}>Tiếp theo, vui lòng nhập thông tin liên hệ của bạn để cho đội ngũ tuyển dụng biết ai là người giới thiệu</Box>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
					}}
				>
					<FormControlLabel
						control={<Checkbox />}
						label={
							<Typography sx={{ fontSize: "16px", color: "#5A5A5A" }}>
								Bạn xác nhận đã nhận được ủy quyền để chuyển tiếp thông tin nêu trên từ người giới thiệu.
								<Typography
									component="span"
									sx={{ color: "red" }}
								>
									{" "}
									*
								</Typography>
							</Typography>
						}
					/>
					<FormControlLabel
						control={<Checkbox />}
						label={
							<Typography sx={{ fontSize: "16px", color: "#5A5A5A" }}>
								Bằng cách đánh dấu vào ô này, bạn sẽ tuyên bố rằng bạn đã đọc và đồng ý với chính sách bảo mật của TheThanhCoffee.
								<Typography
									component="span"
									sx={{ color: "red" }}
								>
									{" "}
									*
								</Typography>
							</Typography>
						}
					/>
				</Box>
				<Box sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
					<Button
						variant="contained"
						sx={{
							background: "black",
							color: "#FFFFFF",
							borderRadius: "20px",
							mb: "36px",
							"&:hover": {
								backgroundColor: "#313131",
							},
						}}
					>
						<a href="/apply-thanh-cong">Nộp hồ sơ tại đây</a>
					</Button>
				</Box>
				<Box sx={{ textAlign: "center", color: "#2196F3" }}>
					<a
						href="/tuan-thu-phap-luat"
						rel="noreferrer"
					>
						Chính sách quyền riêng tư
					</a>
				</Box>
			</Box>
		</Box>
	);
};

export default RecruitmentDetailForm2;
