import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    // 你的路由配置
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        const token = localStorage.getItem('token')
        if (token) {
            next();
        } else {
            next({ name: 'login' })
        }
    } else {
        next();
    }
})

export default router;