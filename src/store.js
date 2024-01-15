import { reactive } from 'vue';

export const store = reactive({
    apiUrlMovies: 'https://api.themoviedb.org/3/search/movie?',
    apiUrlSeries: 'https://api.themoviedb.org/3/search/tv?',
    apiKey: 'acecb38e049a7798f21468a57e8c5a3c',
    language: 'language=it-IT',
    searchingKey: '',
    searchedMovies: [],

})