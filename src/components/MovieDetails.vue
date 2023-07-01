<template>
  <div>
    <h2>Подробности о фильме</h2>
    <p>ID фильма: {{ movieId }}</p>
    <p>Здесь будет отображаться подробная информация о фильме с ID {{ movieId }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movieId: null,
    };
  },
  created() {
    this.movieId = this.$route.params.id;
  },
};
</script>
