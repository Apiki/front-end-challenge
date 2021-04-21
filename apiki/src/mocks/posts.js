const mockedPosts = [
  {
    "id": 1,
    "title": {"rendered":"Como criar Web Stories no WordPress"},
    "slug": "como-criar-web-stories-no-wordpress-open-graph",
    "content": {
      "rendered":"\n<p>O Google Web Stories \u00e9 uma evolu\u00e7\u00e3o do AMP Stories.<\/p>\n\n\n\n<p>Se voc\u00ea ainda n\u00e3o o conhecia, o AMP Stories \u00e9 um dos quatros <a href=\"https:\/\/blog.apiki.com\/formatos-amp\/\">formatos AMP<\/a> existentes.<\/p>\n\n\n\n<p>Esse recurso \u00e9 uma varia\u00e7\u00e3o do AMP, atrav\u00e9s do qual voc\u00ea implementa Stories em seu website.<\/p>\n\n\n\n<p>Me refiro ao \u201cStory\u201d, tipo de conte\u00fado popularmente utilizado em redes sociais.<\/p>\n\n\n\n<p>Se voc\u00ea ainda n\u00e3o est\u00e1 por dentro, leia <a href=\"https:\/\/blog.apiki.com\/google-amp-stories\/\">Google AMP Stories e o que voc\u00ea precisa saber a respeito.<\/a><\/p>\n\n\n\n<h2>Web Stories versus Stories das redes sociais<\/h2>\n\n\n\n<p>Voc\u00ea pode se perguntar, por que deveria investir nos Web Stories dado que j\u00e1 publica e tem resultados com os Stories do Instagram, ou alguma outra plataforma.<\/p>\n\n\n\n<p>Acredito que um n\u00e3o substitui o outro, mas voc\u00ea precisa ter conhecimento das significativas diferen\u00e7as e possibilidades entre os dois formatos.<\/p>\n\n\n\n<p>Abaixo uma tabela comparativa para voc\u00ea se inteirar.<\/p>\n\n\n\n<div class=\"wp-block-group\"><div class=\"wp-block-group__inner-container\">\n<figure class=\"wp-block-table is-style-stripes\"><table><thead><tr><th>Recurso<\/th><th>Google Web Stories<\/th><th>Stories das redes sociais<\/th><\/tr><\/thead><tbody><tr><td>Alcance<\/td><td>P\u00fablico na internet<\/td><td>Privado e limitado a rede social em que foi publicado<\/td><\/tr><tr><td>Exibe na busca do Google<\/td><td>Sim<\/td><td>N\u00e3o<\/td><\/tr><tr><td>Embeda em outros sites<\/td><td>Sim<\/td><td>N\u00e3o<\/td><\/tr><tr><td>Tempo de vida<\/td><td>Para sempre. Voc\u00ea decide quando despublicar<\/td><td>Limitado a 24h<\/td><\/tr><tr><td>Como criar<\/td><td>Com tecnologias web (HTML, CSS, JavaScript)<\/td><td>Atrav\u00e9s do aplicativo da rede social<\/td><\/tr><tr><td>Filtros<\/td><td>Pr\u00e9 produzidos nas imagens e v\u00eddeos<\/td><td>Atrav\u00e9s da interface do aplicativo da rede social<\/td><\/tr><tr><td>Anima\u00e7\u00e3o<\/td><td>Para todos os elementos da hist\u00f3ria<\/td><td>Controle limitado sobre os elementos inseridos<\/td><\/tr><tr><td>Intera\u00e7\u00f5es<\/td><td>Links, CTA, Conte\u00fado relacionado, menu, compartilhar, embeds diversos<\/td><td>Enquetes, Like, Rea\u00e7\u00f5es, Mensagens diretas<\/td><\/tr><tr><td>Tipo de conte\u00fado<\/td><td>Texto, Imagem, V\u00eddeo, \u00c1udio, GIF Animado<\/td><td>Texto, Imagem, V\u00eddeo, \u00c1udio, GIF Animado<\/td><\/tr><tr><td>Mobile First<\/td><td>Sim<\/td><td>Sim<\/td><\/tr><tr><td>Fullscreen no desktop<\/td><td>Sim<\/td><td>N\u00e3o<\/td><\/tr><tr><td>Analytics<\/td><td>Atrav\u00e9s do Google Analytics, ou outras ferramentas. Al\u00e9m de intera\u00e7\u00f5es de eventos inline<\/td><td>Insights sobre o total de visualiza\u00e7\u00f5es, n\u00fameros de toques e outros espec\u00edficos de cada rede social.<\/td><\/tr><\/tbody><\/table><\/figure>\n\n\n\n<p>Ea\u00ed, vai investir em Web Stories?<\/p>\n<\/div><\/div>\n\n\n\n<h2>A estrutura\u00e7\u00e3o de c\u00f3digo do AMP Stories<\/h2>\n\n\n\n<p>Para voc\u00ea ter uma ideia t\u00e9cnica de como os elementos funcionam e s\u00e3o organizados, a ilustra\u00e7\u00e3o abaixo te esclarece como os Web Stories s\u00e3o estruturados.<\/p>\n\n\n\n<p>Visualmente a representa\u00e7\u00e3o seria assim:<\/p>\n\n\n\n<figure class=\"wp-block-image\"><img loading=\"lazy\" width=\"1024\" height=\"442\" src=\"https:\/\/blog.apiki.com\/wp-content\/uploads\/sites\/2\/2019\/07\/story_parts-1024x442.png\" alt=\"Imagem ilustrativa com uma representa\u00e7\u00e3o da composi\u00e7\u00e3o estrutural de um AMP Story\" class=\"wp-image-9868\" srcset=\"https:\/\/blog.apiki.com\/wp-content\/uploads\/sites\/2\/2019\/07\/story_parts-1024x442.png 1024w, https:\/\/blog.apiki.com\/wp-content\/uploads\/sites\/2\/2019\/07\/story_parts-300x130.png 300w, https:\/\/blog.apiki.com\/wp-content\/uploads\/sites\/2\/2019\/07\/story_parts-768x332.png 768w, https:\/\/blog.apiki.com\/wp-content\/uploads\/sites\/2\/2019\/07\/story_parts-750x324.png 750w, https:\/\/blog.apiki.com\/wp-content\/uploads\/sites\/2\/2019\/07\/story_parts.png 1047w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" \/><\/figure>\n\n\n\n<p>A composi\u00e7\u00e3o de uma AMP Story seria: p\u00e1ginas (com mais de uma teremos um carrossel), camadas sobre essas p\u00e1ginas com seus respectivos elementos.<\/p>\n\n\n\n<p>Esses elementos s\u00e3o HTML b\u00e1sico e uma estrutura\u00e7\u00e3o AMP. <\/p>\n\n\n\n<p>A marca\u00e7\u00e3o HTML seria da seguinte forma:<\/p>\n\n\n\n<figure class=\"wp-block-image\"><img loading=\"lazy\" width=\"557\" height=\"355\" src=\"https:\/\/blog.apiki.com\/wp-content\/uploads\/sites\/2\/2019\/07\/amp-story-tag-hierarchy.png\" alt=\"Imagem ilustrativa com exemplo de uma marca\u00e7\u00e3o HTML \/ AMP usada para construir AMP Story\" class=\"wp-image-9869\" srcset=\"https:\/\/blog.apiki.com\/wp-content\/uploads\/sites\/2\/2019\/07\/amp-story-tag-hierarchy.png 557w, https:\/\/blog.apiki.com\/wp-content\/uploads\/sites\/2\/2019\/07\/amp-story-tag-hierarchy-300x191.png 300w\" sizes=\"(max-width: 557px) 100vw, 557px\" \/><\/figure>\n\n\n\n<p>Quando voc\u00ea \u00e9 desenvolvedor e apaixonado pela codifica\u00e7\u00e3o, esse desenvolvimento pode ser manual.<\/p>\n\n\n\n<p>Mas pode ser tamb\u00e9m atrav\u00e9s de um editor visual, o que permite editores, designers, profissionais de marketing e pessoas sem experi\u00eancia em programa\u00e7\u00e3o, contarem suas hist\u00f3rias.<\/p>\n\n\n\n<p>O Google <a href=\"https:\/\/stories.google\/intl\/pt-BR_ALL\/create\/\">preparou editores incr\u00edveis<\/a>, tanto ferramentas aut\u00f4nomas quanto um editor poderoso de Web Stories para o WP.<\/p>\n\n\n\n<h2>Web Stories para WordPress<\/h2>\n\n\n\n<p>O plugin Web Stories \u00e9 gratuito, de c\u00f3digo aberto e traz uma experi\u00eancia rica de edi\u00e7\u00e3o visual para a funcionalidade.<\/p>\n\n\n\n<figure class=\"wp-block-image size-large\"><a href=\"https:\/\/wordpress.org\/plugins\/web-stories\/\"><img loading=\"lazy\" width=\"1024\" height=\"462\" src=\"https:\/\/blog.apiki.com\/wp-content\/uploads\/sites\/2\/2020\/10\/google-web-stories-plugin-wordpress-1024x462.png\" alt=\"O plugin Web Stories para WordPress da Google \" class=\"wp-image-13285\" srcset=\"https:\/\/blog.apiki.com\/wp-content\/uploads\/sites\/2\/2020\/10\/google-web-stories-plugin-wordpress-1024x462.png 1024w, https:\/\/blog.apiki.com\/wp-content\/uploads\/sites\/2\/2020\/10\/google-web-stories-plugin-wordpress-300x135.png 300w, https:\/\/blog.apiki.com\/wp-content\/uploads\/sites\/2\/2020\/10\/google-web-stories-plugin-wordpress-768x347.png 768w, https:\/\/blog.apiki.com\/wp-content\/uploads\/sites\/2\/2020\/10\/google-web-stories-plugin-wordpress-750x339.png 750w, https:\/\/blog.apiki.com\/wp-content\/uploads\/sites\/2\/2020\/10\/google-web-stories-plugin-wordpress-1140x515.png 1140w, https:\/\/blog.apiki.com\/wp-content\/uploads\/sites\/2\/2020\/10\/google-web-stories-plugin-wordpress.png 1500w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" \/><\/a><\/figure>\n\n\n\n<p>O painel foge um pouco do padr\u00e3o do WP, no entanto a experi\u00eancia est\u00e1 boa para criar e gerir as suas hist\u00f3rias.<\/p>\n\n\n\n<p>Por padr\u00e3o, alguns templates s\u00e3o disponibilizados. E voc\u00ea tamb\u00e9m pode criar os seus.<\/p>\n\n\n\n<p>A customiza\u00e7\u00e3o de foto \u00e9 muito simples e v\u00e1rias op\u00e7\u00f5es. <\/p>\n\n\n\n<p>Seja as edi\u00e7\u00f5es de texto, quanto v\u00eddeo, imagens e call to actions.<\/p>\n\n\n\n<p>A integra\u00e7\u00e3o a biblioteca de WordPress tamb\u00e9m facilita bastante explorar seus conte\u00fados visuais existentes.<\/p>\n\n\n\n<h2>Conclus\u00e3o<\/h2>\n\n\n\n<p>Atrav\u00e9s do Web Stories, o Google quer dar significativo alcance as suas hist\u00f3rias.<\/p>\n\n\n\n<p>Ser\u00e1 uma briga interessante que ele vai disputar contra os gigantes das redes sociais.<\/p>\n\n\n\n<p>Mas na verdade, estamos falando da guerra da aten\u00e7\u00e3o dos usu\u00e1rios.<\/p>\n\n\n\n<p>E considerar uma estrutura relevante como a do Google faz todo sentido.<\/p>\n\n\n\n<p>Faz todo sentido para engajar ainda mais a sua audi\u00eancia, atrair mais visitantes e converter para as a\u00e7\u00f5es desejadas pelo seus neg\u00f3cio.<\/p>\n\n\n\n<p>E o melhor de tudo, que o conte\u00fado n\u00e3o vai expirar em 24h, e ainda poder\u00e1 ser encontrada atrav\u00e9s do maior buscador da internet.<\/p>\n",
    },
    "_embedded": {
      "wp:featuredmedia": [
        {
          "media_details": {
            "width": 1200,
            "height": 630,
            "file": "2020/10/Como-criar-Web-Stories-no-WordPress-open-graph.png",
            "sizes": {
              "medium": {
                "file": "Como-criar-Web-Stories-no-WordPress-open-graph-300x158.png",
                "width": 300,
                "height": 158,
                "mime_type": "image/png",
                "source_url": "https://blog.apiki.com/wp-content/uploads/sites/2/2020/10/Como-criar-Web-Stories-no-WordPress-open-graph-300x158.png"
              },
              "large": {
                "file": "Como-criar-Web-Stories-no-WordPress-open-graph-1024x538.png",
                "width": 1024,
                "height": 538,
                "mime_type": "image/png",
                "source_url": "https://blog.apiki.com/wp-content/uploads/sites/2/2020/10/Como-criar-Web-Stories-no-WordPress-open-graph-1024x538.png"
              },
              "thumbnail": {
                "file": "Como-criar-Web-Stories-no-WordPress-open-graph-150x150.png",
                "width": 150,
                "height": 150,
                "mime_type": "image/png",
                "source_url": "https://blog.apiki.com/wp-content/uploads/sites/2/2020/10/Como-criar-Web-Stories-no-WordPress-open-graph-150x150.png"
              },
              "medium_large": {
                "file": "Como-criar-Web-Stories-no-WordPress-open-graph-768x403.png",
                "width": 768,
                "height": 403,
                "mime_type": "image/png",
                "source_url": "https://blog.apiki.com/wp-content/uploads/sites/2/2020/10/Como-criar-Web-Stories-no-WordPress-open-graph-768x403.png"
              }
            }
          },
          "source_url": "https://blog.apiki.com/wp-content/uploads/sites/2/2020/10/Como-criar-Web-Stories-no-WordPress-open-graph.png",
        }
      ]
    }
  },
  {
    "id": 2,
    "title": { "rendered": "Como criar blocos reutilizáveis no Gutenberg" },
    "slug": "como-criar-blocos-reutilizaveis-no-gutenberg-open-graph",
    "content": {
      "rendered": "\n<p>Blocos reutilizáveis no Gutenberg é uma possibilidade incrível, mas pouco conhecida.</p>\n\n\n\n<p>Através desse recurso você consegue replicar um bloco que foi criado em um post em milhares de outros.</p>\n\n\n\n<p>Vamos considerar o seguinte cenário.</p>\n\n\n\n<p>No final dos seus posts, você gostaria de exibir uma chamada de ação aos seus leitores.</p>\n\n\n\n<p>Você vai aplicando esse CTA ao longo de inúmeros posts publicados.</p>\n\n\n\n<p>Em dado momento, se faz necessário alterar a oferta desse Call To Action.</p>\n\n\n\n<p>O passo natural, e indesejado, seria entrar em cada post e alterar o conteúdo, certo?</p>\n\n\n\n<p>No entanto, você já imaginou o trabalho que terá.</p>\n\n\n\n<p>Através dos blocos reutilizáveis, você economiza esse tempo.</p>\n\n\n\n<p>Funciona assim.</p>\n\n\n\n<p>Você cria sua CTA no post A.</p>\n\n\n\n<p>Esse CTA, que pode ser um conjunto de blocos, você os transforma em blocos reutilizáveis.</p>\n\n\n\n<p>Nos posts B, C, e etc, você faz uso desse bloco criado no post A.</p>\n\n\n\n<p>Quando você alterar esse conteúdo, todos os posts que o contém será atualizado.</p>\n\n\n\n<p>Imaginou agora o grande potencial desse recurso. Incrível, não é?</p>\n\n\n\n<p>Mas antes de seguir com a leitura, considere conhecer a <a href=\"https://blog.apiki.com/anatomia-do-gutenberg-o-editor-do-wordpress/\">anatomia do Gutenberg</a>.</p>\n\n\n\n<p>É o primeiro passo para você conhecer o potencial e ficar mais confortável com o editor.</p>\n\n\n\n<figure class=\"wp-block-image size-large\"><img loading=\"lazy\" width=\"1024\" height=\"538\" src=\"https://blog.apiki.com/wp-content/uploads/sites/2/2020/09/Como-criar-blocos-reutilizáveis-no-Gutenberg-open-graph-1024x538.png\" alt=\"Ilustração de blocos reutilizáveis\" class=\"wp-image-12987\" srcset=\"https://blog.apiki.com/wp-content/uploads/sites/2/2020/09/Como-criar-blocos-reutilizáveis-no-Gutenberg-open-graph-1024x538.png 1024w, https://blog.apiki.com/wp-content/uploads/sites/2/2020/09/Como-criar-blocos-reutilizáveis-no-Gutenberg-open-graph-300x158.png 300w, https://blog.apiki.com/wp-content/uploads/sites/2/2020/09/Como-criar-blocos-reutilizáveis-no-Gutenberg-open-graph-768x403.png 768w, https://blog.apiki.com/wp-content/uploads/sites/2/2020/09/Como-criar-blocos-reutilizáveis-no-Gutenberg-open-graph-750x394.png 750w, https://blog.apiki.com/wp-content/uploads/sites/2/2020/09/Como-criar-blocos-reutilizáveis-no-Gutenberg-open-graph-1140x599.png 1140w, https://blog.apiki.com/wp-content/uploads/sites/2/2020/09/Como-criar-blocos-reutilizáveis-no-Gutenberg-open-graph.png 1200w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" /></figure>\n\n\n\n<h2>Os benefícios dos blocos reutilizáveis no Gutenberg</h2>\n\n\n\n<p>Pela introdução des conteúdo, ficou visível um benefício: ganho de escala.</p>\n\n\n\n<p>Além disso, vamos considerar outras importantes vantagens.</p>\n\n\n\n<ul><li><strong>Não precisa de programação</strong>. Isso mesmo, sem conhecimento técnico é possível explorar o recurso.</li><li><strong>É simples e rápido</strong>. Dura o tempo de executar alguns poucos cliques.</li><li><strong>Reduz o esforço</strong>. A media que o seu site vai ganhando volume de conteúdo, algumas alterações em massa podem ser árduas.</li><li><strong>Ganho de tempo</strong>. Você poderá focar em outras coisas mais relevantes e de alto impacto para o seu projeto digital.</li></ul>\n\n\n\n<p>Se você ainda não entendeu o potencial, vou ser ainda mais claro.</p>\n\n\n\n<p>No final dos seus artigos, você pode incentivar o leitor a executar uma ação estratégia para você.</p>\n\n\n\n<p>Bem como aplicar algum elemento relevante para o seu negócio.</p>\n\n\n\n<p>Alguns exemplos práticos dessas ações.</p>\n\n\n\n<ul><li>Exibir banners de afiliados;</li><li>Convidar os usuários para comentar o artigo;</li><li>Incentivar o compartilhamento social;</li><li>Mostrar formulário de interação como enquete;</li><li>Expor uma opção de validação dos posts, como NPS, estrelas, curtir e não curtir e por aí vai.</li></ul>\n\n\n\n<p>Vamos ver na prática a implementação?</p>\n\n\n\n<h2>Como criar e fazer uso dos blocos reutilizáveis</h2>\n\n\n\n<p>Cada adição de conteúdo no editor do WordPress, é feita através de blocos.</p>\n\n\n\n<p>Esses blocos podem ser formatos e estilizados como possível e desejado.</p>\n\n\n\n<p>Feito é isso, basta fazer uso da opção &#8220;<strong>Adicionar aos blocos reutilizáveis</strong>&#8220;.</p>\n\n\n\n<p>Sim, somente isso. </p>\n\n\n\n<p>Observe como é extreamamente simples.</p>\n\n\n\n<figure class=\"wp-block-image size-large\"><img loading=\"lazy\" width=\"480\" height=\"316\" src=\"https://blog.apiki.com/wp-content/uploads/sites/2/2020/09/gutenberg-como-criar-blocos-reutilizaveis.gif\" alt=\"Imagem animada demonstrando como criar um bloco reutilizável no WordPress\" class=\"wp-image-12966\"/></figure>\n\n\n\n<p>Uma vez criado, ele pode ser reutilizado no mesmo post ou em qualquer outro.</p>\n\n\n\n<p>Eles são salvos na categoria &#8220;Reutilizável&#8221;.</p>\n\n\n\n<figure class=\"wp-block-image size-large\"><img loading=\"lazy\" width=\"762\" height=\"868\" src=\"https://blog.apiki.com/wp-content/uploads/sites/2/2020/09/gutenberg-blocos-reutilizaveis-categoria.png\" alt=\"Exemplo de como localizar os blocos reutilizáveis\" class=\"wp-image-12968\" srcset=\"https://blog.apiki.com/wp-content/uploads/sites/2/2020/09/gutenberg-blocos-reutilizaveis-categoria.png 762w, https://blog.apiki.com/wp-content/uploads/sites/2/2020/09/gutenberg-blocos-reutilizaveis-categoria-263x300.png 263w, https://blog.apiki.com/wp-content/uploads/sites/2/2020/09/gutenberg-blocos-reutilizaveis-categoria-750x854.png 750w\" sizes=\"(max-width: 762px) 100vw, 762px\" /></figure>\n\n\n\n<p>Portanto, ao adicionar um no bloco, navegue até essa categoria e selecione o bloco reutilizável anteriormente criado.</p>\n\n\n\n<p>Você também pode fazer uso do atalho &#8220;slash&#8221;, ou seja, digite &#8220;/&#8221; e o nome do bloco. Em seguida, aperte enter / return.</p>\n\n\n\n<h2>Como editar os blocos</h2>\n\n\n\n<p>Podemos considerar dois tipos de edição.</p>\n\n\n\n<ol><li>Editar o bloco para refletir em todos os posts onde ele foi utilizado;</li><li>Ou, editar somente em um post específico.</li></ol>\n\n\n\n<p>Nesse último caso, você considerar que o conteúdo, ou ação do bloco, não se aplica totalmente ao post em questão.</p>\n\n\n\n<p>Logo, a edição deve ser somente no conteúdo que estou atuando agora.</p>\n\n\n\n<p>Após adicionar o bloco reutilizável, você precisa convertê-lo para um bloco normal.</p>\n\n\n\n<figure class=\"wp-block-image size-large\"><img loading=\"lazy\" width=\"1024\" height=\"557\" src=\"https://blog.apiki.com/wp-content/uploads/sites/2/2020/09/gutenberg-blocos-converter-para-bloco-normal-1024x557.png\" alt=\"Exemplo do comando para converter um bloco para o estado padrão\" class=\"wp-image-12972\" srcset=\"https://blog.apiki.com/wp-content/uploads/sites/2/2020/09/gutenberg-blocos-converter-para-bloco-normal-1024x557.png 1024w, https://blog.apiki.com/wp-content/uploads/sites/2/2020/09/gutenberg-blocos-converter-para-bloco-normal-300x163.png 300w, https://blog.apiki.com/wp-content/uploads/sites/2/2020/09/gutenberg-blocos-converter-para-bloco-normal-768x418.png 768w, https://blog.apiki.com/wp-content/uploads/sites/2/2020/09/gutenberg-blocos-converter-para-bloco-normal-750x408.png 750w, https://blog.apiki.com/wp-content/uploads/sites/2/2020/09/gutenberg-blocos-converter-para-bloco-normal-1140x621.png 1140w, https://blog.apiki.com/wp-content/uploads/sites/2/2020/09/gutenberg-blocos-converter-para-bloco-normal.png 1308w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" /></figure>\n\n\n\n<p>E assim, faça as edições devidas.</p>\n\n\n\n<p>Agora, vamos imaginar que você errou na criação do bloco e percebeu isso somente depois.</p>\n\n\n\n<p>Ou que você gostaria de editar o conteúdo.</p>\n\n\n\n<p>Você pode editar um bloco reutilizável, e essa edição ser refletida em todos os posts que fizeram uso dele.</p>\n\n\n\n<p>Os passos para esse tipo de edição são os seguintes.</p>\n\n\n\n<p>Na listagem de blocos reutilizáveis, clique no link &#8220;<strong>Gerenciar todos os blocos reutilizáveis</strong>&#8220;.</p>\n\n\n\n<figure class=\"wp-block-image size-large\"><img loading=\"lazy\" width=\"762\" height=\"868\" src=\"https://blog.apiki.com/wp-content/uploads/sites/2/2020/09/link-gerenciar-todos-os-blocos-reutilizaveis.png\" alt=\"Exemplo da localização do link &quot;Gerenciar todos os blocos reutilizáveis&quot; no Gutenberg.\" class=\"wp-image-12976\" srcset=\"https://blog.apiki.com/wp-content/uploads/sites/2/2020/09/link-gerenciar-todos-os-blocos-reutilizaveis.png 762w, https://blog.apiki.com/wp-content/uploads/sites/2/2020/09/link-gerenciar-todos-os-blocos-reutilizaveis-263x300.png 263w, https://blog.apiki.com/wp-content/uploads/sites/2/2020/09/link-gerenciar-todos-os-blocos-reutilizaveis-750x854.png 750w\" sizes=\"(max-width: 762px) 100vw, 762px\" /></figure>\n\n\n\n<p>Esse link te levará para a interface de gestão desse tipo de bloco.</p>\n\n\n\n<p>Você já está acostumado com essa tela, é a mesma de gestão de Posts e Páginas no WP.</p>\n\n\n\n<figure class=\"wp-block-image size-large\"><img loading=\"lazy\" width=\"1024\" height=\"681\" src=\"https://blog.apiki.com/wp-content/uploads/sites/2/2020/09/gutenberg-blocos-editar-1024x681.png\" alt=\"Demonstração do link de &quot;Editar&quot; bloco reutilizável\" class=\"wp-image-12977\" srcset=\"https://blog.apiki.com/wp-content/uploads/sites/2/2020/09/gutenberg-blocos-editar-1024x681.png 1024w, https://blog.apiki.com/wp-content/uploads/sites/2/2020/09/gutenberg-blocos-editar-300x200.png 300w, https://blog.apiki.com/wp-content/uploads/sites/2/2020/09/gutenberg-blocos-editar-768x511.png 768w, https://blog.apiki.com/wp-content/uploads/sites/2/2020/09/gutenberg-blocos-editar-750x499.png 750w, https://blog.apiki.com/wp-content/uploads/sites/2/2020/09/gutenberg-blocos-editar.png 1118w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" /></figure>\n\n\n\n<p>Encontre o bloco desejado e edite-o.</p>\n\n\n\n<p>Salve e pronto. Todos os posts que usaram esse bloco já refletiram a nova realidade.</p>\n\n\n\n<h2>Como gerir os blocos</h2>\n\n\n\n<p>A interface demonstrada para editar o bloco, na verdade vai muito além desse tipo de ação.</p>\n\n\n\n<p>É uma área de interação e gestão completa dos blocos reutilizáveis no WordPress.</p>\n\n\n\n<figure class=\"wp-block-image size-large\"><img loading=\"lazy\" width=\"1024\" height=\"300\" src=\"https://blog.apiki.com/wp-content/uploads/sites/2/2020/09/wordpress-gutenberg-gestao-blocos-reutilizaveis-1024x300.png\" alt=\"Interface de gestão dos blocos reutilizáveis no WordPress\" class=\"wp-image-12980\" srcset=\"https://blog.apiki.com/wp-content/uploads/sites/2/2020/09/wordpress-gutenberg-gestao-blocos-reutilizaveis-1024x300.png 1024w, https://blog.apiki.com/wp-content/uploads/sites/2/2020/09/wordpress-gutenberg-gestao-blocos-reutilizaveis-300x88.png 300w, https://blog.apiki.com/wp-content/uploads/sites/2/2020/09/wordpress-gutenberg-gestao-blocos-reutilizaveis-768x225.png 768w, https://blog.apiki.com/wp-content/uploads/sites/2/2020/09/wordpress-gutenberg-gestao-blocos-reutilizaveis-750x220.png 750w, https://blog.apiki.com/wp-content/uploads/sites/2/2020/09/wordpress-gutenberg-gestao-blocos-reutilizaveis-1140x334.png 1140w, https://blog.apiki.com/wp-content/uploads/sites/2/2020/09/wordpress-gutenberg-gestao-blocos-reutilizaveis.png 1500w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" /></figure>\n\n\n\n<p>Através dela é possível.</p>\n\n\n\n<ul><li>Adicionar novos blocos reutilizáveis;</li><li>Importar blocos a partir de um arquivo JSON;</li><li>Editar os blocos existentes;</li><li>Enviar blocos para a lixeira;</li><li>Restaurar blocos da lixeira;</li><li>Exportar o bloco como JSON.</li></ul>\n\n\n\n<p>A opção de exportar e importar blocos reutilizável a partir de um arquivo JSON é incrível.</p>\n\n\n\n<p>Você pode criar os elementos em um site, e aplicar em outro.</p>\n\n\n\n<p>Bem como compartilhar com a sua equipe, amigos ou a comunidade.</p>\n\n\n\n<h2>Conclusão</h2>\n\n\n\n<p>O Gutenberg é o presente e futuro do WordPress.</p>\n\n\n\n<p>Muitos esforços estão sendo aplicados nesse editor.</p>\n\n\n\n<p>Considere se <a href=\"https://blog.apiki.com/?s=gutenberg\">inteirar sobre ele</a> o quanto antes.</p>\n\n\n\n<p>Bem como <a href=\"https://apiki.com/produtos/desenvolvimento-sites-wordpress-wp-on-demand/\">desenvolver seu projeto digital em WordPress sob demanda</a> e integrada ao Gutenberg.</p>\n\n\n\n<p>Neste artigo, você percebeu vantagens poderosas de somente um dos recursos que ele oferece.</p>\n\n\n\n<p>Você já adianta feito uso antes dos blocos reutilizáveis no WP?</p>\n",
    },
    "_embedded": {
      "wp:featuredmedia": [
        {
          "media_details": {
            "width": 1200,
            "height": 630,
            "file": "2020/09/Como-criar-blocos-reutilizáveis-no-Gutenberg-open-graph.png",
            "sizes": {
              "medium": {
                "file": "Como-criar-blocos-reutilizáveis-no-Gutenberg-open-graph-300x158.png",
                "width": 300,
                "height": 158,
                "mime_type": "image/png",
                "source_url": "https://blog.apiki.com/wp-content/uploads/sites/2/2020/09/Como-criar-blocos-reutilizáveis-no-Gutenberg-open-graph-300x158.png"
              },
              "large": {
                "file": "Como-criar-blocos-reutilizáveis-no-Gutenberg-open-graph-1024x538.png",
                "width": 1024,
                "height": 538,
                "mime_type": "image/png",
                "source_url": "https://blog.apiki.com/wp-content/uploads/sites/2/2020/09/Como-criar-blocos-reutilizáveis-no-Gutenberg-open-graph-1024x538.png"
              },
              "thumbnail": {
                "file": "Como-criar-blocos-reutilizáveis-no-Gutenberg-open-graph-150x150.png",
                "width": 150,
                "height": 150,
                "mime_type": "image/png",
                "source_url": "https://blog.apiki.com/wp-content/uploads/sites/2/2020/09/Como-criar-blocos-reutilizáveis-no-Gutenberg-open-graph-150x150.png"
              },
              "medium_large": {
                "file": "Como-criar-blocos-reutilizáveis-no-Gutenberg-open-graph-768x403.png",
                "width": 768,
                "height": 403,
                "mime_type": "image/png",
                "source_url": "https://blog.apiki.com/wp-content/uploads/sites/2/2020/09/Como-criar-blocos-reutilizáveis-no-Gutenberg-open-graph-768x403.png"
              }
            }
          },
          "source_url": "https://blog.apiki.com/wp-content/uploads/sites/2/2020/09/Como-criar-blocos-reutilizáveis-no-Gutenberg-open-graph.png",
        }
      ]
    }
  },
  {
    "id": 3,
    "title": { "rendered": "Como habilitar recursos ocultos do Gutenberg no tema WordPress" },
    "slug": "como-habilitar-os-recursos-ocultos-do-gutenberg-no-seu-tema-wordpress",
    "content": {
      "rendered": "\n<p>Todo tema tem suporte nativo ao editor do WP. No entanto, nem todos tem a disposição os recursos ocultos do Gutenberg.</p>\n\n\n\n<p>Para habilitar essas funcionalidades, é preciso declarar a intenção.</p>\n\n\n\n<p>Essa declaração é realizada através do arquivo <strong>functions.php</strong> e da função <strong>add_theme_support()</strong>.</p>\n\n\n\n<p>Através dessa função, manifestamos o desejo de habilitar os mecanismos ocultos, um por um.</p>\n\n\n\n<p>Sendo o Gutenberg o maior investimento recente do WordPress, por que alguns recursos ficariam ocultos?</p>\n\n\n\n<p>Por que o criador do tema precisa ter domínio sobre a plataforma, seus recursos e estilos. E não o inverso.</p>\n\n\n\n<p>Algumas funcionalidades funcionam bem somente com a adição de alguns estilos. Sem essa estilização é impossível estruturar e refinar os componentes.</p>\n\n\n\n<p>Portanto, os desenvolvedores de tema tem a opção de habilitar os recursos e estilos, bem como não ativá-los ou remover os indesejados.</p>\n\n\n\n<figure class=\"wp-block-image size-large\"><img loading=\"lazy\" width=\"1024\" height=\"538\" src=\"https://blog.apiki.com/wp-content/uploads/sites/2/2020/07/Como-habilitar-os-recursos-ocultos-do-Gutenberg-no-seu-tema-WordPress-open-graph-1024x538.png\" alt=\"\" class=\"wp-image-12449\" srcset=\"https://blog.apiki.com/wp-content/uploads/sites/2/2020/07/Como-habilitar-os-recursos-ocultos-do-Gutenberg-no-seu-tema-WordPress-open-graph-1024x538.png 1024w, https://blog.apiki.com/wp-content/uploads/sites/2/2020/07/Como-habilitar-os-recursos-ocultos-do-Gutenberg-no-seu-tema-WordPress-open-graph-300x158.png 300w, https://blog.apiki.com/wp-content/uploads/sites/2/2020/07/Como-habilitar-os-recursos-ocultos-do-Gutenberg-no-seu-tema-WordPress-open-graph-768x403.png 768w, https://blog.apiki.com/wp-content/uploads/sites/2/2020/07/Como-habilitar-os-recursos-ocultos-do-Gutenberg-no-seu-tema-WordPress-open-graph-750x394.png 750w, https://blog.apiki.com/wp-content/uploads/sites/2/2020/07/Como-habilitar-os-recursos-ocultos-do-Gutenberg-no-seu-tema-WordPress-open-graph-1140x599.png 1140w, https://blog.apiki.com/wp-content/uploads/sites/2/2020/07/Como-habilitar-os-recursos-ocultos-do-Gutenberg-no-seu-tema-WordPress-open-graph.png 1200w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" /></figure>\n\n\n\n<h2>Os recursos ocultos do Gutenberg</h2>\n\n\n\n<p>As funcionalidades passíveis de serem ativadas, até o presente o momento, estão relacionadas a estilização e alinhamentos.</p>\n\n\n\n<p>As possibilidades são as seguintes.</p>\n\n\n\n<ul><li>responsive-embeds;</li><li>align-wide;</li><li>editor-styles;</li><li>dark-editor-style;</li><li>editor-color-palette;</li><li>disable-custom-colors;</li><li>editor-font-sizes;</li><li>disable-custom-font-sizes;</li><li>wp-block-styles.</li></ul>\n\n\n\n<h2>A função para declarar os recursos ocultos</h2>\n\n\n\n<figure class=\"wp-block-image size-large\"><img loading=\"lazy\" width=\"1000\" height=\"538\" src=\"https://blog.apiki.com/wp-content/uploads/sites/2/2020/07/recursos-ocultos-gutenberg.png\" alt=\"Exemplo de código para habilitar um dos recursos ocultados do Gutenberg\" class=\"wp-image-12447\" srcset=\"https://blog.apiki.com/wp-content/uploads/sites/2/2020/07/recursos-ocultos-gutenberg.png 1000w, https://blog.apiki.com/wp-content/uploads/sites/2/2020/07/recursos-ocultos-gutenberg-300x161.png 300w, https://blog.apiki.com/wp-content/uploads/sites/2/2020/07/recursos-ocultos-gutenberg-768x413.png 768w, https://blog.apiki.com/wp-content/uploads/sites/2/2020/07/recursos-ocultos-gutenberg-750x404.png 750w\" sizes=\"(max-width: 1000px) 100vw, 1000px\" /><figcaption>Exemplo de código para habilitar um dos recursos ocultados do Gutenberg</figcaption></figure>\n\n\n\n<p>A função add_theme_support() é uma velha conhecida dos desenvolvedores de tema.</p>\n\n\n\n<p>Ela está disponível desde a versão 2.9.0 do WordPress. Já os recursos ocultos do <a href=\"https://blog.apiki.com/gutenberg-editor-wordpress/\">Gutenberg chegaram na versão 5.0</a>.</p>\n\n\n\n<p>Essa função recebe dois parâmetros. Sendo o primeiro o recurso a ser habilitado. E o segundo, os argumentos para aprimorar a funcionalidade requerida.</p>\n\n\n\n<p>Essa função deve ser chamada através do arquivo functions.php. Esse arquivo é especial e poderoso em temas WordPress.</p>\n\n\n\n<p>É opcional atrelar a chamada da referida função a um <em>hook</em>. No entanto, se caso o for, considere a action &#8220;<strong>after_setup_theme</strong>&#8220;.</p>\n\n\n\n<p>A composição indicada fica da seguinte forma.</p>\n\n\n\n<pre class=\"wp-block-code\"><code lang=\"php\" class=\"language-php\">function prefix_block_editor_configs()\n{\n\tadd_theme_support( 'nome-do-recurso', 'array-de-config-do-recurso' );\n}\n\nadd_action( 'after_setup_theme', 'prefix_block_editor_configs' );</code></pre>\n\n\n\n<p>Onde temos &#8220;nome-do-recurso&#8221;, você deve informar a string relaciona a funcionalidade. Elas foram listadas logo acima.</p>\n\n\n\n<p>Se você deseja um detalhamento sobre as possibilidades dos parâmetros de cada recurso, considere fazer uma análise do arquivo functions.php do tema padrão do WordPress, o <a href=\"https://br.wordpress.org/themes/twentytwenty/\">Twenty Twenty</a>.</p>\n\n\n\n<p>E vou te dar uma dica para toda a vida ao trabalhar com o WordPress, os temas que vem com a plataforma, são grandes fontes de estudos e inspiração sobre como aplicar o potencial que a plataforma disponibiliza a cada versão.</p>\n\n\n\n<h2>A função para ocultar recursos do editor</h2>\n\n\n\n<p>Em alguns momentos, desejamos um site simples e super focado em alguma coisa.</p>\n\n\n\n<p>Nesses casos, é natural querermos desabilitar alguns recursos. Dado que eles vão mais atrapalhar do que ajudar.</p>\n\n\n\n<p>A mesma função que fazemos uso para habilitar os recursos ocultos do Gutenberg, também a utilizamos para voltá-lo a ser obscuro.</p>\n\n\n\n<p>Um exemplo prático.</p>\n\n\n\n<pre class=\"wp-block-code\"><code class=\"\">add_theme_support( 'disable-custom-colors' );</code></pre>\n\n\n\n<p>No exemplo, estamos tirando a possibilidade do usuário fazer uso do selecionador de cor ilimitada do Gutenberg. E dessa forma, permitiremos somente as que foram disponibilizadas para manter o projeto seguindo um guide visual desejado.</p>\n\n\n\n<h2>Como aplicar estilos no Gutenberg dentro do wp-admin</h2>\n\n\n\n<p>Os editores dos CMS de uma forma geral, fazem uso do conceito <em>WYSIWYG (What You See Is What You Get)</em>, que em tradução livre significa &#8220;O que você vê é o que você obtém&#8221;.</p>\n\n\n\n<p>Isso é muita verdade em vários aspectos, mas em um deles não.</p>\n\n\n\n<p>Sabe quando você está dentro do wp-admin, editando seu conteúdo no Gutenberg, e quando visualiza o conteúdo no site, a estilização não fica condizente ao que você via quando editava o conteúdo?</p>\n\n\n\n<p>Então, é o que estilo de fonte, cor e alinhamentos, por exemplo, estão diferentes no editor.</p>\n\n\n\n<p>É possível definir quais estilos a serem usados, também, no editor. Dessa forma o WYSIWYG ficará ainda mais poderoso.</p>\n\n\n\n<p>E para isso, você deve habilitar essa possibilidade. Assim:</p>\n\n\n\n<pre class=\"wp-block-code\"><code class=\"\">add_theme_support( 'editor-styles' );</code></pre>\n\n\n\n<p>E para carregar o seu arquivo CSS com as declarações, faça assim:</p>\n\n\n\n<pre class=\"wp-block-code\"><code class=\"\">add_editor_style( 'style-editor.css' );</code></pre>\n\n\n\n<p>Esse arquivo de estilos devem estar na pasta do seu tema. Uma última dica, se desejar trabalhar com a opção de fundo escuro, também é possível. Habilite-a desta forma:</p>\n\n\n\n<pre class=\"wp-block-code\"><code class=\"\">add_theme_support( 'dark-editor-style' );</code></pre>\n\n\n\n<h2>Conclusão</h2>\n\n\n\n<p>Recentemente abordei a Anatomia do editor Gutenberg. Acredite, este novo editor é poderoso e estar norteando os novos rumos da plataforma.</p>\n\n\n\n<p>O WordPress sempre tem o cuidado de ser o mais compatível possível com a infinidade de temas e plugins disponíveis.</p>\n\n\n\n<p>Por isso, ocultar recursos como os aqui habilitados se faz necessário.</p>\n\n\n\n<p>E você, já tinha utilizado alguns desses recursos?</p>\n",
    },
    "_embedded": {
      "wp:featuredmedia": [
        {
          "media_details": {
            "width": 1200,
            "height": 630,
            "file": "2020/07/Como-habilitar-os-recursos-ocultos-do-Gutenberg-no-seu-tema-WordPress-open-graph.png",
            "sizes": {
              "medium": {
                "file": "Como-habilitar-os-recursos-ocultos-do-Gutenberg-no-seu-tema-WordPress-open-graph-300x158.png",
                "width": 300,
                "height": 158,
                "mime_type": "image/png",
                "source_url": "https://blog.apiki.com/wp-content/uploads/sites/2/2020/07/Como-habilitar-os-recursos-ocultos-do-Gutenberg-no-seu-tema-WordPress-open-graph-300x158.png"
              },
              "large": {
                "file": "Como-habilitar-os-recursos-ocultos-do-Gutenberg-no-seu-tema-WordPress-open-graph-1024x538.png",
                "width": 1024,
                "height": 538,
                "mime_type": "image/png",
                "source_url": "https://blog.apiki.com/wp-content/uploads/sites/2/2020/07/Como-habilitar-os-recursos-ocultos-do-Gutenberg-no-seu-tema-WordPress-open-graph-1024x538.png"
              },
              "thumbnail": {
                "file": "Como-habilitar-os-recursos-ocultos-do-Gutenberg-no-seu-tema-WordPress-open-graph-150x150.png",
                "width": 150,
                "height": 150,
                "mime_type": "image/png",
                "source_url": "https://blog.apiki.com/wp-content/uploads/sites/2/2020/07/Como-habilitar-os-recursos-ocultos-do-Gutenberg-no-seu-tema-WordPress-open-graph-150x150.png"
              },
              "medium_large": {
                "file": "Como-habilitar-os-recursos-ocultos-do-Gutenberg-no-seu-tema-WordPress-open-graph-768x403.png",
                "width": 768,
                "height": 403,
                "mime_type": "image/png",
                "source_url": "https://blog.apiki.com/wp-content/uploads/sites/2/2020/07/Como-habilitar-os-recursos-ocultos-do-Gutenberg-no-seu-tema-WordPress-open-graph-768x403.png"
              }
            }
          },
          "source_url": "https://blog.apiki.com/wp-content/uploads/sites/2/2020/07/Como-habilitar-os-recursos-ocultos-do-Gutenberg-no-seu-tema-WordPress-open-graph.png",
        }
      ]
    }
  },
  {
    "id": 4,
    "title": { "rendered": "MOCK" },
    "slug": "MOCK",
    "content": {
      "rendered": "Lorem Ipsum"
    },
    "_embedded": { },
  },
  {
    "id": 5,
    "title": { "rendered": "MOCK" },
    "slug": "MOCK",
    "content": {
      "rendered": "Lorem Ipsum"
    },
    "_embedded": { },
  },
  {
    "id": 6,
    "title": { "rendered": "MOCK" },
    "slug": "MOCK",
    "content": {
      "rendered": "Lorem Ipsum"
    },
    "_embedded": { },
  },
  {
    "id": 7,
    "title": { "rendered": "MOCK" },
    "slug": "MOCK",
    "content": {
      "rendered": "Lorem Ipsum"
    },
    "_embedded": { },
  },
  {
    "id": 8,
    "title": { "rendered": "MOCK" },
    "slug": "MOCK",
    "content": {
      "rendered": "Lorem Ipsum"
    },
    "_embedded": { },
  },
  {
    "id": 9,
    "title": { "rendered": "MOCK" },
    "slug": "MOCK",
    "content": {
      "rendered": "Lorem Ipsum"
    },
    "_embedded": { },
  },
  {
    "id": 10,
    "title": { "rendered": "MOCK" },
    "slug": "MOCK",
    "content": {
      "rendered": "Lorem Ipsum"
    },
    "_embedded": { },
  },
];

export default mockedPosts;