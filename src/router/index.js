import { createRouter, createWebHistory } from "vue-router";


const routes = [
    {
        path: '/',
        name: 'MainPage',
        component: () => import('../pages/MainPage.vue')
    },
    {
        path: '/Request',
        name: 'RequestPage',
        component: () => import('../pages/RequestPage.vue')
    },
    {
        path: '/SuccessfulRequest',
        name: 'SuccessfulRequest',
        component: () => import('../pages/SuccessfulRequestPage.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;