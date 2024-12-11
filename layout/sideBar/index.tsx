import React, { useEffect, useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
  ListItemButton,
  IconButton,
  Box,
  Typography,
} from '@mui/material';
import { ExpandLess, ExpandMore, Menu } from '@mui/icons-material';
import { useTheme, useMediaQuery } from '@mui/material';
import Link from 'next/link';
import { useUserStore } from '@/toolkit/store/store';

const SideBar: React.FC = () => {

  const { token, setToken } = useUserStore();

  useEffect(() => {
    setToken("")
  },[])


  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleToggle = (option: string) => {
    setOpen(open === option ? null : option);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <List sx={{ overflowX:'hidden'}}>


{/* All Blogs */}


      <ListItem disablePadding>
        <ListItemButton onClick={() => handleToggle('Blog')}>
          <ListItemText primary="Blog" />
          {open === 'Blog' ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      </ListItem>
      <Collapse in={open === 'Blog'} timeout="auto" unmountOnExit>
        <List component="div" disablePadding sx={{ pl: 4 }}>
          <ListItem
            component={Link}
            href="/cms/all-blogs"
            sx={{
              borderRadius: 1,
              transition: "transform 0.2s, box-shadow 0.2s",
              "&:hover": {
                transform: "translateX(10px)",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#e3f2fd",
              },
              textDecoration: "none",
              color: "#1976d2",
            }}
          >
            <Typography
              sx={{
                textTransform: "capitalize",
                padding: 1,
                textAlign: "left",
                fontWeight: "bold",
              }}
            >
              All Blogs
            </Typography>
          </ListItem>
          <ListItem
            component={Link}
            href="/cms/latest-post"
            sx={{
              borderRadius: 1,
              transition: "transform 0.2s, box-shadow 0.2s",
              "&:hover": {
                transform: "translateX(10px)",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#e3f2fd",
              },
              textDecoration: "none",
              color: "#1976d2",
            }}
          >
            <Typography
              sx={{
                textTransform: "capitalize",
                padding: 1,
                textAlign: "left",
                fontWeight: "bold",
              }}
            >
              Latest Post
            </Typography>
          </ListItem>
          <ListItem
            component={Link}
            href="/cms/blog-category"
            sx={{
              borderRadius: 1,
              transition: "transform 0.2s, box-shadow 0.2s",
              "&:hover": {
                transform: "translateX(10px)",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#e3f2fd",
              },
              textDecoration: "none",
              color: "#1976d2",
            }}
          >
            <Typography
              sx={{
                textTransform: "capitalize",
                padding: 1,
                textAlign: "left",
                fontWeight: "bold",
              }}
            >
              All Categories
            </Typography>
          </ListItem>
        </List>
      </Collapse>

{/* Page Contain */}


      <ListItem disablePadding>
        <ListItemButton onClick={() => handleToggle('Page Contain')}>
          <ListItemText primary="Page Contain" />
          {open === 'Page Contain' ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      </ListItem>
      <Collapse in={open === 'Page Contain'} timeout="auto" unmountOnExit>
        <List component="div" disablePadding sx={{ pl: 4 }}>
          <ListItem
            component={Link}
            href="/cms/all-services"
            sx={{
              borderRadius: 1,
              transition: "transform 0.2s, box-shadow 0.2s",
              "&:hover": {
                transform: "translateX(10px)",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#e3f2fd",
              },
              textDecoration: "none",
              color: "#1976d2",
            }}
          >
            <Typography
              sx={{
                textTransform: "capitalize",
                padding: 1,
                textAlign: "left",
                fontWeight: "bold",
              }}
            >
              Services
            </Typography>
          </ListItem>
          <ListItem
            component={Link}
            href="/cms/team"
            sx={{
              borderRadius: 1,
              transition: "transform 0.2s, box-shadow 0.2s",
              "&:hover": {
                transform: "translateX(10px)",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#e3f2fd",
              },
              textDecoration: "none",
              color: "#1976d2",
            }}
          >
            <Typography
              sx={{
                textTransform: "capitalize",
                padding: 1,
                textAlign: "left",
                fontWeight: "bold",
              }}
            >
              Our Team
            </Typography>
          </ListItem>
          <ListItem
            component={Link}
            href="/cms/testimonial"
            sx={{
              borderRadius: 1,
              transition: "transform 0.2s, box-shadow 0.2s",
              "&:hover": {
                transform: "translateX(10px)",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#e3f2fd",
              },
              textDecoration: "none",
              color: "#1976d2",
            }}
          >
            <Typography
              sx={{
                textTransform: "capitalize",
                padding: 1,
                textAlign: "left",
                fontWeight: "bold",
              }}
            >
              Testimonial
            </Typography>
          </ListItem>
        </List>
      </Collapse>
      {/* {/ {/ Add other options (Page Content, Course, CRUD) /} /} */}


{/* Cource */}

      <ListItem disablePadding>
        <ListItemButton onClick={() => handleToggle('Course')}>
          <ListItemText primary="Course" />
          {open === 'Course' ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      </ListItem>
      <Collapse in={open === 'Course'} timeout="auto" unmountOnExit>
        <List component="div" disablePadding sx={{ pl: 4 }}>
        <ListItem
            component={Link}
            href="/cms/course"
            sx={{
              borderRadius: 1,
              transition: "transform 0.2s, box-shadow 0.2s",
              "&:hover": {
                transform: "translateX(10px)",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#e3f2fd",
              },
              textDecoration: "none",
              color: "#1976d2",
            }}
          >
            <Typography
              sx={{
                textTransform: "capitalize",
                padding: 1,
                textAlign: "left",
                fontWeight: "bold",
              }}
            >
              All Courses
            </Typography>
          </ListItem>
        </List>
      </Collapse>


{/* crud */}

{ token && (
<>
      <ListItem disablePadding>
        <ListItemButton onClick={() => handleToggle('Crud')}>
          <ListItemText primary="Crud" />
          {open === 'Crud' ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      </ListItem>
      <Collapse in={open === 'Crud'} timeout="auto" unmountOnExit>
        <List component="div" disablePadding sx={{ pl: 4 }}>
        <ListItem
            component={Link}
            href="/crud/all-student"
            sx={{
              borderRadius: 1,
              transition: "transform 0.2s, box-shadow 0.2s",
              "&:hover": {
                transform: "translateX(10px)",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#e3f2fd",
              },
              textDecoration: "none",
              color: "#1976d2",
            }}
          >
            <Typography
              sx={{
                textTransform: "capitalize",
                padding: 1,
                textAlign: "left",
                fontWeight: "bold",
              }}
            >
              All Student
            </Typography>
          </ListItem>
        <ListItem
            component={Link}
            href="/crud/add-student"
            sx={{
              borderRadius: 1,
              transition: "transform 0.2s, box-shadow 0.2s",
              "&:hover": {
                transform: "translateX(10px)",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#e3f2fd",
              },
              textDecoration: "none",
              color: "#1976d2",
            }}
          >
            <Typography
              sx={{
                textTransform: "capitalize",
                padding: 1,
                textAlign: "left",
                fontWeight: "bold",
              }}
            >
              Add Student
            </Typography>
          </ListItem>
        </List>
      </Collapse>
      </>
      )}
    </List>

    
  );


  return (
    <Box>
      {/* {/ {/ Menu button for mobile /} /} */}
      {isMobile && (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ margin: 1 }}
        >
          <Menu />
        </IconButton>
      )}

      <Drawer
        variant={isMobile ? 'temporary' : 'permanent'}
        open={isMobile ? mobileOpen : true}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, 
        }}
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
            marginTop: isMobile ? '50px' : '64px', 
            height: isMobile ? '100vh' : 'calc(100vh - 64px - 220px)',
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
};

export default SideBar;