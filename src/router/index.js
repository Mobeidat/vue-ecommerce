import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Signup from '@/components/Account/Signup'
import ProductAdmin from '@/components/Admin/ProductAdmin'
import AccountService from '@/components/Account/account-service'
import ProductService from '@/components/Product/ProductService'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/sign-up',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/login',
      name: 'Login',
      component: AccountService
    },
    {
      path: '/products',
      name: 'Products',
      component: ProductService,
      title: 'what'
    },
    {
      path: '/admin/products',
      name: 'ProductAdmin',
      component: ProductAdmin
    }
  ]
})

export default router
