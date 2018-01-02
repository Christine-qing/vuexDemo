import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import vuex_one from '@/components/vuex_one'
import vuex_two from '@/components/vuex_two'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/vuex_one',
      name: 'vuex_one',
      component: vuex_one
    },
    {
      path: '/vuex_two',
      name: 'vuex_two',
      component: vuex_two
    },
  ]
})
