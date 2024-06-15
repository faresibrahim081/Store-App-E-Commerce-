import {Box, CardMedia, Divider, Stack, Typography } from "@mui/material";
import logo from "../../assets/images/logo.png";
import React from "react";

function Footer() {
  return (
    <Box sx={{ pt: 3, width: "80%", mx: "auto" }}>
      <Divider sx={{width:'100%'}} />
    <Stack
    direction={'row'}
    justifyContent={"space-between"}
      alignItems={"center"}
      mx={'30px'} 
      >
      <CardMedia
        component={"img"}
        src={logo}
        alt="store"
        sx={{ cursor: "pointer", width: "150px", height: "75px" }}
        />
      <Typography variant="body1" color="inherit">
        all copyright reserved by dev fares ibrahim <i>2024</i>
      </Typography>
    </Stack>
    </Box>
  );
}

export default Footer;
