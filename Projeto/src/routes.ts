import { Router } from "express";
import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "./repositories/SettingsRepository";
import { SettingsController } from "./controllers/SettingsController";

const routes = Router()
const SettingsControl = new SettingsController()

routes.post("/settings", SettingsControl.create)

export { routes };
/*
  Tipos de parametros:
  Routes param => parametros de rotas.
   localhost:3333/settings/1

  Query param => filtros e buscas:
    localhost:3333/settings/1?search=algumacoisa

  Body params =>  objetos dentro de requisições { utiliza json}


*/

