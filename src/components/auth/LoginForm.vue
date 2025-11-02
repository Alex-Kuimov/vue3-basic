<script setup>
import { ref } from 'vue';
import Input from '../ui/Input.vue';
import Button from '../ui/Button.vue';

const form = ref({
	email: '',
	password: '',
});

const onSubmit = () => {
	console.log(form.value);
};

</script>

<template>
	<div class="auth-form">
		<form @submit.prevent="onSubmit">
			<div class="form-group">
				<label for="email">Email:</label>
				<Input v-model="form.email" id="email" type="email" required />
			</div>

			<div class="form-group">
				<label for="password">Password:</label>
				<Input v-model="form.password" id="password" type="password" required />
			</div>

			<Button type="submit">
				Войти
			</Button>
		</form>
	</div>
</template>

<style scoped></style>