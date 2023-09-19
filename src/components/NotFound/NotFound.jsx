import React from 'react'
import './NotFound.module.scss'
import { Box, Typography, useTheme } from '@mui/material'
const NotFound = () => {
  
const theme = useTheme()
  return <>
  <Box>
  <Typography variant="h5" sx={{fontSize:"50px"}}
  color={theme.palette.error.main}>
    This Page Not Found yet</Typography>
  </Box>
    </>
}

export default NotFound