import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchData: {},
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchData: (state, action) => {
      // console.log("change", action.payload);
      state.searchData = action.payload;
    },
  },
});

export const { setSearchData } = searchSlice.actions;
export default searchSlice.reducer;
