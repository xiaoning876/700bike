import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Show from '@/components/Show'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/show',
      name: 'Show',
      component: Show
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
