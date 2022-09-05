import axios from "../custom-axios";
import { API_GATEWAY_URL, AuthUser, AuthUserDetailed } from "./types";

const API_GET_USER = () => `${API_GATEWAY_URL}/users/me`;

export const getUser = async () : Promise<Array<AuthUserDetailed>> => {
    const response = await axios.get(API_GET_USER(), {withCredentials: true});
    return response.data;
}