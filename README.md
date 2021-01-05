# Bem-vindo ao repositório do desafio PRIS 

##  Aplicação Cliente e servidor (REST)

### Esse projeto consiste em uma API construída em dotnet core
### e consumida pelo cliente React

# Follow the instructions 💪🏽

## Step 1

Clone o projeto 
`git clone ` https://github.com/wigorbh/Technical-challenge/edit/APILeases/
depois caminhe até sua pasta `cd pasta-onde-clonou`

## Step 2
Entre na Pasta APILeases: Nela fica a API de locações
`cd APILeases`

## Step 3

Nesse passo vamos popular o nosso `SQL SERVER` através de `Migrations`

Caminhe ate o arquivo `settings.json` nele você encontrará a nossa string de conexão,
`ConnectionString` Configure de acordo com seu banco de dados local.

Para isso o rode o comando `dotnet ef migrations popularBank`
Em seguida atualize com seu database `dotnet ef update`

Você precisara do `NODE` na sua máquina para rodar o projeto

Caminhe até a pasta `front-end` `cd front-end`
instale as depêndencias `npm install`
