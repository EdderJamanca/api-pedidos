const {Router}=require('express');
const cliente=require('./../clientes/router');
const usuario=require("./../Auth/router");


const router=Router();

require('./../Auth/strategy');



router.use('/clientes',cliente);
router.use('/user',usuario);

module.exports=router;
