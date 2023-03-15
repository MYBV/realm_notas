# API Notas Realm

Esta pequeña API se compone de un CRUD para gestionar notas.
Utiliza una App de Realm para gestionar el manejo de datos en una DB de MongoAtlas.
Se compone de 5 endpoints funcionales:
* GET /notas (Listar Notas).
* GET /notas/{id} (Obtener Nota).
* POST /notas (Crear Nota).
* PUT /notas/{id} (Modificar Notas).
* DELETE /notas/{id} (Eliminar Nota).


## Construido con 🛠️

* [Nodejs](https://nodejs.org) - Entorno de ejecuciónJS.
* [Express](https://expressjs.com/) - Framework de nodejs utilizado.
* [npm](https://www.npmjs.com/) - Permite instalar diversas librerías utilizadas en el proyecto.
* [Realm](https://www.mongodb.com/docs/realm/) - DServicio BK de Mongo Atlas.

## Pre-requisitos 📋

_Necesitas instalar lo siguiente:_ ⚠️

### Pre-requisitos 1
* Instala Nodejs
* Crea un cluster en MongoDB atlas.
* Crea una BD `sample_notes` y una coleccion llamada `notes`.
* Crea una App Realm en MongoDB atlas y vincula el cluster que ya creaste.


## Deploy 🚀
_Ejecuta los siguientes pasos en orden:_

## Deploy desde github

### Paso 1 Clona el repositorio: 

  ```$ git clone https://github.com/MYBV/realm_notas.git``` ⏬

### Paso 2 Entra a la carpeta `realm_notas` y ejecuta el siquiente comando: 

  ```$ npm install``` 📂	

Ya con estos dos pasos se tiene el código del proyecto y se instalan las dependencias.

### Paso 3 Crea tu archivo .env y configura las variables de entorno:

Crea en la carpeta raíz del proyecto un archivo `.env` y allí irá el valor de  las variables de entorno:

PORT=3000
IDAPI
APIKEY
DBSERVICE=mongodb-atlas
APPNAME=Express Realm
DBNAME=sample_notes

los valores de IDAPI y APIKEY los obtienes en la web de MongoDB atlas.

### Paso 4 Runner del proyecto:
   ``npm start``
   Con este comando inicias el servicio.

### Paso 5 Coleccion Postman:

Para probar los endpoint se incluye una coleccion de postman en el archivo:
``Notas Realm.postman_collection.json``

## Autor ✒️

* **Mayla Bautista** - [@bautista_mayla](#Des_Mayla) 👤.