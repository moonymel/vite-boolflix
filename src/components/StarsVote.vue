<script>
import { store } from '../store';

export default {
    data() {
        return {
            store,
        }
    },

    props: {
        vote: String,
    },

    computed: {
        getVote() {
            return Math.round(Number(this.vote) / 2);
        }
    }
}
</script>

<template lang="">
 {{ getVote }}
</template>

<style lang="">
    
</style>