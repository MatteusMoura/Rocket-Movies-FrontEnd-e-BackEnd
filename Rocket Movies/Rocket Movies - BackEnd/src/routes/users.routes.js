const { Router, response } = require("express");
const multer = require('multer')
// para poder carregar essa imagem
const uploadConfig = require('../configs/upload')


const UsersController = require('../controllers/UsersController')
const UserAvatarController = require('../controllers/UserAvatarController')
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')

const usersRoutes = Router();
const upload = multer(uploadConfig.MULTER);
// vai ser o nss multer, e passar as configurações do nss upload

const usersController = new UsersController();
const userAvatarController = new UserAvatarController();

usersRoutes.post("/", usersController.create);
usersRoutes.put("/", ensureAuthenticated, usersController.update);
// put atualizar varias coisas
usersRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"),userAvatarController.update)
// patch atualizar propriedades de determindo produto expecifico no banco de dados
// foi no '/avatar', passou pelo middlewares pra ver se tava autenticado, depois faz o upload da imagem e então leva a imagem para a pasta de upload e cadastrar no banco.

module.exports = usersRoutes; 