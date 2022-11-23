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
            return this.$router.push(`/category/${this.select_categ}`);
        }
    }

}
</script>