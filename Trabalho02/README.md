# Bleach Wiki - Trabalho Prático 2

## Descrição

Este projeto consiste na evolução do Trabalho Prático 1, transformando um site estático em uma aplicação web dinâmica utilizando Node.js, Express e MySQL.

O sistema permite visualizar personagens de Bleach através de uma API REST, além de possuir autenticação JWT para gerenciamento dos dados.

---

## Tecnologias Utilizadas

### Front-end

- HTML5
- CSS3
- JavaScript

### Back-end

- Node.js
- Express
- MySQL
- JWT (jsonwebtoken)
- bcrypt
- dotenv
- cors

### Testes

- Jest
- Supertest

---

## Estrutura do Projeto

```
BleachWiki/

├── frontend/
│   ├── index.html
│   ├── admin.html
│   ├── login.html
│   ├── script.js
│   ├── admin.js
│   ├── login.js
│   └── style.css
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── database/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── app.js
│   │   └── server.js
│   │
│   ├── tests/
│   ├── package.json
│   └── .env
│
└── README.md
```

---

# Instalação

## 1. Clonar o projeto

```
git clone <repositorio>
```

ou apenas baixar o projeto.

---

## 2. Entrar na pasta do backend

```
cd backend
```

---

## 3. Instalar as dependências

```
npm install
```

---

## 4. Criar o arquivo .env

```
PORT=3000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha

DB_NAME=bleach_wiki

JWT_SECRET=bleach123
```

---

## 5. Criar o banco de dados

```sql
CREATE DATABASE bleach_wiki;
```

Selecionar o banco:

```sql
USE bleach_wiki;
```

Criar a tabela de usuários:

```sql
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    senha VARCHAR(255),
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

Criar a tabela de personagens:

```sql
CREATE TABLE personagens (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100),
    conteudo TEXT,
    imagem VARCHAR(500),
    ordem INT,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

# Executando o projeto

No backend:

```
npm run dev
```

A API ficará disponível em:

```
http://localhost:3000
```

Para executar o frontend, basta abrir utilizando o Live Server do VS Code.

---

# Autenticação

O sistema utiliza JWT.

Após realizar o login, um token é gerado e armazenado no navegador.

As rotas protegidas exigem o envio do cabeçalho:

```
Authorization: Bearer TOKEN
```

---

# Endpoints

## Autenticação

### Cadastrar usuário

```
POST /auth/register
```

### Login

```
POST /auth/login
```

---

## Personagens

### Listar personagens

```
GET /personagens
```

### Buscar personagem

```
GET /personagens/:id
```

### Criar personagem

```
POST /personagens
```

Necessita autenticação.

---

### Atualizar personagem

```
PUT /personagens/:id
```

Necessita autenticação.

---

### Excluir personagem

```
DELETE /personagens/:id
```

Necessita autenticação.

---

# Testes

Para executar os testes:

```
npm test
```

Foram implementados testes para:

- Login com sucesso
- Login inválido
- Listagem de personagens
- Criação de personagem autenticado

---

# Funcionalidades

- Listagem dinâmica de personagens
- CRUD completo
- Integração Front-end e Back-end
- Banco de dados MySQL
- Autenticação JWT
- Painel Administrativo
- Testes automatizados
- API REST

---

Paulo Augusto de Souza