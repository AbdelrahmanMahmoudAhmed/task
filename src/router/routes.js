import { Categories} from '../pages/Categories.vue'
const routes = [
  // {
  //   path: '/',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [
  //     { path: '', component: () => import('pages/IndexPage.vue') }
  //   ]
  // },
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
