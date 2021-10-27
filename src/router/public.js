import { routes as auth } from '../views/public/Auth'
import { routes as posts } from '../views/public/Posts'

const routes = [...auth, ...posts]

export default routes.map(route => {
  return { ...route, meta: { public: false } }
})
