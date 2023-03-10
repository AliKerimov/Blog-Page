import axios from "axios";

// const api= axios.create({
//   baseURL: "http://localhost:5000",
  // headers:{"X-Authorization": "pk_test_445605de7894cb6c0df4dfd963c6c3b296801684f6072"}
// });
// export default api;



const api = axios.create({
  baseURL: "https://blog-api-t6u0.onrender.com"
})
export default api;