import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addTask, clearAllTask, deleteTask } from "../features/tasks/taskSlice";
import { useEffect, useState } from "react";
import { setLocalStorageData } from "./localStorageData";

export const Todo = () => {
  const [input, setInput] = useState("");

  const data = useSelector((state) => state.taskReducer.task);

  const dispatch = useDispatch();

  const handleClearAllTask = () => {
    return dispatch(clearAllTask());
  };

  const handleDeleteTask = (id) => {
    return dispatch(deleteTask(id));
  };

  const handleFormTaskSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(input));
    setInput("");
  };

  useEffect(() => {
    setLocalStorageData(data);
  }, [data]);

  return (
    <div className="todoApp-section">
      <div className="container">
        <h1>To-do List:</h1>

        <div className="todo">
          <form onSubmit={handleFormTaskSubmit}>
            <input
              type="text"
              id="input-box"
              placeholder="Add a new Task"
              autoComplete="off"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">Add Task</button>
          </form>
        </div>

        <ul id="list-container">
          {data?.map((curEle, index) => {
            return (
              <li key={index}>
                <p>
                  {index} : {curEle}
                </p>
                <div className="todo_list_btn">
                  <button>
                    <MdDeleteForever onClick={() => handleDeleteTask(index)} />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>

        <button className="clearAll-btn" onClick={handleClearAllTask}>
          Clear All
        </button>
      </div>
    </div>
  );
};
