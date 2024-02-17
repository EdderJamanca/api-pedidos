const {getClientesAll,
      createNewCliente,
      MgetOneCliente,
      MactualizarUnCliente,
      MeliminarUnCliente
    }=require('./../model/Cliente');
const {single,multiple}=require('./../dto/DTOCliente');
// const Clientes=require('./../services/schemaCliente');
const boom =require('@hapi/boom');

const obtenerTodoCliente=async(req,res,next)=>{

  const page=parseInt((req.query.page || 0).toString(),10);
  const limit=parseInt((req.query.limit || 10).toString(),10);

  const clientes= await getClientesAll(page,limit);

  return res.send(multiple(clientes));

}
const newCliente=async(req,res,next)=>{
  try {

    const {nombre,apellido,empresa,email,telefono,activo}=req.body;

    const existCliente= await MgetOneCliente(email);

    if(existCliente.length>0){
      next(boom.badRequest("El Email ya se encuentra registrado"));
      return;
    }

    const cliente=await createNewCliente({
      nombre:nombre,
      apellido:apellido,
      empresa:empresa,
      email:email,
      telefono:telefono,
      activo:activo
    });

    return res.status(201).json(single(cliente))

  }catch(error){
    next(error)
  }

}


const ActualizarCliente = async(req,res,next)=>{
    const {id}=req.params;
    const {nombre,apellido,empresa,email,telefono,activo}=req.body;

    try{
       const upCliente= await MactualizarUnCliente(id,{nombre,apellido,empresa,email,telefono,activo});

       return res.status(200).json(single(upCliente));

    }catch(error){
      next(error);
    }

}

const EliminarCliente= async(req,res,next)=>{
  const {id}=req.params;
  try{
       await MeliminarUnCliente(id);
       res.json({
        "msg":"Se elimino el Cliente Correctamente"
       })
   }catch(error){
     next(error);
   }
}

module.exports={obtenerTodoCliente,
                newCliente,
                ActualizarCliente,
                EliminarCliente
              }
