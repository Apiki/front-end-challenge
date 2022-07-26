import useSWR from "swr"

const BASE_URL = 'https://blog.apiki.com/wp-json/wp/v2';
const BASE_CATEGORY = '/posts?_embed&categories=518';


export async function getPosts() {
    const postsRes = await fetch(BASE_URL + BASE_CATEGORY);
    const posts = await postsRes.json();

    const wp_total = postsRes.headers["x-wp-total"]
    const totalpages = postsRes.headers["x-wp-totalpages"];
    return posts;
}

export async function getPost(slug) {
    const posts = await getPosts();
    const postArray = posts.filter((post) => post.slug == slug);
    const post = postArray.length > 0 ? postArray[0] : null;
    return post;
}

export async function getSlugs(type) {
    let elements = [];
    switch (type) {
        case 'posts':
            elements = await getPosts();
            break;
    }
    const elementsIds = elements.map((element) => {
        return {
            params: {
                slug: element.slug,
            },
        };
    });
    return elementsIds;
}

