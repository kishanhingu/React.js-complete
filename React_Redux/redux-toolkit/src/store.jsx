import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./features/tasks/taskSlice";

// RTK create store
export const store = configureStore({
  reducer: {
    taskReducer: taskReducer,
  },
});
