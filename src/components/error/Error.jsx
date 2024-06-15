import { Alert, Box } from "@mui/material";
import React from "react";

function Error() {
  return (
    <Box sx={{display:'flex', justifyContent:'center',alignItems:'center'}}>
        <Box sx={{width:'75%',mx:'auto'}}>
            <Alert variant="filled" severity="error">
            Sorry no products match your filter search ... Clear the filter and try again 😀.
            </Alert>
        </Box>
    </Box>
  );
}

export default Error;
