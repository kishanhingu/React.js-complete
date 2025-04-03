export const getLocalStorageData = () => {
  const existingData = JSON.parse(localStorage.getItem("formData")) || [];
  return existingData;
};
