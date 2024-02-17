
const producto=(dato)=>({
   id:dato._id,
   nombre:dato.nombre,
   fecha_creacion:dato.fecha_creacion,
   activo:dato.activo
});

const pedido=(data)=>({
  producto:producto(data.producto),
  cantidad:data.cantidad
})

const cliente=(dato)=>({
  "id":dato._id,
  "nombre_apellido":`${dato.nombre},${dato.apellido}`,
  "email":dato.email,
  "telefono":dato.telefono,
  "activo":dato.activo
})

const single = (resource) => ({
  id: resource._id,
  clinete:cliente(resource.cliente),
  pedido:resource.pedido.map((data)=>pedido(data)),
  total:resource.total
});

const multiple = (resources) => resources.map((resource) => single(resource));

module.exports = {
  single,
  multiple,
};
