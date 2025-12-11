import axios from "axios";
import { apiURL } from "../../../constant/Constant";

// This API call is public and does not require a token
export const fetchAllMetaDataAPI = () => {
  return axios({
    method: "GET",
    url: "/api/metadata", // The new public endpoint
    baseURL: apiURL.baseURL,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
