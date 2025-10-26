<script setup>
import { defineEmits } from 'vue';

const { item } = defineProps(['item']);

const emit = defineEmits(['updateItem']);

const onSubmit = () => {
    emit('updateItem', item);
}
</script>

<template>
    <div class="todo-form">
        <h1>Edit item</h1>

        <form @submit.prevent="onSubmit">
            <input v-model="item.text" type="text" name="text" />
            <button type="submit">Update</button>
        </form>
    </div>
</template>

<style scoped></style>