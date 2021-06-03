const fetchApi = async (url) => {
  const data = await fetch(url)
  const dataJson = await data.json()

  return dataJson
}

const setCardContent = async (url) => {
  const posts = await fetchApi(url)
  console.log(posts)

  const postsContents = []

  posts.forEach(post => {
    const {excerpt, title, slug, _embedded} = post
    const divPostContent = document.createElement('div')

    divPostContent.innerHTML = `
    <div class="c-post__item">
    <img
      src=${_embedded["wp:featuredmedia"][0].media_details.sizes["jnews-350x250"].source_url}
      alt="x"
      class="c-post__img"
    />
    <div class="c-post__content">
      <h2 class="c-post__title"><a href="/post/${slug}">${title.rendered}</a></h2>
      <p class="c-post__author">BY <span>${_embedded.author[0].name}</span></p>
      <div class="c-post__call">${excerpt.rendered}</div>
    </div>
  </div>
    `
    postsContents.push(divPostContent)
  })

  return postsContents
}

const insertPostBefore = async () => {
  const cardContents = await setCardContent('https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518')

  const divPosts = document.querySelector('.c-posts')

  cardContents.forEach(content => {
    divPosts.insertAdjacentElement('afterbegin', content)
    }
  )
}

insertPostBefore()

const showMorePosts = async event => {
  event.preventDefault()

  page++
  const morePosts = await setCardContent(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${page}`)
  

  const divPosts = document.querySelector('.c-posts')
  const lastPost = divPosts.lastChild.previousElementSibling

  morePosts.forEach(post => {
    lastPost.insertAdjacentElement('beforebegin', post)
  })
}

let page = 1
const btnShowMore = document.querySelector('.btn')
btnShowMore.addEventListener('click', showMorePosts)
