import { ref } from 'vue';
import { defineStore } from 'pinia';
import { api, API_ENDPOINTS } from '../api.js';

export const useAuthStore = defineStore('auth', () => {
    const loading = ref(false);
    const error = ref(null);
    const token = ref(null);
    const isAuth = ref(false);

    const setToken = (value) => {
        token.value = value;
        localStorage.setItem('authToken', value);
        isAuth.value = true;
        api.defaults.headers.common['Authorization'] = `Bearer ${value}`;
    };

    const authInit = () => {
        token.value = localStorage.getItem('authToken');
        isAuth.value = !!token.value;
        api.defaults.headers.common['Authorization'] = `Bearer ${token.value}`;
    };

    const clearToken = () => {
        token.value = null;
        localStorage.removeItem('authToken');
        isAuth.value = false;
        delete api.defaults.headers.common['Authorization'];
    };

    const reg = async (userData) => {
        loading.value = true;
        error.value = null;

        try {
            const { data } = await api.post(API_ENDPOINTS.REG, userData);
            setToken(data.token);
            return true;
        } catch (err) {
            console.error('Reg error:', err);
            error.value = 'Reg failed';
        } finally {
            loading.value = false;
        }
    };

    const login = async (credentials) => {
        loading.value = true;
        error.value = null;

        try {
            const { data } = await api.post(API_ENDPOINTS.LOGIN, credentials);
            setToken(data.token);
            return true;
        } catch (err) {
            console.error('Login error:', err);
            error.value = 'Login Error';
        } finally {
            loading.value = false;
        }
    };

    const logout = async () => {
        try {
            await api.post(API_ENDPOINTS.LOGOUT);
        } catch (err) {
            console.error('Logout error:', err);
        } finally {
            clearToken();
        }
    };

    return { reg, login, logout, authInit, loading, error, isAuth };
});