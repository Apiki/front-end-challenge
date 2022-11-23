<template lang="pug">
    footer.footer
        .container
            .footer__top
                a.footer__logo.col(href="/" title="Blog da Apiki")
                    img(:src="logo" alt="Blog da Apiki")

                .footer__share
                    a.footer__share-link(
                        v-for="social in social_media" 
                        v-bind:key="social.name"
                        :href="social.url"
                        target="_blank"
                    )
                        i.fab(:class="`fa-${social.name}`")

            hr.footer__hr(v-if="pages")

            .footer__bottom(v-if="pages")
                strong.footer__pages-title Institucional:
                ul.footer__pages-nav
                    li.footer__pages-li(
                        v-for="page in pages"
                        v-bind:key="`footer ${page.text}`"
                    )
                        router-link.footer__pages-link(:to="page.href") {{ page.text }}
                    
                    
                        
        
</template>
<script>

export default {
    name: 'Header',
    data() {
        return {
            logo: require('@/assets/img/apiki-logo-pb.png'),
            social_media: [
                {
                    url: 'https://www.facebook.com/ApikiWordPress',
                    name: 'facebook'
                },
                {
                    url: 'https://www.instagram.com/apikiwordpress/',
                    name: 'instagram'
                },
                {
                    url: 'https://www.youtube.com/channel/UC__ToR3hqjs1ZktdLIWqYFA',
                    name: 'youtube'
                },
                {
                    url: 'https://twitter.com/apikiWordPress',
                    name: 'twitter'
                },
                {
                    url: 'https://www.linkedin.com/company/apiki/',
                    name: 'linkedin'
                }
            ]
        }
    },
    computed: {
        pages() {
            const menu = this.$store.state.pages.pages.map( item => {
                const menu_obj = {
                    href: `/page/${item.slug}`,
                    text: item.title.rendered
                }
                return menu_obj
            })
            return menu
        }
    }
}
</script>
