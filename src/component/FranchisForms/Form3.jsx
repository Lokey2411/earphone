import { Box, Button, Checkbox, FormControlLabel, FormGroup, Grid } from "@mui/material";
import { styles } from "../../styles";
const Form3 = ({ formState, onFormStateChange, onNext, onPrevious }) => {
	return (
		<Box sx={{ ...styles.fontSize13, fontSize: "16px" }}>
			<div style={{ fontSize: "24px", paddingBottom: "15px" }}>Thông tin tài chính của bạn</div>
			<div
				style={{
					fontSize: "19px",
					borderBottom: "1px solid #d3d3d3",
					marginBottom: "20px",
				}}
			>
				Vui lòng cung cấp thông tin tài chính hiện tại
			</div>
			<Box sx={{ flexGrow: 1, p: 2 }}>
				<Grid
					container
					spacing={5}
				>
					<Grid
						item
						xs={12}
					>
						<Box>Tổng tài sản lưu động</Box>
						<FormGroup row>
							<FormControlLabel
								control={
									<Checkbox
										name="totalAssest"
										checked={formState.totalAssest === "1,000,000,000 VNĐ trở xuống "}
										onChange={onFormStateChange}
										value="1,000,000,000 VNĐ trở xuống "
									/>
								}
								label="1,000,000,000 VNĐ trở xuống "
							/>
							<FormControlLabel
								control={
									<Checkbox
										name="totalAssest"
										checked={formState.totalAssest === "1,000,000,000 VNĐ đến 2,000,000,000 VNĐ"}
										onChange={onFormStateChange}
										value="1,000,000,000 VNĐ đến 2,000,000,000 VNĐ"
									/>
								}
								label="1,000,000,000 VNĐ đến 2,000,000,000 VNĐ"
							/>
							<FormControlLabel
								control={
									<Checkbox
										name="totalAssest"
										checked={formState.totalAssest === "2,000,000,000 VNĐ đến 6,000,000,000 VNĐ"}
										onChange={onFormStateChange}
										value="2,000,000,000 VNĐ đến 6,000,000,000 VNĐ"
									/>
								}
								label="2,000,000,000 VNĐ đến 6,000,000,000 VNĐ"
							/>
							<FormControlLabel
								control={
									<Checkbox
										name="totalAssest"
										checked={formState.totalAssest === "6,000,000,000 VNĐ trở lên "}
										onChange={onFormStateChange}
										value="6,000,000,000 VNĐ trở lên "
									/>
								}
								label="6,000,000,000 VNĐ trở lên "
							/>
						</FormGroup>
					</Grid>
					<Grid
						item
						xs={12}
					>
						<Box>Tổng giá trị tài sản ròng</Box>
						<FormGroup row>
							<FormControlLabel
								control={
									<Checkbox
										name="netValue"
										checked={formState.netValue === "1,000,000,000 VNĐ trở xuống"}
										onChange={onFormStateChange}
										value="1,000,000,000 VNĐ trở xuống"
									/>
								}
								label="1,000,000,000 VNĐ trở xuống"
							/>
							<FormControlLabel
								control={
									<Checkbox
										name="netValue"
										checked={formState.netValue === "1,000,000,000 VNĐ đến 2,000,000,000 VNĐ"}
										onChange={onFormStateChange}
										value="1,000,000,000 VNĐ đến 2,000,000,000 VNĐ"
									/>
								}
								label="1,000,000,000 VNĐ đến 2,000,000,000 VNĐ"
							/>
							<FormControlLabel
								control={
									<Checkbox
										name="netValue"
										checked={formState.netValue === " 2,000,000,000 VNĐ đến 6,000,000,000 VNĐ"}
										onChange={onFormStateChange}
										value=" 2,000,000,000 VNĐ đến 6,000,000,000 VNĐ"
									/>
								}
								label=" 2,000,000,000 VNĐ đến 6,000,000,000 VNĐ"
							/>
							<FormControlLabel
								control={
									<Checkbox
										name="netValue"
										checked={formState.netValue === "6,000,000,000 VNĐ đến 10,000,000,000 VNĐ"}
										onChange={onFormStateChange}
										value="6,000,000,000 VNĐ đến 10,000,000,000 VNĐ"
									/>
								}
								label="6,000,000,000 VNĐ đến 10,000,000,000 VNĐ"
							/>
							<FormControlLabel
								control={
									<Checkbox
										name="netValue"
										checked={formState.netValue === "Trên 10,000,000,000 VNĐ"}
										onChange={onFormStateChange}
										value="Trên 10,000,000,000 VNĐ"
									/>
								}
								label="Trên 10,000,000,000 VNĐ"
							/>
						</FormGroup>
					</Grid>
				</Grid>
			</Box>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					marginTop: "20px",
					gap: "20px",
				}}
			>
				<Button
					variant="contained"
					sx={{
						background: "#afafaf",
						color: "#FFFFFF",
						borderRadius: "20px",
						"&:hover": {
							backgroundColor: "#6d6969",
						},
					}}
					onClick={onPrevious}
				>
					Trước
				</Button>
				<Button
					variant="contained"
					sx={{
						background: "#464646",
						color: "#FFFFFF",
						borderRadius: "20px",
						"&:hover": {
							boxShadow: "1px 2px #888888",
							background: "black",
						},
					}}
					onClick={onNext}
				>
					Tiếp
				</Button>
			</Box>
		</Box>
	);
};
export default Form3;
