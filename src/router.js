import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Translations from './components/Translations.vue';
import About from './components/About.vue';

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Translations,
        },
        {
            path: '/about',
            name: 'About',
            component: About,
        }
    ],
});