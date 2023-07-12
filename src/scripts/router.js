import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Cart from '@/pages/Cart';
import Order from '@/pages/Order';
import Orders from '@/pages/Orders';
import Detail from '@/pages/Detail';

const routes = [
    {path:'/', component: Home},
    {path:'/login', component: Login},
    {path:'/Cart', component: Cart},
    {path:'/Order', component: Order},
    {path:'/Orders', component: Orders},
    {path:'/Detail', component: Detail}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;