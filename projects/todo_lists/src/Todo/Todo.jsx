import { useState } from "react";
import "./Todo.css";

// Todo components import
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDateTime } from "./TodoDateTime";
import {
  getLocalStorageTodoData,
  setLocalStorageTodoData,
} from "./TodoLocalStorage";

export const Todo = () => {
  const [task, setTask] = useState(() => getLocalStorageTodoData());

  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;

    //todo to check if the input field is empty or not
    if (!content) return;

    //todo to check if the data is already existing or not
    const ifTodoContentMatched = task.find(
      (curTask) => curTask.content === content
    );
    if (ifTodoContentMatched) {
      alert("This is already Exist !!!!!");
      return;
    }
    // if (task.includes(inputValue)) {
    //   alert("This is already Exist !!!!!");
    //   return;
    // }

    setTask((prevTask) => [...prevTask, { id, content, checked }]);
  };

  //todo add data from localStorage
  setLocalStorageTodoData(task);

  // todo handleDeleteTodo function
  const handleDeleteTodo = (value) => {
    // console.log(task);
    // console.log(value);
    const upadatedTask = task.filter((curEle) => curEle.content !== value);
    setTask(upadatedTask);
  };

  // todo handleClearButton function
  const handleClearAllButton = () => {
    setTask([]);
  };

  // todo handleCheckedTodo function
  const handleCheckedTodo = (checkTask) => {
    const checkUpdate = task.map((curEle) => {
      if (curEle.content === checkTask) {
        return {
          id: curEle.id,
          content: curEle.content,
          checked: !curEle.checked,
        };
      } else {
        return curEle;
      }
    });
    setTask(checkUpdate);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <TodoDateTime />
      </header>

      <TodoForm onAddTodo={handleFormSubmit} />

      <section className="myUnOrdList">
        <ul>
          {task.map((curTask) => {
            return (
              <TodoList
                key={curTask.id}
                data={curTask.content}
                checked={curTask.checked}
                onHandleDeleteTodo={handleDeleteTodo}
                onHandleCheckedTodo={handleCheckedTodo}
              />
            );
          })}
        </ul>
      </section>

      <section>
        <button className="clear-btn" onClick={handleClearAllButton}>
          Clear All
        </button>
      </section>
    </section>
  );
};
