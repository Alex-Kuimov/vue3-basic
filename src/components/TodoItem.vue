<script setup>
import { ref, defineEmits } from 'vue';
const { id, text } = defineProps(['id', 'text']);

const emit = defineEmits(['removeItem', 'editItem']);

const removeItem = (id) => {
    emit('removeItem', id);
};

const editItem = (id) => {
    emit('editItem', id);
};

</script>

<template>
    <div class="todo-item" :data-id="id">
        <div class="todo-item-text">{{ text }}</div>
        <button class="todo-item-btn" @click="removeItem(id)">remove</button>
        <button class="todo-item-btn" @click="editItem(id)">edit</button>
    </div>
</template>

<style scoped></style>