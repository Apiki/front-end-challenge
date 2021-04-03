Este é um desafio técnico de Front-End para o processo seletivo da **Apiki**, uma empresa especializada em **WordPress** que tem o objetivo de ser referência mundial na tecnologia.

A meta é utilizar **React** para criar uma nova solução headless que consome de um *endpoint* e dinamicamente gera páginas para que o usuário final consiga acessar e ler cada um dos artigos recebidos.

---

## Tecnologias e bibliotecas adotadas:
- React
- JavaScript
- CSS3
- HTML5
- Moment.js

---

## Organização do código

O código é dividido em **2 páginas** e **7 componentes**.

### Páginas:
- **Home:** A página inicial que vai renderizar através dos componentes os seguintes itens: uma barra superior com o logo, uma lista inicial com vários cards contendo publicações, um botão para buscar mais publicações, um rodapé e uma barra lateral.
- **Article:** Ao clicar no botão **"Ler este artigo"** em um card de publicação da página inicial, o usuário é direcionado para a tela `Article`, onde poderá ler o conteúdo da publicação escolhida. É renderizado o título, uma imagem, a data de publicação, o texto principal e um componente com informações do autor.

### Componentes:
- **Header:** Um cabeçalho simples com uma imagem que redireciona para a página inicial quando clicada.
- **Footer:** O rodapé possui três seções. A primeira abrange informações básicas sobre o site; a segunda contém uma lista de links úteis com um pequeno efeito de transição; a terceira é destacada na parte mais inferior da página, com uma linha em cor diferente indicando os créditos do desenvolvedor.
- **CardList:** Este componente é responsável por gerar a lista de cards de acordo com os dados recebidos da API. Inicialmente busca 10 cards e armazena no estado as informações dele, assim como o número total de páginas que chega no *header* da requisição. Existe um botão **"Carregar mais"** no final do componente que faz mais uma requisição ao endpoint paginado e adiciona novos cards ao *array*, também renderizando-os em tela. Quando não houver mais páginas para renderizar, o botão desaparece.
- **Card:** Cada card possui uma imagem, um título, nome do autor, data da publicação e um pequeno resumo, assim como um botão **"Ler este artigo"** que redirecionará o usuário para a página do artigo correspondente.
- **Author:** Um componente ao final do artigo com alguns dados sobre o autor: foto, nome e um pequeno resumo biográfico.
- **Sidebar:** A barra lateral fica à direita e contém 3 seções: um *widget* para o Facebook e mais duas áreas *placeholders*, que eventualmente podem ser utilizadas. Como sugestão, podem prover ao usuário uma lista de publicações mais populares e uma compilação de assuntos para fácil navegação por *tags*.
- **Loading:** A tela de *loading* é exibida na tela enquanto a aplicação faz alguma requisição para a API.

---

### Responsividade
O site é melhor visualizado em resoluções acima de 1024px de largura. Foram inseridos alguns *breakpoints* para dispositivos com resoluções menores:
- **Abaixo de 1024px:** A `Sidebar` é posicionada abaixo dos cards, que passam a ocupar toda a largura da tela.
- **Abaixo de 934px:** O `Footer` quebra suas duas seções principais para a vertical.
- **Abaixo de 770px:** Os `Cards` assumem um novo formato na vertical, sendo que a imagem, a info e o botão ficam um acima do outro. Aqui já é adotado o formato *mobile*.

---

### Moment.js
Esta biblioteca foi utilizada no componente `Card` e na página `Article` para exibir as datas em formato amigável.

O resultado final pode ser conferido na seguinte URL:
https://apiki-challenge.vercel.app/

Os detalhes podem ser encontrados no **README** original do desafio, a seguir.

---

# Desafio - Front-end Developer
Este desafio tem como objetivo te avaliar como desenvolvedor Front-end: JavaScript, HTML, CSS e lógica de programação.

## O Desafio
Queremos montar uma versão do blog da Apiki apenas para Devs, e queremos que essa seja uma solução headless, esta nova versão terá as seguintes páginas: 

- Página inicial: Listará as últimas postagens do blog com a categoria **Desenvolvimento**; 
- Interna: Exibirá o conteúdo da postagem;


## Requesitos
- Utilizar os dados da API do nosso blog: https://blog.apiki.com/wp-json/wp/v2/;

## Diferencial
- Utilizar alguma metodologia para a organização de seu CSS (BEMCSS, OOCSS, SMACSS... o que preferir :D);
- Escolha uma lib para criação de interfaces de usuário (React ou Angular); 

### Página inicial
Para montar esta página você precisará consumir do seguinte endpoint: `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518`, ele já te retornará as últimas 10 postagens cadastradas, cada item do array deve representar uma card contendo:

- Imagem destacada: Você encontrará um atributo chamado `_embedded`, dentro deste atributo você encontrará o `wp:featuredmedia`;
- Título;
- Link para a postagem: O link deverá conter o atributo `slug`;

Ao final da listagem deve haver um botão nomeado **Carregar mais...**, Quando o usuário clicar neste botão você deverá fazer uma nova requisição para o mesmo endpoint informando o parâmetro `page`, este parâmetro deve receber o número da próxima página, exemplo: `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=2`. Você deve estar se perguntando, "como sei se haverá uma próxima página?", isso é simples, no **Header** de resposta desta requisição virá 2 atributos necessários para essa façanha `X-WP-Total` que diz a quantidade total de postagens que essa categoria possui, e o parâmetro `X-WP-TotalPages` que te informará qual o total de páginas de postagens que essa categoria possui.

### Interna
Para montar esta página você precisará consumir do seguinte endpoint: `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=wordpress-escolha-site-pequenas-empresas`, lembre-se de substituir o `slug` dado como exemplo pelo slug definido no **Link para a postagem** da **Página inicial**, o layout deve conter os seguintes elementos:

- Imagem destacada;
- Título;
- Conteúdo;

Seja criativo, construa um layout pensando no usuário final, e sinta-se a vontade para incrementar o layout com outros atributos disponíveis no JSON retornado. 

## Critérios de avaliação

- Organização do código;
- Responsividade;
- Reaproveitamento de código;
- SEO;

## Como submeter seu projeto

1. Efetue o fork deste repositório e crie um branch com o seu nome e sobrenome. (exemplo: fulano-dasilva);
1. Após finalizar o desafio, crie um Pull Request;
1. Aguarde algum contribuidor realizar o code review;
