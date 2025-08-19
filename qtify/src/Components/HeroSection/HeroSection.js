import React from 'react'
import {Box, Typography, Grid} from "@mui/material";
import headphones from "../../assests/HeroSection.svg";
const HeroSection=()=>{
    return (
        <Box sx={{ backgroundColor: '#121212', color: '#FFFFFF', py: 8, px: 2 }}>
          <Grid
            container
            spacing={4}
            alignItems="center"
            justifyContent="center"
          >
            {/* Text Section - 50% width */}
            <Grid item xs={12} md={6}>
              <Typography
                variant="h3"
                sx={{ fontWeight: 'bold', fontFamily: 'Poppins', mb: 2 }}
              >
                100 Thousand Songs, ad-free 
              </Typography>
              <Typography
                variant="h5"
                sx={{ fontFamily: 'Poppins', opacity: 0.8 }}
              >
                Over thousands of podcast episodes
              </Typography>
            </Grid>
    
            {/* Image Section - 50% width */}
            <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
              <img
                src={headphones}
                alt="headphones"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </Grid>
          </Grid>
        </Box>
      );
}

export default HeroSection