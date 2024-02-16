const single = (resource) => ({
  id: resource._id,
  nombre: resource.nombre,
  apellido: resource.apellido,
  email: resource.email,
  telefono: resource.telefono,
  fechaCreacion: resource.fecha_creacion,
  fechaCreacion: resource.activo
});

const multiple = (resources) => resources.map((resource) => single(resource));

module.exports = {
  single,
  multiple,
};
