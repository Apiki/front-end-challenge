export default [
  {
    path: '/',
    name: 'Home',
    component: () => import('./Home.vue')
  },
  {
    path: '/:slug',
    name: 'Post',
    component: () => import('./Post.vue')
  }
]
