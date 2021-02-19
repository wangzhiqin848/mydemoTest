import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detailt from '../pages/detailt/Detailt'
import Trip from '@/pages/trip/Trip'
import Pic from "@/pages/Pic/Pic";
import Ticket from '@/pages/ticket/Ticket'
import List from '@/pages/list/List'
import Strategy from "@/pages/strategy/Strategy";
import Estimate from "../pages/estimate/Estimate";
import Show  from "../pages/show/Show";
import Details from "../pages/details/Details";
import Week from "../pages/week/Week";
import Child from "../pages/child/Child";
import Misty from "../pages/misty/Misty";
import Autumn from "../pages/autumn/Autumn"
import Alls from "../pages/alls/Alls";
import Xian from "../pages/xian/Xian";
import Airplane from '../pages/detail/components/Airplane'
import Timedown from '../pages/detail/components/Timedown'
import Agreement from '../pages/detail/components/Agreement'
import Detail from '../pages/detail/Detail'
import Order from '../pages/detail/components/Order'
import Login from '../pages/detail/components/Login'
import About from '../pages/detail/components/About'
import Browse from '../pages/detail/components/Browse'
import Register from '../pages/detail/components/Register'
import Code from '../pages/detail/components/Code'
import Map from '../pages/detail/components/Map'
import Findpassword from "../pages/detail/components/Findpassword";
import Plane from '../pages/plane/Plane'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/city',
    name: 'City',
    component: City
  }, {
    path: '/detailt/:id',
    name: 'Detailt',
    component: Detailt,
    props:true
  }, {
    path: '/trip',
    name: 'Trip',
    component: Trip
  }, {
    path: '/pic/:id',
    name: 'PicPic',
    component: Pic
  },{
    path: '/ticket',
    name: 'Ticket',
    component: Ticket
  },{
    path: '/list',
    name: 'List',
    component: List
  },
    {
      path:'/plane',
      name:'Plane',
      component: Plane
    },
    {
      path: '/strategy',
      name: '/strategy',
      component: Strategy
    },
    {
      path: '/estimate',
      name: '/estimate',
      component: Estimate
    },
    {
      path: '/show',
      name: '/show',
      component: Show
    },{
      path: '/details',
      name: 'Details',
      component: Details
    },
    {
      path: '/week',
      name: 'Week',
      component: Week
    },
    {
      path: '/child',
      name: 'Child',
      component: Child
    },
    {
      path: '/misty',
      name: 'Misty',
      component: Misty
    },
    {
      path: '/autumn',
      name: 'Autumn',
      component: Autumn
    },
    {
      path: '/alls',
      name: 'Alls',
      component: Alls
    },
    {
      path: '/xian',
      name: 'Xian',
      component: Xian
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/browse',
      name: 'browse',
      component: Browse
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/code',
      name: 'code',
      component: Code
    },
    {
      path: '/map',
      name: 'map',
      component: Map
    },
    {
      path: '/airplane',
      name: 'airplane',
      component: Airplane
    },
    {
      path: '/timedown',
      name: 'timedown',
      component: Timedown
    },
    {
      path: '/agreement',
      name: 'agreement',
      component: Agreement
    },
    {
      path: '/findpassword',
      name: 'findpassword',
      component: Findpassword
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
