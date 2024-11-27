import React from 'react';
import { AppBar, Toolbar, IconButton, Button, Box, Avatar, ListItemText } from '@mui/material';
import Link from 'next/link';

const Header: React.FC = () => {
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
        <Link href="/auth/login" style={{ textDecoration: "none", color: "inherit" }}>
          <Button variant="outlined" color="primary">
     
            <ListItemText primary="LogIn" />

          </Button>
          </Link>
          <Button variant="contained" color="primary">
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;