import { Box, Checkbox, FormControl, InputLabel, MenuItem, Select, TextField, TextareaAutosize, Typography } from "@mui/material";
import React from "react";
import { styles } from "../../styles";

const QuestionForm = ({ handleSubmit, formState, handleFormStateChange }) => {
	const myStyles = {
		formControl: {
			width: "60%",
			display: "flex",
			flexDirection: "column",
		},
	};
	return (
		<form onSubmit={handleSubmit}>
			<Box
				sx={{
					pb: "30px", // Padding dưới cho Box chứa cả tiêu đề và TextField
				}}
			>
				<Typography
					variant="p"
					gutterBottom
					sx={{
						fontSize: "14px",
						fontWeight: "700",
						color: "#686868",
					}}
				>
					*Tên
				</Typography>
				<FormControl sx={{ ...myStyles.formControl, pt: "16px" }}>
					<TextField
						variant="outlined"
						type="text"
						InputProps={{
							style: { height: "42px", background: "white" },
						}}
						defaultValue={formState.name}
						onChange={handleFormStateChange}
						required
					/>
				</FormControl>
			</Box>
			<Box
				sx={{
					pb: "30px",
				}}
			>
				<Typography
					variant="p"
					gutterBottom
					sx={{
						fontSize: "14px",
						fontWeight: "700",
						color: "#686868",
						pb: "8px",
					}}
				>
					*Họ
				</Typography>
				<FormControl sx={{ ...myStyles.formControl, pt: "16px" }}>
					<TextField
						height={"40px"}
						variant="outlined"
						InputProps={{
							style: { height: "42px", background: "white" },
						}}
						defaultValue={formState.name}
						onChange={handleFormStateChange}
						type="text"
						required
					/>
				</FormControl>
			</Box>
			<Box
				sx={{
					pb: "30px",
				}}
			>
				<Typography
					variant="p"
					gutterBottom
					sx={{
						fontSize: "14px",
						fontWeight: "700",
						color: "#686868",
						pb: "8px",
					}}
				>
					*Địa chỉ email
				</Typography>
				<FormControl sx={{ ...myStyles.formControl, pt: "16px" }}>
					<TextField
						height={"40px"}
						variant="outlined"
						InputProps={{
							style: { height: "42px", background: "white" },
						}}
						type="email"
						required
					/>
				</FormControl>
			</Box>
			<Box
				sx={{
					pb: "30px",
				}}
			>
				<Typography
					variant="p"
					gutterBottom
					sx={{
						fontSize: "14px",
						fontWeight: "700",
						color: "#686868",
						pb: "8px",
					}}
				>
					*Công ty / Tổ chức
				</Typography>
				<FormControl sx={{ ...myStyles.formControl, pt: "16px" }}>
					<TextField
						InputProps={{
							style: { height: "42px", background: "white" },
						}}
						variant="outlined"
						type="text"
						required
					/>
				</FormControl>
			</Box>
			<Box
				sx={{
					pb: "30px",
				}}
			>
				<Typography
					variant="p"
					gutterBottom
					sx={{
						fontSize: "14px",
						fontWeight: "700",
						color: "#686868",
						pb: "8px",
					}}
				>
					*Mối quan hệ với The Thanh Coffee
				</Typography>
				<FormControl sx={{ ...myStyles.formControl, backgroundColor: "white", mt: "16px" }}>
					<InputLabel>Chọn một tuỳ chọn</InputLabel>
					<Select
						required
						label="Age"
					>
						<MenuItem value="doitac">Đối tác</MenuItem>
						<MenuItem value="khachhang">Khách hàng</MenuItem>
					</Select>
				</FormControl>
			</Box>
			<Box
				sx={{
					pb: "30px",
				}}
			>
				<Typography
					variant="p"
					gutterBottom
					sx={{
						fontSize: "14px",
						fontWeight: "700",
						color: "#686868",
						pb: "8px",
					}}
				>
					*Quốc gia / Khu vực
				</Typography>
				<FormControl sx={{ ...myStyles.formControl, backgroundColor: "white", mt: "16px" }}>
					<InputLabel>Chọn một tuỳ chọn</InputLabel>
					<Select label="Age">
						<MenuItem value="vietnam">Việt Nam</MenuItem>
						<MenuItem value="anothercountry">Quốc gia khác</MenuItem>
					</Select>
				</FormControl>
			</Box>
			<Box
				sx={{
					pb: "30px",
				}}
			>
				<Typography
					variant="p"
					gutterBottom
					sx={{
						fontSize: "14px",
						fontWeight: "700",
						color: "#686868",
						mb: "100px",
					}}
				>
					*Làm thế nào chúng tôi có thể giúp bạn?
				</Typography>
				<FormControl sx={{ ...myStyles.formControl, pt: "16px" }}>
					<TextareaAutosize
						minRows={7}
						placeholder=""
						required
						type="text"
					/>
				</FormControl>
			</Box>
			<Box
				sx={{
					display: "flex",
				}}
			>
				<Box>
					<Checkbox sx={{ p: 0, pr: "12px" }} />
				</Box>
				<Box sx={{ fontSize: 24 }}>
					Tôi đồng ý với việc The Thanh Coffee sử dụng hoặc xử lý thông tin cá nhân của tôi nhằm mục đích thực hiện yêu cầu này và phù hợp với{" "}
					<a
						href="/"
						style={{
							color: "#06542D",
							textDecoration: "underline",
							lineHeight: "18px",
							mt: "-9px",
						}}
					>
						Tuyên bố về quyền riêng tư của The Thanh Coffee
					</a>
				</Box>
			</Box>
			<Box
				sx={{
					// box style
					// box model
					mt: "20px",
					...styles.centerFlex,
					// text style
				}}
			>
				<button
					type="submit"
					style={{
						border: "none",
						padding: 0,
						borderRadius: "8px",
					}}
				>
					<Box
						sx={{
							...styles.backgroundColor.xanhNhat006241,
							padding: "18px 120px",
							borderRadius: "8px",
							color: "#FFFFFF",
							textTransform: "uppercase",
							fontSize: 24,
							fontWeight: "700",
							cursor: "pointer",
							select: "none",
						}}
					>
						Nộp
					</Box>
				</button>
			</Box>
		</form>
	);
};

export default QuestionForm;
