import { Box, styled } from '@mui/material';
import React from 'react'
import { styles } from '../../../styles';

const TabDecoration = ({ isShow }) => {
    const Decoration = styled(Box)(({ theme }) => ({
        width: "100%",
        height: "4px",
        ...styles.backgroundColor.xanhNhat006241,
    }));
    return isShow ? <Decoration /> : <></>
}

export default TabDecoration