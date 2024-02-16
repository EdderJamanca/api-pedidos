const {Router}=require('express');

const {validacionCrearUser,
  validacionUpdateUser} =require('./validacionUser');

const validacionHandle=require('./../middlewares/validator');

const {crearUsuario,Login,envioParaRecuperar,cambiarPassword}=require('./controller/userController');

const passport = require('passport');

const router=Router();


router.post('/create',validacionHandle(validacionCrearUser,'body'),crearUsuario);


router.post('/login',  passport.authenticate('local', {session: false}),Login);


router.post('/enviarEmail',envioParaRecuperar);
router.post('/cambiarPassword',cambiarPassword);

module.exports=router;
