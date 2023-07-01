<template>
  <div>
    <h2>Список фильмов</h2>
    <ul>
      <li v-for="movie in movies" :key="movie.id">
        <router-link :to="{ name: 'movie-details', params: { id: movie.id }}">
          {{ movie.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movies: [
        { id: 1, title: 'Фильм 1' },
        { id: 2, title: 'Фильм 2' },
        { id: 3, title: 'Фильм 3' },
      ],
    };
  },
};
</script>
