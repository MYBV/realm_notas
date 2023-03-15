//#################################################################################
let Procedure = module.exports;
//#################################################################################
let Query = require("../querys");
//#################################################################################

//#################################################################################
Procedure.readAllNotes = async () => {
    let resultado = await new Query("notes").index();
    if (resultado === false)
        return { status: 500, respuesta: { msg: "Error al consultar notas" } };

    return { status: 200, respuesta: resultado };
};
//#################################################################################
Procedure.readOneNote = async (id) => {
    let resultado = await new Query("notes").read(id);
    if (resultado === false)
        return { status: 500, respuesta: { msg: "Error al consultar nota" } };

    if(Object.keys(resultado).length == 0)
        return { status: 404, respuesta: { msg: "Nota no encontrada" } };

    return { status: 200, respuesta: resultado };
};
//#################################################################################
Procedure.createNote = async (data) => {
    let resultado = await new Query("notes").create(data);

    if (resultado === false)
        return { status: 500, respuesta: { msg: "Error al crear nota" } };

    return { status: 200, respuesta: { id: resultado, msg: "Nota creada" } };
};
//#################################################################################
Procedure.updateNote = async (data, id) => {
    let resultado = await Procedure.readOneNote(id)
    if(resultado.status != 200) return resultado
    
    resultado = await new Query("notes").update(data, id);

    if (resultado === false)
        return { status: 500, respuesta: { msg: "Error al modificar nota" } };

    return { status: 200, respuesta: { id: id, msg: "Nota modificada" } };
};
//#################################################################################
Procedure.delNote = async (id) => {
    let resultado = await Procedure.readOneNote(id)
    if(resultado.status != 200) return resultado

    resultado = await new Query("notes").del(id);

    if (resultado === false)
        return { status: 500, respuesta: { msg: "Error al eliminar nota" } };

    return { status: 200, respuesta: { id: id, msg: "Nota eliminada" } };
};
//#################################################################################
