	var endpoint = 'https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518';
	var currentPage = 1;
	var loadButton = $('.load-more');

    //Requisição de API, tratamento de dados e exibição dos elementos de posts
    $.ajax({
        url: endpoint,
        contentType: 'application/json',
        dataType: 'json',
        beforeSend: function(){
			$('.post-block').append('<img src="./img/loader.gif" title="Loader" class="loader" />');	//Gif loader antes do conteúdo carregar
			loadButton.hide();		//Oculta o botão Carregar Mais do usuário
		},
        success: function(result){
    		if (result) {
    			$('.loader').hide();
    			loadButton.show();
    			loadButton.before(result);
				
				$.each(result, function(key, value){ 	//Realiza a montagem da exibição das publicações de cada objeto recebido na requisição
					$('.post-block').append('<section class="post"><a href="single-post.html?slug='+result[key].slug+'"><div class="column"><div class="column-left"><picture class="home-image"><img src="'+result[key]._embedded['wp:featuredmedia'][0].source_url+'" alt="'+result[key].title.rendered+'" /></picture></div><div class="column-right"><h3 class="post-title">'+result[key].title.rendered+'</h3></div></div></a></section>');
				});
			}
        }
    })

    //Clique no botão Carregar Mais
    $(loadButton).click(function() {
    	
    	//Realiza nova requisição ao endpoint da API para carregar o header e, assim, obter os atributos X-WP-Total e X-WP-TotalPages
    	$.get(endpoint, function( data, status, request ) {  
    		totalNumPosts = request.getResponseHeader('x-wp-total');
    		totalNumPages = request.getResponseHeader('x-wp-totalpages');
    		currentPage++; //Acréscimo na variável para que ela carregue os posts da próxima página em um futuro clique

    		$.ajax({ 
    			url: endpoint+'&page='+currentPage,
    			contentType: 'application/json',
    			dataType: 'json',
    			beforeSend: function(){
    				loadButton.text('Carregando...');
    			},
    			success: function(result){
    				if(result) {
    					loadButton.text('Carregar mais').prev().before(result); 
    					
    					$.each(result, function(key, value){ 
							$('.post-block').append('<section class="post"><a href="single-post.html?slug='+result[key].slug+'"><div class="column"><div class="column-left"><picture class="home-image"><img src="'+result[key]._embedded['wp:featuredmedia'][0].source_url+'" alt="'+result[key].title.rendered+'" /></picture></div><div class="column-right"><h3 class="post-title">'+result[key].title.rendered+'</h3></div></div></a></section>');
						});

    					if( currentPage == totalNumPages ) { //Se a página atual for a última, desabilita botão de carregamento
    						loadButton.text('Última página');
    						loadButton.attr('disabled', true);
    					}

    				} else { //Se não houverem mais conteúdos para carregar, remove o botão 
    					loadButton.remove();
    				}
    			}
    		})
    	})
    });