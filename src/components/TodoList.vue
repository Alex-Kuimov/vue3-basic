<script setup>
import TodoItem from './TodoItem.vue';

const { items } = defineProps(['items']);

</script>

<template>
    <div class="todo-list">
        <h2>To do list</h2>
        <TodoItem v-for="item in items" :key="item.id" v-bind="item" />
    </div>
</template>

<style scoped></style>