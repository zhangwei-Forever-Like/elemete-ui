import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'
import Users from '../components/Users.vue'
import Rights from '../components/power/Rights.vue'
import Roles from '../components/power/Roles.vue'
import Cate from '../components/goods/Cate.vue'

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        redirect:'/login'
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/home',
        component: Home,
        redirect:'/welcome',
        children:[
            {
                path: '/welcome',
                component:Welcome
            },
            {
                path:'/users',
                component:Users
            },
            {
                path:'/rights',
                component:Rights
            },
            {
                path:'/roles',
                component:Roles
            },
            {
                path:'/categories',
                component:Cate
            }
        ]
    },
]


const router = new VueRouter({
    routes
})



export default router