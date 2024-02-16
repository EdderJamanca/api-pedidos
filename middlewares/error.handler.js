// const {ValidationError}=require()

const boom=require('@hapi/boom');


const logError=(err,req,res,next)=>{
  console.error(err);
  next(err);
}


const errorHandler=(err,req,res,next)=>
{
   res.status(500).json({
    message:err.message,
    error:err.stack
   })
   next(err);
}

const boomErrorHandler=(err,req,res,next)=>{
   if(err.isBoom){
    const {output}=err;
    res.status(output.statusCode).json(output.payload);
   }else{
     next(err);
   }


}

// const
module.exports={
  logError,
  errorHandler,
  boomErrorHandler
}
