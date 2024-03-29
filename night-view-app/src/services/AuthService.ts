import { AuthUser, API_GATEWAY_URL } from './types'
import axios from '../custom-axios'

const API_POST_SIGNUP = `${API_GATEWAY_URL}/auth/signup`;
const API_POST_SIGNIN = `${API_GATEWAY_URL}/auth/signin`;
const API_POST_LOGOUT = `${API_GATEWAY_URL}/auth/logout`

export const postSignIn = async (payload: AuthUser) => {
    const response = await axios.post(API_POST_SIGNIN, {
        ...payload
    }, {withCredentials: true});
    return response.data;
}

export const postSignUp = async (payload: AuthUser) => {
    const response = await axios.post(API_POST_SIGNUP, {
        ...payload
    }, {withCredentials: true});
    return response.data;
}

export const logoutAPI = async () => {
    const response = await axios.post(API_POST_LOGOUT, {}, {withCredentials: true});
}