const request = require("supertest");

const app = require("../src/app");

describe("Personagens",()=>{

    test("Listar personagens",async()=>{

        const resposta = await request(app)

            .get("/personagens");

        expect(resposta.statusCode).toBe(200);

        expect(Array.isArray(resposta.body)).toBe(true);

    });

});

test("Criar personagem",async()=>{

    const login = await request(app)

        .post("/auth/login")

        .send({

            email:"paulo@email.com",

            senha:"123456"

        });

    const token = login.body.token;

    const resposta = await request(app)

        .post("/personagens")

        .set("Authorization","Bearer "+token)

        .send({

            titulo:"Teste",

            conteudo:"Teste Jest",

            imagem:"",

            ordem:999

        });

    expect(resposta.statusCode).toBe(201);

});

test("POST sem token",async()=>{

    const resposta = await request(app)

        .post("/personagens")

        .send({

            titulo:"Teste"

        });

    expect(resposta.statusCode).toBe(401);

});