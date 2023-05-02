const express = require("express");
const router = express.Router();

const app = express();
const porta = 3333;

function mostraOla(request, response) {
  response.send("Olá, mundo!");
}

function mostraPorta() {
  console.log("Servidor criado e rodando na porta ", porta);
}

router.get("/ola", mostraOla); // alteração aqui

app.use(router);
app.listen(porta, mostraPorta);