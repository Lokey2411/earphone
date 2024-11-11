import { Box } from "@mui/material";
import { styles } from "../../../styles";

const Ellipse = () => {
  return (
    <Box sx={{ ...styles.centerFlex }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
      >
        <circle id="Ellipse 1" cx="6" cy="6" r="6" fill="black" />
      </svg>
    </Box>
  );
};

export default Ellipse;
