<script setup>
import Input from '../ui/Input.vue';
import Button from '../ui/Button.vue';
</script>

<template>
	<div class="auth-form">
		<form>
			<div class="form-group">
				<label for="email">Email:</label>
				<Input id="email" type="email" required />
			</div>

			<div class="form-group">
				<label for="password">Пароль:</label>
				<Input id="password" type="password" required />
			</div>

			<Button type="submit">
				Войти
			</Button>
		</form>
	</div>
</template>

<style scoped></style>