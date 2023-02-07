// Aqui eu digo que quero utilizar o modulo nativo do HTTP
const http = require("http")
// Aqui eu digo em que porta o servidor vai escutar
const port = 3000;
// Aqui vou criar um objeto chamado (rotas)
const rotas = {
// aqui eu defino as rotas e a mensagem de resposta para cada rota
'/': 'Curso de NodeJS',
'/livros': 'Entrei na pagina de livros',
'/autores': 'Listagem de autores',
'/editora': 'Pag da editora',
'/sobre': 'Info sobre o projeto'
}
/* 
Aqui eu crio o servidor e defino como ele vai escutar e acontecer a comunicação.
1- Uso o modulo http e seu metodo createServer para que ele possa criar o servidor.
2- Agora passo os parâmetros de (req)requisição e (res)resposta. 
3- Depois temos uma função de callback que chamamos com (=>)arrow function, 
pra executar o que eu quero fazer quando acontecer esta requisição.
||||||||||||| .        1        |    2    | 3   |                        */
const server = http.createServer((req, res) => {
  /* aqui eu vou definir o que eu quero devolver quando alguém fizer uma requisição.
  1 - vou dizer que a minha resposta vai ter um cabeçalho chamado de (writeHead)  
  2 - que vai devolver um status (200) que é um status de ok, 
  3 - e um tipo de conteúdo que escolhi(texto) 
  |     1      |  2  |              3              | */
  res.writeHead(200, {'Content-type': 'text/plain'});
  /* aqui eu finalizo minha resposta definindo rotas, para assim devolver a referida
  mensagem de cada rota */
  res.end(rotas[req.url]);
})


/* Aqui finalizo informando a porta que ele vai escutar e fazer o link da 
resposta. também posso mandar uma mensagem com console.log, dizendo que funcionou
e está operando na porta que eu defini na variável (port). */

server.listen(port, () => {
  console.log(`Servidor escutando na porta 3000 http://localhost:${port}`)
})