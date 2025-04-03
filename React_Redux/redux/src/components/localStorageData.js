const react_redux_key = "react_redux";

export const getLocalStorageData = () => {
  const localStorageData = localStorage.getItem(react_redux_key);

  if (!localStorageData) {
    return [];
  }

  return JSON.parse(localStorageData);
};

export const setLocalStorageTodoData = (task) => {
  return localStorage.setItem(react_redux_key, JSON.stringify(task));
};
