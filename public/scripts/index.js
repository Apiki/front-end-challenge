import Homepage from "./views/Homepage.js"
import PostPage from "./views/PostPage.js"

const pathToRegex = path =>{
  return new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$")
}   

const getParams = match => {
  const values = match.result.slice(1)
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1])

  return Object.fromEntries(keys.map((key, i) => {
    return [key, values[i]]
  }))
}

const router = async () => {
  const routes = [
    { path: "/", view: Homepage },
    { path: "/post/:id", view: PostPage }
  ]

  const potentialMatches = routes.map(route => {
    return {
      route,
      result: location.pathname.match(pathToRegex(route.path))
    }
  })

  let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null)

  if(!match) {
    match = {
      route: routes[0],
      result: [location.pathname]
    }
  }

  const view = new match.route.view(getParams(match))
  
  let page = 1

  const divApp = document.querySelector("#app")
  
  divApp.innerHTML = await view.getHtml()

  const btnShowMore = document.querySelector('#showMore') 
  
  btnShowMore ? btnShowMore.addEventListener('click', async event => {
    event.preventDefault()

    page++

    await view.showMore(page)
  }) : btnShowMore
}

window.addEventListener("popstate", router)

document.addEventListener("DOMContentLoaded", () => {
  router()
})
