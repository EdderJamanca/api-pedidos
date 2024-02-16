const {McrearUsuario,obtenerUsuarioEmail,MupdateRecovery,MCambiarPassword,MObtenerUserPorId}=require('./../model/userModel');
const {single,multiple}=require("./../dto/userDto");
const boom =require('@hapi/boom');
const bcrypt = require('bcrypt');
const jwt =require('jsonwebtoken');

const nodemailer = require('nodemailer');

const crearUsuario=async (req,res,next)=>{
      const {nombre,apellido,email,password,roles,celular,departamento,provicia,direccion}=req.body;

       const usuarios=await obtenerUsuarioEmail(email);

       if(usuarios.length>0){
          next(boom.badRequest('El email ya se encuentra registrado'));
          return;
       }

       try{
         const hash = await bcrypt.hash(password, 10);

         const newUsuario= await McrearUsuario({
          nombre:nombre,
          apellido:apellido,
          email:email,
          password:hash,
          roles:roles,
          celular:celular,
          departamento:departamento,
          provicia:provicia,
          direccion:direccion
        })

        res.status(201).json(single(newUsuario))
       }catch(error){
          next(error);
       }

}

const Login=(req,res,next)=>{

  try{
    const user=req.user;

    const payload={
      sub:user[0]._id.toString(),
      role:user[0].roles
    }

    const token=jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:'2h'});

    res.json({
      ...single(user[0]),
      token
    })
  }catch(error){
    next(error);
  }
}

const envioParaRecuperar= async(req,res,next)=>{

    const {email}=req.body;

    const user = await obtenerUsuarioEmail(email);

    // console.log('user >>>>',user)
    if(!user){
      throw boom.unauthorized();
    }

   const payload={sub:user[0]._id.toString()}

   const token=jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:'15min'});

   const link=`http://myfrontend.com/recovery?token=${token}`;

   await MupdateRecovery(user[0]._id,token)


  const mail={
    form:"edderjamancamendoza@gmail.com",
    to:`${user[0].email}`,
    subject:"Email para recuperar constrseña",
    html:`<b>Ingrese a este link => ${link}</b>`
  }
  console.log('ingresano dato',mail)
  const  rta= await EnvioMail(mail);

  // return rta;
  res.json(rta);

}

const cambiarPassword= async (req,res,next)=>{

  const {token,password}=req.body;
  try{
    const payload=jwt.verify(token,process.env.JWT_SECRET);
  }catch(error){
    next(boom.unauthorized('El token no es valido'))
  }
  try {

    const user=await MObtenerUserPorId(payload.sub);

    if(user.recoveryToken !== token){
      throw boom.unauthorized();
    }

    const hash=await bcrypt.hash(password,10);
    await MCambiarPassword(user._id,hash);

    res.json({
      mgs:'El cambio de contraseña fue exitosa'
    })

  }catch(error){
    next(error);
  }
}

const EnvioMail=async(infoMail)=>{

  const trasporte=nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port:2525,
    auth:{
      user:"1dc0e00e9cbab2",
      pass:"179ef917f0f827"
    }
  });
  console.log('ingresando datos 01');

  await trasporte.sendMail(infoMail);
   console.log('ingresando datos');

  return res.json({
      "msg":"Se envio un mensaje a su correo."
  });
}


module.exports={
  crearUsuario,
  Login,
  envioParaRecuperar,
  cambiarPassword
}
