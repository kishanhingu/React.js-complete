import { applyMiddleware, createStore } from "redux";
import { getLocalStorageData } from "./components/localStorageData";
import { thunk } from "redux-thunk";

// Redux DevTools Extension
import { composeWithDevTools } from "@redux-devtools/extension";

/* eslint-disable no-case-declarations */
const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";
const EDIT_TASK = "task/edit";
const FETCH_TASK = "task/fetch";

const initialState = {
  task: getLocalStorageData(),
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        task: [...state.task, action.payload],
      };

    case DELETE_TASK:
      const deleteTask = state.task.filter((curEle, index) => {
        return index !== action.payload;
      });
      return {
        ...state,
        task: deleteTask,
      };

    case EDIT_TASK:
      const editTask = state.task.map((curEle, index) => {
        return index === action.payload.index ? action.payload.curEle : curEle;
      });
      return {
        ...state,
        task: editTask,
      };

    case FETCH_TASK:
      return {
        ...state,
        task: [...state.task, ...action.payload],
      };

    default:
      return state;
  }
};

// Create store
export const store = createStore(
  todoReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

//! Get initial State value
// console.log("Initial State: ", store.getState());

//! create Action creator

// ADD TASK
export const addTask = (data) => {
  return { type: ADD_TASK, payload: data };
};
// DELETE TASK
export const deleteTask = (id) => {
  return { type: DELETE_TASK, payload: id };
};
// EDIT TASK
export const editTask = (data) => {
  return { type: EDIT_TASK, payload: data };
};
// Fetch Task Middleware
export const fetchTask = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=3"
      );
      const task = await res.json();
      dispatch({
        type: FETCH_TASK,
        payload: task.map((curEle) => curEle.title),
      });
    } catch (error) {
      console.log(error);
    }
  };
};
//! call dispatch function
// store.dispatch(addTask("Buy Apple"));

// store.dispatch({ type: ADD_TASK, payload: "Buy Mango" });
// store.dispatch({ type: ADD_TASK, payload: "Buy Mango" });

// console.log("Update State: ", store.getState());

// store.dispatch({ type: DELETE_TASK, payload: 1 });
// store.dispatch(deleteTask(1));
// console.log("Delete State: ", store.getState());
