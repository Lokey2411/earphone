import { Box } from "@mui/material";
import TichVIcon from "../../component/svg/icon/TichVIcon";

const ServiceBox = ({ title, subtitle, to, handleClick }) => {
	return (
		<Box
			sx={{
				p: "0px 24px 21px",
			}}
		>
			<Box
				sx={{
					display: "flex",
					gap: "15px",
					alignItems: "center",
				}}
			>
				<Box
					sx={{
						"svg circle": { fill: "black" },
						svg: { width: "18px", height: "18px" },
						"g>path": { strokeWidth: "1px" },
					}}
				>
					<TichVIcon />
				</Box>
				<Box
					sx={{
						fontWeight: "bold",
						fontSize: "14px",
					}}
				>
					{title}
					<br />
				</Box>
			</Box>
			<a
				href={to}
				onClick={handleClick}
				style={{
					fontWeight: 400,
					marginLeft: "32px",
					fontSize: "14px",
					paddingTop: "7px",
					color: "rgb(0,102,204)",
				}}
			>
				{subtitle}
			</a>
		</Box>
	);
};

export default ServiceBox;
