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
    console.log(data[0].title)
    return `
      <div><p>${data[0].title.rendered}</p></div>
      <div><p>${slug}</p></div>
    `
  }
}