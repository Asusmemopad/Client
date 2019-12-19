import Vue from 'vue'
import Router from 'vue-router'
import UserList from '../components/UserList'
import UserDetails from '../components/UserDetails'
import UserAdd from '../components/UserAdd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: UserList
    },
    {
      path: '/add',
      component: UserAdd
    },
    {
      path: '/detail/:id',
      component: UserDetails
    },
    {
      path: '*',
      component: UserList
    },
  ]
})
