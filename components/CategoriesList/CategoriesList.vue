<template lang="pug">
    .categories-list(v-if="categories")
        h2(v-if="title") {{ title }}

        select.categories-list__select(v-model="select_categ")
            option(value="") Escolha uma categoria:
            option(
                v-for="categ in categories"
                v-bind:key="categ.id"
                :value="categ.slug"
            ) {{ categ.title }}

        nav.categories-list__nav
            ul.categories-list__ul
                li.categories-list__li(
                    v-for="categ in categories"
                    v-bind:key="categ.id"
                )
                    router-link(:to="`/category/${categ.slug}`") {{ categ.title }}        

</template>
<script>
export default {
    name: 'CategoriesList',
    data(){
        return{
            select_categ: ''
        }
    },
    props: {
        title: String,
        categories: {
            type: Array,
            default(){ return [] }
        },
    },
    watch: {
        select_categ() {
            //console.log('mudou')
        }
    }

}
</script>
<style lang="scss" scoped>
.categories-list {
    width: 100%;
    display: inline-block;

    &__select {
        @media screen and (max-width: 767px) {
            display: block;
            margin: 20px 0;
        }
        @media screen and (min-width: 768px) {
            display: none;
        }
    }

    &__nav {
        @media screen and (max-width: 767px) {
            display: none;
        }
        @media screen and (min-width: 768px) {
            width: 100%;
            display: inline-block;
            overflow: auto;
        }
    }

    &__ul {
        @media screen and (min-width: 768px) {
            list-style-type: none;
            white-space: nowrap;
            padding: 0;
        }
    }

    &__li {
        @media screen and (min-width: 768px) {
            display: inline-block;
            margin: 0 15px;
        }
    }
}
</style>