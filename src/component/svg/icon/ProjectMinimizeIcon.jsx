import React from "react";
import { styles } from "../../../styles";
import { Box } from "@mui/material";
const ProjectMinimizeIcon = () => {
    return (
        <Box sx={{ ...styles.centerFlex }}>
            <svg
                width="40"
                height="41"
                viewBox="0 0 40 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M6.66667 24.1263H16.6667M16.6667 24.1263V34.1263M16.6667 24.1263L5 35.793M33.3333 17.4596H23.3333M23.3333 17.4596V7.45964M23.3333 17.4596L35 5.79297"
                    stroke="#101828"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </Box>
    );
};

export default ProjectMinimizeIcon;
