import React from 'react'
import './Root.module.scss'
import { Outlet } from 'react-router-dom'
import NavBar from '../../Material-Ui-Components/NavBar'
import DrawerBar from '../../Material-Ui-Components/DrawerBar'
import { Box } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react'
import getDesignTokens from '../styles/MyThemes'



const Root = () => {

  const [mode, setMode] = useState(localStorage.getItem("mode") === null ? "light" : localStorage.getItem("mode"))
  const [blockOrNot, setBlockOrNot] = useState("none")
  const [showOrHide, setShowOrHide] = useState("permanent")

  const hideDrawer = () => {
    setShowOrHide("permanent")
    setBlockOrNot("none")
  }

  const showDrawer = () => {
    setShowOrHide("temporary")
    setBlockOrNot("block")
  }

  const drawerWidth = 240
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar {...{drawerWidth,showDrawer}} />
      <DrawerBar {...{drawerWidth,setMode,mode,blockOrNot,showOrHide,hideDrawer}} />
      <Box component="main" sx={{
        ml: { sm: `${drawerWidth}px` },
        display: " flex",
        justifyContent: "center",
        mt: "66px",
      }}>
        <Outlet />
      </Box>
    </ThemeProvider>
  </>
}

export default Root