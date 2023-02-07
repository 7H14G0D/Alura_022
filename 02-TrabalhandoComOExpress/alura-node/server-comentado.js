// Aqui importo o app.js
import app from './src/app-comentado.js'
// Aqui eu digo em que porta o servidor vai escutar
//          |     Process     |ou|3000|
const port = process.env.PORT || 3000;

/* Aqui finalizo informando a porta que ele vai escutar e fazer o link da 
resposta. também posso mandar uma mensagem com console.log, dizendo que funcionou
e está operando na porta que eu defini na variável (port). */
app.listen(port, () => {
  console.log(`Servidor escutando na porta 3000 http://localhost:${port}`)
})