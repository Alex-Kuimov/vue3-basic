import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { data } from './mock.js';

export const useTodoStore = defineStore('todo', () => {
    const items = ref(null);
    const item = ref(null);

    const getItems = () => {
        items.value = [...data];
    }

    const addItem = (text) => {
        items.value.push({ id: items.value.length + 1, text });
    };

    const removeItem = (id) => {
        items.value = items.value.filter((item) => item.id !== id);
        item.value = null;
    };

    const updateItem = (updated) => {
        items.value = items.value.map((item) => item.id === updated.id ? { ...updated } : item);
        item.value = null;
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

    return { item, items, getItems, addItem, removeItem, updateItem, editItem, cancelEdit, isEditing }
});