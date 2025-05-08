import axios from "axios";

const API_BASE = "http://localhost:8080/api/resume";

export const uploadResume = (formData) =>
  axios.post(`${API_BASE}/upload`, formData);

export const getAllResumes = () =>
  axios.get(`${API_BASE}/all`);
