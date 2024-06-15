import {
  Box,
  Button,
  CardMedia,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import clothes from "../../assets/images/clothes.jpg";
import { useDispatch } from "react-redux";
import { filterProducts } from "../../features/slices/ProductsSlice";
import { useNavigate } from "react-router-dom";

function NavigateButtons() {
  const theme = useTheme();
  const buttons = [
    "Hoodies",
    "Dresses",
    "Suits",
    "Shoes",
    "T-Shirts",
    "Jeans",
    "Jackets",
    "Bags",
  ];
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <Box>
      <Stack
        direction={"row"}
        py={2}
        justifyContent={"center"}
        flexWrap={"wrap"}
      >
        {buttons.map((item, index) => {
          return (
            <div key={index}>
              <Button
                size="medium"
                color="success"
                sx={{ m: 1 }}
                variant="outlined"
                onClick={() => {
                  dispatch(filterProducts(item));
                  navigate("/filterProducts/" + item);
                }}
              >
                {item}
              </Button>
            </div>
          );
        })}
      </Stack>
      <Box
        sx={{
          bgcolor: theme.palette.common.black,
          width: "65%",
          mx: "auto",
          borderRadius: "6px",
        }}
      >
        <Typography
          variant="body1"
          color={theme.palette.error.main}
          align="center"
          py={"4px"}
          fontWeight={"bold"}
          letterSpacing={"3px"}
        >
          SALES UP TO 50%
        </Typography>
      </Box>
      <Box sx={{ my: 2 }}>
        <CardMedia
          component={"img"}
          sx={{ boxShadow: theme.shadows[18], width: "80%" }}
          className="clothes-img"
          src={clothes}
          alt="clothes"
        />
      </Box>
      <Box
        sx={{
          bgcolor: theme.palette.common.black,
          width: "65%",
          mx: "auto",
          borderRadius: "6px",
        }}
      >
        <Typography
          variant="body1"
          color={theme.palette.error.main}
          align="center"
          py={"4px"}
          fontWeight={"bold"}
          letterSpacing={"3px"}
          mb={3}
        >
          SUMMER T-SHIRT SALES 30%
        </Typography>
      </Box>
    </Box>
  );
}

export default NavigateButtons;
