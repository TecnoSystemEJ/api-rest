// Importação do express
import express from 'express';
// Instânciando o express e definindo uma constante na qual será a porta do servidor
const app = express();
const port = 3000;
// URLENCONDE false -> responsável por remover o encoder do body
app.use(express.urlencoded({ extended: false }));
// .json() -> responsável por permitir que nossas respostas estejam no formato JSON
app.use(express.json());
// ROTA GET user
app.get('/user', (req, res) => {
  res.status(404);
  res.json({
    id: 1,
    nome: 'Fulano',
  });
});
// SERVIDOR ESCUTANDO
app.listen(port, () => {
  console.log(`Listening on  http://localhost:${port}`);
});
