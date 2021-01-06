# Bem-vindo ao repositório do desafio PRIS 

##  Aplicação Cliente e Servidor

### Esse projeto consiste em uma API construída em dotnet core
### e consumida pelo cliente React

# Follow the instructions 💪🏽

## Step 1

Clone o projeto 
`git clone`  https://github.com/wigorbh/Technical-challenge/tree/APILeases                                    
depois caminhe até sua pasta `cd pasta-onde-clonou`

Entre na Pasta APILeases: Nela fica a API de locações`cd APILeases`

## Step 2

Você precisará do `DOTNET` em sua máquina!

Nesse passo vamos popular o nosso `SQL SERVER` através de `Migrations`

Caminhe ate o arquivo `appsettings.json` nele você encontrará a nossa string de conexão,

`ConnectionStrings` Configure de acordo com seu banco de dados local.       

`PropertyConnection` "Server=NomeDoServer; Initial Catalog=PropertiesDB; User ID=Usuario; Password=Senha"   

 no campo `Initial Catalog` mantenha o valor já configurado.
 
 realize o mesmo procedimento no arquivo `PropertyContext.cs` na pasta `Data` dentro do `UseSqlServer(here)`


## Step 3

Com tudo configurado, vamos executar os comandos para popular o banco:

Para isso o rode o comando `dotnet ef migrations add popularBank`

Em seguida atualize com seu database `dotnet ef database update`

Depois é só rodar `dotnet run` e a API estará apta a receber solicitações.

## Step 4

Agora vamos abir a nossa aplicação `FRONT-END`

Você precisará do `NODE` na sua máquina para rodar o projeto.

Abra uma nova aba do terminal na raiz do projeto caminhe para pasta `front-end` `cd front-end`

Instale as depêndencias `npm install` tudo feito já pode executar o comando mestre 🧙

#### `NPM START`

Feito isso é só navegar!


## Next Steps

Como próximos passos será feito autenticação de rotas utilizando as libs `Jwt and Bearer`                      

Pois a API provém de metódos que só usuários com super poderes podem acessar  `UPDATE E DELETE`,

Visando a segurança da aplicação. 🙂

Trabalhar na `esperiência do usuário` aplicando as validações para cadastrar no front end

Ao acessar a tela de atualização trazer os dados já cadastrados para atualizar

Também introduzir os `teste unitários` "Um software sem testes não é um bom software".

É principalmente resolver os `BUGS` 😱.

## Bugs

Sabemos que na construção de softwares os bugs se apresentam sem serem chamados 😥

Nessa aplicação contamos com `UM`

Quando deletamos uma propriedade, somos redirecionados para página home 

Porém a propriedade deletada ainda persistia, com isso o useEffect passou a atender a necessidade de um 

Hook de atualização, sua ideia inicial era somente de montagem. O que atendeu bem

Porém causou danos a performance visto mensagens de warning no console. 

Por hora a funcionalidade está mantida, mas tendo ciência do bug e planejando resolvê-lo.


## Fim

### Sotware desenvolvido por <a href="https://www.linkedin.com/in/williamigor/">William Igor </a>





