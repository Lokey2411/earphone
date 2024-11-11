import { Box } from "@mui/material";
import { RESPONSIVE_DESKTOP, RESPONSIVE_MOBILE, RESPONSIVE_TABLET, styles } from "../../styles";

const ShipmentAndPaymentSection = ({ title, description, imgSrc, imgAlt, reverse, buttonText, buttonLink }) => (
	<Box
		className="tw-bg-beige"
		sx={{ color: "#000000", mt: "30px" }}
	>
		<Box
			sx={{
				display: "flex",
				flexDirection: "column-reverse",
				[RESPONSIVE_DESKTOP]: {
					flexDirection: reverse ? "row-reverse" : "row",
				},
			}}
		>
			<Box sx={{ ...styles.centerFlex, flex: 1 }}>
				<img
					width={"100%"}
					src={imgSrc}
					alt={imgAlt}
					style={{ objectFit: "cover" }}
					height={"100%"}
				/>
			</Box>
			<Box sx={{ flex: 1, ...styles.centerFlex }}>
				<Box
					sx={{
						p: "40px 20px",
						[RESPONSIVE_DESKTOP]: {
							p: "40px 50px",
						},
					}}
				>
					<Box
						sx={{
							fontSize: "24px",
							fontWeight: "600",
							pb: "30px",
							[RESPONSIVE_TABLET]: {
								fontSize: "20px",
							},
							[RESPONSIVE_MOBILE]: {
								fontSize: "18px",
							},
						}}
					>
						{title}
					</Box>
					<Box
						sx={{
							fontSize: "20px",
							[RESPONSIVE_TABLET]: { fontSize: "16px" },
							[RESPONSIVE_MOBILE]: { fontSize: "14px" },
						}}
					>
						{description}
					</Box>
					{buttonText && (
						<Box sx={{ ...styles.centerFlex, pt: "30px" }}>
							<a href={buttonLink}>
								<Box
									sx={{
										border: "solid white 1px",
										borderRadius: "19px",
										p: "7px 44px",
										fontSize: "24px",
										[RESPONSIVE_TABLET]: {
											fontSize: "20px",
										},
										[RESPONSIVE_MOBILE]: {
											fontSize: "18px",
										},
									}}
								>
									{buttonText}
								</Box>
							</a>
						</Box>
					)}
				</Box>
			</Box>
		</Box>
	</Box>
);

export default ShipmentAndPaymentSection;
