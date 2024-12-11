import React from 'react';
import { AppBar, Toolbar, IconButton, Button, Box, Avatar, ListItemText } from '@mui/material';
import Link from 'next/link';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import { useUserStore } from '@/toolkit/store/store';

const Header: React.FC = () => {
  const { token, setToken, user, setUser } = useUserStore()
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const router = useRouter();

  const handleLogout = () => {
    // Remove the cookie by name
    removeCookie('token', { path: '/' });
    setToken('');
    localStorage.removeItem('user');
    setUser();
    toast.success('Logout Successfully');
    router.push('/auth/login');
  };
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1, // Ensure Header is above SideNav
        backgroundColor: '#f5f5f5',
        color: 'black',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* {/ {/ User Profile Picture /} /} */}
        <Box display="flex" alignItems="center">
          <IconButton size="large" edge="start" color="inherit">
            <Avatar src="https://via.placeholder.com/150" alt="User DP" />
          </IconButton>
        </Box>

        {/* {/ {/ Login/Logout Buttons /} /} */}
        <Box display="flex" alignItems="center" gap={2}>
          {
            !token ? (
                <Link
                  href="/auth/login"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Button variant="outlined" color="primary">
                    Login
                  </Button>
                </Link>
              ) : (
                <Button variant="contained" color="primary" onClick={handleLogout}>
                  Logout
                </Button>
              )
          }
          {/* <Link
            href="/auth/login"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button variant="outlined" color="primary">
              Login
            </Button>
          </Link>
          <Button variant="contained" color="primary" onClick={handleLogout}>
            Logout
          </Button> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;