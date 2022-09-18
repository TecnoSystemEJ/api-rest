// Importação do express
import express from 'express';
import * as dotenv from 'dotenv';
import ProductRoutes from './src/routes/productRoutes';

dotenv.config({ path: '.env' });
// Instânciando o express e definindo uma constante na qual será a porta do servidor
const app = express();
const port = 3000;
// URLENCONDE false -> responsável por remover o encoder do body
app.use(express.urlencoded({ extended: false }));
// .json() -> responsável por permitir que nossas respostas estejam no formato JSON
app.use(express.json());
// ROTA GET user
app.use('/store', ProductRoutes);
// SERVIDOR ESCUTANDO
app.listen(port, () => {
  console.log(`Listening on  http://localhost:${port}`);
});
