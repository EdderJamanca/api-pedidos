const Joi=require('joi');

const cliente=Joi.string();
const pedido=Joi.array();
const total=Joi.number();

const validacionCreatePedido=Joi.object({
  cliente:cliente.required(),
  pedido:pedido.required(),
  total:total.required()
})

const validacionUpdatePedido=Joi.object({
  cliente:cliente.required(),
  pedido:pedido.required(),
  total:total.required()
})


module.exports={
  validacionCreatePedido,
  validacionUpdatePedido
}
