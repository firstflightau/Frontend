import axios from "axios";
import { apiURL } from "../../../constant/Constant";
export const fetchMarkup = (token) => {
    
    return axios({
        method: "GET",
        url: "/api/staticdata/markup/discount",
        baseURL: apiURL.baseURL,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,


        },
    })
}