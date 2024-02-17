const single = (resource) => ({
  id: resource._id,
  nombre:resource.nombre,
  precio:resource.precio,
  imagen:resource.imagen,
  fecha_creacion:resource.fecha_creacion,
  activo:resource.activo
});

const multiple = (resources) => resources.map((resource) => single(resource));

module.exports = {
  single,
  multiple,
};
