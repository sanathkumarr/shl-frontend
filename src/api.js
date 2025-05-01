import axios from "axios";

<<<<<<< HEAD
const BASE_URL = "https://shl-backend-rtjg.onrender.com";
=======
const BASE_URL = "https://shl-backend-production.up.railway.app";
>>>>>>> d9a4a7d (Initial commit with frontend, backend, and scraper)

export const fetchRecommendations = async (query) => {
  return axios.post(`${BASE_URL}/recommend`, {
    query,
  });
};
