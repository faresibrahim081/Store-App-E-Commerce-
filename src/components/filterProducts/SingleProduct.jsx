import { Box, Button, CardMedia } from "@mui/material";
import React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useParams } from "react-router-dom";
import CircleIcon from "@mui/icons-material/Circle";
import { addToCart } from "../../features/slices/CartSlice";
import "./SingleProduct.css";
import Navbar from "../navbar/Navbar";

function SingleProduct() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const { id } = useParams();
  const product = useSelector((state) => state.products.singleProduct);

  const productSize = product[0].size ? product[0].size[0] : "";
  const productColor = product[0].color ? product[0].color[0] : "";
  const [size, setSize] = React.useState(productSize);
  const [color, setColor] = React.useState(productColor);

  const handleChange = (event) => {
    setSize(event.target.value);
    setColor(event.target.value);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        {product
          .filter((product) => product.id === id)
          .map((item, index) => {
            return (
              <Box key={index}>
                <div
                  className="product-card"
                  // sx={{ height: "95vh" }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      maxHeight: "80vh",
                      mt: "6px",
                      borderRadius: "6px",
                      width: "50%",
                      boxShadow: theme.shadows[11],
                    }}
                    loading="lazy"
                    src={item.img}
                    alt="green iguana"
                  />
                  <CardContent className="content">
                    <Typography gutterBottom variant="h5" component="div">
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.text}
                    </Typography>
                    <Typography variant="body1" color="initial" mt={2}>
                      price: {item.price}$
                    </Typography>
                    {item.size ? (
                      <>
                        <FormControl variant="filled" sx={{ m: 1 }}>
                          <InputLabel id="demo-simple-select-filled-label">
                            pick a size
                          </InputLabel>
                          <Select
                            sx={{ display: "block", width: "300px" }}
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={size}
                            onChange={handleChange}
                          >
                            {item.size.map((item, index) => {
                              return (
                                <MenuItem key={index} value={item}>
                                  {item}
                                </MenuItem>
                              );
                            })}
                          </Select>
                        </FormControl>
                        <FormControl variant="filled" sx={{ m: 1 }}>
                          <InputLabel id="demo-simple-select-filled-label">
                            pick a color
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={color}
                            onChange={handleChange}
                            sx={{ display: "block", width: "300px" }}
                          >
                            {item.color.map((item, index) => {
                              return (
                                <MenuItem key={index} value={item}>
                                  {item}
                                  <CircleIcon
                                    fonsize={"small"}
                                    sx={{ color: item, pl: 2 }}
                                  />
                                </MenuItem>
                              );
                            })}
                          </Select>
                          <Button
                            sx={{ mx: "auto", mt: 3 }}
                            size="medium"
                            variant="contained"
                            color="success"
                            onClick={() =>
                              dispatch(
                                addToCart({
                                  id: item.id,
                                  img: item.img,
                                  color: color,
                                  size: size,
                                  text: item.text,
                                  price: item.price,
                                  amount: 1,
                                  name: item.name,
                                  totlalPrice: item.price,
                                })
                              )
                            }
                          >
                            Add to Cart
                          </Button>
                        </FormControl>
                      </>
                    ) : (
                      <>
                        <FormControl variant="filled" sx={{ m: 1 }}>
                          <InputLabel id="demo-simple-select-filled-label">
                            pick a size
                          </InputLabel>
                          <Select
                          disabled={true}
                            sx={{ display: "block", width: "300px" }}
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={size}
                            onChange={handleChange}
                          >
                            {/* {item.size.map((item, index) => {
                              return (
                                <MenuItem key={index} value={item}>
                                  {item}
                                </MenuItem>
                              );
                            })} */}
                          </Select>
                        </FormControl>
                        <FormControl variant="filled" sx={{ m: 1 }}>
                          <InputLabel id="demo-simple-select-filled-label">
                            pick a color
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={color}
                            onChange={handleChange}
                            sx={{ display: "block", width: "300px" }}
                          >
                            {item.color.map((item, index) => {
                              return (
                                <MenuItem key={index} value={item}>
                                  {item}
                                  <CircleIcon
                                    fonsize={"small"}
                                    sx={{ color: item, pl: 2 }}
                                  />
                                </MenuItem>
                              );
                            })}
                          </Select>
                          <Button
                            sx={{ mx: "auto",mt: 3 }}
                            size="medium"
                            variant="contained"
                            color="success"
                            onClick={() =>
                              dispatch(
                                addToCart({
                                  id: item.id,
                                  img: item.img,
                                  color: color,
                                  size: size,
                                  text: item.text,
                                  price: item.price,
                                  amount: 1,
                                  name: item.name,
                                  totlalPrice: item.price,
                                })
                              )
                            }
                          >
                            Add to Cart
                          </Button>
                        </FormControl>
                      </>
                    )}
                  </CardContent>
                </div>
              </Box>
            );
          })}
      </div>
    </>
  );
}

export default SingleProduct;
