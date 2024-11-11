import { Box, Card, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Logotop from "../component/layout/LogoTop";
import Navbardesktop from "../component/layout/NavBarDesktop";
import FooterDesktop from "../component/layout/FooterDesktop";
import { styles } from "../styles";
import congviectaicuahang from "../component/img/congviectaicuahang.jpg";
import { ArrowOutward } from "@mui/icons-material";
import { Link } from "react-router-dom";

const ProductionandDistribution = () => {
	const JobList = [
		{
			id: 1,
			img: congviectaicuahang,
			workPlace: "Sản xuất và phân phối",
			jobPosition: "Bảo trì",
			jobDescription: "Đội ngũ bảo trì của chúng tôi đảm bảo rằng các cơ sở sản xuất của chúng tôi đang hoạt động hoàn hảo bằng cách chăm sóc các thiết bị điện, điện tử, thủy lực và cơ khí.",
		},
		{
			id: 2,
			img: congviectaicuahang,
			workPlace: "Sản xuất và phân phối",
			jobPosition: "Rang và phân phối cà phê",
			jobDescription: "Sản xuất và vận chuyển những sản phẩm làm hài lòng khách hàng",
		},
		{
			id: 3,
			img: congviectaicuahang,
			workPlace: "Sản xuất và phân phối",
			jobPosition: "Kiểm tra sàn và vệ sinh",
			jobDescription: "Kiểm tra sàn là gì, được quan tâm từ góc độ của khách hàng để giữ cho bàn và sàn ở ghế của khách hàng sạch sẽ và tạo không gian thoải mái bên trong cửa hàng.",
		},
		{
			id: 4,
			img: congviectaicuahang,
			workPlace: "Sản xuất và phân phối",
			jobPosition: "Dịch vụ khách hàng",
			jobDescription: `Chúng tôi xây dựng cộng đồng thân thiện và chân thành.
      Một nụ cười chân thành, một lời chào nồng nhiệt, một cuộc trò chuyện thân
      thiện và cảm giác quan tâm đến từng khách hàng, để hoà nhập và thành một
      người hàng xóm tốt`,
		},
	];
	function convertToSlug(text) {
		return text
			.toLowerCase()
			.replace(/ /g, "-")
			.replace(/[áàảãạâấầẩẫậăắằẳẵặ]/g, "a")
			.replace(/[éèẻẽẹêếềểễệ]/g, "e")
			.replace(/[íìỉĩị]/g, "i")
			.replace(/[óòỏõọôốồổỗộơớờởỡợ]/g, "o")
			.replace(/[úùủũụưứừửữự]/g, "u")
			.replace(/[ýỳỷỹỵ]/g, "y")
			.replace(/[đ]/g, "d")
			.replace(/[^a-z0-9-]/g, "");
	}
	return (
		<Box>
			<Box
				sx={{
					...styles.fontSize13,
				}}
			>
				<Logotop />
				<Navbardesktop />
				<Box
					sx={{
						pt: "240px",
						minHeight: "100vh",
						"@media (max-width:700px)": {
							pt: "150px",
						},
					}}
				>
					<Box
						sx={{
							p: "0 140px 96px 140px",
							color: "#06542D",
							textAlign: "center",
							"@media (max-width:700px)": {
								p: "20px",
							},
						}}
					>
						<Box sx={{ fontSize: "14px", pb: "20px" }}>Sản xuất và phân phối</Box>
						<Box sx={{ fontSize: "48px", fontWeight: "700", pb: "16px" }}>Chúng Tôi Đang Tìm Kiếm 123</Box>
					</Box>
					<Box sx={{ boxSizing: "border-box" }}>
						<Container
							component="main"
							sx={{ mb: 10 }}
						>
							<Grid
								container
								spacing={3}
							>
								{JobList.map((job, index) => (
									<Grid
										item
										xs={12}
										sm={6}
										md={6}
										key={index}
									>
										<Link
											to={`/chi-tiet-cong-viec/${job.id}`}
											style={{ textDecoration: "none", cursor: "pointer" }}
										>
											<Card
												sx={{
													display: "flex",
													flexDirection: "column",
													height: "100%",
												}}
											>
												<CardMedia
													component="img"
													height="270"
													image={job.img}
													alt={job.jobPosition}
												/>
												<CardContent sx={{ flexGrow: 1 }}>
													<Typography
														variant="body2"
														color="#06542D"
														fontSize="14px"
													>
														{job.workPlace}
													</Typography>
													<Box
														sx={{
															display: "flex",
															justifyContent: "space-between",
														}}
													>
														<Typography
															gutterBottom
															variant="h5"
															component="div"
															fontWeight="600"
															fontSize="24px"
														>
															{job.jobPosition}
														</Typography>
														<ArrowOutward />
													</Box>
													<Typography
														variant="body2"
														color="#747474"
														fontSize="16px"
													>
														{job.jobDescription}
													</Typography>
												</CardContent>
											</Card>
										</Link>
									</Grid>
								))}
							</Grid>
						</Container>
					</Box>
				</Box>
				<FooterDesktop />
			</Box>
		</Box>
	);
};

export default ProductionandDistribution;
