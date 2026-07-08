import axios from "axios";


const API = axios.create({
  baseURL: "http://localhost:8000/",
  withCredentials: true,
});

export const sendFeedback = async (feedbackData) => {

debugger;
console.log("Sending feedback data:", feedbackData);


  const response = await API.post("/addFeedback", feedbackData);
  return response.data;
};