import axios from "axios";

export const axiosWithAuth = () => {
    const token = JSON.parse(window.localStorage.getItem("token"));
    return axios.create({baseURL : "http://localhost:5001/api",
headers : {authorization : token}})
}