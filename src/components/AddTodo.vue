<script setup>
import { ref } from 'vue';
import { useTodoStore } from '../stores/todo.store.js';

const todoList = useTodoStore();

const text = ref('');

const onSubmit = () => {
    todoList.addItem(text.value);
    text.value = '';
}
</script>

<template>
    <div class="todo-form">
        <h1>Add item</h1>

        <form @submit.prevent="onSubmit">
            <input v-model="text" type="text" name="text" />
            <button type="submit">Add</button>
        </form>
    </div>
</template>

<style scoped></style>