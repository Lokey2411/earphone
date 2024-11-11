// src/components/JobInShop.js
import { Box, Card, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import React, { useMemo } from "react";
import Logotop from "../component/layout/LogoTop";
import Navbardesktop from "../component/layout/NavBarDesktop";
import FooterDesktop from "../component/layout/FooterDesktop";
import { styles } from "../styles";
import { ArrowOutward } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useData } from "../hooks/useData";

const JobInShop = () => {
	const [jobs] = useData("jobs");
	const inshopJobs = useMemo(() => {
		return jobs ? jobs["Văn phòng"] : [];
	}, [jobs]);
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
							textAlign: "center",
							"@media (max-width:700px)": {
								p: "20px",
							},
						}}
					>
						<Box sx={{ fontSize: "14px", pb: "20px" }}>Công việc tại cửa hàng</Box>
						<Box sx={{ fontSize: "48px", fontWeight: "700", pb: "16px" }}>Chúng Tôi Đang Tìm Kiếm</Box>
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
								{inshopJobs?.map((job, index) => (
									<Grid
										item
										xs={12}
										sm={6}
										md={4}
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
													image={job.image}
													alt={job.position}
												/>
												<CardContent>
													<Typography
														variant="body2"
														fontSize="14px"
													>
														{`Công việc tại ${job.type}`}
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
															{job.position}
														</Typography>
														<ArrowOutward />
													</Box>
													<Typography
														variant="body2"
														color="#747474"
														fontSize="16px"
													>
														{job.description}
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

export default JobInShop;
