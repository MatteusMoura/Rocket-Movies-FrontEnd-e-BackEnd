const { verify } = require('jsonwebtoken')
const AppError = require("../utils/AppError")
const authConfig = require("../configs/auth")

function ensureAuthenticated(request, response, next){
    const authHeader = request.headers.authorization;

    if(!authHeader) {
        throw new AppError("JWT Token não informado", 401)
    }

    const [, token ] = authHeader.split(" ")
    // criando um array, e pegando apenas a segunda posição desse array
    // Split ele pega a string, e separa para um array, ai nas () diz qual caracter vai usar como referência, nesse caso é o espaço. e dentro do array já pode pegar a string e transformar em varíavel, nesse caso de nome "token".

    try {
        const {sub: user_id } = verify(token, authConfig.jwt.secret)
        // verificar se o token é valido e se bate com o jwt secret
        // Se for true a validação acima, vai pegar o sub que vem do verify e criar um allies(apelido) de nome "user_id".

        request.user = {
            id: Number(user_id),
        };

        return next();
    } catch {
        throw new AppError("JWT Token inválido", 401);
    }
}

module.exports = ensureAuthenticated;