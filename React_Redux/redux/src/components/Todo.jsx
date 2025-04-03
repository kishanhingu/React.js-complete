import { useEffect, useState } from "react";
import { MdDeleteForever, MdModeEdit } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask, editTask, fetchTask } from "../store";
import { setLocalStorageTodoData } from "./localStorageData";

export const Todo = () => {
  const [input, setInput] = useState("");
  const [editTrueOrFalse, setEditTrueOrFalse] = useState(false);
  const [editInput, setEditInput] = useState({});

  const data = useSelector((state) => state.task);

  const dispatch = useDispatch();

  // Form Submit Button
  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!input) {
      return;
    }

    if (editTrueOrFalse) {
      editInput.curEle = input;

      // setEditInput((prev) => ({ ...prev, curEle: input }));

      dispatch(editTask(editInput));

      setInput("");

      return setEditTrueOrFalse(false);
    } else {
      dispatch(addTask(input));

      return setInput("");
    }
  };

  // Delete task
  const handleDeleteTask = (index) => {
    return dispatch(deleteTask(index));
  };

  // Edit Task
  const handleEditTask = (data) => {
    setInput(data.curEle);
    setEditTrueOrFalse(true);
    setEditInput(data);
  };

  // Fetch Task Btn
  const handleFetchTask = () => {
    dispatch(fetchTask());
  };

  // Set localStorage Data
  useEffect(() => {
    setLocalStorageTodoData(data);
  }, [data]);

  return (
    <div className="todoApp-section">
      <div className="container">
        <h1>To-do List:</h1>

        <div className="todo">
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              id="input-bon"
              placeholder="Add a new Task"
              autoComplete="off"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">
              {editTrueOrFalse ? "Edit" : "Add Task"}
            </button>
          </form>
          <button onClick={handleFetchTask}>Fetch Task</button>
        </div>

        <ul id="list-container">
          {data?.map((curEle, index) => {
            return (
              <li key={index}>
                <p>
                  {index} : {curEle}
                </p>
                <div className="todo_list_btn">
                  <button onClick={() => handleEditTask({ index, curEle })}>
                    <MdModeEdit />
                  </button>
                  <button onClick={() => handleDeleteTask(index)}>
                    <MdDeleteForever />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
