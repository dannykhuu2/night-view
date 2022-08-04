import axios, { AxiosResponse } from 'axios';
import likedImage, { API_GATEWAY_URL } from './types';

const API_GET_IMAGES = (count: number) => `${API_GATEWAY_URL}/images/${count}`;
const API_POST_LIKED_IMAGES = (userId: number) => `${API_GATEWAY_URL}/images/${userId}`;

export const fetchImages = async (count: number) : Promise<AxiosResponse<any, any>> => {
    const response = axios.get(API_GET_IMAGES(count));
    return response;
}

export const saveLikedImage = async (userId: number, payload: likedImage) => {
    const response = axios.post(API_POST_LIKED_IMAGES(userId), {
        ...payload
    });
}