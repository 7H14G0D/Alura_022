# 01 ########################################################################
............................. projeto start .................................
No terminal do mac:
mkdir alura-node
cd alura-node
npm init -y
## 02 #######################################################################
........................... config server start ..............................
após configurar o arquivo server.js, acessamos a pasta alura-node 
pelo terminal do vscode e executamos o comando:
node server.js

recebemos a mensagem:
Servidor escutando na porta 3000 http://localhost:3000

ao acessar o link http://localhost:3000 no navegador,
recebemos a mensagem: Curso de NodeJS
........................... config server end ................................
### 03 ######################################################################
............................... nodemon start................................
instalando a biblioteca (NodeMon), para que após cada atualização na edição
ele faça o reload atualizando o conteúdo
paramos o servidor com ctrl+c no terminal do vscode e instalamos com 
a mesma versão do curso, acrescentamos -D para definir uma dependência de
Desenvolvimento (que não precisa ir para a produção)
dentro da pasta alura-node, pelo terminal do vscode:

npm install nodemon@2.0.15 -D

precisamos editar o arquivo: (package.json), para adicionar o (nodemon)
Dentro do arquivo (package.json), abaixo de Scripts, adicionei a linha[]:
[    "dev": "nodemon server.js",     ]

feito isso, agora abrimos o servidor com:
npm run dev

o nodemon vai observar as atualizações das extensoes: | .js | .mjs | .json |
e após cada atualização observada ele irá reiniciar o servidor
............................... nodemon end..................................
#### 04 #####################################################################
..................... criar o arquivo (.gitigore) start .....................
Criando o arquivo .gitignore
para que toda vez que for subir o projeto para o git ele não envie arquivos
que só precisam existir na pasta original do servidor
como a pasta node_modules, por exemplo.
node_modules = para a pasta do node
DS_Store = para qem usa macos
..................... criar o arquivo (.gitigore) end .....................
##### 05 ###################################################################
.............. as 22:50h do dia 29 de novembro a alura caiu ...............
A página da alura caiu, logo agora que fiquei tão empolgado com o conteúdo,
rsrsrsrs. fiz todos os outros módulos apenas para obter os certificados.
Agora dou inicio ao verdadeiro aprendizado dos conhecimentos que ainda não 
possuo. mas tudo bem, descansar porque é tudo no tempo de Deus!.
.............. as 23:05h do dia 29 de novembro a alura voltou..............
###### 06 ##################################################################