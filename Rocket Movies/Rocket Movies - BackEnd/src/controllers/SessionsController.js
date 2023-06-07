const knex = require('../database/knex')
const AppError = require('../utils/AppError')
const authConfig = require('../configs/auth')
const { sign } = require('jsonwebtoken')

const { compare } = require('bcryptjs')
// comparar se a senha solicitada está correta, mas usa o compare devido a criptografia

class SessionsController {
    async create(request,response){
        const { email,password } = request.body;

        const user = await knex('users').where({ email }).first();

        if(!user) {
            throw new AppError('E-mail e/ou senha incorreta', 401);
        }
        
        const passwordMatched = await compare(password, user.password);
        // comparar as senhas
        if( !passwordMatched) {
            throw new AppError('E-mail e/ou senha incorreta', 401);
        // password 12
        }

        const { secret, expiresIn } = authConfig.jwt;
        const token = sign({}, secret, {
            subject: String(user.id),
            expiresIn
        })

        return response.json({user, token})
    }
}

module.exports = SessionsController;