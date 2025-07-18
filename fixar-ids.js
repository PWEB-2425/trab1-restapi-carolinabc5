const fs = require('fs');
const path = './mock-server/bd.json';

// Lê o ficheiro atual
const bd = JSON.parse(fs.readFileSync(path, 'utf8'));

// Atualiza os IDs dos alunos com números sequenciais
if (Array.isArray(bd.alunos)) {
  bd.alunos.forEach((aluno, index) => {
    aluno.id = index + 1; // começa no 1
  });

  // Guarda o ficheiro novamente
  fs.writeFileSync(path, JSON.stringify(bd, null, 2), 'utf8');
  console.log('IDs atualizados com sucesso!');
} else {
  console.log('Lista de alunos não encontrada.');
}
