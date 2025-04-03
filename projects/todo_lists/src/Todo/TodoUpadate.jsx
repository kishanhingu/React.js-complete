import "./Todo.css";
import { TodoDateTime } from "./TodoDateTime";
export const TodoUpadate = ({ id, content, checked }, { onEditTodo }) => {
  const [inputValue, setInputValue] = useState({});

  const handleInputChange = (value) => {
    setInputValue({ id: value, content: value, checked: checked });
  };
  const handleFormSubmit = () => {
    event.preventDefault();
    onEditTodo(inputValue);
  };

  return (
    <section className="todo-container">
      <h1>Edit Todo</h1>
      <TodoDateTime />
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text"
            className="todo-input"
            autoComplete="off"
            value={content}
            onChange={(event) => handleInputChange(event.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="todo-btn">
            Edit Task
          </button>
        </div>
      </form>
    </section>
  );
};
