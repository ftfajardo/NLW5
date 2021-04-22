import { Router } from "express";
import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "./repositories/SettingsRepository";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";
import { MessagesController } from "./controllers/MessagesController";

const routes = Router();
const SettingsControl = new SettingsController();
const UsersControl = new UsersController();
const MessagesControl = new MessagesController();
routes.post("/settings", SettingsControl.create);
routes.post("/users", UsersControl.create);
routes.post("/messages", MessagesControl.create);
routes.get("/messages/:id", MessagesControl.showByUser);
export { routes };
/*
  Tipos de parametros:
  Routes param => parametros de rotas.
   localhost:3333/settings/1

  Query param => filtros e buscas:
    localhost:3333/settings/1?search=algumacoisa

  Body params =>  objetos dentro de requisições { utiliza json}


*/

