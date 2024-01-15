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
    <div class="search d-flex justify-content-between p-3">
        <div class="logo">
            boolfix
        </div>
        <div class="search-bar">
            <input type="text" placeholder="Search" v-model="store.searchingKey" @keyup.enter="$emit('start_search')">
            <button class="btn">Search</button>
        </div>
    </div>
</template>

<style lang="scss">
@use '../styles/generals.scss' as *;
@use '../styles/partials/variables' as *;

.search {
    background-color: white;

    .logo {
        @include title
    }
}
</style>