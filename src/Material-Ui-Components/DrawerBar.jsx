
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Brightness4, Brightness7, Create, Home, Logout, Person2, Settings } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import { IconButton, useTheme } from '@mui/material';


const DrawerBar = ({ drawerWidth, setMode, mode, blockOrNot, showOrHide, hideDrawer }) => {

  const { pathname } = useLocation()
  const theme = useTheme()
  const navigate = useNavigate()

  const Lists =[
    {path:"/", icon:<Home /> , text:"Home"},
    {path:"/create", icon:<Create /> , text:"Create"},
    {path:"/profile", icon:<Person2 /> , text:"Profile"},
    {path:"/settings", icon:<Settings /> , text:"Settings"},
  ]

  return <>
    <Drawer
      sx={{
        display: { xs: blockOrNot, sm: "block" },
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant={showOrHide}
      anchor="left"
      open={true}
      onClose={() => {
        hideDrawer()
      }}
    >

      <List>

        <ListItem disablePadding sx={{ display: "flex", justifyContent: "center", mb: "14px" }}>
          <IconButton
            onClick={() => {

              setMode(mode === "dark" ? "light" : "dark")
              localStorage.setItem("mode", mode === "dark" ? "light" : "dark")
            }} color="inherit">
            {mode === 'dark' ? <Brightness7 sx={{ color: "orange" }} /> : <Brightness4 />}
          </IconButton>
        </ListItem>
        <Divider />

{Lists.map((list)=>{
  return<>
    <ListItem sx={{
      bgcolor:
        // @ts-ignore
        pathname === list.path ? theme.palette.fav.main : null
    }} disablePadding>
      <ListItemButton
        onClick={() => {
          navigate(list.path);
        }}>
        <ListItemIcon>
          {list.icon}
        </ListItemIcon>
        <ListItemText primary={list.text} />
      </ListItemButton>
    </ListItem>
    </>})
}


        {/* <ListItem sx={{
          bgcolor:
            // @ts-ignore
            pathname === "/create" ? theme.palette.fav.main : null
        }} disablePadding>
          <ListItemButton onClick={() => {
            navigate("/create");
          }}>
            <ListItemIcon>
              <Create />
            </ListItemIcon>
            <ListItemText primary="Create" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Person2 />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem> */}

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            <ListItemText primary="Logout " />
          </ListItemButton>
        </ListItem>

      </List>

    </Drawer>
  </>
}

export default DrawerBar