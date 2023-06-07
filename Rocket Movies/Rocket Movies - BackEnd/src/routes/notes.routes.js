const { Router } = require("express");

const NotesController = require('../controllers/NoteController')
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')

const notesRoutes = Router();

const notesController = new NotesController();

notesRoutes.use(ensureAuthenticated)

notesRoutes.get("/", notesController.index);
// listar todas as notas cadastradas

notesRoutes.post("/", notesController.create);
// criar uma nota

notesRoutes.get("/:id", notesController.show);
// mostrar a nota

notesRoutes.delete("/:id", notesController.delete);
// deletar uma nota

module.exports = notesRoutes;