import { Box, Container, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import React from 'react'
import Link from 'next/link';


var footerLinks = [
    {
      id: 1,
      title: "Home",
      link: "/home"
    },
    {
      id: 2,
      title: "About",
      link: "/about"
    },
    {
      id: 3,
      title: "Products",
      link: "/productlist"
    },
    {
      id: 4,
      title: "Create",
      link: "/create"
    }
  ]
const Footer : React.FC = () => {
  return (
    <>
    <Box
      component="footer"
      // position={'static'}
      sx={{
        background: 'linear-gradient(to right, #5b636a, #5e5b6a)',
        color: 'white',
        paddingTop: 2,
        paddingBottom: 2,
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={4} alignItems="center" justifyContent="space-between">
           {/* Pages Links  */}
          <Grid item xs={12} md={3} justifyContent="center" className='footer-links'>
            {footerLinks.map((link) => (
              <Link key={link.id} href={link.link} color="inherit" style={{ marginRight: 3,textDecoration: 'none' }}>
                {link.title}
              </Link>
            ))}
          </Grid>

           {/* Social Media Icons  */}
          <Grid item>
            <IconButton href="https://facebook.com" target="_blank" color="inherit" sx={{ '&:hover': { color: '#1877f2' } }}>
              <Facebook />
            </IconButton>
            <IconButton href="https://twitter.com" target="_blank" color="inherit" sx={{ '&:hover': { color: '#1da1f2' } }}>
              <Twitter />
            </IconButton>
            <IconButton href="https://instagram.com" target="_blank" color="inherit" sx={{ '&:hover': { color: '#e1306c' } }}>
              <Instagram />
            </IconButton>
            <IconButton href="https://linkedin.com" target="_blank" color="inherit" sx={{ '&:hover': { color: '#0077b5' } }}>
              <LinkedIn />
            </IconButton>
          </Grid>

           {/* Terms and Conditions  */}
          <Grid item>
            <Link href="/terms" color="inherit">
              Terms & Conditions
            </Link>
          </Grid>
        </Grid>

         {/* Copyright Section  */}
        <Toolbar sx={{ justifyContent: 'center', borderTop: '1px solid rgba(255, 255, 255, 0.2)', paddingTop: 2 }}>
          <Typography variant="body2" color="inherit">
            © 2024 Your Company. All rights reserved.
          </Typography>
        </Toolbar>
      </Container>
    </Box>
    </>
  )
}

export default Footer


// import React from "react";
// import { Box, Typography, Grid, IconButton } from "@mui/material";
// import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

// const Footer: React.FC = () => {
//     return (
//         <Box
//             component="footer"
//             sx={{
//                 backgroundColor: "#f5f5f5",
//                 color: "black",
//                 padding: 4,
//                 marginTop: "auto",
//                 boxShadow: "0 -1px 5px rgba(0, 0, 0, 0.1)",
//             }}
//         >
//             {/* {/ Footer Content /} */}
//             <Grid container spacing={4}>
//                 {/* {/ About Section /} */}
//                 <Grid item xs={12} sm={6} md={4}>
//                     <Typography variant="h6" fontWeight="bold">
//                         About Us
//                     </Typography>
//                     <Typography variant="body2" sx={{ marginTop: 1 }}>
//                         We are committed to providing the best services and resources. Stay connected with us for updates and more information.
//                     </Typography>
//                 </Grid>

//                 {/* {/ Navigation Links /} */}
//                 <Grid item xs={12} sm={6} md={4}>
//                     <Typography variant="h6" fontWeight="bold">
//                         Quick Links
//                     </Typography>
//                     <Typography variant="body2" sx={{ marginTop: 1 }}>
//                         <a href="/" style={{ color: "inherit", textDecoration: "none" }}>
//                             Home
//                         </a>
//                     </Typography>
//                     <Typography variant="body2">
//                         <a href="/about" style={{ color: "inherit", textDecoration: "none" }}>
//                             About Us
//                         </a>
//                     </Typography>
//                     <Typography variant="body2">
//                         <a href="/contact" style={{ color: "inherit", textDecoration: "none" }}>
//                             Contact
//                         </a>
//                     </Typography>
//                 </Grid>

//                 {/* {/ Social Media Links /} */}
//                 <Grid item xs={12} sm={6} md={4}>
//                     <Typography variant="h6" fontWeight="bold">
//                         Follow Us
//                     </Typography>
//                     <Box display="flex" gap={2} mt={1}>
//                         <IconButton aria-label="Facebook" color="primary" href="https://facebook.com" target="_blank">
//                             <Facebook />
//                         </IconButton>
//                         <IconButton aria-label="Twitter" color="primary" href="https://twitter.com" target="_blank">
//                             <Twitter />
//                         </IconButton>
//                         <IconButton aria-label="Instagram" color="primary" href="https://instagram.com" target="_blank">
//                             <Instagram />
//                         </IconButton>
//                         <IconButton aria-label="LinkedIn" color="primary" href="https://linkedin.com" target="_blank">
//                             <LinkedIn />
//                         </IconButton>
//                     </Box>
//                 </Grid>
//             </Grid>

//             {/* {/ Footer Bottom /} */}
//             <Box mt={4} textAlign="center">
//                 <Typography variant="body2">
//                     &copy; {new Date().getFullYear()} Your Company. All rights reserved.
//                 </Typography>
//             </Box>
//         </Box>
//     );
// };

// export default Footer;
