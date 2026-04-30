// BOTÃO DE MENSAGEM
const btnMensagem = document.getElementById('btnMensagem');
const mensagem = document.getElementById('mensagem');
const audioBankai = document.getElementById('audioBankai');

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