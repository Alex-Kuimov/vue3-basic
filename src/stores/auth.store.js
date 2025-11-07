import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { api, API_ENDPOINTS } from '../api.js';

export const useAuthStore = defineStore('auth', () => {
    const loading = ref(false);
    const error = ref(null);
    const token = ref(null);

    const isAuth = computed(() => {
        if (token.value) {
            return true;
        }

        token.value = localStorage.getItem('authToken');

        if (token.value) {
            return true;
        }

        return false;
    });

    const setToken = (value) => {
        localStorage.setItem('authToken', value);
        token.value = value;
    };

    const clearToken = () => {
        localStorage.removeItem('authToken');
        token.value = null;
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

    return {
        reg,
        login,
        logout,
        loading,
        error,
        isAuth
    };
});