import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  currentUserOnline: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    
    signIn: (state, action) => {
      state.currentUser = action.payload;
      state.currentUserOnline = true;
    },
    
    signOutUser:(state) => {
      state.currentUser = null;
      state.currentUserOnline = false;
     
    },
  },
});

export const {
  signIn,
  signOutUser
} = userSlice.actions;

export default userSlice.reducer;