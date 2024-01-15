<script>
import { store } from '../store';

export default {
    data() {
        return {
            store,
        }
    }

}
</script>

<template lang="">
    <div class="bg-dark">
        <div class="container">
            <div class="row">
                <div class="col-2 my-2" v-for="movie, index in store.searchedMovies" :key="index">
                    <div class="my-card text-center">
                       <ul>
                        <li>{{ movie.title }}</li>
                        <li>{{ movie.original_title }}</li>
                        <li>{{ movie.original_language }}</li>
                        <li>{{ movie.vote_average }}</li>
                       </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use '../styles/generals.scss' as *;
@use '../styles/partials/variables' as *;

.my-card {
    height: 200px;
    background-color: black;
    color: white;
}
</style>