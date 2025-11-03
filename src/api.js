import axios from 'axios';

export const API_BASE_URL = 'http://127.0.0.1:8000/api';

export const api = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true,
});

export const API_ENDPOINTS = {
    TODO: `${API_BASE_URL}/todos/`,
    LOGIN: `${API_BASE_URL}/auth/login/`,
    LOGOUT: `${API_BASE_URL}/auth/logout/`,
    REG: `${API_BASE_URL}/auth/register/`,
};