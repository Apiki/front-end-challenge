<template lang="pug">
    article.card-post.mx-4.md-6.sm-6
        .card-post__container
            figure.card-post__figure(:class="!thumb ? '-silver' : ''")
                img(:src="thumb" :alt="title" v-if="thumb")
                img(:src="alt_thumb" :alt="title" v-else)

            .card-post__text
                h3.card-post__title {{ title }}

                div.card-post__excerpt(v-if="excerpt" v-html="excerpt")
                div.card-post__excerpt(v-else v-html="excerpt")

                router-link.card-post__link(:to="`/post/${slug}`") Leia Mais



</template>
<script>
export default {
    props: {
        title: String,
        description: String,
        excerpt: String,
        slug: String,
        thumb: String,
    },
    data() {
        return{
            alt_thumb: require('@/assets/img/apiki-logo-pb.png'),
        }
    }
}
</script>