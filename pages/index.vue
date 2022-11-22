<template lang="pug">
    div
        Header

        section.container
            h1  {{ title }}

            

        
        Footer
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
    name: 'IndexPage',
    components: {
        Header,
        Footer
    },
    data(){
        return {
            title: 'Bem vindo ao blog da Apiki'
        }
    }
}
</script>
<style lang="sass">
//@import sass/main
</style>