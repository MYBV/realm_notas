//#############################################################
const {Router}  = require('express')
const router    = Router()
//#############################################################

//#############################################################
let index = (req, res, next)=> {

    //res.status(200).send({api:process.env.Api_Nombre})
    res.status(200).send({api: process.env.APPNAME})
}
//#############################################################

//#############################################################
router.get('/',index)
//#############################################################

//#############################################################
module.exports = router
//#############################################################