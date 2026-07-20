import axios from "axios";


const API = axios.create({
  baseURL: "http://localhost:8000/",
  withCredentials: true,
});
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default API;

export const createBooking = async (bookingData) => {
  const response = await API.post("booking/createBooking", bookingData);
  return response.data;
}

export const getAllBookings = async () => {
  const response = await API.get("/booking/getAllBookings");
  return response.data;
}

export const getBookingById = async (id) => {
  const response = await API.get(`/booking/getBookingById/${id}`);
  return response.data;
}
export const updateBooking = async (id, bookingData) => {
  const response = await API.put(`/booking/updateBooking/${id}`, bookingData);
  return response.data;
}

export const deleteBooking = async (id) => {
  const response = await API.delete(`/booking/deleteBooking/${id}`);
  return response.data;
}


export const updateBookingStatus = async (id, status) => {
  const response = await API.put(`/booking/updateBookingStatus/${id}`, { status });
  return response.data;
}
