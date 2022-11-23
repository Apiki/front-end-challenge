<template lang="pug">
    LayoutDefault
        section.page-section
            h1.page-section__title {{ title }}

            ListPosts(
                v-if="posts"
                :description="description"
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
        return { title: `${this.title.replace('Categoria: ', '')} | Blog  Apiki` };
    },
    data(){
        return {
            title: 'Categoria',
            description: '',
            get_posts: '',
            route: this.$route.params,
            category: this.$route.params.categ,
        }
    },
    methods: {
        async tras_categ() {
            const slug = this.category
            if( ! slug ) { return }
            const result = await this.$store.dispatch( 'api/get_category', { slug } );
            if( !result ) return false;

            this.title = `Categoria: ${result.title}`
            this.description = result.description
            this.get_posts = `?_embed&categories=${result.id}`
            this.tras_posts(this.get_posts, null);
        },
        async tras_posts(params, page) {
            if( !params ) return;
            const bool_load_page = true
            await this.$store.dispatch( 'posts/request_posts', { params, page, bool_load_page } );
        },
    },
    created() {
        //console.log(this.route)
        this.tras_categ();
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
