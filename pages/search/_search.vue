<template lang="pug">
    LayoutDefault
        section.page-section
            h1.page-section__title {{ title }}

            ListPosts(
                v-if="posts"
                :posts="posts"
                :query="get_posts"
                :pagination="pagination")

            Preload(v-else)

            


</template>

<script>
import LayoutDefault from '@/components/Layouts/LayoutDefault'
import ListPosts from '@/components/ListPosts/ListPost'
import Preload from '@/components/Preload/Index'

export default {
    name: 'Category',
    components: {
        LayoutDefault,
        ListPosts,
        Preload
    },
    head() {
        return { title: `Resultado de: ${this.$route.params.search} | Blog  Apiki` };
    },
    data(){
        return {
            title: `Você pesquisou por: ${this.$route.params.search}`,
            get_posts: `/?search=${this.$route.params.search}`,
            route: this.$route.params,
            category: this.$route.params.search,
        }
    },
    methods: {
        async tras_posts(params, page) {
            if( !params ) return;
            const bool_load_page = true
            await this.$store.dispatch( 'posts/request_posts', { params, page, bool_load_page } );
        },
    },
    created() {
        this.tras_posts(this.get_posts, null);
    },
    computed: {
        posts() {
            const posts_arr = this.$store.state.posts.posts
            return posts_arr.length > 0 ? posts_arr : null
        },
        pagination() {
            return this.$store.state.posts.pagination
        }
    }
}
</script>
