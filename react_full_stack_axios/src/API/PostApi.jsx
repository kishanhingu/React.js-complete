import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// get method
export const getPost = () => {
  return api.get("/posts");
};

// delete method
export const deletePost = (id) => {
  return api.delete(`/posts/${id}`);
};

// post method
export const postData = (payload) => {
  return api.post("/posts", payload);
};

// Put method
export const putData = (id, newPost) => {
  return api.put(`/posts/${id}`, newPost);
};
