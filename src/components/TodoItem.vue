<script setup>
import Button from './ui/Button.vue';
import { useTodoStore } from '../stores/todo.store.js';

const { id, text } = defineProps(['id', 'text']);

const todoList = useTodoStore();

</script>

<template>
    <div class="todo-item" :data-id="id">
        <div class="todo-item-text">{{ text }}</div>
        <Button class="todo-item-btn" @click="todoList.removeItem(id)">remove</Button>
        <Button class="todo-item-btn" @click="todoList.editItem(id)">edit</Button>
    </div>
</template>

<style scoped></style>