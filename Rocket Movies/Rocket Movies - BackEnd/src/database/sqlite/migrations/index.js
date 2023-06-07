const sqliteConnetion = require("../../sqlite")
const createUsers = require('./createUsers')

async function migrationRun(){
    const schemas = [
        createUsers
    ].join('')

    sqliteConnetion()
    .then( db => db.exec(schemas))
    .catch(error => console.error(error))
}

module.exports = migrationRun;