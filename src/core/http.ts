import axios from 'axios';

const instance = axios.create({
    baseURL: import.meta.env + 'api/v1',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
    },
});

instance.interceptors.request.use(async (config) => {
    try {
        const token = localStorage.getItem('token');
        if (token) config.headers['Authorization'] = `Bearer ${token}`;
    } catch (error) {
        console.log(error);
    }
    return config;
});

instance.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        return Promise.reject(error);
    },
);

export default instance;
