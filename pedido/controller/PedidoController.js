const {
  MgetPedidos,
  McreatePedido,
  MupdatePedido,
  MeliminarPedido,
  MobtenerUnPedidoPorId
}=require('./../Model/Pedido');

const {single,
  multiple}=require('./../dto/DTOpedido');

const boom=require('@hapi/boom');

const CgetPedidos=async(req,res,next)=>{
  // MgetPedidos
   const page=parseInt((req.query.page || 0).toString(),10);
   const limit=parseInt((req.query.limit || 10).toString(),10);

   const pedidos= await MgetPedidos(page,limit);

   return res.json(multiple(pedidos));
}

const CcreatePedido= async (req,res,next)=>{
    const {cliente,pedido,total}=req.body;
    try{
      const newpedido=await McreatePedido({cliente,pedido,total});

      return res.json({
        "msg":"El pedido se registro correctamente",
        pedido:single(newpedido)
      })
    }catch(error){
      next(error);
    }

}
const CupdatePedido=async(req,res, next)=>{
     const {id}=req.params;
     const {cliente,pedido,total}=req.body;
     try{
          const exitePedido=await MobtenerUnPedidoPorId(id);

          if(!exitePedido){
            return next(boom.badRequest('El pedido no exite'))
          }

          const upPedido= await MupdatePedido(id,{cliente,pedido,total});

          res.json({
            "msg":"El pedido se actualizo correctamente",
            pedido:single(upPedido)
          })

     }catch(error){
       next(error);
     }

}
const CeliminarPedido=async(req,res,next)=>{
   const {id}=req.params;
   try{

      const exitePedido=await MobtenerUnPedidoPorId(id);

      if(!exitePedido){
        return next(boom.badRequest('El pedido no exite'))
      }

       await  MeliminarPedido(id);

       res.json({
        "msg":"El pedido fue eliminado."
       });

   }catch(error){
     next(error)
   }
}


module.exports={
  CgetPedidos,
  CcreatePedido,
  CupdatePedido,
  CeliminarPedido
}
