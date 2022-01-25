# Versão em Português
# Front End Challenge - Apiki Blog
# Desenvolvedora: Adriana Barros


## Index.html
### Na index do site utilizei as mais recentes práticas previstas nas especificações do HTML5. Desta forma, tive a intenção de tornar a leitura do cógido semântico mais fácil para os browsers e favorecer a acessibilidade ao site. Utilizei alguns comentários para ajudar a dividir melhor as sessões e tornar a leitura do código mais legível ao profissional de manutenção.

## Style.css
### Optei por utilizar CCS3 puro, porém nas suas classes busquei implementar a metodologia BEMCSS para deixá-lo mais organizado. Também optei por utilizar comentários no arquivo para deixar os seletores mais visíveis e separados por sessões. Fiz uso de variáveis globais para ajudar caso seja necessário ajustar padrões posteriormente.

## app.js
### Tentei criar uma função para, através do uso da tecnologia AJAX, realizar a requisição HTTP e retornar os dados. Optei por passar a URL da API por argumento da função, pois tencionava utilizar a mesma lógica para as outras requisições. No entanto, nas configuraçãos para o retorno dos dados, tive algumas dificuldades em estabelecer a lógica para o retorno e impressão destes. Estabeleci uma condicional onde verifiquei o estado e o status da requisição. Caso estes fossem ambos positivos, o código deveria realizar o parse do objeto JSON e atribuir este resultado a variável 'data'. Com um abjeto JS criado, pretendia realizar um looping no array do objeto. No entanto não obtive sucesso e apenas consegui, através de um console.log(content), ver que a requisição havia sido feita e que o conteúdo de fato retornava para como um objeto.


----------------


# English Version
# Front End Challenge - Apiki Blog
# Developer: Adriana Barros

## Index.html
### In the site index I used the most recent practices foreseen in the HTML5 specifications. Therefore I had the intention of making the code readable in a semantic manner by the browsers and support accessibility. I used some comments to help split the sessions better and make the code more readable by maintenance professionals.

## Style.css
### I chose to use pure CCS3. In its classes I tried to implement the BEMCSS methodology to make it more organized. I also chose to use comments in the file to make the selectors more visible and separated by sessions. I made use of global variables to help in case the need of adjustments later.

## App.js
### I tried to create a function to perform the HTTP request and return the data through the use of AJAX technology. I chose to pass the API URL as function argument, becouse I intended to use the same logic for the other requests. However, in the settings for returning the data, I faced some difficulties in establishing the logic for the return and printing of these data. I established a conditional where I checked the state and the status of the request. If those were both positive, the code should parse the JSON object and assign this result to the 'data' variable. With a JS object created, I intended to loop through the object's array. However, I was not successful. Through a console.log(content), I could only see that the request had been made and that the content was actually returned as an object. 
