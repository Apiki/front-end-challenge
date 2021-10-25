const routes = [
  {
    path: '/page/not-found',
    name: 'NotFound',
    component: () => import('../views/public/Error/Page404.vue')
  }
]

export default routes.map(route => {
  const meta = {
    public: true,
    onlyLoggedOut: true
    //layout: 'default'
  }
  return { ...route, meta }
})
