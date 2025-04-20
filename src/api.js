import axios from "axios";

const BASE_URL = "http://localhost:8000"; // Update if deployed

export const fetchRecommendations = async (query, url) => {
  return axios.post(`${BASE_URL}/recommend`, {
    query,
    url,
  });
};
