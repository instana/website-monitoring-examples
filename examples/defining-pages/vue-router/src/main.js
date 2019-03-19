import VueRouter from 'vue-router'
import Vue from 'vue'

import Topics from './components/Topics'
import About from './components/About'
import Home from './components/Home'
import App from './App'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: '/home', component: Home },
  { path: '/about', component: About },
  { path: '/topics/:topic', component: Topics }
]

const router = new VueRouter({
  routes
})

router.afterEach(to => {
  let pageName = to.path
  if (to.matched && to.matched.length > 0 && to.matched[0].path) {
    pageName = to.matched[0].path
  }

  // eslint-disable-next-line no-console
  console.log('Set page to', pageName)

  // eslint-disable-next-line no-undef
  ineum('page', pageName)
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
