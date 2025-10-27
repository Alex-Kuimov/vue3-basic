<script setup>
import { useTodoStore } from '../stores/todo.store.js';

const { id, text } = defineProps(['id', 'text']);

const todoList = useTodoStore();

</script>

<template>
    <div class="todo-item" :data-id="id">
        <div class="todo-item-text">{{ text }}</div>
        <button class="todo-item-btn" @click="todoList.removeItem(id)">remove</button>
        <button class="todo-item-btn" @click="todoList.editItem(id)">edit</button>
    </div>
</template>

<style scoped></style>