import React from 'react'
import { storeData } from '../../assets/data/dummyData'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions, Stack, useTheme } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { useDispatch } from "react-redux";
import { addToCart } from '../../features/slices/CartSlice';

function ProductItem() {
    const theme = useTheme();
    const dispatch = useDispatch();
  return (
    <Stack sx={{flexDirection:'row', gap:2, flexWrap:'wrap',mr:'auto', ml:'-35px'}}>
      {storeData.slice(0,9).map( (item, index) => {
        return(
            <Box key={index} sx={{}}>
            <Card 
              sx={{ maxWidth: "290px", width: "290px" }}
              >
              <CardActionArea>
                <CardMedia
                  component="img"
                  sx={{
                      // maxHeight:"300px",
                    mt: "6px",
                    borderRadius: "6px",
                    mx: "auto",
                    width: "90%",
                    boxShadow: theme.shadows[5],
                  }}
                  loading="lazy"
                  image={item.img}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    align="center"
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    {item.name}
                  </Typography>
                  <Typography align={"center"} variant="body2" color="text.secondary">
                    {item.text}
                  </Typography>
                  <Stack direction={"row"} justifyContent={"space-between"} alignItems={'center'}>
                    <Typography variant="body1" color="initial">
                      price: {item.price}$
                    </Typography>
                    <Typography align={"right"} variant="body1" color="initial">
                      color:{" "}
                          <CircleIcon
                            fonsize={"medium"}
                            key={index}
                            sx={{ color: item.color[1] }}
                          />
                    </Typography>
                  </Stack>
                </CardContent>
                <CardActions>
                <Button
                    sx={{ mx: "auto" }}
                    size="medium"
                    variant="outlined"
                    color="success"
                    onClick={() =>
                      dispatch(
                        addToCart({
                          id: item.id,
                          img: item.img,
                          color: item.color[0],
                          size: item.size[0],
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
                  </CardActions>
              </CardActionArea>
            </Card>
            </Box>
        )
      })}
    </Stack>
  )
}

export default ProductItem
