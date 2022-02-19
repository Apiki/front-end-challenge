const BASEAPI = 'https://blog.apiki.com/wp-json/wp/v2/posts?_embed';
const BaseEndpoint = '&page=';
let page = 2;
let totalPages = 17;

const apiFetchGet = async (endpoint) => {
    try{
        const response = await fetch(BASEAPI+endpoint);

        const json = response.json();

        return json;
    }catch(e){
        alert(`Erro: ${e}`);
        return [];
    }
};

const apikiApi = {
    getInitialPosts: async () => {
        const json = await apiFetchGet('&categories=518');
        return json;
    },
    getNextPosts: async () => {
        if(page < totalPages){
            let endpoint = BaseEndpoint + page;
            const json = await apiFetchGet(endpoint)
            page++;
            return json;
        }else{
            alert('Não há mais postagens para exibir');
            return [];
        }
    },
    getPost: async (slug) => {
        const json = await apiFetchGet('&slug=' + slug)
        return json;
    }
};

export default () => apikiApi;

