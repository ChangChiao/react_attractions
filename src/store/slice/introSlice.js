import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  introData: {},
};

export const introSlice = createSlice({
  name: "intro",
  initialState,
  reducers: {
    setIntroData: (state, action) => {
      state.introData = action.payload;
    },
  },
});

export const { setIntroData } = introSlice.actions;
export default introSlice.reducer;
