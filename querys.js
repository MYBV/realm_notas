//###########################################################################
const { BSON } = require("realm");
//###########################################################################

//###########################################################################
class QueryClass {
    //#######################################################################
    constructor(collection) {
        this.collection = mongodbRealm
            .db(process.env.DBNAME)
            .collection(collection);
    }
    //#######################################################################

    //#######################################################################
    async index() {
        try {
            let consulta = await this.collection.find({});
            return String(consulta) != 'null' ? consulta: [];
        } catch (e) {
            console.log(ColDanger, `Error Index Realm: ${e}`);
            return false;
        }
    }
    //#######################################################################

    //#######################################################################
    async read(data, key = "_id") {
        try {
            let consulta = [];

            if (key == "_id") {
                consulta = await this.collection.findOne({
                    _id: BSON.ObjectId(data),
                });
            } else consulta = await this.collection.findOne(data);
            
            return String(consulta) != 'null' ? consulta: {};
        } catch (e) {
            console.log(ColDanger, `Error Read Realm: ${e}`);
            return false;
        }
    }
    //#######################################################################

    //#######################################################################
    async create(data) {
        try {
            let consulta = await this.collection.insertOne(data);
            return consulta;
        } catch (e) {
            console.log(ColDanger, `Error Create Realm: ${e}`);
            return false;
        }
    }
    //#######################################################################

    //#######################################################################
    async update(data, condicion, key = "_id") {
        try {
            let consulta = false;

            if (key == "_id") {
                consulta = await this.collection.updateOne(
                    { _id: BSON.ObjectId(condicion) },
                    { $set: data }
                );
            } else {
                consulta = await this.collection.updateOne(
                    { condicion },
                    { $set: data }
                );
            }

            return consulta;
        } catch (e) {
            console.log(ColDanger, `Error Update Realm: ${e}`);
            return false;
        }
    }
    //#######################################################################

    //#######################################################################
    async del(data, key = "_id") {
        try {
            let consulta = [];

            if (key == "_id") {
                consulta = await this.collection.deleteOne({
                    _id: BSON.ObjectId(data),
                });
            } else consulta = await this.collection.deleteOne(data);

            return consulta;
        } catch (e) {
            console.log(ColDanger, `Error Delete Realm: ${e}`);
            return false;
        }
    }
    //#######################################################################
}
//###########################################################################

//###########################################################################
module.exports = QueryClass;
//###########################################################################
