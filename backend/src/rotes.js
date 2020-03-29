const express = require('express');

const routes = express.Router();

const OngController = require('./controller/OngController');

const IncidentController = require('./controller/IncidentController');

const ProfileController = require('./controller/ProfileController');

const SessionController = require('./controller/SessionController');

/*
    Rota / Recurso
*/

/**
 * Métodos HTTP
 * GET: Buscar uma informação do back-end
 * POST: Criar ima informação no back-end
 * PUT: Atualiza uma informação no back-end
 * DELETE: Deleta uma informação do beck-end
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmetros nomeados ba rita após "?" (Filtros, paginação)
  * Route Params: Parêmetros utilizados para indentificar recursos 
  * Request Body: Corpo da requisição, utilizado para cirar ou alterar recursos
  */

routes.get('/ongs', OngController.index);
routes.post('/ongs',OngController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

routes.post('/session', SessionController.created )

module.exports = routes;