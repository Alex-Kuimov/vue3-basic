<script setup>
import TodoList from '../components/TodoList.vue';

const items = [
    { id: 1, text: 'Learn Vue' },
    { id: 2, text: 'Build a Todo List' },
    { id: 3, text: 'Deploy to Production' },
    { id: 4, text: 'Learn Vue' },
    { id: 5, text: 'Build a Todo List' },
    { id: 6, text: 'Deploy to Production' }
];

</script>

<template>
    <div class="home-page">
        <h1>Todo App</h1>
        <TodoList :items="items" />
    </div>
</template>

<style scoped></style>