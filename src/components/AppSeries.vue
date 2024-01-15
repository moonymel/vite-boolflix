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
    <div class="container">
            <div class="row">
                <div class="col-2 my-2" v-for="serie, index in store.searchedSeries" :key="index">
                    <div class="my-card text-center">
                       <ul class="list-unstyled">
                        <li>{{ serie.name }}</li>
                        <li>{{ serie.original_name }}</li>
                        <li><img :src="serie.flag"></li>
                        <li>{{ serie.vote_average }}</li>
                       </ul>
                    </div>
                </div>
            </div>
        </div>
</template>

<style lang="scss">
@use '../styles/generals.scss' as *;
@use '../styles/partials/variables' as *;
</style>