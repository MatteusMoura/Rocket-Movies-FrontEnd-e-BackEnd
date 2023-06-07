class AppError {
    message;
    statusCode;

    constructor(message,statusCode = 400){
        this.message = message;
        this.statusCode = statusCode;
    }
// método que é carregadado automaticamente quando a class é instanciada
}

module.exports = AppError;