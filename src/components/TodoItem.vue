<script setup>
const { id, text } = defineProps(['id', 'text']);

</script>

<template>
    <div class="todo-item" :data-id="id">
        {{ text }}
    </div>
</template>

<style scoped></style>