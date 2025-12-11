import axios from "axios";
import { apiURL } from "../../../constant/Constant";
export const fetchAirline = () => {
    return axios({
        method: "GET",
        url: "/api/staticdata/airlinelist",
        baseURL: apiURL.baseURL,
        headers: {
            "Content-Type": "application/json",
        },
    })
}