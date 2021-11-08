import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchData: {},
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchData: (state, action) => {
      state.searchData = action.payload;
    },
  },
});

export const { setSearchData } = searchSlice.actions;
export default searchSlice.reducer;
