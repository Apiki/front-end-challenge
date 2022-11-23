<template lang="pug">
    LayoutDefault
        section.page-section
            template(v-if="title")
                h1.page-section__title Post: {{ title }}

                img(v-if="thumb" :src="thumb")

                div(v-html="content")
                
            div.page-section__loading(v-else)
                div.page-section__loader
                span.page-section__load-text Carregando...
      

            
</template>
<script>
import LayoutDefault from '@/components/Layouts/LayoutDefault'

export default {
    name: 'PostSingle',
    components: {
        LayoutDefault,
    },
    data() {
        return {
            title: '',
            thumb: '',
            content: '',
            slug: this.$route.params.post,
        }
    },
    methods: {
        async get_the_Post() {
            const slug = this.slug
            if( ! slug ) { return }

            const result = await this.$store.dispatch( 'api/get_post', { slug } );
            if( !result ) return false;
            
            this.title = result.title
            this.thumb = result.thumb
            this.content = result.content
            

        }
    },
    created() {
        console.log('aqui no post')
        this.get_the_Post()
    }
}
</script>