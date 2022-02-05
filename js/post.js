//Obtém a URL e o slug da publicação clicada
var currentUrl = new URLSearchParams(window.location.search);
var slugUrl = currentUrl.get('slug');

$.ajax({
	url:'https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug='+slugUrl,		//Faz a nova requisição ao endpoint
	contentType: 'application/json',
	dataType: 'json',
	beforeSend: function(){
		$('.post-content').append('<img src="./img/loader.gif" title="Loader" class="loader" />');
	},
	success: function(result) {
		if(result) {
			document.title = result[0].title.rendered;	//Muda o título do documento para o título do post
			$('.loader').hide();

			//Monta a página da publicação a partir do slug recebido na URL
			$('.post-content').append('<header><div class="post-image"><img src="'+result[0]._embedded['wp:featuredmedia'][0].source_url+'" alt="'+result[0].title.rendered+'" /></div><h1 class="post-title inner-page">'+result[0].title.rendered+'</h1></header>');
			$('.post-content').append('<div class="post-content">'+result[0].content.rendered+'</div>');
		}
	}
})