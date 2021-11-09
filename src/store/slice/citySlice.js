import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cityList: [],
};

export const todoSlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    addCity: (state, action) => {
      state.cityList = action.payload;
    },
  },
});

export default todoSlice.reducer;
