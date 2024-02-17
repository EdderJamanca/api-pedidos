const {Router}=require('express');
const cliente=require('./../clientes/router');
const usuario=require("./../Auth/router");
const producto=require("./../producto/router");
const pedido=require("./../pedido/router");

const router=Router();

require('./../Auth/strategy');



router.use('/clientes',cliente);
router.use('/user',usuario);
router.use('/producto',producto);
router.use('/pedido',pedido);

module.exports=router;
