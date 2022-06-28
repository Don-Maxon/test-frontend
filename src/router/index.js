import { createRouter, createWebHistory } from "vue-router";


const routes = [
    {
        path: '/MainPage',
        name: 'MainPage',
        component: () => import('../pages/MainPage.vue')
    },
    {
        path: '/Request',
        name: 'RequestPage',
        component: () => import('../pages/RequestPage.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;