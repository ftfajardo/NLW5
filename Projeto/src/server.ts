import { http } from "./http";
import "../websocket/client";


http.listen(3333, () => console.log("server is running on port 3333"));
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

