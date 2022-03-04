import {createRouter, createWebHistory} from 'vue-router'
import TheMainComponent from "../views/TheMainComponent.vue";
import TheSearchComponent from "../views/TheSearchComponent.vue";
import TheMediaComponent from "../views/TheMediaComponent.vue";
import TheMediaPlaylists from "../views/TheMediaPlaylists";
import TheMediaPodcasts from "../views/TheMediaPodcasts";
import TheMediaSongwriters from "../views/TheMediaSongwriters";
import TheMediaAlbums from "../views/TheMediaAlbums";
import TheNotFound from "../views/TheNotFound";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/main', name: 'main', component: TheMainComponent},
        {path: '/search', name: 'search', component: TheSearchComponent},
        {path: '/my-media', name: 'my-media', component: TheMediaComponent, redirect: '/my-media/playlists',
            children: [
                {path: 'playlists', component: TheMediaPlaylists},
                {path: 'podcasts', component: TheMediaPodcasts},
                {path: 'songwriters', component: TheMediaSongwriters},
                {path: 'albums', component: TheMediaAlbums},
            ]
        },
        {path: '/:pathMatch(.*)*', name: 'NotFound', component: TheNotFound},
    ]
})