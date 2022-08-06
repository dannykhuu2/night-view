import { AuthUser, API_GATEWAY_URL } from './types'
import axios, { AxiosResponse } from 'axios';

const API_POST_SIGNUP = `${API_GATEWAY_URL}/auth/signup`;
const API_POST_SIGNIN = `${API_GATEWAY_URL}/auth/signin`;

export const postSignIn = async (payload: AuthUser) : Promise<AxiosResponse<any, any>> => {
    const response = axios.post(API_POST_SIGNIN, {
        ...payload
    });
    console.log(response);
    return response;
}

export const postSignUp = async (payload: AuthUser) : Promise<AxiosResponse<any, any>> => {
    const response = axios.post(API_POST_SIGNUP, {
        ...payload
    });
    console.log(response);
    return response;
}