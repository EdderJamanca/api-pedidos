const {  Mgetproducto,
         McreateProducto,
         MupdateProducto,
         MeliminarProducto,
         MobtenerUnProductoPorId}=require('./../model/Producto');

const {  single,
         multiple}=require('./../dto/DTOproducto');

const boom=require('@hapi/boom');

const Cgetproducto=async (req,res,next)=>{
  // Mgetproducto
  const page=parseInt((req.query.page || 0).toString(),10);
  const limit=parseInt((req.query.limit || 10).toString(),10);

  const productos=await Mgetproducto(page,limit);

  return res.json(multiple(productos));
}
const CcreateProducto=async(req,res,next)=>{
  // McreateProducto
  const {nombre,precio,imagen,fecha_creacion,activo}=req.body;

  try{
    const producto=await McreateProducto({nombre,precio,imagen,fecha_creacion,activo});
    res.json({
      "msg":"El producto se creo Correctamente",
      producto:single(producto)
    });

   } catch(error){
    next(error);
   }

  }

const CupdateProducto=async(req,res,next)=>{
  // MupdateProducto
  const {id}=req.params;
  const {nombre,precio,imagen,fecha_creacion,activo}=req.body;

  try{
      // const existProducto= await MobtenerUnProductoPorId(id);
      const existProducto = await MobtenerUnProductoPorId(id);
      console.log(' !existProducto.length', !existProducto)

      if (!existProducto) {
        return next(boom.badRequest('No existe este Producto'));
      }

      const producto=await MupdateProducto(id,{nombre,precio,imagen,fecha_creacion,activo});

      res.json({
        "msg":"El producto se actualizo correctamente",
        producto: single(producto)
      })

  }catch(error){
    next(error);
  }
}

const CeliminarProducto=async (req,res,next)=>{
  // MeliminarProducto
  const {id}=req.params;
  try{
    const existProducto = await MobtenerUnProductoPorId(id);


    if (!existProducto) {
      return next(boom.badRequest('No existe este Producto'));
    }

    await MeliminarProducto(id);

    res.json({"msg":"Se elimino el cliente Correctamente"});

  }catch(error){
    next(error);
  }
}

module.exports={
  Cgetproducto,
  CcreateProducto,
  CupdateProducto,
  CeliminarProducto
}
