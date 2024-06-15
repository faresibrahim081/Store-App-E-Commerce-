import {
  Avatar,
  Badge,
  Box,
  CardMedia,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import logo from "../../assets/images/logo.png";
import { styled, alpha } from "@mui/material/styles";
import { FavoriteBorder, ShoppingCartOutlined } from "@mui/icons-material";
import ReorderOutlinedIcon from "@mui/icons-material/ReorderOutlined";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import Cart from "../cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../features/slices/loginSlice";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 220,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

function Nav() {
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const [openCart, setOpenCart] = useState(false);

  const handleClickOpen = () => {
    setOpenCart(true);
  };
  const handleClickClose = () => {
    setOpenCart(false);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const user = useSelector((state) => state.user.user);
  const { name, image } = user;
  const dispatch = useDispatch();

  return (
    <>
      <Stack
        className="container"
        alignItems={"center"}
        direction={"row"}
        justifyContent={"space-between"}
      >
        <Box>
          <Link to={"/"}>
            <CardMedia
              // onClick={() => navigate("/")}
              sx={{ cursor: "pointer" }}
              component="img"
              src={logo}
              alt="Store"
            />
          </Link>
        </Box>
        <Box>
          <List sx={{ display: { xs: "none", sm: "flex" }, cursor: "pointer" }}>
            <Stack direction={"row"}>
              <ListItem>
                <FavoriteBorder />
                <ListItemText primary="whish" />
              </ListItem>
              <ListItem onClick={() => handleClickOpen()}>
                <Badge
                  anchorOrigin={{ vertical: "top", horizontal: "left" }}
                  badgeContent={totalAmount}
                  max={9}
                  color="success"
                >
                  <ShoppingCartOutlined />
                </Badge>
                <ListItemText primary="cart" />
              </ListItem>
              <Link to={"/login"}>
                <ListItem>
                  <Tooltip title="sign out">
                    <Box onClick={() => dispatch(logout())} sx={{display:"flex"}}>
                          <Avatar
                            alt="Cindy Baker"
                            size="small"
                            src={image}
                            mr={2}
                          />
                        <Typography variant="body1" color="inherit">
                          {name}
                        </Typography>
                    </Box>
                  </Tooltip>
                </ListItem>
              </Link>
            </Stack>
          </List>
          <IconButton
            id="demo-customized-button"
            aria-controls={open ? "demo-customized-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            variant="contained"
            onClick={handleClick}
            sx={{ display: { sm: "none" } }}
          >
            <ReorderOutlinedIcon fontSize={"large"} />
          </IconButton>
          <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{
              "aria-labelledby": "demo-customized-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} disableRipple>
              <FavoriteBorder />
              whish
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem
              onClick={() => {
                handleClose();
                handleClickOpen();
              }}
              disableRipple
            >
              <Badge
                anchorOrigin={{ vertical: "top", horizontal: "left" }}
                badgeContent={totalAmount}
                max={9}
                color="success"
              >
                <ShoppingCartOutlined />
              </Badge>
              cart
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <Link to={"/login"}>
              <MenuItem onClick={handleClose} disableRipple>
                <Avatar alt="Cindy Baker" src={image && ""} />
                {name}
              </MenuItem>
            </Link>
          </StyledMenu>
        </Box>
      </Stack>
      <Box>
        {openCart && (
          <Cart
            openCart={openCart}
            handleClickOpen={handleClickOpen}
            handleClickClose={handleClickClose}
          />
        )}
      </Box>
    </>
  );
}

export default Nav;
