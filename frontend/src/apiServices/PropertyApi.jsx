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
export const addProperty = async (propertyData) => {
  const response = await API.post("property/addProperty", propertyData);
  return response.data;
}

export const updateProperty = async (id, propertyData) => {
  const response = await API.put(`/property/updateProperty/${id}`, propertyData);
  return response.data;
}
export const getPropertyById = async (id) => {
  const response = await API.get(`/property/getPropertyById/${id}`);
  return response.data;
}
export const deleteProperty = async (id) => {
  const response = await API.delete(`/property/deleteProperty/${id}`);
  return response.data;
}

export const getAllProperties = async () => {
  const response = await API.get("/property/getAllProperties");
  return response.data;
}

export const getPaginatedProperties  = async (page, limit) => {
  const response = await API.get(`/property/getPaginatedProperties/${page}/${limit}`);
  return response.data;
}

export const getRecentProperties = async () => {
  const response = await API.get("/property/recentProperties");
  return response.data;
}
export const getPropertyDetails = async (id) => {
  const response = await API.get(`/property/getPropertyDetails/${id}`);
 
  return response.data;
}
export const getSimilarProperties = async (id) => {
  const response = await API.get(`/property/getSimilarProperties/${id}`);
  return response.data;
}