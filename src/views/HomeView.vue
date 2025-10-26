<script setup>
import { computed, ref } from 'vue';
import TodoList from '../components/TodoList.vue';
import AddTodo from '../components/AddTodo.vue';
import EditTodo from '../components/EditTodo.vue';

const items = ref([
    { id: 1, text: 'Learn Vue' },
    { id: 2, text: 'Build a Todo List' },
    { id: 3, text: 'Deploy to Production' },
    { id: 4, text: 'Learn Vue' },
    { id: 5, text: 'Build a Todo List' },
    { id: 6, text: 'Deploy to Production' }
]);

const item = ref(null);

const addItem = (text) => {
    items.value.push({ id: items.value.length + 1, text });
};

const removeItem = (id) => {
    items.value = items.value.filter((item) => item.id !== id);
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

const action = computed(() => item.value ? 'edit' : 'add');

</script>

<template>
    <div class="home-page">
        <h1>Todo App</h1>
        <TodoList :items="items" @removeItem="removeItem" @editItem="editItem" />
        <AddTodo v-if="action === 'add'" @addItem="addItem" />
        <EditTodo v-if="action === 'edit'" :item="item" @updateItem="updateItem" @cancelEdit="cancelEdit" />
    </div>
</template>

<style scoped></style>