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
    <div class="search d-flex justify-content-between align-items-center">
        <div class="logo d-flex align-items-center">
            boolfix
            <ul class="list-unstyled">
                <li>Home</li>
                <li>Serie TV</li>
                <li>Film</li>
                <li>Nuovi e popolari</li>
                <li>La mia lista</li>
                <li>Sfoglia per lista</li>
            </ul>
        </div>
        <div class="search-bar">
            <input type="text" placeholder="Search" v-model="store.searchingKey" @keyup.enter="$emit('start_search')">
            <button class="btn btn-dark btn-sm mx-2">Search</button>
        </div>
    </div>
</template>

<style lang="scss">
@use '../styles/generals.scss' as *;
@use '../styles/partials/variables' as *;

.search {
    background-color: black;

    .logo {
        @include net_logo;

        ul {

            margin-left: 20px;

            li {
                display: inline-block;
                color: white;
                font-family: verdana;
                font-size: 13px;
                margin: 0px 7px;
            }
        }
    }
}
</style>