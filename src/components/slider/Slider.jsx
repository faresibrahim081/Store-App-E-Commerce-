import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  dotSlide,
  nextSlide,
  prevSlide,
} from "../../features/slices/SliderSlice";
import { sliderData } from "../../assets/data/dummyData";
import { ArrowCircleLeft, ArrowCircleRight } from "@mui/icons-material";

function Slider() {
  const slideIndex = useSelector((state) => state.slider.value);
  const dispatch = useDispatch();
  const theme = useTheme();
  return (
    <Box sx={{ position: "relative", pb: 5 }}>
      <Box>
        {sliderData.map((item) => {
          return (
            <Box
              key={item.id}
              sx={{
                opacity: parseInt(item.id) === slideIndex ? 1 : 0,
                scale: parseInt(item.id) === slideIndex ? '100%' : '95%',
                transition: "0.3s",
              }}
            >
              <Box>
                {parseInt(item.id) === slideIndex && (
                  <img
                    width={"100%"}
                    height={"500px"}
                    src={item.img}
                    alt="slider"
                  />
                )}
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  position: "absolute",
                  top: "15%",
                  left: "32%",
                }}
                color={theme.palette.common.white}
              >
                {parseInt(item.id) === slideIndex && item.text}
              </Typography>
              <Stack
                direction={"row"}
                sx={{ position: "absolute", bottom: "5%", left: "45%" }}
              >
                {sliderData.map((dot, index) => {
                  return (
                    <Box mr={"12px"} key={index}>
                      <div
                        className={
                          index === slideIndex ? "dot-green" : "dot-white"
                        }
                        onClick={() => dispatch(dotSlide(index))}
                      ></div>
                    </Box>
                  );
                })}
              </Stack>
            </Box>
          );
        })}
      </Box>

      <ArrowCircleLeft
        onClick={() => dispatch(nextSlide(slideIndex + 1))}
        variant="contained"
        sx={{
          position: "absolute",
          left: "5%",
          top: "40%",
          color: "white",
          fontSize: "32px",
          cursor:'pointer',
          '&:hover':{color:'green'},
          transition:'0.3s',
        }}
      />
      <ArrowCircleRight
        onClick={() => dispatch(prevSlide(slideIndex - 1))}
        variant="contained"
        sx={{
          position: "absolute",
          right: "5%",
          top: "40%",
          color: "white",
          fontSize: "32px",
          cursor:'pointer',
          '&:hover':{color:'green'},
          transition:'0.3s',
        }}
      />
    </Box>
  );
}

export default Slider;
