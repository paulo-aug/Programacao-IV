let score = 0;
let jogoRodando = false;
let tempoRestante = 15;
let intervaloTempo;

function iniciarJogo() {
    score = 0;
    tempoRestante = 15;
    jogoRodando = true;

    document.getElementById("score").innerText = score;
    document.getElementById("tempo").innerText = tempoRestante;

    let intervalo = setInterval(criarInimigo, 700);

    // contador de tempo
    intervaloTempo = setInterval(() => {
        tempoRestante--;
        document.getElementById("tempo").innerText = tempoRestante;

        if (tempoRestante <= 0) {
            clearInterval(intervalo);
            clearInterval(intervaloTempo);
            jogoRodando = false;

            alert("Fim de jogo! Pontuação: " + score);
        }
    }, 1000);
}
function criarInimigo() {
    if (!jogoRodando) return;

    const enemy = document.createElement("div");
    enemy.classList.add("enemy");

    const gameArea = document.getElementById("game-area");

    const enemySize = 80; // tamanho do inimigo
    const margem = 10; // opcional (evita colar na borda)

    const maxX = gameArea.clientWidth - enemySize - margem;
    const maxY = gameArea.clientHeight - enemySize - margem;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    enemy.style.left = x + "px";
    enemy.style.top = y + "px";

    // evento de clique
    enemy.addEventListener("click", () => {
        score++;
        document.getElementById("score").innerText = score;

        enemy.classList.add("hit");

        setTimeout(() => enemy.remove(), 200);
    });

    gameArea.appendChild(enemy);

    // remover automaticamente
    setTimeout(() => {
        enemy.remove();
    }, 1000);
}

/* efeito rastro do mouse */
document.addEventListener("mousemove", (e) => {
    const trail = document.createElement("div");
    trail.classList.add("trail");

    trail.style.left = e.pageX + "px";
    trail.style.top = e.pageY + "px";

    document.body.appendChild(trail);

    setTimeout(() => {
        trail.remove();
    }, 300);
});