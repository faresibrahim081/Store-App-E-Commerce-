import React, { useEffect, useState } from "react";
import NavigationIcon from '@mui/icons-material/Navigation';
import { Box, IconButton } from "@mui/material";

function ScrollToTop() { 

  const [scroll,setScroll] = useState(false);

useEffect( () => {
  const handleScroll = () => {
    if(window.scrollY >= 500){
      setScroll(true)
    } else {
      setScroll(false)
    }
  }
  window.addEventListener('scroll',handleScroll)
  return () => {
    window.removeEventListener('scroll',handleScroll)
  }
},[])

  return (
    <Box sx={{ opacity: scroll === true ? 1 : 0 }} >
      <a href="#top" className="back-top-btn">
        <IconButton >
            <NavigationIcon sx={{color:'rgb(5, 131, 42)'}} />
        </IconButton>
      </a>
    </Box>
  );
}

export default ScrollToTop;
