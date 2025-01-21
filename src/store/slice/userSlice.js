import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    email: "",
    name: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState: { ...initialState },
  reducers: {
    setUser(state, action) {
      // lengkapi code disini
      
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
