const path = require('path');
const multer = require('multer')
const crypto = require('crypto')

const TMP_FOLDER = path.resolve(__dirname, '..', '..', 'tmp');
const UPLOADS_FOLDER = path.resolve(TMP_FOLDER, 'uploads');

const MULTER = {
    storage: multer.diskStorage({
        destination: TMP_FOLDER,
        // qual o destino para enviar esse arquivo
        filename(request, file, callback){
            const fileHash = crypto.randomBytes(10).toString('hex');
            // para gerar um nome único, se tiver nome igual um vai sobrepor o outro.
            const fileName = `${fileHash}-${file.originalname}`

            return callback(null, fileName)
        },
        // filename é o nome do arquivo, função.
    }),
};
// biblioteca que a gente vai utilizar para fazer o upload, duas propriedades importantes, onde a gente vai salvar, mandar o arquivo, "destination: TMP_FOLDER" e qual é o nome do arquivo, usado o crypto para fazer um número aleatório e combinar com o nome da imagem, para garantir q o usuário não tenho imagens duplicadas.
module.exports = {
    TMP_FOLDER,
    // Pasta temporária, onde a imagem chega
    UPLOADS_FOLDER,
    // Onde de fato a imagem vai ficar
    MULTER,
}