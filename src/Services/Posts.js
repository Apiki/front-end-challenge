export const getPostList=(pag) =>{
    return fetch(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${pag}`)
    .then((res) => { 
        return {
            data: res.json(),
            pages: res.headers.get('X-WP-TotalPages')
        }})
}


export const getPostBySlug = (slug) => {
    return fetch(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${slug}`)
    .then((res) => res.json())
    .then((data) => {
       return data
    })
}