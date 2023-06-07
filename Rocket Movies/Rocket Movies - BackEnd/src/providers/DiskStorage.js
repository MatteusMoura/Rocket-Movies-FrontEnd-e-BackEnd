const fs = require('fs');
//  lidar com manipulação de arquivo
const path = require('path')
// navegar pelos diretorios
const uploadConfig = require('../configs/upload')
// acessar o upload

class DiskStorage {
    async saveFile(file){
        await fs.promises.rename(
            // rename vai mudar o arquivo de lugar
            path.resolve(uploadConfig.TMP_FOLDER, file),
            // sai dessa pasta
            path.resolve(uploadConfig.UPLOADS_FOLDER, file)
            // e vai para essa
        )

        return file;
    }

    async deleteFile(file){
        const filePath = path.resolve(uploadConfig.UPLOADS_FOLDER, file);

        try {
            await fs.promises.stat(filePath)
            // stat vai verificar o status do arquivo, ( arquivo aberto, corrompido, dísponivel )  
        } catch {
            return
        }
        // tratamento de excessões
        await fs.promises.unlink(filePath)
        // unlink deletar um arquivo
    }
}

module.exports = DiskStorage;