import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Cart from '@/pages/Cart';
import Order from '@/pages/Order';

const routes = [
    {path:'/', component: Home},
    {path:'/login', component: Login},
    {path:'/Cart', component: Cart},
    {path:'/Order', component: Order}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;