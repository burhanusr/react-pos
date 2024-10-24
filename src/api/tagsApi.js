import axiosInstance from "./axiosConfig";

export const getAllProducts = async () => {
  const response = await axiosInstance.get("/api/v1/tags");
  return response.data;
};
