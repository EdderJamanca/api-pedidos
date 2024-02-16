const mongoose = require('mongoose');
// const boom =require('@hapi/boom');

const BDconnection=async()=>{
  try{
    console.log('conectado')
    await mongoose.connect(process.env.DB_CNN);

  }catch(error){
    console.error('error =>',error)
    next(error)
  }
}

module.exports={BDconnection}
