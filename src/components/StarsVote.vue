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
        getStars(rating) {

            rating = Math.round(Number(this.vote) / 2);
            let output = [];

            for (let i = rating; i >= 1; i--) {
                output.push('<i class="fa fa-star" aria-hidden="true" style="color: gold;"></i>&nbsp;');
            }

            for (let i = (5 - rating); i >= 1; i--) {
                output.push('<i class="fa fa-star-o" aria-hidden="true" style="color: gold;"></i>&nbsp;')
            }

            document.getElementById('stars').innerHtml = output.join('');
        }
    },

    computed: {
        // getVote() {
        //     return Math.round(Number(this.vote) / 2);
        // },

    },

    created() {
        this.getStars
    }
}
</script>

<template lang="">
<span id="stars"></span>
</template>

<style lang="scss">
@use '../styles/generals.scss' as *;
</style>