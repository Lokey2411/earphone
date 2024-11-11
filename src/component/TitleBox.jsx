import { Box, styled } from "@mui/material";
import { RESPONSIVE_MOBILE } from "../styles";

const TitleBox = styled(Box)(({ theme }) => ({
	fontSize: "18px",
	marginBottom: "10px",
	[RESPONSIVE_MOBILE]: { fontSize: "16px" },
}));
export default TitleBox;
