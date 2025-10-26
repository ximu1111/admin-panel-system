import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
    ]
})

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        const token = localStorage.getItem('token')
        if (token || token != null) {
            next();
        } else {
            next({ name: 'login' })
        }
    } else {
        next();
    }
})

export default router;