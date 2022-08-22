import axios from 'axios';
import { LikedImage, API_GATEWAY_URL, AddLikedImage } from './types';

const API_GET_IMAGES = (count: number) => `${API_GATEWAY_URL}/images/api/${count}`;
const API_GET_LIKED_IMAGES = (userId: number) => `${API_GATEWAY_URL}/images/likes/${userId}`;
const API_POST_LIKED_IMAGE = (userId: number) => `${API_GATEWAY_URL}/images/${userId}`;

export const fetchImages = async (count: number) => {
    const response = await axios.get(API_GET_IMAGES(count), {withCredentials: true});
    return response.data;
}

export const fetchLikedImages = async (userId: number) => {
    const response = await axios.get(API_GET_LIKED_IMAGES(userId), {withCredentials: true});
    return response.data;
}

export const saveLikedImage = async (userId: number, payload: AddLikedImage) => {
    const response = axios.post(API_POST_LIKED_IMAGE(userId), {
        ...payload
    }, {withCredentials: true});
}