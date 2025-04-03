const reactTodoKey = "reactTodoLists";
export const getLocalStorageTodoData = () => {
  const rowTodos = localStorage.getItem(reactTodoKey);
  if (!rowTodos) return [];
  return JSON.parse(rowTodos);
};

export const setLocalStorageTodoData = (task) => {
  return localStorage.setItem(reactTodoKey, JSON.stringify(task));
};
