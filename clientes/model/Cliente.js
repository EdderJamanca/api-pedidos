const {getClientes,createCliente,getOneCliente}=require('./../dao/DAOCliente');

const getClientesAll=(page,limit)=>{
  return getClientes(page,limit);
}


const createNewCliente=(body)=>{
  return createCliente(body);
}

const MgetOneCliente=(email)=>{
  return getOneCliente(email);
}
module.exports={getClientesAll,createNewCliente,MgetOneCliente};
