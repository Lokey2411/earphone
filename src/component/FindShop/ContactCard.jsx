import { Box } from "@mui/material";
import { RESPONSIVE_DESKTOP, styles } from "../../styles";
import LeftArrowBlack from "../svg/icon/LeftArrowBlack";

const ContactCard = ({ title, imgSrc, linkText, linkHref }) => (
	<Box
		sx={{
			flex: 1,
			background: "#F2F0EB",
			textAlign: "center",
			p: "20px",
			mx: "20px",
			[RESPONSIVE_DESKTOP]: {
				p: "128px 70px",
			},
		}}
	>
		<Box
			sx={{
				...styles.centerFlex,
				pb: "40px",
				justifyContent: "center",
			}}
		>
			<img
				alt="?"
				src={imgSrc}
			/>
		</Box>
		<Box
			sx={{
				pb: "30px",
				...styles.heading[2],
				fontWeight: 500,
			}}
		>
			{title}
		</Box>
		<Box
			sx={{
				...styles.centerFlex,
				justifyContent: "center",
			}}
		>
			<a
				href={linkHref}
				style={{
					...styles.centerFlex,
					gap: "10px",
				}}
			>
				<Box
					sx={{
						...styles.heading[3],
						...styles.fontColor.xanhNhat006241,
					}}
				>
					{linkText}
				</Box>
				<Box
					sx={{
						svg: {
							width: "8px",
							height: "16px",
						},
						"svg>path": { stroke: "#006241" },
					}}
				>
					<LeftArrowBlack />
				</Box>
			</a>
		</Box>
	</Box>
);

export default ContactCard;
