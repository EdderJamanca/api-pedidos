const {Strategy}=require('passport-local');
const boom=require('@hapi/boom');
const bcrypt=require('bcrypt');

const {obtenerUsuarioEmail}=require('./../model/userModel');


const LocalStrategy= new Strategy({
  usernameField:'email',
  passwordField:'password'
}, async (email,password,done)=>{
    try {
       const user =await obtenerUsuarioEmail(email);

       if(!user){
         done(boom.unauthorized(),false);
       }


       const isMatch= await bcrypt.compare(password,user[0].password);

       if(!isMatch){
        done(boom.unauthorized(),false)
       }

       done(null,user)

    } catch(error){

    }
})


module.exports=LocalStrategy;
