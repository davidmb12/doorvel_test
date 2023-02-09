import AdbIcon  from "@mui/icons-material/Adb";
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Avatar, Button, IconButton, Link, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material";
import NextLink from "next/link";
import { useState } from "react";

const { Box, Container, Stack } = require("@mui/system");

const pages = ['Home', 'Settings'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const LinkItem = ({href, path, children}) =>{
    const active = path === href
    return(
        <NextLink href={href}>
            
                {children}

        </NextLink>
    )

}

const Navbar = props =>
{
    const {path} = props;
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
    return (
        <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Doorvel
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Doorvel
          </Typography>
          <Box sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex' }}}>
            <MenuItem >
                <LinkItem href={'/'}>Home</LinkItem>
            </MenuItem>
            <MenuItem >
                <LinkItem href={'settings'}>Settings</LinkItem>
            </MenuItem>
          </Box>

          
        </Toolbar>
      </Container>
    </AppBar>
    )
}

export default Navbar
