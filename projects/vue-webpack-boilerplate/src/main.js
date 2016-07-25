/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import app from './App'

Vue.use(VueRouter)

var router = new VueRouter({
  hashbang: false
})

import NestedRouteA from './components/NestedRoutes'

router.map({
  //首页
  '/': {
    name: 'named-route',
    component: function (resolve) {
      require(['./pages/home'], resolve)
    }
  },
  '/try-component': {
    name: 'try-component',
    component: function (resolve) {
      require(['./pages/try-component'], resolve)
    }
  },
  '/basic-usage': {
    component: function (resolve) {
      require(['./pages/basic-usage'], resolve)
    }
  },
  '/params/:name': {
    component: function (resolve) {
      require(['./pages/params'], resolve)
    }
  },
  '/nested-routes': {
    auth: true,
    component: function (resolve) {
      require(['./pages/nested-routes'], resolve)
    },
    subRoutes: {
      '/': {
        component: {
          template: '<p>路由0</p>'
        }
      },
      '/a': {
        component: NestedRouteA
      },
      '/b': {
        component: {
          template: '<p>路由b</p>'
        }
      }
    }
  }
})

router.beforeEach(function (transition) {
  if (transition.to.auth) {
    console.warn('需要用户验证信息')
  }
  else {
    transition.next()
  }
})

/* 根据路由按需加载组件（动态加载） */
router.start(app, 'app')
