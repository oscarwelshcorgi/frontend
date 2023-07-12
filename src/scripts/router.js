import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Cart from '@/pages/Cart';
import Order from '@/pages/Order';
import Orders from '@/pages/Orders';

const routes = [
    {path:'/', component: Home},
    {path:'/login', component: Login},
    {path:'/Cart', component: Cart},
    {path:'/Order', component: Order},
    {path:'/Orders', component: Orders}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;