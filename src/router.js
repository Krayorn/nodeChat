import VueRouter from 'vue-router'

import LoginPage from './components/LoginPage'
import ChatPage from './components/ChatPage'

const routes = [
    {name: 'LoginPage', path: '/', component: LoginPage},
    {name: 'ChatPage', path: '/chat', component: ChatPage}
]

const router = new VueRouter ({
    routes
})

export default router
