import { Box } from "@mui/material";
import React from "react";
import { styles } from "../../../styles";
const ShopSearchIcon = () => {
    return (
        <Box sx={{ ...styles.centerFlex }}>
            <svg
                width="12"
                height="17"
                viewBox="0 0 12 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M11.3835 5.9204C11.3835 11.023 7.51444 14.8907 6.15021 16.079C5.88184 16.312 5.50164 16.312 5.23327 16.079C3.86904 14.8907 0 11.023 0 5.9204C0 2.65844 2.54956 0.0022583 5.68058 0.0022583C8.8116 0.0022583 11.3835 2.65844 11.3835 5.9204Z"
                    fill="white"
                />
                <path
                    id="inner-circle"
                    d="M5.70297 9.71827C7.71627 9.71827 9.34831 8.01797 9.34831 5.92048C9.34831 3.82299 7.71627 2.12262 5.70297 2.12262C3.68967 2.12262 2.05756 3.82299 2.05756 5.92048C2.05756 8.01797 3.68967 9.71827 5.70297 9.71827Z"
                    fill="#172825"
                />
            </svg>
        </Box>
    );
};

export default ShopSearchIcon;
