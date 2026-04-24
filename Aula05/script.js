const pokedex = document.getElementById("pokedex");
let listaPokemons = [];

// carregar 50 pokémons
async function carregarPokemons() {
    for (let i = 1; i <= 151; i++) {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data = await res.json();

        listaPokemons.push(data);
    }

    mostrarPokemons(listaPokemons);
}

// mostrar pokémons
function mostrarPokemons(lista) {
    pokedex.innerHTML = "";

    lista.forEach(pokemon => {
        const card = document.createElement("div");
        card.classList.add("card");

        const tipos = pokemon.types.map(t => 
            `<span class="type">${t.type.name}</span>`
        ).join("");

        card.innerHTML = `
            <h3>${pokemon.name}</h3>
            <img src="${pokemon.sprites.front_default}">
            <div>${tipos}</div>
        `;

        pokedex.appendChild(card);
    });
}

// buscar por nome ou id
async function buscarPokemon() {
    const valor = document.getElementById("search").value.toLowerCase();

    if (!valor) return;

    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${valor}`);
        const data = await res.json();

        mostrarPokemons([data]);
    } catch {
        alert("Pokémon não encontrado!");
    }
}

// filtro por tipo
function filtrarTipo() {
    const tipo = document.getElementById("filtro").value;

    if (tipo === "all") {
        mostrarPokemons(listaPokemons);
        return;
    }

    const filtrados = listaPokemons.filter(pokemon =>
        pokemon.types.some(t => t.type.name === tipo)
    );

    mostrarPokemons(filtrados);
}

// iniciar
carregarPokemons();