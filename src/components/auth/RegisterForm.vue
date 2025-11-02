<script setup>
import { ref } from 'vue';
import Input from '../ui/Input.vue';
import Button from '../ui/Button.vue';

const form = ref({
	name: '',
	email: '',
	password: '',
	password_confirmation: ''
});

const onSubmit = () => {
	console.log(form.value);
};
</script>

<template>
	<div class="auth-form">
		<form @submit.prevent="onSubmit">
			<div class="form-group">
				<label for="email">Name:</label>
				<Input v-model="form.name" id="name" type="text" required />
			</div>

			<div class="form-group">
				<label for="email">Email:</label>
				<Input v-model="form.email" id="email" type="email" required />
			</div>

			<div class="form-group">
				<label for="password">Password:</label>
				<Input v-model="form.password" id="password" type="password" required />
			</div>

			<div class="form-group">
				<label for="password">Confirmation:</label>
				<Input v-model="form.password_confirmation" id="password_confirmation" type="password" required />
			</div>

			<Button type="submit">
				Зарегистрироваться
			</Button>
		</form>
	</div>
</template>

<style scoped></style>