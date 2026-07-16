const API = "http://localhost:3000/auth/login";

document
    .getElementById("formLogin")
    .addEventListener("submit", login);

async function login(e){

    e.preventDefault();

    const email =
        document.getElementById("email").value;

    const senha =
        document.getElementById("senha").value;

    const resposta = await fetch(API,{

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify({

            email,
            senha

        })

    });

    const dados =
        await resposta.json();

    if(resposta.ok){

        localStorage.setItem(
            "token",
            dados.token
        );

        window.location.href =
            "admin.html";

    }else{

        document
        .getElementById("mensagem")
        .innerText =
        dados.mensagem;

    }

}