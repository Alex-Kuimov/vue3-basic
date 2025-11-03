import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '../stores/auth.store.js';

const routes = [
	{
		path: '/',
		name: 'home',
		component: () => import('../views/HomeView.vue'),
		meta: { requiresAuth: true }
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('../views/LoginView.vue')
	},
	{
		path: '/reg',
		name: 'reg',
		component: () => import('../views/RegisterView.vue')
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

// Add navigation guard
router.beforeEach((to, from, next) => {
	const authStore = useAuthStore();

	if (to.name === 'login' && authStore.isAuth) {
		next('/');
	}

	if (to.name === 'reg' && authStore.isAuth) {
		next('/');
	}

	if (to.name === 'home' && !authStore.isAuth) {
		next('/login');
	}

	next();

});

export default router