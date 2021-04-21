import express, { response } from "express";
import "./database";
import { routes } from "./routes";

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log("server is running on port 3333"));
/*
GET = BUSCAS
POST = CRIAÇÃO
PUT = ALTERAÇÃO
DELETE = DELETAR
PATCH = ALTERAR UMA INF ESPECIFICA
app.get("/", (request, response) => {
  return response.json({
    message: "Olá NLW 05",
  });
});
app.post("/", (request, response) => {
  return response.json({
    message: "Usuário salvo com sucesso",
  });
});
*/

