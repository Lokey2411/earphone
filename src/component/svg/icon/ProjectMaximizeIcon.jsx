import React from "react";
import { styles } from "../../../styles";
import { Box } from "@mui/material";
const ProjectMaximizeIcon = () => {
    return (
        <Box sx={{ ...styles.centerFlex }}>
            <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M15 3.76855H21M21 3.76855V9.76855M21 3.76855L14 10.7686M9 21.7686H3M3 21.7686V15.7686M3 21.7686L10 14.7686"
                    stroke="#353535"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </Box>
    );
};

export default ProjectMaximizeIcon;
