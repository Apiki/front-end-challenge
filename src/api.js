async function consuta_ultimos() {
    try {
        const response = await fetch('https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518')
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

/*
function pega_ultimos() {

}
*/