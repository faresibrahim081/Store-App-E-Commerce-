import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import MenuButtons from "./MenuButtons";
import Error from "../error/Error";
import {
  filterProducts,
  filterGender,
  sortByPrice,
  filterByColor,
  filterBySize,
} from "../../features/slices/ProductsSlice";

function FilterProducts() {
  const error = useSelector((state) => state.products.error);
  const products = useSelector((state) => state.products.filterProducts);
  const { type } = useParams();
  const genderButton = ["male", "female"];
  const colorButtons = [
    "red",
    "green",
    "purple",
    "yellow",
    "orange",
    "blue",
    "black",
    "brown",
  ];
  const sizeButtons = ["S", "M", "L", "XL"];
  const dispatch = useDispatch();

  return (
    <>
      <Box sx={{ width: "80%", mx: "auto" }}>
        <Box sx={{ mx: "auto" }}>
          <Box pt={2}>
            <Typography align="center" variant="h1" color="initial">
              {type}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              my: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              {genderButton.map((item, index) => {
                return (
                  <div key={index}>
                    <Button
                      size="large"
                      color="success"
                      sx={{ m: 1 }}
                      variant="outlined"
                      onClick={() => {
                        dispatch(filterGender(item));
                      }}
                    >
                      {item}
                    </Button>
                  </div>
                );
              })}
              <Button
                size="large"
                color="success"
                sx={{ m: 1 }}
                variant="outlined"
                onClick={() => {
                  dispatch(sortByPrice());
                }}
              >
                heigh price
              </Button>
              <MenuButtons
                items={colorButtons}
                width={"168px"}
                name={"select a color"}
                filter={filterByColor}
              />
              <MenuButtons
              filter={filterBySize}
              disabled = {type === 'Bags' || type === 'Shoes'}
                items={sizeButtons}
                width={"151px"}
                name={"select a size"}
                sx={{ position: "relative", zIndex: "-1" }}
              />
            </Box>
            <Button
              size="large"
              color="success"
              sx={{ m: 1 }}
              variant="outlined"
              onClick={() => {
                dispatch(filterProducts(type));
              }}
            >
              clear filter
            </Button>
          </Box>
          {error ? <Error /> : 
          <Stack direction={"row"} py={1} gap={2} flexWrap={"wrap"}>
            {products
              .filter((product) => product.type === type)
              .map((product, index) => {
                return (
                  <Box key={index}>
                    <ProductCard
                      id={product.id}
                      text={product.text}
                      colors={product.color}
                      price={product.price}
                      name={product.name}
                      img={product.img}
                    />
                  </Box>
                );
              })}
          </Stack>}
        </Box>
      </Box>
    </>
  );
}

export default FilterProducts;
