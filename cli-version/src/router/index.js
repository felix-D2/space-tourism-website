import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home - Space tourisme website'    //Change the title of the webPage
    }
  },


  {
    path: '/destination',
    name: 'Destination',
    component: () => import(/* webpackChunkName: "destination" */ '../views/Destination.vue'),
    meta: {
      title: 'Destination - Space tourisme website'
    },
  },

  {
    path: '/crew',
    name: 'Crew',
    component: () => import(/* webpackChunkName: "crew" */ '../views/Crew.vue'),
    meta: {
      title: 'Crew - Space tourisme website'
    }
  },

  {
    path: '/technology',
    name: 'Technology',
    component: () => import(/* webpackChunkName: "technology" */ '../views/Technology.vue'),
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
