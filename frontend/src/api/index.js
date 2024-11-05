import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:2001" });

// API.interceptors.request.use((req) => {
//   if (localStorage.getItem('profile')) {
//     req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
//   }

//   return req;
// });

export const fetchItems = () => API.get("/items");
export const createitem = (newItem) => API.post("/add-item", newItem);
export const getOneItem = (id) => API.get(`/item/${id}`);
export const updateItem = (id, updatedItem) =>
  API.put(`/item/${id}`, updatedItem);
export const deleteItem = (id) => API.delete(`/item/${id}`);

export const signIn = (formData) => API.post("/auth/signin", formData);
export const signUp = (formData) => API.post("/auth/signup", formData);
