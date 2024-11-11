import { Box } from "@mui/material";
import React from "react";
import AddIcon from "../../component/svg/icon/AddIcon";

const CustomBox = ({ setQr, setIsModalOpen }) => {
	return (
		<>
			<Box
				sx={{
					fontSize: "40px",
					fontWeight: "600",
					p: "0px 70px 40px",
				}}
			>
				Khám phá tuỳ chọn yêu thích của bạn
			</Box>
			<Box
				sx={{
					display: "flex",
					gap: "40px",
					m: "0px 70px 80px",
					fontSize: "16px",
					fontWeight: 500,
				}}
			>
				<Box
					onClick={() => setQr(true)}
					sx={{
						cursor: "pointer",
						background: "#D9D9D9D9",
						border: "1px solid black",
						borderRadius: "7px",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						height: 70,
						width: "calc(33.33% - 20px)",
					}}
				>
					Tuỳ chỉnh được đề xuất
				</Box>
				<a
					href="/menu-de-xuat"
					style={{
						background: "#D9D9D9",
						border: "1px solid black",
						cursor: "pointer",
						borderRadius: "10px",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						height: 70,
						width: "calc(33.33% - 20px)",
					}}
				>
					Tùy chỉnh theo ý thích của bạn
				</a>
				<Box
					sx={{
						background: "#D9D9D9",
						border: "1px solid black",
						borderRadius: "7px",
						width: "calc(33.33% - 20px)",
					}}
					onClick={() => setIsModalOpen(3)}
				>
					<Box sx={{ p: "12px 40px 12px 12px", position: "relative" }}>
						<Box sx={{ position: "absolute", top: 12, right: 12 }}>
							<AddIcon />
						</Box>
						<Box
							sx={{
								display: "flex",
								justifyContent: "inherit",
							}}
						>
							<Box
								sx={{
									fontSize: "16px",
									fontWeight: "500",
									pb: "5px",
								}}
							>
								Quá trình tùy chỉnh diễn ra như thế nào?
							</Box>
						</Box>
						<Box
							sx={{
								fontSize: "11px",
								display: "flex",
								justifyContent: "space-between",
								fontWeight: 300,
							}}
						>
							<Box>Chúng tôi sẽ hướng dẫn bạn thực hiện quy trình từng bước</Box>
						</Box>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default CustomBox;
