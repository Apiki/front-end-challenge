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
    array.push(divPostContent)
  }

  async _setHtml() {
    const endpoint = this._setUrl("home")
    const data = await this._fetchData(endpoint)
    const postsContents = []

    data.forEach(post => {
      this._setPostCard(post, postsContents)
    })

    return postsContents
  }

  async getHtml() {
    const endpoint = this._setUrl("home")
    const data = await this._fetchData(endpoint)
    const postsContents = []

    data.forEach((post, array) => {
      this._setPostCard(post, postsContents)
    })

    const htmlContent = postsContents.reduce((acc, html) => {
      return acc += html.innerHTML
    }, '')

    return `
      <div class="content">
        <div class="c-title-page">
          <h1>Desenvolvimento Wordpress</h1>
        </div>
        <div class="c-posts">
          ${htmlContent}
        </div>
          <div class="c-show-more">
            <button class="btn">Carregar mais</button>
          </div>
        </div>
      </div>
    `
  }
}