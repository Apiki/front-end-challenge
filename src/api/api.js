export default () => ({
    fetchList: (page) => {
        return new Promise((resolve, reject) => {

            const response = fetch("https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=" + page);
                                
            response
                .then(res => res.json())
                .then(data => console.log(data));
            
                resolve(response);
        });
    },

    fetchPost: (url) => {
        
    }
});