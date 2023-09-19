import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';
import image from '../Assets/image1.jpeg'
import { Menu } from '@mui/icons-material';

const NavBar = ({ drawerWidth, showDrawer }) => {

  const navigate = useNavigate()

  return <>
    <AppBar position="static" sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` }, ml: { xs: 0, sm: `${drawerWidth}px` } }}>
      <Container maxWidth="xl">
        <Toolbar>
          <IconButton sx={{ mr: "9px", display: { sm: "none" } }} onClick={() => {
            showDrawer()
          }}>
            <Menu />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={() => { navigate("/") }}
            sx={{
              mr: 2,
              color: 'inherit',
              flexGrow: "1",
              cursor: "pointer"
            }}
          >
            My Expenses
          </Typography>

          <Box sx={{ flexGrow: 0, display: "flex", justifyContent: "center", alignItems: 'center' }}>
            <Typography variant="body1" mr={2} >Mohamed</Typography>
            <IconButton sx={{ p: 0 }}>
              <Avatar src={image} alt="Mohamed Saeid" />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  </>
}

export default NavBar