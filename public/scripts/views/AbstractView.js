export default class {
  constructor(params) {
    this.params = params
  }

  setTitle(title) {
    document.title = title
  }

  _setUrl(page, slug = "") {
    let endpoint = "https://blog.apiki.com/wp-json/wp/v2/posts?_embed"
    
    if(page == "post") {
      endpoint += `&slug=${slug}`
    } else if(page == "home") {
      endpoint += `&categories=518`
    }
    
    return endpoint
  }

  async _fetchData(url) {
    const data = await fetch(url)
    const dataJson = await data.json()

    return dataJson
  }

  async getHtml() {
    return ""
  }
}