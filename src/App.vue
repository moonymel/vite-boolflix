<script>
import { store } from './store';
import axios from 'axios';

import AppSearch from './components/AppSearch.vue';
import AppFilms from './components/AppFilms.vue';
import AppSeries from './components/AppSeries.vue';



export default {
  components: {
    AppSearch,
    AppFilms,
    AppSeries,
  },

  data() {
    return {
      store,
    }
  },

  created() {

  },

  methods: {
    getFilm() {

      let apiUrl = `${store.apiUrlMovies}api_key=${store.apiKey}&query=${store.searchingKey}&${store.language}`;

      axios.get(apiUrl).then((response) => {
        store.searchedMovies = response.data.results;
        console.log(this.store.searchedMovies)
      })
    },
  }
}
</script>

<template lang="">
  <div>
    <AppSearch @start_search='getFilm'/>
    <AppFilms />
    <AppSeries />
  </div>
</template>

<style lang="scss" scoped>
@use './styles/generals.scss' as *;
@use './styles/partials/variables' as *;

.bg-dark {
  background-color: $dark_grey;
  height: 200px;
}
</style>