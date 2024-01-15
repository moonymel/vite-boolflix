<script>
import { store } from '../store';
import StarsVote from './StarsVote.vue'

export default {
    components: {
        StarsVote,
    },

    data() {
        return {
            store,
        }
    },

}
</script>

<template lang="">

        <div class="container">
            <div class="row">
                <div class="col-2 my-2" v-for="movie, index in store.searchedMovies" :key="index" :vote="movie.vote_average">
                    <div class="my-card text-center">
                       <ul class="list-unstyled">
                        <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" class="poster">
                        <li>{{ movie.title }}</li>
                        <li>{{ movie.original_title }}</li>
                        <li><img :src="movie.flag"></li>
                        <li><StarsVote /></li>
                       </ul>
                    </div>
                </div>
            </div>
        </div>

</template>

<style lang="scss">
@use '../styles/generals.scss' as *;
@use '../styles/partials/variables' as *;

.my-card {
    background-color: black;
    color: white;

    img.poster {
        width: 100%;
    }
}
</style>