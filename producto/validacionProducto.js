const Joi=require('joi');

const id=Joi.string().uuid();
const nombre=Joi.string().pattern(new RegExp(/^[\w\s]{3,60}$/)).message("nombre: El número de caracteres permitidos es de 3 como mínimo y como máximo 60");
const precio=Joi.number().min(0).message("precio: El valor permitido como mínimo es 0");
const fecha_creacion=Joi.date();
const activo=Joi.boolean();
// imagen

const validacionProducto=Joi.object({
  nombre:nombre.required(),
  precio:precio.required(),
  fecha_creacion:fecha_creacion.required(),
  activo:activo.required()
})


const validacionUpdate=Joi.object({
  nombre:nombre,
  precio:precio,
  fecha_creacion:fecha_creacion,
  activo:activo
})

module.exports={
  validacionProducto,
  validacionUpdate
}
