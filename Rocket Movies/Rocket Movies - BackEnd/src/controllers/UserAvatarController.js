const knex = require("../database/knex")
const AppError = require('../utils/AppError')
const DiskStorage = require('../providers/DiskStorage')

class UserAvatarController {
    async update(request, response){
        const user_id = request.user.id;
        // id do usuário que quer atualizar a imagem dele
        const avatarFilename = request.file.filename;
        // nome do arquivo que o usuário fez o upload

        const diskStorage = new DiskStorage();

        const user = await knex("users")
            .where({ id: user_id }).first();

            if(!user) {
                throw new AppError('Somente usuários autenticados podem mudar a foto do perfil', 401)
            }
            
            if(user.avatar){
                await diskStorage.deleteFile(user.avatar);
            }

            const filename = await diskStorage.saveFile(avatarFilename);
            user.avatar = filename;

            await knex("users").update(user).where({ id: user_id})

            return response.json(user);
    }
}

module.exports = UserAvatarController;