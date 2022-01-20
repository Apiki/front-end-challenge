Projeto feito por Luiz Gustavo de oliveira garcia para o desafio técnico da Apiki.

Escolhi utilizar o next.js, pois considero que para o cenário de blog, é ideal utilizar SSR, utilzei na página de listagem técnicas para que em tempo de deploy fossem feitas o cache dos posts, onde o próprio servidor fica responsável por renovar esse cache, e nas páginas internas utilizei o cache progressivo, ou seja, a cada post que é aberto, essa página vai para o cache, carregando assim mais rápido para o usuário e para os próximos, utilizei styled-components, com um design minimalista, porém 100% responsivo, do celular, tablet, monitor e grandes telas, utilizei typescript e algumas libs como html-react-parser e date-fns, criei componentes para serem reaproveitados nas duas páginas.

Para rodar o projeto rodar os comandos "yarn" e "yarn dev"
