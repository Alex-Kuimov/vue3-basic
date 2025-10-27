<script setup>
import { ref } from 'vue';
import Button from './ui/Button.vue';
import Input from './ui/Input.vue';
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
            <Input v-model="text" type="text" name="text" />
            <Button type="submit">Add</Button>
        </form>
    </div>
</template>

<style scoped></style>