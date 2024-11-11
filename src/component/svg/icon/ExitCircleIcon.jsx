import { Box } from "@mui/material";
import { styles } from "../../../styles";

const ExitCircleIcon = () => {
	return (
		<Box sx={{ ...styles.centerFlex }}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="30"
				height="30"
				viewBox="0 0 20 20"
				fill="none"
			>
				<g>
					<path
						id="Vector"
						d="M10.0002 20C15.523 20 20 15.5228 20 9.99992C20 4.47706 15.523 0 10.0002 0C4.47735 0 0 4.47706 0 9.99992C0 15.5228 4.47735 20 10.0002 20Z"
						fill="#D9D9D9"
					/>
					<g>
						<g>
							<path
								id="Vector_2"
								d="M6.52295 6.52286L13.477 13.4771"
								stroke="black"
								strokeMiterlimit="10"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								id="Vector_3"
								d="M13.477 6.52286L6.52295 13.4771"
								stroke="black"
								strokeMiterlimit="10"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</g>
					</g>
				</g>
			</svg>
		</Box>
	);
};

export default ExitCircleIcon;
