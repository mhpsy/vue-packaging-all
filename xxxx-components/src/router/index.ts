import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
// @ts-ignore
import Home from "../views/Home.vue";
// @ts-ignore
import Container from '../components/container/src/index.vue'

const routes: RouteRecordRaw[] = [

    {
        path: "/",
        component: Container,
        children: [
            {
                path: "/",
                name: "Home",
                component: Home,
            },
            {
                path: "/chooseIcon",
                name: "Home",
                component: () => import('../views/chooseIcon/index.vue'),
            },
        ]
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router
