<script setup>
import { onMounted } from 'vue';
import TodoList from '../components/TodoList.vue';
import AddTodo from '../components/AddTodo.vue';
import EditTodo from '../components/EditTodo.vue';
import { useTodoStore } from '../stores/todo.store.js';

const todoList = useTodoStore();

onMounted(() => {
    todoList.getItems();
});

</script>

<template>
    <div class="home-page">
        <h1>Todo App</h1>
        <TodoList :items="todoList.items" />
        <EditTodo v-if="todoList.isEditing" :item="todoList.item" />
        <AddTodo v-else />

        <p v-if="todoList.loading">Обработака данных...</p>
        <p v-if="todoList.error">todoList.error</p>
    </div>
</template>

<style scoped></style>