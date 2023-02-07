// Aqui vou importar o (express)
import express from "express";

// Aqui vou criar uma instância do express
//app recebe uma instância do express
const app = express();
//Aqui uso o metodo expres.json para interpretar e receber post e put e poder armazenar
app.use(express.json())
// Aqui crio uma const (livros) com um array de 2 livros 
const livros = [
  {id: 1, "titulo": "Senhor dos Aneis"},
  {id: 2, "titulo": "O Hobiit"}
]
// Aqui vou configurar o nosso GET 
//Quando vou no browser e digito um endereço, ele tá fazendo uma requisição GET
// Vou definir o que eu quero que aconteça quando for feita uma requisição
//  | padrão 3000|
app.get('/', (req, res) => {
  res.status(200).send('Curso de NodeJS');
})

// Aqui é uma busca pelo indice, que devolve somente o que está na posição que localizou
// o usuário vai passar no caminho da req o id, ele vai localizar a posição do array
//e vai devolver um .json com aquele array específico
app.get('/livros/:id', (req, res) => {
  let index = buscaLivro(req.params.id);
  res.json(livros[index]);
})

//     | /livros |
app.get('/livros', (req, res) => {
  res.status(200).json(livros)
})
// Aqui vou configurar o nosso POST
//Quero poder cadastrar um novo livro pelo navegador e receber uma mensagem 
//informando que deu certo, no metodo post eu informo a rota (/livros) 
app.post('/livros', (req, res) => {
  // com o metodo (push) incluimos o que está vindo no corpo da requisição (req.body) 
  //um novo item dentro do array (livros)
  livros.push(req.body);
  //depois devolvemos uma resposta para confirmar que está tudo certo.
  res.status(201).send('Livro foi cadastrado com sucesso!')
})

//Aqui adiciono nosso metodo de atualização (PUT)
// vou indicar que vai chegar um parâmentro que é o (id)
app.put('/livros/:id', (req, res) => {
  // vamos usar a função buscarLivro, criar uma variavel com o indice
  //para trocar o titulo antigo pelo novo
  let index = buscaLivro(req.params.id);
  //se achou certinho vai no index e substitui o titulo pelo que chegou pelo corpo da req
  livros[index].titulo = req.body.titulo;
  //agora devolvemos o array para que seja visivel o que foi alterado
  res.json(livros);
})

app.delete('/livros/:id', (req, res) => {
  let {id} = req.params;
  let index = buscaLivro(id);
  livro.splice(index, 1);
  res.send(`Livro' ${id} removido com sucesso`);
})

//aqui vou fazer uma função para localizar o item e devolver as alterações feitas
function buscaLivro(id) {
  //aqui quero que retorne a posição do id que passei dentro do array
  //e usar um metodo para manipular array que é o findIndex com a função de comparação
  //vou passar livro => para saber se o id do livro é igual ao id que passei
  return livros.findIndex(livro => livro.id == id)
}

// Aqui exporto este arquivo para poder ser usado no server.js
export default app