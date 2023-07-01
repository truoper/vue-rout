import Vue from 'vue';
import VueRouter from 'vue-router';
import MovieDetails from '../components/MovieDetails.vue';
import MovieList from '../components/MovieList.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'movie-list',
    component: MovieList,
  },
  {
    path: '/movie/:id',
    name: 'movie-details',
    component: MovieDetails,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
