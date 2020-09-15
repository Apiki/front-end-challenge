# Aplicação desenvolvida como parte do "Desafio - Front-end Developer" do processo da Apiki

## O Desafio

Criar uma versão para Devs do blog da Apiki, construindo uma solução headless.abs

Essa versão deve conter:

- Página inicial (página Home do projeto): Listará as últimas postagens do blog com a categoria **Desenvolvimento**;
- Interna (página de Post do projeto): Exibirá conteúdo da postagem.

Esse desafio deveria ser desenvolvido utilizando dados da api do blog da [Apiki](https://blog.apiki.com/wp-json/wp/v2/)

### Minha solução

Para atender os critérios do desafio, desenvolvi a aplicação solicitada utilizando as seguintes ferramentas:

- Biblioteca javascript REACT, em conjunto com as bibliotecas react-router e prop-types para controle de roteamento da aplicação e tipagem dos dados que alimentam os componentes da aplicação;
- Framework CSS [Bulma](https://bulma.io/), via CDN, para acelerar o desenvolvimento da aplicação, com foco na responsividade das páginas da aplicação;
- Mesmo com uso do Bulma, foram utilizadas folhas de estilo personalizadas em componentes da aplicação, de forma a preencher as especificidades do projeto que o Bulma não atende. A nomeclatura de classes CSS personalizadas procurou atender os parâmetros da metodologia _BEMCSS_, porém a organização foi inspirada pela metodologia SMACSS, pensando o CSS do base ao topo;
- As regras de base do CSS estão no arquivo index.css. As regras especificas de cada componente da UI localiza-se no diretório que contém o _source code_ do componente;
- A aplicação foi criada utilizando javascript puro e JSX;
- Os containers que formam as páginas obrigatórias da aplicação estão contidos no diretório _pages_, os componentes que formam a _UI_ da aplicação estão contidos na pasta _components_;
- Por se tratar de uma aplicação pequena, o gerenciamento de estado foi feito via um _custom Hook_ do React, este Hook é responsável por fazer o fetch dos dados da api base do desafio e fornecer aos componentes as _props_ necessárias para renderizar a _UI_. O uso de um hook permite evitar duplicação de código e melhor controle dos updates dos componentes _React_;
- A aplicação foi construída de acordo com o guia de estilo do [Airbnb](https://airbnb.io/projects/javascript/) para javascript, React e CSS. Para automatizar a avaliação da aderência do código as regras do manual, foram utilizados os pacotes e plugins dos _linters_ **ESLint** e **StyleLint**, bem como o formatador de código **Prettier**;
- As partes mais complexas de código e algumas medidas relativas de CSS foram comentadas para facilitar a compreensão e explicar as escolhas técnicas que levaram ao código produzido.
