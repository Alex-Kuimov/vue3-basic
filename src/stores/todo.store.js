import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { api, API_ENDPOINTS } from '../api.js';

export const useTodoStore = defineStore('todo', () => {
    const items = ref(null);
    const item = ref(null);
    const loading = ref(false);
    const error = ref(null);

    const getItems = async () => {
        loading.value = true;
        error.value = null;

        try {
            const { data } = await api.get(API_ENDPOINTS.TODO);
            items.value = data;
        } catch (err) {
            error.value = err.message;
        } finally {
            loading.value = false;
        }
    }

    const addItem = async (text) => {
        loading.value = true;
        error.value = null;

        try {
            const { data } = await api.post(API_ENDPOINTS.TODO, { text });
            items.value.push(data);
        } catch (err) {
            error.value = err.message;
        } finally {
            loading.value = false;
        }
    };

    const removeItem = async (id) => {
        loading.value = true;
        error.value = null;

        try {
            await api.delete(API_ENDPOINTS.TODO + id)
            items.value = items.value.filter((item) => item.id !== id);
            item.value = null;
        } catch (err) {
            error.value = err.message;
        } finally {
            loading.value = false;
        }
    };

    const updateItem = async (updated) => {
        loading.value = true;
        error.value = null;

        try {
            const { data } = await api.put(API_ENDPOINTS.TODO + updated.id, updated);
            items.value = items.value.map((item) => item.id === data.id ? { ...data } : item);
            item.value = null;
        } catch (err) {
            error.value = err.message;
        } finally {
            loading.value = false;
        }
    };

    const editItem = (id) => {
        item.value = items.value.find((item) => item.id === id);
    };

    const cancelEdit = () => {
        item.value = null;
    };

    const isEditing = computed(() => {
        return item.value !== null;
    });

    return { item, items, getItems, addItem, removeItem, updateItem, editItem, cancelEdit, isEditing, loading, error }
});