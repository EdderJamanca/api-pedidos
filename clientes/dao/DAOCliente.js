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

const getOneCliente=(email)=>{
    return new Promise((resolve,reject)=>{
       Cliente.find({"email":email}).exec().then((dato)=>{resolve(dato)},err=>{reject(err)});
    })
}

module.exports={
  getClientes,
  createCliente,
  getOneCliente
}
