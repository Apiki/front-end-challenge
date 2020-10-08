# Desafio - Front-end Developer
 Esse projeto foi proposto pela empresa APIKI para avaliar o conhecimento e desempenho para uma vaga de Front-End.

## Descrição do Projeto

Montar uma versão do blog da Apiki utilizando uma solução headless, tendo as seguintes páginas:

1. Página inicial: Listará as últimas postagens do blog com a categoria Desenvolvimento;
2. Interna: Exibirá o conteúdo da postagem

### Tecnologias utilizadas

Para o desenvolvimento desse desafio foram utilizados: React com ContextAPI, JavaScript e CSS puro.

### Dificuldades

As requisições da API foram de certa forma tranquilas de serem realizadas após dedicar ao estudo do oferenciam. Porém, (1) não consegui acessar o Header da requisição para utilizar o X-WP-Total e o X-WP-TotalPages. Foi possível visualizar seus valores através de uma das ferramentas do Chrome (Network), mas a extração desses valores através do código utilizando 'fetch' foi frustrada.

Outra dificuldade foi na construção do CSS para o conteúdo vindo da API (content), uma vez que não foi assumido a (2) padronização e constância dos nomes das classes, e imagens e tabelas dentro de tags ***p***.


### Soluções

As soluções utilizadas para contornar essas dificuldades foram:

1. Para o problema de acesso ao Header para conseguir saber o número de páginas totais, bem como o número total de postagens, foi implementado uma segunda chamada da API com o endereço da consulta subsequente. As desvantagens dessa implementação são utilização de dados sem a necessidade deles no momento, os botões de 'Carregar mais...' e 'Anterior' tiveram que ter seu fluxo de cliques controlados para evitar requisições sem resposta à API. Essa penalização pode ser removida com acesso ao dado _X-WP-TotalPages_.

2. Desenvolvida a função ***extractingImg*** que remove as imagens e tabelas de dentro das tags *p* e as insere nas posições de corretas no texto.

### Melhorias Futuras

Implementar operações para acessar os dados do header e utiliza-los para aumentar a velocidade e eficiência da página do blog; verificar e catalogar as classes utilizadas, e caso seja padronizadas e constantes utiliza-las para re-elaboração do CSS.

## Observação a parte do projeto

O link no rodapá do [blog](https://blog.apiki.com/desenvolvimento/) (***© 2020 Apiki***) está errado (https://apiki.com.com/)
