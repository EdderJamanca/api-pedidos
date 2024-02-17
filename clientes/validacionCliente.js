const Joi=require('joi');

const id=Joi.string().uuid();
const nombre=Joi.string().alphanum().min(3).max(30);
const apellido=Joi.string().alphanum().min(3).max(60);
const email=Joi.string().email();
const empresa=Joi.string().min(3).message("empresa: el nombre debe tener como mínimo 3 letras");
const telefono=Joi.string().min(9).max(9);
const activo=Joi.boolean();


const validacionClienteCreate=Joi.object({
  nombre:nombre.required(),
  apellido:apellido.required(),
  empresa:empresa.required(),
  email:email.required(),
  telefono:telefono.required(),
  activo:activo.required()
});

const validacionClienteUpdate=Joi.object({
  nombre:nombre,
  apellido:apellido,
  empresa:empresa,
  email:email,
  telefono:telefono,
  activo:activo
})

module.exports={
  validacionClienteCreate,
  validacionClienteUpdate
}

