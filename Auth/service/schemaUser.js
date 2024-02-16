const {Schema,model}=require('mongoose');

const userSchema=new Schema({
    nombre:{
      type:String,
      trim:true,
      required:true,
      lowercase:true
    },
    apellido:{
      type:String,
      trim:true,
      required:true
    },
    email:{
      type:String,
      trim:true,
      required:true,
      unique:true
    },
    password:{
      type:String,
      required:true
    },
    roles:{
      type:String,
      enum:['admin','user','customer'],
      default:'user'
    },
    celular:{
      type:String,
      trim:true
    },
    departamento:{
      type:String,
      trim:true
    },
    provicia:{
      type:String,
      trim:true
    },
    direccion:{
      type:String,
      trim:true
    },
    fecha_creacion:{
      type:Date,
      default: Date.now
  },
  recoveryToken: {
    type: String,
    trim:true
  }

})


module.exports=model('User',userSchema);
