<script setup>
import { ref, defineEmits, onMounted, watch } from 'vue';

const { item } = defineProps(['item']);

const currentItem = ref({});

const emit = defineEmits(['updateItem', 'cancelEdit']);

const onSubmit = () => {
    emit('updateItem', currentItem.value);
}

const cancelEdit = () => {
    emit('cancelEdit');
}

watch(() => item, (newValue) => {
    currentItem.value = newValue
});

onMounted(() => {
    currentItem.value = { ...item };
});

</script>

<template>
    <div class="todo-form">
        <h1>Edit item</h1>

        <form @submit.prevent="onSubmit">
            <input v-model="currentItem.text" type="text" name="text" />
            <button type="submit">Update</button>
            <button type="button" @click="cancelEdit">Cancel</button>
        </form>
    </div>
</template>

<style scoped></style>