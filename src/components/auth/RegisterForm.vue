<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Input from '../ui/Input.vue';
import Button from '../ui/Button.vue';
import { useAuthStore } from '../../stores/auth.store.js';

const form = ref({
	name: '',
	email: '',
	password: '',
	password_confirmation: ''
});

const authStore = useAuthStore();
const router = useRouter();

const onSubmit = async () => {
	await authStore.reg(form.value);
	router.push('/');
};
</script>

<template>
	<div class="auth-form">
		<form @submit.prevent="onSubmit">
			<div class="form-group">
				<label for="name">Name:</label>
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
				<label for="password_confirmation">Confirmation:</label>
				<Input v-model="form.password_confirmation" id="password_confirmation" type="password" required />
			</div>

			<Button type="submit" :disabled="authStore.loading">
				{{ authStore.loading ? 'Регистрация...' : 'Зарегистрироваться' }}
			</Button>

			<p v-if="authStore.error" class="error">{{ authStore.error }}</p>
		</form>
	</div>
</template>

<style scoped>
.error {
	color: red;
	margin-top: 10px;
}
</style>