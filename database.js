//#########################################################################
const Realm = require("realm");
//#########################################################################
let Procedure = module.exports;
//#########################################################################

//#########################################################################
Procedure.Conectar = async () => {
    try {
        global.myRealm = new Realm.App({ id: process.env.IDAPI });
        
        const apiKey = process.env.APIKEY;
        const credentials = Realm.Credentials.apiKey(apiKey);

        console.log(Color_3, 'Conectando con Realm')
        global.userRealm = await myRealm.logIn(credentials);
        global.mongodbRealm = myRealm.currentUser.mongoClient(
            process.env.DBSERVICE
        );

        return true;
    } catch (err) {
        console.error(Color_4, "Failed to log in Realm", err);
        return false;
    }
};
//#########################################################################
