const {Schema,model}=require('mongoose');


const productoSchema=new Schema({
    nombre:{
      type:String,
      require:true,
      trim:true,
      lowercase:true
    },
    precio:{
      type:Number,
      require:true,
      trim:true
    },
    imagen:{
      type:String,
      require:true,
      trim:true
    },
    fecha_creacion:{
      type:Date,
      default:Date.now
    },
    activo:{
      type:Boolean,
      require:true,
    }
})


module.exports=model('Producto',productoSchema);
