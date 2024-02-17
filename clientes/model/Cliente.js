const {getClientes,
      createCliente,
      getOneCliente,
      updateCliente,
      eliminarCliente
    }=require('./../dao/DAOCliente');

const getClientesAll=(page,limit)=>{
  return getClientes(page,limit);
}


const createNewCliente=(body)=>{
  return createCliente(body);
}

const MgetOneCliente=(email)=>{
  return getOneCliente(email);
}

const MactualizarUnCliente=(id,data)=>{
  return updateCliente(id,data);
}

const MeliminarUnCliente=(id)=>{
    return eliminarCliente(id);
}
module.exports={
          getClientesAll,
          createNewCliente,
          MgetOneCliente,
          MactualizarUnCliente,
          MeliminarUnCliente
        };
