const Joi = require('joi');



// const id = Joi.string().uuid();
// const nombre = Joi.string().pattern(new RegExp('^[\w\s]{3,60}$')).message("El número de caracteres permitidos es de 3 como mínimo y como máximo 60");
// const apellido = Joi.string().pattern(new RegExp('^[\w\s]{3,60}$')).message("El número de caracteres permitidos es de 3 como mínimo y como máximo 60");
// const email = Joi.string().email().message("No es un email valido");
// const password = Joi.string().alphanum().min(6).max(20).message("El número de caracteres permitidos es de 6 como mínimo y como máximo 20");
// const roles = Joi.any().valid('admin', 'user', 'customer').message('Los valores permitidos son Admin, user y customer');
// const celular = Joi.string().pattern(new RegExp('^\d{9}$')).message('El número de celular debe tener 9 dígitos');
// const departamento = Joi.string().pattern(new RegExp('^[\w\s]{3,60}$')).message("El número de caracteres permitidos es de 3 como mínimo y como máximo 60");
// const provincia = Joi.string().pattern(new RegExp('^[\w\s]{3,60}$')).message("El número de caracteres permitidos es de 3 como mínimo y como máximo 60");
// const direccion = Joi.string().pattern(new RegExp('^[\w\s]{3,60}$')).message("El número de caracteres permitidos es de 3 como mínimo y como máximo 60");


const id = Joi.string().uuid();
const nombre = Joi.string().pattern(new RegExp(/^[\w\s]{3,60}$/)).message("nombre: El número de caracteres permitidos es de 3 como mínimo y como máximo 60");
const apellido = Joi.string().pattern(new RegExp(/^[\w\s]{3,60}$/)).message("apellido: El número de caracteres permitidos es de 3 como mínimo y como máximo 60");
const email = Joi.string().email().message("No es un email valido");
const password = Joi.string().alphanum().min(6).max(20).message("password: El número de caracteres permitidos es de 6 como mínimo y como máximo 20");
const roles = Joi.any().valid('admin', 'user', 'customer');
const celular = Joi.string().pattern(new RegExp(/^\d{9}$/));
const departamento = Joi.string().pattern(new RegExp(/^[\w\s]{3,60}$/)).message("departamento: El número de caracteres permitidos es de 3 como mínimo y como máximo 60");
const provincia = Joi.string().pattern(new RegExp(/^[\w\s]{3,60}$/)).message("provicia: El número de caracteres permitidos es de 3 como mínimo y como máximo 60");
const direccion = Joi.string().pattern(new RegExp(/^[\w\s.,()]{3,60}$/)).message("direccion: El número de caracteres permitidos es de 3 como mínimo y como máximo 60");

const validacionCrearUser=Joi.object({
  nombre:nombre.required(),
  apellido:apellido.required(),
  email:email.required(),
  password:password.required(),
  roles:roles.required(),
  celular:celular.required(),
  departamento:departamento.required(),
  provincia:provincia.required(),
  direccion:direccion.required()
})

const validacionUpdateUser=Joi.object({
  nombre:nombre,
  apellido:apellido,
  email:email,
  password:password,
  roles:roles,
  celular:celular,
  departamento:departamento,
  provicia:provincia,
  direccion:direccion
})

module.exports={
  validacionCrearUser,
  validacionUpdateUser
}
