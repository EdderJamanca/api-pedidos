const {
  getPedidos,
  createPedido,
  updatePedido,
  eliminarPedido,
  obtenerUnPedidoPorId
}=require('./../dao/DAOpredido');


const MgetPedidos=(page,limit)=>{
  return  getPedidos(page,limit);
}

const McreatePedido=(dato)=>{
  return   createPedido(dato);
}

const MupdatePedido=(id,dato)=>{
  return   updatePedido(id,dato);
}

const MeliminarPedido=(id)=>{
  return   eliminarPedido(id);
}

const MobtenerUnPedidoPorId=(id)=>{
  return   obtenerUnPedidoPorId(id);
}


module.exports={
  MgetPedidos,
  McreatePedido,
  MupdatePedido,
  MeliminarPedido,
  MobtenerUnPedidoPorId
}
