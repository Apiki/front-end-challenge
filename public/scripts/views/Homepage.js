import AbstractView from "./AbstractView.js"

export default class extends AbstractView {
  constructor(params) {
    super(params)
    this.setTitle("Homepage")
  }

  async _fetchData(slug) {
    const url = `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${slug}`
    const data = await fetch(url)
    const dataJson = await data.json()

    return dataJson
  }

  async getHtml() {
    const slug = this.params.id
    const data = await this._fetchData(slug)
    const {content, date, excerpt, title, _embedded} = data[0]

    console.log()
    return `
      <div class="content">
        <div class="c-title">
          <h1>${title.rendered}</h1>
        </div>

        <div class="c-post__call">
          <p>${excerpt.rendered}</p>
        </div>
        <div class="c-post__author">
          <img
            src=${_embedded.author[0].avatar_urls["96"]}
            alt="x"
          />
          <p>By <span>${_embedded.author[0].name}</span> - ${date}</p>
        </div>
        <div class="c-post__img">
          <img
            src="${_embedded["wp:featuredmedia"][0].media_details.sizes["jnews-750x536"].source_url}"
            alt="x"
          />
        </div>
        <div class="c-post__content">
          ${content.rendered}
        </div>
      </div>
    `
  }
}