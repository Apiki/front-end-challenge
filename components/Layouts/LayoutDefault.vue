<template lang="pug">
    div
        Header

        main.container
            <slot />
        
        Footer
</template>
<script>
import Header from '@/components/Layouts/Header'
import Footer from '@/components/Layouts/Footer'

export default {
    name: 'LayoutDefault',
    components: {
        Header,
        Footer
    },
}
</script>
