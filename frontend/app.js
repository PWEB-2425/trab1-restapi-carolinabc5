const apiUrl = 'http://localhost:3000/alunos';

const tabelaBody = document.querySelector('#tabela-alunos tbody');
const form = document.getElementById('form-aluno');
const tituloForm = document.getElementById('form-titulo');
const btnCancelar = document.getElementById('btn-cancelar');

const inputId = document.getElementById('aluno-id');
const inputNome = document.getElementById('nome');
const inputApelido = document.getElementById('apelido');
const inputCurso = document.getElementById('curso');
const inputAnoCurricular = document.getElementById('anoCurricular');

// Carregar alunos e mostrar na tabela
async function carregarAlunos() {
  tabelaBody.innerHTML = '';
  try {
    const res = await fetch(apiUrl);
    const alunos = await res.json();
    alunos.forEach(aluno => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${aluno.id}</td>
        <td>${aluno.nome}</td>
        <td>${aluno.apelido}</td>
        <td>${aluno.curso}</td>
        <td>${aluno.anoCurricular}</td>
        <td>
          <button class="edit" onclick="editarAluno(${aluno.id})">Editar</button>
          <button class="delete" onclick="apagarAluno(${aluno.id})">Apagar</button>

        </td>
      `;
      tabelaBody.appendChild(tr);
    });
  } catch (error) {
    alert('Erro ao carregar alunos: ' + error);
  }
}

// Adicionar ou atualizar aluno
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const alunoData = {
    nome: inputNome.value,
    apelido: inputApelido.value,
    curso: inputCurso.value,
    anoCurricular: parseInt(inputAnoCurricular.value, 10)
  };

  try {
    if (inputId.value) {
      // Atualizar
      const id = inputId.value;
      await fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(alunoData)
      });
      alert('Aluno atualizado com sucesso!');
    } else {
      // Adicionar novo
      await fetch(apiUrl, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(alunoData)
      });
      alert('Aluno adicionado com sucesso!');
    }
    limparFormulario();
    carregarAlunos();
  } catch (error) {
    alert('Erro ao guardar aluno: ' + error);
  }
});

// Editar aluno: preencher o formulário com os dados
async function editarAluno(id) {
  try {
    const res = await fetch(`${apiUrl}/${id}`);
    if (!res.ok) throw new Error('Aluno não encontrado');
    const aluno = await res.json();
    inputId.value = aluno.id;
    inputNome.value = aluno.nome;
    inputApelido.value = aluno.apelido;
    inputCurso.value = aluno.curso;
    inputAnoCurricular.value = aluno.anoCurricular;

    tituloForm.textContent = 'Editar Aluno';
    btnCancelar.style.display = 'inline';
  } catch (error) {
    alert('Erro ao carregar aluno: ' + error);
  }
}

// Apagar aluno
async function apagarAluno(id) {
  if (!confirm('Tem a certeza que quer apagar este aluno?')) return;
  try {
    await fetch(`${apiUrl}/${id}`, { method: 'DELETE' });
    alert('Aluno apagado com sucesso!');
    carregarAlunos();
  } catch (error) {
    alert('Erro ao apagar aluno: ' + error);
  }
}

// Cancelar edição
btnCancelar.addEventListener('click', () => {
  limparFormulario();
});

// Limpar formulário e voltar ao modo adicionar
function limparFormulario() {
  inputId.value = '';
  inputNome.value = '';
  inputApelido.value = '';
  inputCurso.value = '';
  inputAnoCurricular.value = '';
  tituloForm.textContent = 'Adicionar Aluno';
  btnCancelar.style.display = 'none';
}

// Carregar alunos quando a página abre
carregarAlunos();
