const redux_toolkit = "redux-toolkit";
export const getLocalStorageData = () => {
  const localStorageData = localStorage.getItem(redux_toolkit);

  if (!localStorageData) {
    return [];
  }

  return JSON.parse(localStorageData);
};
export const setLocalStorageData = (task) => {
  return localStorage.setItem(redux_toolkit, JSON.stringify(task));
};
