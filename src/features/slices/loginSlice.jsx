import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem('authUser')) || {
      name: "",
      password: "",
      image: "",
      authUser: false,
    },
  },
  reducers: {
    login(state, action) {
      const userId = action.payload;
      const userValidation = /^[A-Za-z]{4,10}$/i.test(userId.name);
      const passwordValidation =
        /^[A-Za-z][0-9]/i.test(
          userId.password
        );
        state.user = userId;
        if(!userValidation || !passwordValidation){
            state.user.authUser = false;
        } else {
            state.user.authUser = true;
            const saveState = JSON.stringify(userId);
            localStorage.setItem('authUser', saveState);
        }
    },
    logout(state) {
        state.user = {
            name: "",
            password: "",
            image: "",
            authUser: false,
        };
        sessionStorage.clear()
    },
  },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
