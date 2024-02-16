const {Schema,model}=require('mongoose');
// const Schema=mongoose.Schema;

const clientesSchema=new Schema({
    nombre:{
        type:String,
        trim:true,
        require:true
    },
    apellido:{
        type:String,
        trim:true,
        require:true
    },
    email:{
        type:String,
        unique:true,
        lowercase:true,
        trim:true,
        require:true
    },
    telefono:{
        type:Number,
        trim:true,
        require:true
    },
    fecha_creacion:{
        type:Date,
        default: Date.now
    },
    activo:{
        type:Boolean,
        default:true
    }
})



module.exports=model('Cliente',clientesSchema);
