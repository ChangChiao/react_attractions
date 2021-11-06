import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todolist: [
    { id: 1, name: "first todo on redux" },
    { id: 2, name: "second todo in list" },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todolist.push(action.payload);
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
