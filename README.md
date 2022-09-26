### LINK: https://blog-tech-apiki.vercel.app

## TECNOLOGIAS UTILIZADAS
<img src='https://img.shields.io/badge/Typescript-FFF?style=for-the-badge&logo=typescript&logoColor=1279eb'/><img src='https://img.shields.io/badge/React-000000?style=for-the-badge&logo=react&logoColor=61DAFB' /><img src='https://img.shields.io/badge/NextJS-20232A?style=for-the-badge&logo=next&logoColor=61DAFB' /><img src='https://img.shields.io/badge/Axios-FFF?style=for-the-badge&logo=axios&logoColor=000' /><img src='https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white' /><img src='https://img.shields.io/badge/chakra_ui-2abfb3?style=for-the-badge&logo=chakra-ui&logoColor=white' /><img src='https://img.shields.io/badge/phosphor_react-f2c66b?style=for-the-badge&logo=phosphor&logoColor=white' />

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


### 🧑🏾‍💻 Autor
#### Rommel Santhiago

[<img src='https://img.shields.io/badge/LinkedIn-1279eb?style=for-the-badge&logo=linkedin&logoColor=white' />](https://www.linkedin.com/in/rommelsanthiago)&nbsp;&nbsp;[<img src='https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white' />](mailto:rommel.santhiago@gmail.com)