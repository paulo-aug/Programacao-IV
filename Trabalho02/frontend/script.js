// BOTÃO DE MENSAGEM
const btnMensagem = document.getElementById('btnMensagem');
const mensagem = document.getElementById('mensagem');
const audioBankai = document.getElementById('audioBankai');
const cards = document.getElementById("cards");

btnMensagem.addEventListener('click', function() {

    mensagem.textContent = 'Bankai! Tensa Zangetsu!';

    // toca o áudio
    audioBankai.currentTime = 0;
    audioBankai.play();
});

// BOTÃO DE TEMA
const btnTema = document.getElementById('btnTema');

btnTema.addEventListener('click', function() {
    document.body.classList.toggle('tema-claro');
});

async function carregarPersonagens() {

    try {

        const resposta = await fetch(
            "http://localhost:3000/personagens"
        );

        const personagens = await resposta.json();

        cards.innerHTML = "";

        personagens.forEach(personagem => {

            cards.innerHTML += `
                <div class="card">

                    <img src="${personagem.imagem}" alt="${personagem.titulo}">

                    <h3>${personagem.titulo}</h3>

                    <p>${personagem.conteudo}</p>

                </div>
            `;

        });

    } catch (erro) {

        console.log(erro);

    }

}

carregarPersonagens();