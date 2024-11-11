import { Box } from "@mui/material";
import React from "react";
import { styles } from "../../../styles";
const NewsFBIcon = () => {
  return (
    <Box sx={{ ...styles.centerFlex }}>
      <svg
        width="35"
        height="35"
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.525 0C7.84479 0 0 7.83308 0 17.5003C0 26.8701 7.34866 34.5042 16.5821 35L16.5312 21.5652H11.916V16.2113H16.4827V11.8982C16.4827 8.03135 19.1142 5.25469 23.1849 5.25469L27.4025 5.45319V10.3115H24.0769C22.8854 10.3115 22.0917 11.1548 22.0917 12.0471L22.0432 16.2113H27.354L26.6099 21.5652L22.0432 21.6149L21.9923 34.4051C29.4882 32.4221 34.9991 25.5811 34.9991 17.5003C35.0984 7.83308 27.2548 0 17.525 0Z"
          fill="#6B6C64"
        />
      </svg>
    </Box>
  );
};

export default NewsFBIcon;
