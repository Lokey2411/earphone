import { Box } from "@mui/material";

const NavItem = ({ label, openMenu, setOpenMenu, menuIndex, children }) => {
	return (
		<Box sx={{ position: "relative", height: "100%", alignSelf: "center", display: "flex", alignItems: "center" }}>
			<Box
				onClick={() => setOpenMenu(menuIndex)}
				sx={{ cursor: "pointer", alignSelf: "center", verticalAlign: "middle" }}
			>
				{label}
			</Box>
			{openMenu === menuIndex && (
				<Box
					sx={{
						position: "absolute",
						height: "4px",
						width: "100%",
						// bottom: -31,
						top: "calc(100% - 4px)",
						backgroundColor: "#06542D", // xanhlacay06542D
						zIndex: 4,
						borderBottom: "solid black 1px",
					}}
				>
					<Box
						sx={{
							position: "absolute",
							backgroundColor: "#E4E3E1", // xamE4E3E1
							display: "flex",
							alignItems: "center",
							height: "fit-content",
							justifyContent: "center",
							height: "43px",
							flexWrap: "wrap",
							gap: "15px",
							top: "5px",
							left: "50%",
							transform: "translate(-50% , 0)",
							width: "max-content",
						}}
					>
						{children}
					</Box>
				</Box>
			)}
		</Box>
	);
};

export default NavItem;
