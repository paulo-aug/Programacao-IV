const request = require("supertest");

const app = require("../src/app");

describe("Autenticação", () => {

    test("Login deve retornar token", async () => {

        const resposta = await request(app)

            .post("/auth/login")

            .send({

                email: "paulo@email.com",

                senha: "123456"

            });

        expect(resposta.statusCode).toBe(200);

        expect(resposta.body).toHaveProperty("token");

    });

});

test("Login inválido", async () => {

    const resposta = await request(app)

        .post("/auth/login")

        .send({

            email:"x@x.com",

            senha:"123"

        });

    expect(resposta.statusCode).toBe(401);

});