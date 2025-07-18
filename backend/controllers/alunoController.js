const Aluno = require('../models/alunoModel');

// Listar todos alunos
exports.getAlunos = async (req, res) => {
  try {
    const alunos = await Aluno.find();
    res.json(alunos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obter aluno por id
exports.getAlunoById = async (req, res) => {
  try {
    const aluno = await Aluno.findById(req.params.id);
    if (!aluno) return res.status(404).json({ message: 'Aluno não encontrado' });
    res.json(aluno);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Criar novo aluno
exports.createAluno = async (req, res) => {
  const { nome, apelido, curso, anoCurricular } = req.body;
  const aluno = new Aluno({ nome, apelido, curso, anoCurricular });
  try {
    const novoAluno = await aluno.save();
    res.status(201).json(novoAluno);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Atualizar aluno
exports.updateAluno = async (req, res) => {
  try {
    const aluno = await Aluno.findById(req.params.id);
    if (!aluno) return res.status(404).json({ message: 'Aluno não encontrado' });

    aluno.nome = req.body.nome || aluno.nome;
    aluno.apelido = req.body.apelido || aluno.apelido;
    aluno.curso = req.body.curso || aluno.curso;
    aluno.anoCurricular = req.body.anoCurricular || aluno.anoCurricular;

    const alunoAtualizado = await aluno.save();
    res.json(alunoAtualizado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Apagar aluno
const mongoose = require('mongoose');

exports.deleteAluno = async (req, res) => {
  const id = req.params.id;
  console.log('Pedido DELETE recebido para id:', id);

  // Verificar se o ID é válido
  if (!mongoose.Types.ObjectId.isValid(id)) {
    console.log('ID inválido:', id);
    return res.status(400).json({ message: 'ID inválido' });
  }

  try {
    const aluno = await Aluno.findById(id);
    if (!aluno) {
      return res.status(404).json({ message: 'Aluno não encontrado' });
    }

    await Aluno.findByIdAndDelete(id);
    res.json({ message: 'Aluno removido com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro interno no servidor' });
  }
};
