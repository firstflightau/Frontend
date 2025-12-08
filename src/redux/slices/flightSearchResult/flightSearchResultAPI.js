import axios from "axios";
import { apiURL } from "../../../constant/Constant";

export const fetchFlights = (payload) => {
  const { tptoken, requestData } = payload;

  return axios({
    method: "POST",
    url: "/api/flight/searchflight/oneway",
    baseURL: apiURL.baseURL,
    data: requestData, // Use requestData from payload
    headers: {
      "Content-Type": "application/json",
      tptoken: tptoken,
    },
  });
};
export const fetchFlightReturn = (payload) => {
  const { tptoken, requestData } = payload;

  return axios({
    method: "POST",
    url: "/api/flight/searchflight/return",
    baseURL: apiURL.baseURL,
    data: requestData, // Use requestData from payload
    headers: {
      "Content-Type": "application/json",
      tptoken: tptoken,
    },
  });
};
