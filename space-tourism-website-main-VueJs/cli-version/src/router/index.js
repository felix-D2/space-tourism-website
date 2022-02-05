import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props:true,
    meta: {
      title: 'Home - Space tourisme website'
    }
  },

  {
    path: '/destination/:id',
    name: 'Destination',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "destination" */ '../views/Destination.vue'),
    props:true,
    meta: {
      title: 'Destination - Space tourisme website'
    },
  },

  {
    path: '/crew/:id',
    name: 'Crew',
    component: () => import(/* webpackChunkName: "crew" */ '../views/Crew.vue'),
    props:true,
    meta: {
      title: 'Crew - Space tourisme website'
    }
  },

  {
    path: '/technology/:id',
    name: 'Technology',
    component: () => import(/* webpackChunkName: "technology" */ '../views/Technology.vue'),
    props:true,
    meta: {
      title: 'Technology - Space tourisme website'
    }
  },

  {
    path: '/:pathMach(.*)',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "NotFound" */ '../views/NotFound.vue'),
    meta: {
      title: '404 Not found - Space tourisme website'
    }
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


router.afterEach((to, from) => {
  console.log(from, to);
  document.title = to.meta.title;
});

export default router
