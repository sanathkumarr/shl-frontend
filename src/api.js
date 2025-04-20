import axios from "axios";

const BASE_URL = "https://shl-frontend-delta.vercel.app/"; // Update if deployed

export const fetchRecommendations = async (query, url) => {
  return axios.post(`${BASE_URL}/recommend`, {
    query,
    url,
  });
};
