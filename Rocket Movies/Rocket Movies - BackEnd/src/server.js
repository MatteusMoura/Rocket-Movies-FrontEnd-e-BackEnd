require('dotenv/config')
require("express-async-errors");
const migrationRun = require("./database/sqlite/migrations")
const AppError = require("./utils/AppError")
const uploadConfig = require('./configs/upload')

const cors = require('cors');
const express = require("express");
// lidar com requisições http (get,post,delete,put)

const routes = require("./routes")

const app = express();
app.use(cors());
app.use(express.json());

app.use(routes);

app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER));

migrationRun();

app.use((error,request, response,next) => {
    if(error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        });
    }

    console.error(error);

    return response.status(500).json({
        status: "error",
        message: error.message
    })
});


const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))
