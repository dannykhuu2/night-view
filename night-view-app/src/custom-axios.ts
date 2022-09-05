import axios from 'axios';
import { logout } from './components/Auth/store/authSlice';

const axiosInstance = axios.create();
let store: any;

export const injectStore = (_store: any) => {
    store = _store;
}

axiosInstance.interceptors.response.use((response) => {
    return response;
}, (error) => {
    if (error.response.status === 401) {
        const user = store.getState().auth.user;
        if (user !== null) {
            store.dispatch(logout());
        }
        window.location.href = '/auth/signin';
    }
    return Promise.reject(error);
});

export default axiosInstance;