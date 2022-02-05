export const api = async (url) => {
    const req = await fetch(url);
    const json = await req.json();
    return json;
}

export const getPost = async (slug) => {
    const url = `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${slug}`;
    const response = await fetch(url);
    const responseJson = await response.json();
    const data = responseJson;
    return data;
}
