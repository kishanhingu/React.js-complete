import { useReducer } from "react";
import "./index.css";
export const Reducer = () => {
  const initialState = {
    count: 0,
    inc: 2,
    dnc: 2,
  };
  const reducer = (state, action) => {
    console.log(state, action);

    // // Increment btn
    // if (action.type === "INCREMENT") {
    //   return state + 1;
    // }
    // // Decrement btn
    // if (action.type === "DECREMENT") {
    //   return state - 1;
    // }
    // // Reset btn
    // if (action.type === "RESET") {
    //   return (state = 0);
    // }

    switch (action.type) {
      case "INCREMENT":
        return { ...state, count: state.count + state.inc };
      case "DECREMENT":
        return { ...state, count: state.count - state.inc };
      case "RESET":
        return { ...state, count: 0 };

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div className="container reducer-section">
        <h1>{state.count}</h1>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      </div>
    </>
  );
};
