import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/slices/loginSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const intitalState = {
    name: "",
    password: "",
    image: "",
  };
  const [values, setValues] = useState(intitalState);
  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const dispatch = useDispatch();
  const navigate = useNavigate()

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <Paper
        component="form"
        sx={{ width: "340px", position: "relative" }}
        elevation={9}
      >
        <Box
          sx={{
            width: "80%",
            mx: "auto",
            position: "absolute",
            top: "-5%",
            left: "10%",
            py: 2,
            bgcolor: "green",
            borderRadius: "6px",
          }}
        >
          <Typography
            align="center"
            sx={{ fontWeight: "bold" }}
            variant="h4"
            color="#fff"
          >
            sign in
          </Typography>
        </Box>
        <Box>
          <TextField
            label="user name"
            sx={{ display: "block", mx: "auto", mt: "100px", width: "65%" }}
            color="success"
            name='name'
            value={values.name}
            onChange={onChange}
          />
          <TextField
            label="password"
            sx={{ display: "block", mx: "auto", mt: "20px", width: "65%" }}
            color="success"
            type="password"
            name="password"
            value={values.password}
            onChange={onChange}
          />
          <TextField
            label="image URL address"
            sx={{ display: "block", mx: "auto", mt: "20px", width: "65%" }}
            color="success"
            name="image"
            value={values.image}
            onChange={onChange}
          />
        </Box>
        <Box>
          <Button
            onClick={() => {
              dispatch(login(values));
              navigate('/')
            }}
            color="success"
            sx={{ width: "80%", m: 3, mx: "auto", display: "block" }}
            variant="contained"
          >
            sign in
          </Button>
        </Box>
        <Typography align={"center"} my={3} variant="body1" color="inherit">
          image is optional
        </Typography>
      </Paper>
    </Box>
  );
}

export default Login;
