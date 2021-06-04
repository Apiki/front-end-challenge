import AbstractView from "./AbstractView.js"

export default class extends AbstractView {
  constructor(params) {
    super(params)
    this.setTitle("Post | Apiki Blog")
  }

  async getHtml() {
    const slug = this.params.id
    const endpoint = this._setUrl("post", slug)
    const data = await this._fetchData(endpoint)
    const {content, date, excerpt, title, _embedded} = data[0]

    return `
      <div class="content">
        <div class="title">
          <h1>${title.rendered}</h1>
        </div>

        <div class="post__call">
          <p>${excerpt.rendered}</p>
        </div>
        <div class="post__author">
          <img
            src=${_embedded.author[0].avatar_urls["96"]}
            alt=${_embedded.author[0].name}
          />
          <p>By <span>${_embedded.author[0].name}</span> - ${date}</p>
        </div>
        <div class="post__img">
          <img
            src="${_embedded["wp:featuredmedia"][0].media_details.sizes["jnews-750x536"].source_url}"
            alt="x"
          />
        </div>
        <div class="post__content">
          ${content.rendered}
        </div>
      </div>
      <div class="author-card">
        <img src=${_embedded.author[0].avatar_urls["96"]} alt=${_embedded.author[0].name} class="author-avatar" />
        <div class="author-info">
          <h2><a href=${_embedded.author[0].link} >${_embedded.author[0].name}</a></h2>
          <p>${_embedded.author[0].description}</p>
        </div>
      </div>
    `
  }
}