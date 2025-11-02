<script setup>
import { ref, defineEmits, onMounted, watch } from 'vue';
import Button from './ui/Button.vue';
import Input from './ui/Input.vue';
import { useTodoStore } from '../stores/todo.store.js';

const { item } = defineProps(['item']);
const emit = defineEmits(['updateItem', 'cancelEdit']);

const todoList = useTodoStore();

const currentItem = ref({});

const onSubmit = () => {
    todoList.updateItem(currentItem.value);
}

const cancelEdit = () => {
    todoList.cancelEdit();
}

watch(() => item, (newValue) => {
    currentItem.value = newValue;
});

onMounted(() => {
    currentItem.value = { ...item };
});
</script>

<template>
    <div class="todo-form">
        <h1>Edit item</h1>

        <form @submit.prevent="onSubmit">
            <Input v-model="currentItem.text" type="text" name="text" />
            <Button type="submit">Update</Button>
            <Button type="button" @click="cancelEdit">Cancel</Button>
        </form>
    </div>
</template>

<style scoped></style>