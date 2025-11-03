<script setup>
import { onMounted } from 'vue';
import { RouterView, useRouter } from 'vue-router';
import { useAuthStore } from './stores/auth.store.js';

const authStore = useAuthStore();
const router = useRouter();

const handleLogout = async () => {
	await authStore.logout();
	router.push('/login');
};

onMounted(() => {
	authStore.authInit();
});

</script>

<template>
	<header>
		<h1>Todo App</h1>
		<nav>
			<template v-if="!authStore.isAuth">
				<router-link to="/reg">Reg</router-link>
				<router-link to="/login">Login</router-link>
			</template>

			<template v-else>
				<button @click="handleLogout" class="logout-button">Logout</button>
			</template>
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
	align-items: center;
}
</style>
