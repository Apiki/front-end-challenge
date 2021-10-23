import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes
})

router.beforeEach((to, from, next) => {
  const authenticated = localStorage.getItem('token')
  const onlyLoggedOut = to.matched.some(record => record.meta.onlyLoggedOut)
  const isPublic = to.matched.some(record => record.meta.public)

  if (!isPublic && !authenticated) {
    return next({
      name: 'Login'
    })
  }
  if (!authenticated && !onlyLoggedOut) {
    return next('/')
  }

  next()
})

export default router
