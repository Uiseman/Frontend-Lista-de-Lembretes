## Lista-de-Lembretes

Solução fullstack para criar e excluir lembretes.

## REQUISITOS

É necessário possuir o SDK do .NET 6 instalado, assim como o Node.js e npm da versão LTS.

## MODO DE USO

Clonar os reposítórios correspondentes ao <a href=https://github.com/Uiseman/Lista-de-Lembretes>Backend</a> e ao <a href=https://github.com/Uiseman/Frontend-Lista-de-Lembretes>Frontend</a> da aplicação.

### Execução do Backend

Dentro da pasta ListaDeLembretesAPI executar o comando **dotnet run**. Caso desejar que o Swagger seja inicializado, executar o comando **dotnet watch run**

### Execução do Frontend

Na primeira execução do frontend, é necessário executar o comando **npm install** no diretório do projeto(Frontend-Lista-de-Lembretes), para que os pacotes necessários para o funcionamento da aplicação sejam instalados. 

Após a isso, a aplicação será executada via **npm start**.

## SOBRE A APLICAÇÃO

O frontend tem a capacidade de criar, listar e excluir os lembretes. Essas funcionalidades são disponibilizadas por meio da API REST ListaDeLembretesAPI. Os endpoints disponibilizados, assim como o parâmetros de envio e retorno, podem ser vizualizados por meio do Swagger.

## ARMAZENAMENTO

A aplicação utiliza um banco de dados persistido na memória. Ou seja, ele é apagado toda vez que a API é reiniciada.


