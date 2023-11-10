import {createRouter, createWebHistory} from 'vue-router'

import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Contact from '../pages/Contact.vue'
import AboutTest from '../pages/AboutTest.vue'

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/about', name: 'About', component: About},
    {path: '/about/test', name: 'About test', component: AboutTest},
    {path: '/contact', name: 'Contact', component: Contact}
]

const router = createRouter ({
    history: createWebHistory(),
    routes
})

export default router