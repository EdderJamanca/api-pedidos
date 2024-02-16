
const single=(resource)=>({
  id:resource._id,
  nombre:resource.nombre,
  apellido:resource.apellido,
  email:resource.email,
  rol:resource.roles,
  celular:resource.celular,
  departamento:resource.departamento,
  provincia:resource.provincia,
  distrito:resource.distrito,
  direccion:resource.direccion
})

const multiple=(resources)=>resources.map((resource)=>single(resource));


module.exports={
  single,multiple
}
