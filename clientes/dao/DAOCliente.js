const Cliente=require('./../services/schemaCliente');


const getClientes=(page,limit)=>{

    return new Promise((resolve,reject)=>{
       Cliente.find({}).skip(page*limit).limit(limit).exec().then((dato)=>{
         resolve(dato);
       },err=>{
         reject(err)
       })
    })
}

const createCliente=(body)=>{
    return new Promise((resolve,reject)=>{
       Cliente.create(body).then((data)=>{
        resolve(data)
       },err=>{
        reject(err)
       })
    })
}

const updateCliente=(id,data)=>{
    return new Promise((resolve,reject)=>{
      Cliente.findByIdAndUpdate(id,{...data}).then((data)=>resolve(data),err=>reject(err))
    });
}

const eliminarCliente=(id)=>{
    return new Promise((resolve,reject)=>{
      Cliente.findOneAndDelete({_id:id}).then((data)=>resolve(data),err=>reject(err))
    })
}

const getOneCliente=(email)=>{
    return new Promise((resolve,reject)=>{
       Cliente.find({"email":email}).exec().then((dato)=>{resolve(dato)},err=>{reject(err)});
    })
}

module.exports={
  getClientes,
  createCliente,
  getOneCliente,
  updateCliente,
 eliminarCliente
}
