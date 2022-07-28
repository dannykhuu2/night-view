import axios, { AxiosResponse } from 'axios';

export const fetchImages = async (count: number) : Promise<AxiosResponse<any, any>>=> {
    const response = axios.get(`http://localhost:3333/images/${count}`);
    return response;
}