import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loggedUser: {},
    profile: {}
  },
  reducers: {
    getAllUsers: (state, action) => {
      state.users = action.payload;
    },
    getLoggedUserData: (state, action) => {
      state.loggedUser = action.payload;
    },
    setEmptyLoggedUser: (state) => {
      state.loggedUser = {};
    },
    setUserDetails: (state, action) => {
      state.profile = action.payload;
    }, 
    clearUserDetail: (state) => {
      state.profile = {};
    },
    keepUserLog: (state, action) => {
      state.loggedUser = action.payload;
    }
  },
});

export const { getAllUsers, getLoggedUserData, setEmptyLoggedUser, setUserDetails,clearUserDetail, keepUserLog } =
  usersSlice.actions;
export default usersSlice.reducer;
