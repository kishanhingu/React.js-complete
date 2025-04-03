import axios from "axios";

const api = axios.create({
  baseURL: "http://www.omdbapi.com/",
});

// creating a get req function
export const getMovie = () => {
  return api.get("?i=tt3896198&apikey=66e84107&s=titanic&page=1");
};

// import axios from "axios";

// const api = axios.create({
//   baseURL: "https://thailottery.onrender.com/api/admin/dashboard",
// });

// // creating a get req function
// export const getMovie = () => {
//   return api.get("");
// };
