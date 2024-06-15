import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import Nav from "./Nav";

function Navbar() {
  const theme = useTheme();
  return (
    <Box>
      <Box
        sx={{
          bgcolor: theme.palette.common.black,
          width: "100%",
          height: "fit-content",
        }}
      >
        <Typography
          align="center"
          variant="h6"
          fontWeight={'bold'}
          textTransform={'uppercase'}
          p={0.5}
          letterSpacing={'3px'}
          color={theme.palette.common.white}
        >
          welcom all
        </Typography>
      </Box>
      <Box>
        <Nav />
      </Box>
    </Box>
  );
}

export default Navbar;
