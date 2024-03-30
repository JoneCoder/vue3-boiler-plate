import {createRouter, createWebHistory} from "vue-router";

/**
 * router define
 *
 **/
const routes = [
    {
        path     : '/',
        component: () => import('@/views/layouts/Default.vue'),
        children : [
            {
                path     : '/',
                name     : 'Home',
                meta     : {title: 'Landing Page', nav: true},
                component: () => import('@/views/pages/Home.vue')
            },
        ],
    },

    {
        path     : '/login',
        name     : 'Login',
        meta     : {title: 'Login Page', nav: true},
        component: () => import('@/views/pages/auth/Login.vue')
    },


    //Admin Routes
    {
        path     : '/admin',
        component: () => import('@/views/layouts/Dashboard.vue'),
        beforeEnter: checkAuth,
        children : [
            {
                path: '/admin',
                name: 'dashboard',
                meta: {title: 'Dashboard', nav: true},
                component: () => import('@/views/pages/admin/Dashboard.vue')
            },
        ]

    },
]

/**
 * check auth login / not
 *
 **/
function checkAuth(to, from, next) {
    let role = localStorage.getItem('role')
    let user = localStorage.getItem('user')
    if (role && user) {
        next()
    } else {
        window.location.href = "/login";
    }
}

/**
 * router initial
 *
 **/
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
