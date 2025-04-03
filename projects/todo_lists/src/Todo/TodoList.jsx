/* eslint-disable react/prop-types */
import { MdCheck, MdDeleteForever } from "react-icons/md";
// import { FaRegEdit } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
export const TodoList = ({
  data,
  checked,
  onHandleDeleteTodo,
  // onHandleEditTodo,
  onHandleCheckedTodo,
}) => {
  return (
    <li className="todo-item">
      <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
      <div className="btn">
        <button className="check-btn" onClick={() => onHandleCheckedTodo(data)}>
          <MdCheck />
        </button>
        {/* <button className="edit-btn" onClick={() => onHandleEditTodo(data)}>
          <FaRegEdit />
        </button> */}
        <button className="delete-btn" onClick={() => onHandleDeleteTodo(data)}>
          <MdDeleteForever />
        </button>
      </div>
    </li>
  );
};
