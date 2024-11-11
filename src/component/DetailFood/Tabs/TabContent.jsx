import { Box } from '@mui/material'
import React from 'react'

const TabContent = ({ show, children }) => {
    return (
        <Box>
            {show && children}
        </Box>
    )
}

export default TabContent