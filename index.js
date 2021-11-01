const createItemElement = async post => {
    const response = await getImagePost(post.featured_media)
    const media = await response.json()
    const Element = document.createElement('div')
    Element.innerHTML = `
        <div class="card">
            <div class="card__image">
                <img src="${media.source_url}">
            </div>
            <div class="card__content">
                <a class="card_title" href="${post.link}" target="_blank">${post.title.rendered}</a>
                <div class="info">
                    <h6 class="card_author"><i class="fas fa-user-edit"></i> ${post.yoast_head_json.twitter_misc["Escrito por"]} </h6>
                    <h6 class="reading_time"> <i class="fas fa-book-open"></i> ${post.yoast_head_json.twitter_misc["Est. tempo de leitura"]}</h6>
                </div>
                <h6 class="text_abbr" >${post.excerpt.rendered}</h6>
            </div>
        </div>`


    return Element
}

async function getImagePost(media_id) {
    return await fetch(`https://blog.apiki.com/wp-json/wp/v2/media/${media_id}`)
}

const listPost = document.querySelector('.listPost');
const plusPostsButton = document.querySelector('.plusPosts');
let pageCurrent = 1;

const getPosts = page => fetch(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&per_page=10&categories=518&page=${page}`).then(response => response.json()).then(posts => posts.map(async post => {
    listPost.append(await createItemElement(post))
}
))

getPosts(1)

function pageCurrentTest(pageCurrent, lastPage) {
    var plusPostsButton = document.getElementById('plusPosts');
    var endPostsLabel = document.getElementById('endPosts');

    console.log("lastPage " + lastPage)
    if (pageCurrent == lastPage) {
        plusPostsButton.style.display = "none";
        endPostsLabel.style.display = "block";
    }
}

let total_pages;

const getPages = page => fetch(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&per_page=10&categories=518&page=${page}`)
    .then(response => {
        response.json().then(posts => posts.map(post => post))
        return {
            count_pages: response.headers.get('x-wp-totalpages'),
            //count_posts: response.headers.get('x-wp-total')
        }
    })


const totalPages = async () => {
    const { count_pages, count_posts } = await getPages(1)
    total_pages = count_pages
    //console.log("total_pages: " + total_pages)
}

totalPages()

plusPostsButton.onclick = () => {
    pageCurrent++
    if (total_pages >= pageCurrent) {
        pageCurrentTest(pageCurrent, total_pages);
        //console.log("total_pages: " + total_pages)
        getPosts(pageCurrent)
    }
}