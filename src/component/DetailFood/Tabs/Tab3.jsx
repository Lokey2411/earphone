import { GiOpenBook } from "react-icons/gi";
import { Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { color, RESPONSIVE_DESKTOP, RESPONSIVE_MOBILE } from "../../../styles";

const Tab3 = ({ attachments }) => {
	const resources = attachments.filter((a) => !!a.demo_image);
	const certificates = attachments.filter((a) => !a.demo_image && a.type == "certificate");
	const guide = attachments.find((a) => a.type === "guide");
	useEffect(() => {
		console.table("attachments:", attachments);
	}, [attachments]);
	return (
		<Box
			sx={{
				marginTop: "0px",
				[RESPONSIVE_DESKTOP]: {
					marginTop: "-30px",
				},
				display: "flex",
				flexDirection: "column",
				gap: "40px",
			}}
		>
			<Box>
				<h1 className="tw-text-[14px] tw-font-bold">Tài liệu đính kèm</h1>
				{/* grid */}
				<Box
					sx={{
						display: "grid",
						gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
						gap: "25px",
						[RESPONSIVE_MOBILE]: {
							gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
							gap: "12px",
						},
					}}
				>
					{resources?.map((item) => (
						<a
							href={item.url}
							style={{}}
							key={item.id}
						>
							{item.demo_image && (
								<Box sx={{ mb: "2px" }}>
									<img
										width={"100%"}
										src={item?.demo_image}
										alt="Hình ảnh xem trước"
									/>
								</Box>
							)}
							<Box
								sx={{
									color: color.primary,
									textDecoration: "underline",
									fontWeight: "500",
									textAlign: "center",
									fontSize: 13,
									[RESPONSIVE_MOBILE]: {
										fontSize: "18px",
									},
								}}
							>
								{item.title}
							</Box>
						</a>
					))}
				</Box>
			</Box>
			<Box>
				<p
					style={{
						fontSize: "14px",
						fontWeight: "bold",
					}}
				>
					Chính sách bảo hành
				</p>
				{guide && (
					<a
						href={guide.url}
						className="tw-text-primary tw-underline"
					>
						{guide.title}
					</a>
				)}
			</Box>

			<Box>
				<h1
					style={{ fontSize: "14px" }}
					className="tw-font-bold"
				>
					Tài nguyên tham khảo
				</h1>
				{/* các tài nguyên đính kèm của admin */}
				<Box sx={{ mb: "40px" }}>
					{certificates?.map((item) => (
						<Box
							sx={{
								display: "flex",
								gap: "7px",
								alignItems: "center",
							}}
						>
							<GiOpenBook
								color="#000"
								size={12}
							/>
							<a
								href={item.url}
								style={{}}
								key={item.id}
							>
								<Box
									sx={{
										color: color.primary,
										textDecoration: "underline",
										fontWeight: "500",
										textAlign: "center",
										fontSize: 13,
										[RESPONSIVE_MOBILE]: {
											fontSize: "18px",
										},
									}}
								>
									{item.title}
								</Box>
							</a>
						</Box>
					))}
				</Box>
			</Box>
		</Box>
	);
};

export default Tab3;
