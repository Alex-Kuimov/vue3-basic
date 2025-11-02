<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
	<header>
		<h1>Todo App</h1>
		<nav>
			<router-link to="/">Home</router-link>
			<router-link to="/reg">Reg</router-link>
			<router-link to="/login">Login</router-link>
		</nav>
	</header>
	<main>
		<RouterView />
	</main>
	<footer>
		<p>2025 г.</p>
	</footer>
</template>

<style scoped>
nav {
	display: flex;
	gap: 10px;
}
</style>
