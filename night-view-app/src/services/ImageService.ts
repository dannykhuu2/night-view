import axios from 'axios';
import { LikedImage, API_GATEWAY_URL, ImageType} from './types';

const API_GET_IMAGES = (count: number) => `${API_GATEWAY_URL}/images/api/${count}`;
const API_GET_LIKED_IMAGES = () => `${API_GATEWAY_URL}/images/likes`;
const API_POST_LIKE_IMAGE = () => `${API_GATEWAY_URL}/images`;
const API_DELETE_UNLIKE_IMAGE_ID = (imageId: number) => `${API_GATEWAY_URL}/images/byId/${imageId}`
const API_DELETE_UNLIKE_IMAGE_URL = (encodedUrl: string) => `${API_GATEWAY_URL}/images/byUrl/${encodedUrl}`

export const fetchImages = async (count: number): Promise<Array<ImageType>> => {
    const response = await axios.get(API_GET_IMAGES(count), { withCredentials: true });
    return response.data;
}

export const fetchLikedImages = async () : Promise<Array<LikedImage>> => {
    const response = await axios.get(API_GET_LIKED_IMAGES(), { withCredentials: true });
    return response.data;
}

export const postLikeImage = async (payload: ImageType) => {
    const response = axios.post(API_POST_LIKE_IMAGE(), {
        ...payload
    }, { withCredentials: true });
}

export const postUnlikeImageWithId = async (imageId: number) => {
    const response = axios.delete(API_DELETE_UNLIKE_IMAGE_ID(imageId), { withCredentials: true });
}

export const postUnlikeImageWithUrl = async (url: string) => {
    const encodedUrl = encodeURIComponent(url)
    const response = axios.delete(API_DELETE_UNLIKE_IMAGE_URL(encodedUrl), { withCredentials: true });
}