import axios from "axios";


const API = axios.create({
  baseURL: "http://localhost:8000/",
  withCredentials: true,
});



export const uploadFile = async (fileData) => {
  const response = await API.post("/api/upload", fileData, {
    headers: {  
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
}