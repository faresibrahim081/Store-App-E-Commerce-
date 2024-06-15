import React from "react";
import ProductItem from "./ProductItem";
import { Box } from "@mui/material";

function ProductSection() {
  return (
    <Box sx={{width:'80%',ml:'auto',pb:5}}>
      <ProductItem />
    </Box>
  );
}

export default ProductSection;
