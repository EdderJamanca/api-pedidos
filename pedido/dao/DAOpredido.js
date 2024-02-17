const Pedido=require('./../services/schemaPedido');

const getPedidos=(page,limit)=>{
  return new Promise((resolve,reject)=>{
    Pedido.find({}).skip(page*limit).limit(limit)
    .populate('cliente')
    .populate({
      path:'pedido.producto',
      model:'Producto'
    })
    .exec().then((data)=>resolve(data),err=>reject(err));
  })
}

const createPedido=(dato)=>{
  return new Promise((resolve,reject)=>{
    Pedido.create(dato).then((data)=>resolve(data),err=>reject(err));
  })
}

const updatePedido=(id,dato)=>{
  return new Promise((resolve,reject)=>{
    Pedido.findByIdAndUpdate(id,{...dato},{new:true})
          .populate('cliente')
          .populate({
            path:'pedido.producto',
            model:'Producto'
          })
          .then((data)=>resolve(data),err=>reject(err));
  })
}
const eliminarPedido=(id)=>{
  return new Promise((resolve,reject)=>{
    Pedido.findByIdAndDelete({_id:id}).then((data)=>resolve(data),err=>reject(err));
  })
}

const obtenerUnPedidoPorId=(id)=>{
  return new Promise((resolve,reject)=>{
    Pedido.findOne({_id:id}).then((data)=>resolve(data),err=>reject(err));
  })
}


module.exports={
  getPedidos,
  createPedido,
  updatePedido,
  eliminarPedido,
  obtenerUnPedidoPorId
}
