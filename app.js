//#################################################################################
"use strict";
//#################################################################################

//#################################################################################
require("dotenv").config();
const express     = require("express");
const bodyParser  = require("body-parser");
const http_server = require("http");
const app         = express();
const logger          = require('morgan')
//#################################################################################

//#################################################################################
let NotaSchema = {
    name: "Notes",
    properties: {
        timestamp: "date",
        title: "string",
        content: "string",
    },
};

async function inicio() {
    let statusApp = require("./globales");
    console.log(Color_1, statusApp);

    const { Conectar } = require("./database");
    if ((await Conectar()) !== false) {
        statusApp = await require("./routes"); //Cargamos Rutas
        console.log(Color_1, statusApp);

        app.use(bodyParser.json({limit: '50mb'}));
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(logger('dev'))

        //Instancia cada ruta del sistema
        for (let valor of listado_routes)
            app.use(valor.path, require(valor.ruta)); 

        let puerto = process.env.API_PORT || 3000;

        http_server.createServer(app).listen(puerto);
        console.log(ColAviso, `API Online por el puerto: ${puerto}`);
    } else
        console.log(ColDanger, `Error -> No Se Pudo Conectar Con la BD Realm`);
}
//#################################################################################

//#################################################################################
inicio();
//#################################################################################
