import { Categories} from '../pages/Categories.vue'
const routes = [

  {
    path: '/',
    component: () => import('pages/Categories.vue'),
  },
  {
    path: '/categories/:category_id',
    component: () => import('pages/Streams.vue'),
  },



  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
