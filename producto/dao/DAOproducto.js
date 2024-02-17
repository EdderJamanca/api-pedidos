
const Producto = require('./../service/schemaProducto');


const getproducto=(page,limit)=>{
  return new Promise((resolve,reject)=>{
    Producto.find({}).skip(page*limit).limit(limit).exec().then((data)=>resolve(data),err=>reject(err))
  })
}


const createProducto=(body)=>{
  return new Promise((resolve,reject)=>{
    Producto.create(body).then((data)=>resolve(data),err=>reject(err))
  })
}


const updateProducto=(id,data)=>{
  return new Promise((resolve,reject)=>{
    Producto.findByIdAndUpdate(id,{...data},{ new: true }).then((data)=>resolve(data),err=>reject(err));
  })
}

const eliminarProducto=(id)=>{
    return new Promise((resolve,reject)=>{
      Producto.findByIdAndDelete({_id:id}).then((data)=>resolve(data),err=>reject(err))
    })
}

const obtenerUnProductoPorId=(id)=>{
  return new Promise((resolve,reject)=>{
    Producto.findOne({_id:id}).then((data)=>resolve(data),err=>reject(err));
  })
}

module.exports={
  getproducto,
  createProducto,
  updateProducto,
  eliminarProducto,
  obtenerUnProductoPorId
}
