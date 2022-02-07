# Apiki - Desafio Front-end

Desafio concluído em aproximadamento 4 dias.
Iniciado em 04/02/2022 e finalizado em 07/02/2022.

Projeto feito para o processo seletivo da Apiki, onde foi proposto a criação de um blog, utilizando a base de dados que foi fornecida.

## Tecnologias utilizadas

No desenvolvimento do projeto foi utilizado React, juntamente com a lib react-router-dom, para a criação das rotas da página. Para o CSS a metodologia para a organização utilizada foi a BEMCSS.

### Página inicial

- São listadas as postagens mais recentes da categoria **Desenvolvimento** fornecidas pela API que foi fornecida.
  -Apresenta um botão de próxima página, que ao ser clicado faz uma nova requisição a API buscando os novos dados.
  -Além de Título e Imagem destacada, dados extras da API foram utilizados para a construção dos cards, são eles data, autor, avatar do autor e subtítulo do post.
  -Clicando no titulo das postagens, o usuário é redirecionado a página interna com o conteúdo completo.
  -Página totalmente responsiva.

### Página interna

-Para a construção da página interna, além de Título, imagem destacada e conteúdo também foram utilizados subtítulo, nome, avatar e link do autor e data da publicação.
-Página totalmente responsiva.
