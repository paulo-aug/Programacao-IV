const token = localStorage.getItem("token");

if (!token) {
    window.location.href = "login.html";
}

const API = "http://localhost:3000/personagens";

async function carregar() {

    const resposta = await fetch(API);

    const personagens = await resposta.json();

    const lista = document.getElementById("lista");

    lista.innerHTML = "";

    personagens.forEach(personagem => {

        lista.innerHTML += `
        <div class="card">

            <div class="card-info">
                <h3>${personagem.titulo}</h3>
                <p>${personagem.conteudo}</p>
            </div>

            <div class="card-botoes">
                <button onclick="editar(${personagem.id})">
                    Editar
                </button>

                <button onclick="remover(${personagem.id})">
                    Excluir
                </button>
            </div>

        </div>
        `;

    });

}

document
.getElementById("formPersonagem")
.addEventListener("submit", salvar);

async function salvar(e) {
    
    e.preventDefault();

    const id = document.getElementById("id").value;

    const personagem = {

        titulo: titulo.value,

        conteudo: conteudo.value,

        imagem: imagem.value,

        ordem: Number(ordem.value)

    };

    const configuracao = {

        method: id ? "PUT" : "POST",

        headers:{

            "Content-Type":"application/json",

            "Authorization":"Bearer " + token

        },

        body:JSON.stringify(personagem)

    };

    const url = id ? `${API}/${id}` : API;

    await fetch(url, configuracao);

    carregar();

    limparFormulario();

}

async function remover(id){

    await fetch(API+"/"+id,{

        method:"DELETE",

        headers:{

            "Authorization":"Bearer "+token

        }

    });

    carregar();

}

async function editar(id){

    const resposta =
    await fetch(API+"/"+id);

    const personagem =
    await resposta.json();

    document
    .getElementById("id")
    .value = personagem.id;

    titulo.value = personagem.titulo;

    conteudo.value = personagem.conteudo;

    imagem.value = personagem.imagem;

    ordem.value = personagem.ordem;

}

function limparFormulario() {

    document.getElementById("formPersonagem").reset();

    document.getElementById("id").value = "";

}

document
    .getElementById("btnLimpar")
    .addEventListener("click", limparFormulario);

    
document
.getElementById("logout")
.addEventListener("click",()=>{

    localStorage.removeItem("token");

    window.location.href="login.html";

});

carregar();