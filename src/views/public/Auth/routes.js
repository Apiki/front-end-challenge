export default [
  {
    path: '/login',
    name: 'Login',
    component: () => import('./Login.vue')
  },
  {
    path: '/registar',
    name: 'Registrar',
    component: () => import('./Register.vue')
  }
]
