import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// fetch api data old way
export const fetchPost = () => {
  return api.get("/posts");
};

// fetch api data React Query
export const fetchPostReactQuery = async (pageNumber) => {
  const res = await api.get(`/posts?_start=${pageNumber}&_limit=6`);
  return res.status === 200 ? res.data : [];
};

// to fetch the individual data
export const fetchPostReactQueryIndividual = async (id) => {
  const res = await api.get(`/posts/${id}`);
  return res.status === 200 ? res.data : [];
};

// Delete post Form React-Query
export const deletePost = async (id) => {
  const res = await api.delete(`/posts/${id}`);
  return res.status === 200 ? res.data : [];
};

// Update post Form React-Query
export const updatePost = async (id, payLoad) => {
  const res = await api.put(`/posts/${id}`, payLoad);
  return res.status === 200 ? res.data : [];
};

// New post Form React-Query
export const newPost = async (payload) => {
  const res = await api.post("/posts", payload);
  return res.status === 201 ? res.data : [];
};

// Infinte Scrolling
export const fetchUsers = async ({ pageParam }) => {
  try {
    const res = await axios.get(
      `https://api.github.com/users?per_page=10&page=${pageParam}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
