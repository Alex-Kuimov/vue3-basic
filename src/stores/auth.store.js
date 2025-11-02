import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { api, API_ENDPOINTS } from '../api.js';

export const useTodoStore = defineStore('todo', () => {
    const loading = ref(false);
    const error = ref(null);

    const reg = async () => {

    }

    const login = async () => {

    };

    return { reg, login, loading, error }
});