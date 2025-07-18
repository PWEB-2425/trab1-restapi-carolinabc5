const mongoose = require('mongoose');

const alunoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  apelido: { type: String, required: true },
  curso: { type: String, required: true },
  anoCurricular: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Aluno', alunoSchema);
