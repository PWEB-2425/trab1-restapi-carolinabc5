// API real a ser implementada
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const alunoRoutes = require('./routes/alunoRoutes');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB conectado!'))
.catch(err => console.error('Erro ao conectar MongoDB:', err));

app.use('/alunos', alunoRoutes);

app.get('/', (req, res) => {
  res.send('API RESTful Alunos funcionando');
});

app.listen(PORT, () => {
  console.log(`Servidor a correr na porta ${PORT}`);
});
