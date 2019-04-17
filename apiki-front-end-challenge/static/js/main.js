;(function() {
    var category = '&categories=518';
    var param = window.pagename ? '&slug=' + window.pagename : category;
    var API_POSTS = 'https://blog.apiki.com/wp-json/wp/v2/posts?_embed' + param;
    var content = document.getElementById('root');
    var totalPages = 0;

    function processResponse(response) {
        var listHtml = '';

        response.forEach(function(item) {
            listHtml += '<ul><li class="list-item" "col-1-3">';
            listHtml += '<a href="' + window.location.href + item.slug + '">';
            listHtml += '<img src="' + item._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url + '" />';
            listHtml += '<span class="title">' + item.title.rendered + '</span>';
            listHtml += '</a></li></ul>';
        });

        content.innerHTML = '<ul>' + listHtml + '<ul>';
    }

    function renderError(error) {
        window.alert(error.message);
    }

    fetch(API_POSTS)
        .then(function(res) {
            totalPages = res.headers.get('x-wp-totalpages');
            return res.json()
        })
        .then(processResponse)
        .catch(renderError)
})();