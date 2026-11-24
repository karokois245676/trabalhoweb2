const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/paginas/inicio.html');
});

app.get('/sobre', (req, res) => {
  res.sendFile(__dirname + '/paginas/sobre.html');
});

app.get('/contato', (req, res) => {
  res.sendFile(__dirname + '/paginas/contato.html');
});

app.get('/quiz', (req, res) => {
  if (req.query.resposta === 'games') {
    res.redirect('/dev-games');
  } else {
    res.redirect('/dev-web');
  }
});

app.get('/dev-games', (req, res) => {
  res.sendFile(__dirname + '/paginas/dev-games.html');
});

app.get('/dev-web', (req, res) => {
  res.sendFile(__dirname + '/paginas/dev-web.html');
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
