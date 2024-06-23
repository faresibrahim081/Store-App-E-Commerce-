import * as React from "react";
import Button from "@mui/material/Button";
import emptyCardImg from "../../assets/images/emptyCart.webp";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { Box, CardMedia, Divider } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import Tooltip from "@mui/material/Tooltip";
import { removeFromCart } from "../../features/slices/CartSlice";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function Cart({ handleClickClose, openCart }) {
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  return (
    <>
      {cart.length > 0 ? (
        <BootstrapDialog
          sx={{ width: "80%", mx: "auto" }}
          onClose={handleClickClose}
          aria-labelledby="customized-dialog-title"
          open={openCart}
        >
          <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            cart Contents
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClickClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent
            dividers
            overflowY={'visible'}
            className="card"
            sx={{
              overflowY:'visible',
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            {cart.map((item, index) => {
              return (
                <Box
                  sx={{
                    my: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexDirection: { xs: "column", sm: "row" }
                  }}
                  key={index}
                >
                  <Box sx={{ py: "5px", width: "50%" }}>
                    <CardMedia
                      component={"img"}
                      sx={{
                        borderRadius: "8px",
                        width: "150px",
                        height: "200px",
                      }}
                      src={item.img}
                      alt={item.name}
                    />
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: "bold", pt: "3px" }}
                      color="inherit"
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      className='description'
                      sx={{ fontWeight: "bold", pt: "3px" }}
                      color="inherit"
                    >
                      {item.text}
                    </Typography>
                  </Box>
                  <Box>
                    <Box>
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: "bold", pt: "3px" }}
                        color="inherit"
                      >
                        selected size: {item.size}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: "bold",
                          pt: "3px",
                          position: "relative",
                        }}
                        color="inherit"
                      >
                        selected color:{" "}
                        <CircleIcon
                          fonsize={"small"}
                          sx={{
                            color: item.color,
                            position: "absolute",
                            top: 0,
                            right: "10%",
                          }}
                        />
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: "bold", pt: "3px" }}
                        color="inherit"
                      >
                        amount: {item.amount}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: "bold", pt: "3px" }}
                        color="inherit"
                      >
                        single item price: {item.price}$
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: "bold", pt: "3px" }}
                        color="inherit"
                      >
                        Totla Items price: {item.totalPrice}$
                      </Typography>
                    </Box>
                    <Box>
                      <Tooltip content="remove from the cart">
                        <Button
                          onClick={() => {
                            dispatch(removeFromCart(item));
                          }}
                          size="small"
                          sx={{ mt: 2 }}
                          color={"error"}
                          focusRipple={true}
                          variant="contained"
                        >
                          remove
                        </Button>
                      </Tooltip>
                    </Box>
                  </Box>
                  <Divider sx={{ mt: 2 }} />
                </Box>
              );
            })}
          </DialogContent>
          <DialogActions>
            <Typography sx={{display:'flex', justifyContent:'center',alignItems:'center'}} variant="body1" color="inherit">
              total price of all products: {totalPrice}$
            </Typography>
          </DialogActions>
        </BootstrapDialog>
      ) : (
        <BootstrapDialog
          onClose={handleClickClose}
          aria-labelledby="customized-dialog-title"
          open={openCart}
          
          sx={{ width: "75%", mx: "auto", overflowY:'visible' }}
        >
          <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            cart Contents
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClickClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent dividers>
            <CardMedia
              component="img"
              className='empty-card-imd'
              src={emptyCardImg}
              sx={{ width: "300px", height: "300px", mx: "auto" }}
            />
            <Typography
              variant="h3"
              align={"center"}
              sx={{ fontWeight: "bold", px: "20px" }}
              color="inherit"
            >
              your card is empty
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClickClose}>
              add products
            </Button>
          </DialogActions>
        </BootstrapDialog>
      )}
    </>
  );
}
