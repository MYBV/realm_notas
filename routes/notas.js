//#############################################################
const { Router } = require("express");
const router = Router();
//#############################################################

//#############################################################
let readAllNotes = async (req, res) => {
    let { readAllNotes } = require("../procedures/notas");

    let resultado = await readAllNotes();
    return res.status(resultado.status).send(resultado.respuesta);
};
//#############################################################
let readOneNote = async (req, res) => {
    let { readOneNote } = require("../procedures/notas");

    let resultado = await readOneNote(req.params.id);
    return res.status(resultado.status).send(resultado.respuesta);
};
//#############################################################
let createNote = async (req, res) => {
    let data = Object.assign({},req.body);
    data.created = new Date().toISOString();

    let { createNote } = require("../procedures/notas");

    let resultado = await createNote(data);
    return res.status(resultado.status).send(resultado.respuesta);
};
//#############################################################
let updateNote = async(req, res)=>{
    let data = Object.assign({}, req.body)

    let {updateNote} = require("../procedures/notas")

    let resultado = await updateNote(data, req.params.id);
    return res.status(resultado.status).send(resultado.respuesta);
}
//#############################################################
let delNote = async(req, res)=>{
    let {delNote} = require("../procedures/notas")

    let resultado = await delNote(req.params.id)
    return res.status(resultado.status).send(resultado.respuesta);
}
//#############################################################

//#############################################################
router.get("/", readAllNotes);
router.get("/:id", readOneNote);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", delNote);
//#############################################################

//#############################################################
module.exports = router;
//#############################################################
