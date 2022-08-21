import axios from "axios";
import { API_GATEWAY_URL } from "./types";

const API_GET_USER = () => `${API_GATEWAY_URL}/users/me`;

export const getUser = async () => {
    const response = await axios.get(API_GET_USER(), {withCredentials: true});
    return response.data;
}