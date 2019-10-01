import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Features from './views/Features'

Vue.use(Router);

export default new Router({
  // mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/features',
      name: 'features',
      component: Features
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About')
    },
    {
      path: '/video',
      name: 'video',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Video')
    },
    {
      path: '/clients',
      name: 'clients',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Clients')
    },
    {
      path: '/screenshots',
      name: 'screenshots',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Screenshots')
    },
    {
      path: '/pricing',
      name: 'pricing',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Pricing')
    },
    {
      path: '/download',
      name: 'download',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Download')
    },
    {
      path: '/contact',
      name: 'contact',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Contact')
    }
  ],

  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      // savedPosition is only available for popstate navigations.
      return savedPosition
    } else {
      const position = {}

      // scroll to anchor by returning the selector
      if (to.hash) {
        position.selector = to.hash

        // specify offset of the element
        if (to.hash === '#anchor2') {
          position.offset = { y: 100 }
        }

        // bypass #1number check
        if (/^#\d/.test(to.hash) || document.querySelector(to.hash)) {
          return position
        }

        // if the returned position is falsy or an empty object,
        // will retain current scroll position.
        return false
      }
    }
  }

})
