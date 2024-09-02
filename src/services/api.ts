import axios from "axios";

const apiUrl = 'http://localhost:8000';

const api = axios.create({
    baseURL: apiUrl,
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('access_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export const login = async (email: string, password: string) => {
    try {
        const response = await api.post('/auth/user/login_user/', { email, password });

        return response.data;
    } catch (error) {
        throw new Error("Login failed");
    }
};