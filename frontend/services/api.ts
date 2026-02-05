import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
});

export const getJobs = () => API.get("/jobs");
export const runJob = (id: number) => API.post(`/run-job/${id}`);
export const createJob = (data: any) => API.post("/jobs", data);
