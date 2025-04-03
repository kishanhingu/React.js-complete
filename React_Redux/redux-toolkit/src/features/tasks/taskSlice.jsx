import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorageData } from "../../components/localStorageData";

const initialState = {
  task: getLocalStorageData(),
};

// RTK Slice
const taskReducer = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask(state, action) {
      state.task.push(action.payload);
      // state.task = [...state.task, action.payload];
    },
    deleteTask(state, action) {
      state.task = state.task.filter((curTask, index) => {
        return index !== action.payload;
      });
    },
    clearAllTask(state) {
      state.task = [];
    },
  },
});

export const { addTask, deleteTask, clearAllTask } = taskReducer.actions;
export default taskReducer.reducer;
