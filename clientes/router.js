const {Router}=require("express");
const validacionHandle=require('./../middlewares/validator');

const {
      obtenerTodoCliente,
      newCliente,
      ActualizarCliente,
      EliminarCliente
    }=require('./controller/clienteController');

const {validacionClienteCreate,validacionClienteUpdate}=require('./validacionCliente');

const passport = require('passport');

const {checkAdminRole,
  checkRoles}=require('./../middlewares/auth.handle');

const router=Router();


router.get('/all',
            passport.authenticate('jwt', {session: false}),
            checkRoles('admin','user','customer'),
            obtenerTodoCliente);

router.post('/create',
            passport.authenticate('jwt', {session: false}),
            checkRoles('admin','user','customer'),
            validacionHandle(validacionClienteCreate,'body'),
            newCliente);

router.put('/update/:id',
           passport.authenticate('jwt',{session:false}),
           checkRoles('admin','customer'),
           validacionHandle(validacionClienteUpdate,'body'),
           ActualizarCliente);

router.delete('/delete/:id',
               passport.authenticate('jwt',{session:false}),
               checkRoles('admin','customer'),
               EliminarCliente
               );


module.exports=router;
