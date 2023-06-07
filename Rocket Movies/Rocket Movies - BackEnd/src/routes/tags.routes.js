const { Router } = require("express");
// lidar com requisições feita na web, pelo protocolo http, muito rapido e flexivel

const TagsController = require('../controllers/TagsController')
// trazendo tudo do arquivo TagsController.js para cá
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')

const tagsRoutes = Router();
// utilizando o Router que vem do express

const tagsController = new TagsController();
// criando a class contrutora

tagsRoutes.get("/",ensureAuthenticated, tagsController.index);
// listar todas as notas cadastradas


module.exports = tagsRoutes;