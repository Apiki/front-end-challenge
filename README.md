<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
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
>>>>>>> 274282acaa3b7a957c601b4f8f76dcfac27cc559
