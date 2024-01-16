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
            <div class="category">
                Films
            </div>
            <div class="row">
                <div class="col-2 my-2" v-for="movie, index in store.searchedMovies" :key="index">
                    <div class="my-card my-2 text-center">
                        <div class="flipping_card">
                            <div class="poster">
                                <img :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`" class="poster">
                            </div>
                            <div class="movie_card p-2">
                                <ul class="list-unstyled">
                                 <li class="title">{{ movie.title }}</li>
                                 <li class="subtitle">{{ movie.original_title }}</li>
                                 <li><img :src="movie.flag"></li>
                                 <li><StarsVote :vote="movie.vote_average" /></li>
                                 <li class="overview">{{ movie.overview }}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

</template>

<style lang="scss">
@use '../styles/generals.scss' as *;
@use '../styles/partials/variables' as *;

.category {
    @include category_title;
}

.my-card {
    background-color: black;
    color: white;
    height: 280px;
    overflow: hidden;

    .flipping_card {
        position: relative;
        width: 100%;
        height: 100%;
        transition: transform 0.8s;
        transform-style: preserve-3d;

        .poster {

            img {
                transform: translate(-50%, 0);
            }
        }

        .movie_card {

            transform: rotateY(180deg);

            .title {
                @include card_title
            }

            .subtitle {
                @include card_subtitle
            }

            .overview {
                @include card_overview
            }
        }

        .poster, .movie_card {
            position: absolute;
            width: 100%;
            height: 100%;
            -webkit-backface-visibility: hidden;
            /* Safari */
            backface-visibility: hidden;
        }

    }


    &:hover {

        overflow-y: auto;

        .flipping_card {
            transform: rotateY(180deg);
        }

    }


}
</style>