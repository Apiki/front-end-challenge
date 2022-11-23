<template lang="pug">
    LayoutDefault
        section.page-section
            template(v-if="title")
                h1.page-section__title {{ title }}

                img(v-if="thumb" :src="thumb")

                div.entry-content(v-html="content")

            Preload(v-else)
      

            
</template>
<script>
import LayoutDefault from '@/components/Layouts/LayoutDefault'
import Preload from '@/components/Preload/Index'

export default {
    name: 'PostSingle',
    components: {
        LayoutDefault,
        Preload
    },
    head() {
        return { title: `${this.title} | Blog  Apiki` };
    },
    data() {
        return {
            title: '',
            thumb: '',
            content: '',
            slug: this.$route.params.page,
        }
    },
    methods: {
        async get_the_Post() {
            const slug = this.slug
            if( ! slug ) { return }

            const result = await this.$store.dispatch( 'api/get_page', { slug } );
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