<template lang="pug">
    .posts-list(v-if="posts")
        .posts-list__header(v-if="title || description")
            h2(v-if="title") {{ title }}
            p(v-if="description" v-html="description")

        div.posts-list__page(
            v-if="posts"
            v-for="page in posts"
            v-bind:key="page.page"
            :id="`page-${page.page}`"
        )

            CardPost(
                v-for="post in page.posts"
                v-bind:key="post.id"
                :title="post.title"
                :description="post.description"
                :excerpt="post.excerpt"
                :slug="post.slug"
                :thumb="post.thumb"
            )

        button.posts-list__pagination-btn(
            v-if="pagination && pagination.total > pagination.active"
            @click="more_posts"
            :disabled="loadingPagination"
        ) {{ loadingPagination ? 'Carregando...' : 'Exibir Mais Posts' }}
        



</template>
<script>
import CardPost from './CardPost'

export default {
    name: 'ListPost',
    components: {
        CardPost
    },
    props: {
        title: String,
        description: String,

        posts: {
            type: Array,
            default(){ return [] }
        },
        pagination: {
            type: Object,
            default() {
                return {
                    total: 1, active: 1
                }
            }
        },
        query: String,
    },
    methods: {
        async more_posts() {
            const pagination = this.pagination
            if( pagination.active >= pagination.total ) { return; }
            const page_next = pagination.active + 1
            await this.$store.dispatch( 'posts/request_posts', {
                params: this.query,
                page: page_next
            });

            const page_container = document.getElementById(`page-${page_next}`)

            page_container.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    },
    computed: {
        loadingPagination() {
            return this.$store.state.api.loading
        }
    }
}
</script>