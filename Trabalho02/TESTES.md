# Testes Manuais - Bleach Wiki

## Iniciar o projeto

No backend:

```bash
npm run dev
```

Abrir o frontend utilizando o Live Server.

---

# 1. Listar personagens

**Método**

```
GET
```

**URL**

```
http://localhost:3000/personagens
```

**Resultado esperado**

* Retornar todos os personagens cadastrados no banco em formato JSON.

---

# 2. Buscar personagem por ID

**Método**

```
GET
```

**URL**

```
http://localhost:3000/personagens/1
```

**Resultado esperado**

* Retornar apenas o personagem solicitado.

---

# 3. Cadastrar usuário

**Método**

```
POST
```

**URL**

```
http://localhost:3000/auth/register
```

**Body**

```json
{
    "nome":"Paulo",
    "email":"paulo@email.com",
    "senha":"123456"
}
```

**Resultado esperado**

* Usuário cadastrado com sucesso.

---

# 4. Login

**Método**

```
POST
```

**URL**

```
http://localhost:3000/auth/login
```

**Body**

```json
{
    "email":"paulo@email.com",
    "senha":"123456"
}
```

**Resultado esperado**

* Retornar um token JWT.

---

# 5. Criar personagem (Autenticado)

**Método**

```
POST
```

**URL**

```
http://localhost:3000/personagens
```

**Authorization**

```
Bearer TOKEN
```

**Body**

```json
{
    "titulo":"Byakuya Kuchiki",
    "conteudo":"Capitão da 6ª Divisão.",
    "imagem":"https://static.wikia.nocookie.net/bleach/images/f/f2/686Byakuya_profile.png/revision/latest?cb=20200322080959&path-prefix=en",
    "ordem":5
}
```

**Resultado esperado**

* Personagem criado com sucesso.

---

# 6. Atualizar personagem

**Método**

```
PUT
```

**URL**

```
http://localhost:3000/personagens/1
```

**Authorization**

```
Bearer TOKEN
```

**Resultado esperado**

* Dados do personagem atualizados.

---

# 7. Excluir personagem

**Método**

```
DELETE
```

**URL**

```
http://localhost:3000/personagens/1
```

**Authorization**

```
Bearer TOKEN
```

**Resultado esperado**

* Personagem removido do banco.

---

# 8. Testar proteção JWT

Realizar um POST sem enviar o token.

**Resultado esperado**

```
401 Unauthorized
```

ou

```json
{
    "mensagem":"Token não informado."
}
```

---

# 9. Testar Login Inválido

Realizar login com senha incorreta.

**Resultado esperado**

```
401 Unauthorized
```

---

# 10. Testar Front-end

* Abrir `index.html`.
* Verificar se os personagens são carregados pela API.
* Adicionar um novo personagem pelo `admin.html`.
* Atualizar a página principal.
* Confirmar que o novo personagem aparece automaticamente.

---

# 11. Testar Painel Administrativo

* Criar personagem.
* Editar personagem.
* Excluir personagem.
* Botão Limpar.
* Campos obrigatórios.
* Logout.

---

# 12. Executar os testes automatizados

```bash
npm test
```

**Resultado esperado**

Todos os testes executados com sucesso.

---

# Checklist da apresentação

* API iniciando corretamente.
* Conexão com MySQL.
* Front-end consumindo a API.
* CRUD funcionando.
* Login com JWT.
* Rotas protegidas.
* Testes automatizados.
* Documentação (README).