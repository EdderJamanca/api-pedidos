const Users=require('./../service/schemaUser');


const crearUnUsuario=(body)=>{

  return new Promise((resolve,reject)=>{
    Users.create(body).then((data)=>resolve(data),err=>reject(err));
  })
}

const getUserEmail=(email)=>{
  return new Promise((resolve, reject) => {
    Users.find({"email": email}).lean().then((data) => resolve(data), err => reject(err))
});
}

const DTOgetUserPorId=(id)=>{
  return new Promise((resolve,reject)=>{
     Users.findOne({_id:id}).then((data)=>resolve(data),err=>reject(err));
  })
}

const DTOupdateRecovery=(id,token)=>{
  return new Promise((resolve,reject)=>{
     Users.findByIdAndUpdate(id,{recoveryToken:token}).then((data)=>resolve(data),err=>reject(err))
  })
}

const DTOCambiarPassword=(id,newPassword)=>{
  return new Promise((resolve, reject)=>{
    Users.findOneAndUpdate(id,{password:newPassword,recoveryToken:null}).then((data)=>resolve(data),err=>reject(err))
  })
}

module.exports={
crearUnUsuario,getUserEmail,
DTOupdateRecovery,DTOCambiarPassword,DTOgetUserPorId
}
