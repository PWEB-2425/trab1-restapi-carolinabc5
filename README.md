# Trabalho 1 – REST API com MongoDB + Frontend React/Vite

  ## Autor
- Nome: Carolina Cunha  
- Número: [30323]

---

  ## Publicação

- Repositório GitHub Classroom:  
https://github.com/PWEB-2425/trab1-restapi-carolinabc5

  ## Como instalar e correr localmente

      ### Backend

1. Clonar o repositório:
   ```bash
   git clone https://github.com/PWEB-2425/trab1-restapi-carolinabc5
   cd trab1-restapi-carolnabc5/backend
2. Instalar Dependências:   
    npm install
3. Criar ficheiro .env com:    
    MONGO_URI=mongodb+srv://carolinacunha30323:%23Viana2004@cluster0.cmfalca.mongodb.net/alunosdb?retryWrites=true&w=majority&appName=Cluster0
    PORT=4000
4. Executar o backend:
    npm start

      ### Frontend
1. Abrir outra consola e navegar para:
cd ../frontend
2. Instalar dependências:
npm install
3. Executar a aplicação frontend:
npm run dev      


    ## Descrição da Base de Dados:
MongoDB Atlas com uma coleção alunos.
Cada aluno tem os campos:
  nome (string)
  apelido (string)
  curso (string)
  anoCurricular (número)


    ##Descrição da API REST
    | Método | Endpoint      | Descrição             |
| ------ | ------------- | --------------------- |
| GET    | `/alunos`     | Lista todos os alunos |
| GET    | `/alunos/:id` | Consulta aluno por ID |
| POST   | `/alunos`     | Cria um novo aluno    |
| PUT    | `/alunos/:id` | Atualiza um aluno     |
| DELETE | `/alunos/:id` | Apaga um aluno        |


    ##Descrição do Frontend
Interface simples para:
  Listar alunos numa tabela
  Adicionar novo aluno
  Editar aluno existente
  Apagar aluno


    ##Conteúdo Relevante
O backend usa Mongoose para modelar os dados.
O frontend adapta-se automaticamente à API pública após configuração.
O projeto está dividido em pastas /backend e /frontend.