const {crearUnUsuario,getUserEmail,DTOupdateRecovery,DTOCambiarPassword,
DTOgetUserPorId
} =require('./../dao/userDao');

const McrearUsuario=(body)=>{
     return crearUnUsuario(body);
}

const obtenerUsuarioEmail=(email)=>{
    return  getUserEmail(email);
}

const MupdateRecovery=(id,token)=>{
  return DTOupdateRecovery(id,token);
}
const MCambiarPassword=(id,newPassword)=>{
  return DTOCambiarPassword(id,newPassword)
}

const MObtenerUserPorId=(id)=>{
  return DTOgetUserPorId(id);
}

module.exports={McrearUsuario,obtenerUsuarioEmail,MupdateRecovery,MCambiarPassword,MObtenerUserPorId}
