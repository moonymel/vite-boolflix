<script>
import { store } from '../store';

export default {
    data() {
        return {
            store,
        }
    },

    props: {
        vote: Number,
    },

    methods: {

    },

    computed: {
        getStars(vote) {

            vote = this.vote;
            const numStars = (vote / 2).toFixed(0);
            return '★'.repeat(numStars) + '☆'.repeat(5 - numStars);
        },

    },

    created() {

    }
}
</script>

<template lang="">
{{ getStars }}
</template>

<style lang="scss">
@use '../styles/generals.scss' as *;
</style>