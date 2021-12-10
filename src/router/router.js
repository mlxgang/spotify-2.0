import {createRouter, createWebHistory} from 'vue-router'
import TheMainComponent from "../views/TheMainComponent.vue";
import TheSearchComponent from "../views/TheSearchComponent.vue";
import TheMediaComponent from "../views/TheMediaComponent.vue";
import MainLayout from "../views/MainLayout";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '',
            component: MainLayout,
            children: [
                {path: '/main', component: TheMainComponent,},
                {path: '/search', component: TheSearchComponent,},
                {path: '/my-media', component: TheMediaComponent,}
            ],
        },
    ],
})