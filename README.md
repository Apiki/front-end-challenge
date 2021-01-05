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

Você precisara do `NODE` na sua máquina para rodar o projeto.

Abra uma nova aba do terminal na raiz do projeto caminhe para pasta `front-end` cd `front-end`

instale as depêndencias `npm install` tudo feito já pode executar o comando mestre 🧙

### `NPM START`














