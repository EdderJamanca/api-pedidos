const {Router}=require("express");
const validacionHandle=require('./../middlewares/validator');

const {obtenerTodoCliente,newCliente}=require('./controller/clienteController');

const {validacionClienteCreate}=require('./validacionCliente');

const passport = require('passport');

const {checkAdminRole,
  checkRoles}=require('./../middlewares/auth.handle');

const router=Router();


router.get('/all',passport.authenticate('jwt', {session: false}),checkRoles('admin','user','customer'),obtenerTodoCliente);

router.post('/create',passport.authenticate('jwt', {session: false}),
checkRoles('admin','user','customer'),
validacionHandle(validacionClienteCreate,'body'),newCliente);

module.exports=router;
