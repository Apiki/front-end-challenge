import AbstractView from "./AbstractView.js"
export default class extends AbstractView {
  constructor(params) {
    super(params)
    this.setTitle("Desenvolvimento | Apiki Blog")
    this.postsContents = []
  }

  _setPostCard(post, array) {
    const {excerpt, title, slug, _embedded} = post
    const divPostContent = document.createElement('div')

    divPostContent.innerHTML = `
      <div class="h-post__item">
        <img
          src=${_embedded["wp:featuredmedia"][0].media_details.sizes["jnews-350x250"].source_url}
          alt="x"
          class="h-post__img"
        />
        <div class="h-post__content">
          <h2 class="h-post__title"><a href="/post/${slug}">${title.rendered}</a></h2>
          <p class="h-post__author">BY <span>${_embedded.author[0].name}</span></p>
          <div class="h-post__call">${excerpt.rendered}</div>
        </div>
      </div>
    `
    array.push(divPostContent)
  }

  async _setHtml(url) {
    const data = await this._fetchData(url)
    const postsContents = []

    data.forEach(post => {
      this._setPostCard(post, postsContents)
    })

    const htmlContent = postsContents.reduce((acc, html) => {
      return acc += html.innerHTML
    }, '')

    return htmlContent
  }

  async getHtml() {
    const endpoint = this._setUrl("home")
    const html = await this._setHtml(endpoint)

    return `
      <div class="content">
        <div class="h-title-page">
          <h1>Desenvolvimento Wordpress</h1>
        </div>
        <div class="h-posts">
          ${html}
        </div>
          <div class="h-show-more">
            <button class="btn" id="showMore">Carregar mais</button>
          </div>
        </div>
      </div>
    `
  }

  async showMore(page) {
    const divCPosts = document.querySelector('.h-posts')
    const endpoint = this._setUrl("new", page)
    const setHtmlPosts = await this._setHtml(endpoint)

    divCPosts.innerHTML += setHtmlPosts
  }
}