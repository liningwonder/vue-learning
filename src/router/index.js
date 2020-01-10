import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SayHi from '@/components/SayHi'
import SayHiFromVariable from '@/components/SayHiFromVariable'
import SayHiButton from '@/components/SayHiButton'
import SayHiV from '@/components/SayHiV'
import SendHttp from '@/components/SendHttp'
import FormPost from '@/components/FormPost'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/say_hi',
      name: 'SayHi',
      component: SayHi
    },
    {
      path: '/say_hi_var',
      name: 'SayHiFromVariable',
      component: SayHiFromVariable
    },
    {
      path: '/say_hi_button',
      name: 'SayHiButton',
      component: SayHiButton
    },
    {
      path: '/say_hi_v',
      name: 'SayHiV',
      component: SayHiV
    },
    {
      path: '/say_http_img',
      name: 'SendHttp',
      component: SendHttp
    },
    {
      path: '/say_http_post',
      name: 'FormPost',
      component: FormPost
    }
  ]
})
