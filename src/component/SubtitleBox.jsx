import { Box, styled } from "@mui/material";
import { RESPONSIVE_MOBILE } from "../styles";

const SubtitleBox = styled(Box)(({ theme }) => ({
	fontSize: "24px",
	fontWeight: 700,
	pb: "15px",
	[RESPONSIVE_MOBILE]: { fontSize: "18px" },
}));
export default SubtitleBox;
