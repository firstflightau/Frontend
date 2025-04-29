import axios from "axios";
import { apiURL } from "../../../constant/Constant";
// import store from "../../store";
export const fetchAirports = () => {
    // const state = store.getState();
    // console.log("stateeee", state)
    return axios({
        method: "GET",
        url: "/api/staticdata/airportlist/all",
        baseURL: apiURL.baseURL,
        headers: {
            "Content-Type": "application/json",
        },
    })
}