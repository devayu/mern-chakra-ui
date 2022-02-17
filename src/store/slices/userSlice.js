import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    createUser: (state, action) => {},
  },
});
export const { createUser } = userSlice.actions;
export default userSlice.reducer;
