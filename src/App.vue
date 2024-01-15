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
        this.languageToFlag();
        console.log(this.store.searchedMovies)
      })
    },

    getSerie() {

      let apiUrl = `${store.apiUrlSeries}api_key=${store.apiKey}&query=${store.searchingKey}&${store.language}`;

      axios.get(apiUrl).then((response) => {
        store.searchedSeries = response.data.results;
        this.languageToFlag();
        console.log(this.store.searchedSeries)
      })
    },

    getSearch() {
      this.getFilm();
      this.getSerie();
    },

    languageToFlag() {
      this.store.searchedMovies.forEach((elem) => {

        elem.original_language = elem.original_language.toUpperCase();

        if (elem.original_language == 'EN') {
          elem.original_language = 'GB';
        }

        if (elem.original_language == 'JA') {
          elem.original_language = 'JP';
        }

        elem.flag = `https://flagsapi.com/${elem.original_language}/shiny/24.png`;
      })

      this.store.searchedSeries.forEach((elem) => {

        elem.original_language = elem.original_language.toUpperCase();

        if (elem.original_language == 'EN') {
          elem.original_language = 'GB';
        }

        if (elem.original_language == 'JA') {
          elem.original_language = 'JP';
        }

        elem.flag = `https://flagsapi.com/${elem.original_language}/shiny/24.png`;
      })
    }
  }
}
</script>

<template lang="">
  <div>
    <AppSearch @start_search='getSearch'/>
    <AppFilms />
    <AppSeries />
  </div>
</template>

<style lang="scss" scoped>
@use './styles/generals.scss' as *;
@use './styles/partials/variables' as *;
</style>