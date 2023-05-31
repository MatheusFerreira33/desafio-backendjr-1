Olá, ao fazer um clone do repositorio abra o terminal dentro da pasta server e nele da o seguinte comando:

npm install
isso vai instalar todas as bibliotecas do nodeJs

e depois execute: 

npm run dev
Se no seu terminal aparecer: "Server is running port:3000" significa que o projeto ja esta funcionando.

Esse comando vai iniciar o servidor, e importante fazer isso antes de fazer os upload dos arquivos




O endpoint para fazer a visualização de todos os registros: 
http://localhost:3000/user

Voçe pode usar no proprio navegador ou usar o programa do Insomnia (recomendo)

ATENÇÃO:
Ao iniciar o servidor vai ser criado um banco de dados SQLite na memoria da sua maquina, e voce poderá
fazer upload dos arquivos excel .csv para o servidor que vai amarzenar no banco Sqlite e tambem vai poder
fazer a vizualização dos registros.

Assim que voce encerrar o servidor o banco de dados vai ser apagado junto com os registros.


qualquer duvida pode me chamar no meu linkedin: https://www.linkedin.com/in/matheusferreira33/