const {Router}=require("express");


const {  Cgetproducto,
         CcreateProducto,
         CupdateProducto,
         CeliminarProducto}=require('./controller/productoController');

const passport=require('passport');

const {checkAdminRole,checkRoles}=require('./../middlewares/auth.handle');

const {validacionProducto,
       validacionUpdate}=require('./validacionProducto');

const validacionHandle=require('./../middlewares/validator');



const router=Router();

router.get('/productos',
           passport.authenticate('jwt',{session:false}),
           checkRoles('admin','customer'),
           Cgetproducto);

router.post('/create',
            passport.authenticate('jwt',{session:false}),
            checkRoles('admin','customer'),
            validacionHandle(validacionProducto,'body'),
            CcreateProducto)

router.put('/update/:id',
            passport.authenticate('jwt',{session:false}),
            checkRoles('admin','customer'),
            validacionHandle(validacionUpdate,'body'),
            CupdateProducto);


router.delete('/delete/:id',
              passport.authenticate('jwt',{session:false}),
              checkRoles('admin','customer'),
              CeliminarProducto);

module.exports=router;
