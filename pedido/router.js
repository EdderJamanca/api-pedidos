const {Router}=require("express");

const {  CgetPedidos,
         CcreatePedido,
         CupdatePedido,
         CeliminarPedido
      }=require('./controller/PedidoController');

const passport=require('passport');

const { checkAdminRole,checkRoles}=require('./../middlewares/auth.handle');
const validacionHandle=require('./../middlewares/validator');

const {
  validacionCreatePedido,
  validacionUpdatePedido
}=require('./validacionPedido');


const router=Router();

router.get('/getPedidos',
            passport.authenticate('jwt',{session:false}),
            checkRoles('admin','customer'),
            CgetPedidos);

router.post('/create',
            passport.authenticate('jwt',{session:false}),
            checkRoles('admin','customer'),
            validacionHandle(validacionCreatePedido,'body'),
            CcreatePedido);

router.put('/update/:id',
            passport.authenticate('jwt',{session:false}),
            checkRoles('admin','customer'),
            validacionHandle(validacionUpdatePedido,'body'),
            CupdatePedido);

router.delete('/delete/:id',
            passport.authenticate('jwt',{session:false}),
            checkRoles('admin','customer'),
            CeliminarPedido);

module.exports=router;







