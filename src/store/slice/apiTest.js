import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const userAPI = () => {
  return fetch("https://api.kcg.gov.tw/api/service/get/41d81188-3b52-4433-8f9c-8bf263a22362")
    .then((res) => {
      return res.json();
    })
    .then((result) => {
      console.log("result", result);
      return result;
    });
};

export const fetchUserById = createAsyncThunk("users/fetchByIdStatus", async (userId, thunkAPI) => {
  const response = await userAPI();
  return response.data;
});

const initialState = {
  city: [],
};

// Then, handle actions in your reducers:
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      // Add user to the state array
      state.city = action.payload.slice(0, 30);
    });
  },
});

export default usersSlice.reducer;
