const {  getproducto,
         createProducto,
         updateProducto,
         eliminarProducto,
         obtenerUnProductoPorId}=require('./../dao/DAOproducto');


const Mgetproducto=(page,limit)=>{
   return getproducto(page,limit);
}

const McreateProducto=(data)=>{
  return createProducto(data);
}

const MupdateProducto=(id,data)=>{
   return updateProducto(id,data);
}

const MeliminarProducto=(id)=>{
   return eliminarProducto(id);
}
const MobtenerUnProductoPorId=(id)=>{
  return obtenerUnProductoPorId(id);
}

module.exports={
  Mgetproducto,
  McreateProducto,
  MupdateProducto,
  MeliminarProducto,
  MobtenerUnProductoPorId
}
