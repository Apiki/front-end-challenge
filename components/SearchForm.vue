<template lang="pug">
    form(:class="device ? `header__search ${device}` : 'header__search'" @submit.prevent="search")
        input.header__search-input(type="text" placeholder="Buscar" v-model="search_input")
        button.header__search-btn()
            svg.header__search-svg(viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg")
                path(d="M9.75007 18.5001C14.5826     18.5001 18.5001 14.5826 18.5001 9.75007C18.5001 4.91754 14.5826 1 9.75007 1C4.91754 1 1 4.91754 1 9.75007C1 14.5826 4.91754 18.5001 9.75007 18.5001Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round")
                path(d="M15.9374 15.9377L21 21.0002" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round")
</template>

<script>
export default {
    props: {
        device: String
    },
    data(){
        return {
            search_input: ''
        }
    },
    methods: {
        search() {
            if(this.search_input != '') {
                return this.$router.push(`/search/${this.search_input}`);
            }
        }
    }
}
</script>