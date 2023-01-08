# Lista-de-Lembretes
Solução fullstack para criar e excluir lembretes

# REQUISITOS
É necessário possuir o SDK do .NET 6 instalado, assim como o Node.js e npm da versão LTS.

# MODO DE USO
Clonar os reposítórios correspondentes ao <a href=https://github.com/Uiseman/Lista-de-Lembretes>Backend</a> e ao <a href=https://github.com/Uiseman/Frontend-Lista-de-Lembretes>Frontend</a> da aplicação.


Dentro da pasta ListaDeLembretesAPI executar o comando dotnet run.

Na primeira execução do frontend, é necessário executar o comando npm install no diretório do projeto. Após a instalação dos pacotes, a aplicação será executada via npm start.

# SOBRE A APLICAÇÃO

O frontend tem a capacidade de criar, listar e excluir  os lembretes. Essas funcionalidades são disponibilizadas por meio da API REST ListaDeLembretesAPI. Os endpoints disponibilizados podem ser vizualizados por meio do Swagger. Para isso, no diretório da api deve-se executar o comando dotnet watch run.


# ARMAZENAMENTO

A aplicação utiliza um banco de dados persistido na memória. Ou seja, ele é apagado toda vez que a API é reiniciada.


