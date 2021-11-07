import store from "../store";
import { addTodo } from "../store/slice/todo";
import { toast } from "react-toastify";
import { createBrowserHistory } from "history";

const history = createBrowserHistory({ forceRefresh: true });

export const test = () => {
  const state = store.getState();
  console.log("todoList", state.todo.todolist);
  store.dispatch(addTodo({ id: new Date().getTime(), name: "123456" }));
  // history.push("/wan");
};

export const showToast = (msg, type = "success") => {
  if (msg) {
    type === "error" && toast.error(msg);
    type === "success" && toast.success(msg);
  }
};

export const transDate = (string) => {
  let date = new Date(string);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  return `${year}/${month}/${day}`;
};
